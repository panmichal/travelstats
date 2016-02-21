import fetch from 'isomorphic-fetch';

export const UPDATE_SEARCH_AUTOCOMPLETE = 'update-search-autocomplete';
export const SHOW_SEARCH_AUTOCOMPLETE_RESULTS = 'show-search-autocomplete-results';

export function fetchAutocompleteResults(input) {
  return function(dispatch) {
      return fetch("/autocomplete/?input=" + input)
      .then((res) => res.json())
      .then((autocomplete) => {
        console.log(autocomplete);
        dispatch(showAutocompleteResults(autocomplete));
      });
  }
}

export function updateSearchAutocomplete(input) {
  return { type: UPDATE_SEARCH_AUTOCOMPLETE, input };
}

export function showAutocompleteResults(results) {
  return { type: SHOW_SEARCH_AUTOCOMPLETE_RESULTS, results };
}
