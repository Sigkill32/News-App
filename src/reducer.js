import { fromJS } from "immutable";

export function reducer(state = initState, action) {
  switch (action.type) {
    case "FETCHED_SOURCES":
      // return { ...state, sources: action.sources };
      return state.set("sources", action.sources);

    case "SET_CURRENT_SOURCE":
      // return { ...state, currentSource: action.currentSource };
      return state.set("currentSource", action.currentSource);

    case "UPDATE_NEWS":
      // return { ...state, news: action.articles };
      return state.set("news", action.articles);

    default:
      return state;
  }
}

const initState = fromJS({
  sources: null,
  news: null,
  currentSource: null
});
