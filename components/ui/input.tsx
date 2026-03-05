import * as React from 'react';

import { cn } from '@/utils';
import { Typography } from './typography';
import { Info } from 'lucide-react';
import { DynamicIcon } from 'lucide-react/dynamic';
import { Label } from './label';
import { IconType } from '@/types';

interface _ICommonInput {
  errors?: Record<string, string[] | undefined>;
  inputClassname?: string;
  id: string;
  label: string;
  icon?: IconType;
}

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<'input'>>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = 'Input';

export const CommonInput = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<'input'> & _ICommonInput
>(
  (
    { className, type, id, label, icon, errors, inputClassname, ...props },
    ref,
  ) => {
    return (
      <div className={cn(className)}>
        <div className="relative">
          <Label htmlFor={id} className={'mb-2 text-sm font-medium block'}>
            {label}
          </Label>
          <input
            type={type}
            className={cn(
              'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
              inputClassname,
            )}
            ref={ref}
            {...props}
          />
          {icon && typeof icon === 'string' ? (
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            <DynamicIcon name={icon as any} className="..." />
          ) : (
            icon &&
            (() => {
              const Icon = icon;
              return <Icon className="..." />;
            })()
          )}
        </div>
        {errors && (
          <InputErrors
            id={id}
            errors={errors}
            prependComponent={<Info className="h-5 w-5 text-red-500" />}
          />
        )}
      </div>
    );
  },
);
CommonInput.displayName = 'CommonInput';

interface _InputWithErrors {
  id: string;
  prependComponent?: React.ReactNode;
  errors: Record<string, string[] | undefined>;
}

const InputErrors = ({
  errors,
  id,
  prependComponent = <Info className="h-5 w-5 text-red-500" />,
}: _InputWithErrors) => {
  return (
    <>
      {errors && errors[id] ? (
        <div id={`${id}-error`} className="mt-2 text-sm text-red-500">
          {errors[id]?.map((error: string) => (
            <div className="flex space-x-2" key={error}>
              {prependComponent}
              <Typography color="danger">{error}</Typography>
            </div>
          ))}
        </div>
      ) : null}
    </>
  );
};

export { Input };
