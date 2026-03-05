import Link from 'next/link';
import { Typography } from '../ui/typography';
import { ChevronRight } from 'lucide-react';

interface _IDividerContent {
  text: string;
  icon?: boolean;
  link?: string;
}
const DividerContent = ({ text, icon = true, link }: _IDividerContent) => (
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
    {icon && <ChevronRight className="w-8 h-8" />}
  </div>
);

export default DividerContent;
