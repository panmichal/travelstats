export const UPDATE_SEARCH_AUTOCOMPLETE = 'update-search-autocomplete';

export function updateSearchAutocomplete(input) {
  return { type: UPDATE_SEARCH_AUTOCOMPLETE, input };
}
