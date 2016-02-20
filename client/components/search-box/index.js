import React, {Component} from 'react';
import SearchForm from 'components/search-form';
import RaisedButton from 'material-ui/lib/raised-button';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';

class SearchBox extends Component {
  render() {
    return <div id="search-box">
     <Card>
     <CardTitle title="Search for places"/>
      <SearchForm />
      </Card>
    </div>;
  };
}

export default SearchBox;
