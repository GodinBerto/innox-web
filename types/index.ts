import { SEARCH_PARAMS } from '@/utils/constants/search.contstants';
import { LucideIcon } from 'lucide-react';

export type IconType = string | LucideIcon;

export type SearchParamKeys = keyof typeof SEARCH_PARAMS;
