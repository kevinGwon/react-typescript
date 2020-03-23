import { ActionType } from 'typesafe-actions';
import * as actions from '../../redux/reducers/list/actions';

export type ListAction = ActionType<typeof actions>;

export interface ListStateType {
  year: string | number;
  month: string | number;
  day: string | number;
  sort: boolean;
  genres: {
    [key: string]: CategoryType;
  };
}

export interface ListType {
  category: string;
  title: string;
  id: number;
  genre: number[];
  average: number;
  overview: string;
  posterImage: string;
  bgImage: string;
  date: string;
}

export interface CategoryType {
  type?: string;
  code?: number;
  search?: string;
  category: string;
  isLoading: boolean;
  list: ListType[];
}
