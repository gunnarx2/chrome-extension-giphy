import giphy, { GiphyState, giphyEpics } from './giphy';
import search, { SearchState } from './search';
import background, { BackgroundState } from './background';

export interface RootState {
  giphy: GiphyState;
  search: SearchState;
  background: BackgroundState;
}

export const reducers = {
  giphy,
  search,
  background
};

export const epics = {
  giphyEpics
};
