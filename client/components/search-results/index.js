import React, {Component} from 'react';
import Paper from 'material-ui/lib/paper';
import CardTitle from 'material-ui/lib/card/card-title';
import SearchResult from 'components/search-result';

class SearchResults extends Component {
  constructor(props) {
    super(props);
  };
  render() {
    return <div id="search-results" className="container-fluid">
          <Paper zDepth={1}>
            {this.props.results.map(result =>
              <SearchResult key={result.id} result={result} />
            )}
          </Paper>
      </div>
  };
}

export default SearchResults;
