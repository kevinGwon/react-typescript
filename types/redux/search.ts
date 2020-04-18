import { ListType } from './list';

export interface SearchType {
  query: string;
  queryList: ListType[];
  page: {
    current: number;
    totalPage: number;
  };
  pager: {
    per: number;
    start: number;
    end: number;
  };
}
