import {UPDATE_SEARCH_AUTOCOMPLETE} from 'actions/search-actions'

export default function (initialState) {
  return (state=initialState, action) => {
    switch(action.type) {
      case UPDATE_SEARCH_AUTOCOMPLETE:
        return Object.assign({}, state, { searchAutocomplete: [action.input, action.input + action.input] });
      default:
        return state;
    }
  }
}
