import React, {Component} from 'react';

class SearchResult extends Component {
  constructor(props) {
    super(props);
  };
  render() {
    return <div id="search-result">
        {this.props.result.body}
      </div>
  };
}

export default SearchResult;
