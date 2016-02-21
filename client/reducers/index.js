import {UPDATE_SEARCH_AUTOCOMPLETE, SHOW_SEARCH_AUTOCOMPLETE_RESULTS} from 'actions/search-actions'

export default function (initialState) {
  return (state=initialState, action) => {
    switch(action.type) {
      case UPDATE_SEARCH_AUTOCOMPLETE:
        return Object.assign({}, state, { searchAutocomplete: [action.input, action.input + action.input] });
      case SHOW_SEARCH_AUTOCOMPLETE_RESULTS:
        return Object.assign({}, state, { searchAutocomplete: action.results });
      default:
        return state;
    }
  }
}
