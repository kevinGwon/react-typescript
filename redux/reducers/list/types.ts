import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type ListAction = ActionType<typeof actions>;

export type ListType = {
  category: string;
  title: string;
  id: number;
  genre: number[];
  average: number;
  overview: string;
  posterImage: string;
  bgImage: string;
  date: string;
};

export type CategoryType = {
  type?: string;
  code?: number;
  search?: string;
  category: string;
  isLoading: boolean;
  list: ListType[];
};

export type StateType = {
  year: string | number;
  month: string | number;
  day: string | number;
  sort: boolean;
  genres: {
    [key: string]: CategoryType;
  };
};
