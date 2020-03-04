import { createStandardAction } from 'typesafe-actions';

import extend from '../../../modules/extend';
import { API_CONFIG } from '../../../modules/api/api.config';
import { LIST_STATE } from './reducer';

// CATEGORY
export const ACTION = 'ACTION' as const;
export const THRILLER = 'THRILLER' as const;
export const CRIME = 'CRIME' as const;
export const WAR = 'WAR' as const;
export const HORROR = 'HORROR' as const;
export const ROMANCE = 'ROMANCE' as const;
export const ANIMATION = 'ANIMATION' as const;
export const SEARCH = 'SEARCH' as const;

// ACTION
export const ACTION_LIST = 'list/ACTION_LIST' as const;
export const THRILLER_LIST = 'list/THRILLER_LIST' as const;
export const CRIME_LIST = 'list/CRIME_LIST' as const;
export const WAR_LIST = 'list/WAR_LIST' as const;
export const HORROR_LIST = 'list/HORROR_LIST' as const;
export const ROMANCE_LIST = 'list/ROMANCE_LIST' as const;
export const ANIMATION_LIST = 'list/ANIMATION_LIST' as const;
export const SEARCH_LIST = 'list/SEARCH_LIST' as const;
export const LOADING_LIST = 'list/LOADING_LIST' as const;
export const ALL_RESET = 'list/ALL_RESET' as const;
export const LIST_RESET = 'list/LIST_RESET' as const;
export const LIST_SORT = 'list/LIST_SORT' as const;

export const actionList = createStandardAction(ACTION_LIST)();
export const thrillerList = createStandardAction(THRILLER_LIST)();
export const crimeList = createStandardAction(CRIME_LIST)();
export const warList = createStandardAction(WAR_LIST)();
export const horrorList = createStandardAction(HORROR_LIST)();
export const romanceList = createStandardAction(ROMANCE_LIST)();
export const animationList = createStandardAction(ANIMATION_LIST)();
export const searchList = createStandardAction(SEARCH_LIST)();
export const loadingList = createStandardAction(LOADING_LIST)<
  string | boolean
>();

export const allReset = createStandardAction(ALL_RESET)();
export const listReset = createStandardAction(LIST_RESET)();
export const listSort = createStandardAction(LIST_SORT)();
