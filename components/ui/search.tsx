'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useTransition } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { VanishInput } from './vanish-input';
import { SEARCH_PARAMS } from '@/utils/constants/search.contstants';

interface IProps<T> {
  entityType: T;
  placeholders?: string[];
  disabled?: boolean;
  autoFocus?: boolean;
}

type SearchParamKeys = keyof typeof SEARCH_PARAMS;

export default function Search<T extends SearchParamKeys>({
  entityType,
  disabled,
  autoFocus,
  placeholders = ['Search for modules', 'Search for products'],
}: IProps<T>) {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set(SEARCH_PARAMS[entityType], term);
    } else {
      params.delete(SEARCH_PARAMS[entityType]);
    }

    startTransition(() => {
      replace(`${pathname}?${params.toString()}`);
    });
  }, 300);

  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <VanishInput
        placeholders={placeholders}
        onChange={(e) => handleSearch(e.target.value)}
        defaultValue={
          searchParams.get(SEARCH_PARAMS[entityType])?.toString() ?? ''
        }
        isPending={isPending}
        disabled={disabled}
        autoFocus={autoFocus}
      />
    </div>
  );
}
