import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { Typography } from '@/components/ui/typography';
import { DividerContent as DividerContentType } from '@/types/sanity/schema';

const DividerContent = ({
  text = '',
  link,
  showIcon = true,
}: DividerContentType) => (
  <div className="h-20 bg-[#191E29] w-full flex justify-center items-center gap-4 text-white">
    {link ? (
      <Link href={link}>
        <Typography variant="subtitle" className="text-white">
          {text}
        </Typography>
      </Link>
    ) : (
      <Typography variant="subtitle" className="text-white">
        {text}
      </Typography>
    )}
    {showIcon && <ChevronRight className="w-8 h-8" />}
  </div>
);

export default DividerContent;
