// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { SearchIcon } from "lucide-react";
// import Search from "../ui/search";

// export default function NavbarSearch() {
//   const [open, setOpen] = useState(false);

//   return (
//     <motion.div
//       className="relative flex items-center"
//       onMouseEnter={() => setOpen(true)}
//       onMouseLeave={() => setOpen(false)}
//       onFocus={() => setOpen(true)}
//       onBlur={() => setOpen(false)}
//       tabIndex={0}
//       initial={false}
//       animate={{
//         width: open ? "18rem" : "2rem",
//         transition: { type: "spring", stiffness: 300, damping: 30 }
//       }}
//       style={{
//         width: open ? "12rem" : "2rem",
//         minWidth: "2rem",
//         height: "2.5rem",
//         overflow: "visible"
//       }}
//     >
//     <AnimatePresence initial={false}>
//       {!open && (
//         <motion.span
//           key="icon"
//           className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center pl-1 z-10 cursor-pointer"
//           initial={{ opacity: 1, x: 0 }}
//           animate={{ opacity: 1, x: 0 }}
//           exit={{ opacity: 0, x: -10 }}
//           transition={{ duration: 0.2 }}
//         >
//           <SearchIcon className="h-5 w-5 text-gray-500 " />
//         </motion.span>
//       )}
//     </AnimatePresence>
//     <AnimatePresence initial={false}>
//       {open && (
//         <motion.div
//           key="input"
//           initial={{ opacity: 0, x: 20 }}
//           animate={{ opacity: 1, x: 0 }}
//           exit={{ opacity: 0, x: 20 }}
//           transition={{ duration: 0.2 }}
//           className="pl-8 w-full"
//         >
//           <Search entityType="QUERY" autoFocus />
//         </motion.div>
//       )}
//     </AnimatePresence>
//     </motion.div>
//   );
// }

import { usePathname } from 'next/navigation';
import { useTransition, useMemo, memo, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { ExternalLink, SearchIcon } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import { SearchParamKeys } from '@/types';
import { getEntityType, slugify } from '@/utils/functions';
import { VanishInput } from '../ui/vanish-input';
import { DynamicIcon } from 'lucide-react/dynamic';
import { Typography } from '../ui/typography';
import Link from 'next/link';
import { menuData } from '@/data/navbar.data';

interface IProps {
  disabled?: boolean;
}

const ModuleContent = memo(({ module }: { module: _IModules }) => {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-4">
        <Typography variant="strong" className="text-start">
          {module.name}
        </Typography>
        <Link
          href={`/modules/${slugify(module.name)}`}
          // onClick={closeSheet}
          className="text-blue-600 hover:underline flex items-center gap-1 "
          prefetch={false}
        >
          <ExternalLink className="h-4 w-4 text-blue-600 hover:text-blue-800 transition-colors" />
        </Link>
      </div>
      <div className="flex flex-col gap-2">
        {module.contents?.map((content, i) => (
          <div key={i} className="flex items-center gap-2 text-sm">
            {content.icon && (
              <DynamicIcon
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                name={content.icon as any}
                className="h-4 w-4 text-blue-600"
              />
            )}
            <Link
              href={`/modules/${slugify(module.name)}/${content.link}`}
              // onClick={closeSheet}
              className="flex items-center gap-2 text-sm hover:underline hover:text-blue-600 transition-colors w-fit"
              prefetch={false}
            >
              <Typography variant="span">{content.name}</Typography>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
});

ModuleContent.displayName = 'ModuleContent';
export default function Search<T extends SearchParamKeys>({
  disabled,
}: IProps) {
  // const searchParams = useSearchParams();
  const [filteredData, setFilteredData] = useState(menuData.Modules);

  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const { placeholders } = useMemo(
    () => getEntityType<T>(pathname),
    [pathname],
  );

  const handleSearch = useDebouncedCallback((term: string) => {
    if (!term.trim()) {
      setFilteredData(menuData.Modules);
      return;
    }

    const resolvedTerm = term.toLowerCase();

    const filteredModules = menuData.Modules.filter((module) => {
      // Check if module name matches
      const moduleNameMatch = module.name.toLowerCase().includes(resolvedTerm);

      // Filter contents that match
      const filteredContents = module.contents.filter((content) =>
        content.name.toLowerCase().includes(resolvedTerm),
      );

      return moduleNameMatch || filteredContents.length > 0;
    }).map((module) => ({
      ...module,
      contents: module.name.toLowerCase().includes(term)
        ? module.contents
        : module.contents.filter((content) =>
            content.name.toLowerCase().includes(term),
          ),
    }));

    startTransition(() => {
      // replace(`${pathname}?${params.toString()}`);
      setFilteredData(filteredModules);
    });
  }, 300);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="">
          <SearchIcon className="flex cursor-pointer" />
        </div>
      </DialogTrigger>
      <DialogContent
        showClose={false}
        className="w-full sm:max-w-xl md:max-w-4xl h-auto sm:-mt-2 min-h-[300px] md:space-y-0 p-4 sm:p-6 md:p-8 overflow-y-auto max-h-[90%]"
      >
        <DialogHeader className="sr-only">
          <DialogTitle>Search</DialogTitle>
          <DialogDescription>
            Use this dialog to search for modules and sub modules
          </DialogDescription>
        </DialogHeader>
        {/* Input */}

        <div className="relative shrink-0">
          <VanishInput
            placeholders={placeholders}
            onChange={(e) => handleSearch(e.target.value)}
            defaultValue={''}
            isPending={isPending}
            disabled={disabled}
          />
        </div>

        {/* Content */}
        <div className="grid gap-0 grid-cols-[repeat(auto-fit,minmax(250px,1fr))] space-y-0">
          {filteredData.map((module, idx) => (
            <ModuleContent
              key={`${module.name.trim().slice(0, 10)}-${idx}`}
              module={module}
            />
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
