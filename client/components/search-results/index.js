import React, {Component} from 'react';
import Card from 'material-ui/lib/card/card';
import CardTitle from 'material-ui/lib/card/card-title';
import SearchResult from 'components/search-result';

class SearchResults extends Component {
  constructor(props) {
    super(props);
  };
  render() {
    return <div id="search-results">
        <Card>
          <CardTitle title="Search Results"/>
          {this.props.results.map(result =>
            <SearchResult key={result.id} result={result} />
          )}
        </Card>

      </div>
  };
}

export default SearchResults;
