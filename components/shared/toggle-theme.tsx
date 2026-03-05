'use client';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '../ui/dropdown';
import { Typography } from '../ui/typography';
import { getDropdownStyles } from '@/utils/functions';
import useMobile from '@/utils/hooks/use-mobile.hook';
import { MonitorCog, Moon, Sun } from 'lucide-react';
import { Button } from '../ui/button';
import { useTheme } from 'next-themes';

export function ThemeToggleDropdown() {
  const isMobile = useMobile();
  const styles = getDropdownStyles(
    '-12rem',
    '100%',
    '-10.5rem',
    '100%',
    isMobile,
  );
  const { setTheme } = useTheme();

  return (
    <DropdownMenu
      style={styles}
      trigger={
        <Button
          variant="ghost"
          size="icon"
          className="border-0 outline-0 cursor-pointer rounded-full hover:bg-gray-200 dark:hover:bg-gray-600"
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      }
      className="w-56"
    >
      {(onClose) => (
        <DropdownMenuContent className="px-1">
          {/* Different Themes Label */}
          <DropdownMenuLabel className="px-4 py-3">
            <Typography variant="paragraph" className="">
              Select a theme mode
            </Typography>
          </DropdownMenuLabel>

          <DropdownMenuSeparator />

          {/* Menu Items */}
          <DropdownMenuItem
            // asChild
            onClick={() => {
              setTheme('light');
              onClose();
            }}
            className="px-4 py-2"
          >
            <Sun className="h-5 w-5 mr-2" />
            <Typography variant="paragraph">Light Theme</Typography>
          </DropdownMenuItem>

          <DropdownMenuItem
            // asChild
            onClick={() => {
              setTheme('dark');
              onClose();
            }}
            className="px-4 py-2 "
          >
            <Moon className="h-5 w-5 mr-2" />
            <Typography variant="paragraph">Dark Theme</Typography>
          </DropdownMenuItem>
          <DropdownMenuItem
            // asChild
            onClick={() => {
              setTheme('system');
              onClose();
            }}
            className="px-4 py-2"
          >
            <MonitorCog className="h-5 w-5 mr-2" />
            <Typography variant="paragraph">System Default</Typography>
          </DropdownMenuItem>
        </DropdownMenuContent>
      )}
    </DropdownMenu>
  );
}

export function NavbarSheetTheme() {
  const { setTheme, theme } = useTheme();

  return (
    <div className="flex items-center justify-between transition-all duration-300">
      <Button
        onClick={() => {
          setTheme('light');
        }}
        aria-selected={theme === 'light'}
        variant={'outline'}
        className="items-center justify-center cursor-pointer"
      >
        <Sun className="h-5 w-5 mr-2" />
        <Typography variant="span">Light</Typography>
      </Button>

      <Button
        onClick={() => {
          setTheme('dark');
        }}
        variant={'outline'}
        aria-selected={theme === 'dark'}
        className="px-4 py-2 items-center justify-center cursor-pointer"
      >
        <Moon className="h-5 w-5 mr-2" />
        <Typography variant="span">Dark</Typography>
      </Button>
      <Button
        onClick={() => {
          setTheme('system');
        }}
        variant={'outline'}
        aria-selected={theme === 'system'}
        className="px-4 py-2 items-center justify-center cursor-pointer"
      >
        <MonitorCog className="h-5 w-5 mr-2" />
        <Typography variant="span">System</Typography>
      </Button>
    </div>
  );
}
