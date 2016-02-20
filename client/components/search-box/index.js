import React, {Component} from 'react';

class SearchBox extends Component {
  render() {
    return <input name='search' type='text' defaultValue='Place or country name' />;
  };
}

export default SearchBox;
