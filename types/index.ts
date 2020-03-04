import { ListType } from './redux/list';

export interface IndexType {
  API: {
    action: ListType[];
    thriller: ListType[];
    crime: ListType[];
    war: ListType[];
    horror: ListType[];
    romance: ListType[];
    animation: ListType[];
  };
  scrollMotion?: {
    init: () => void;
    destroy: () => void;
  };
}
