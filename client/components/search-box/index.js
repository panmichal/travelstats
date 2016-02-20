import React, {Component} from 'react';
import TextField from 'material-ui/lib/text-field';
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
      <div id="search-input"><TextField hintText='Place name'/>
        <div id="search-button"><RaisedButton label="Search" primary={true}/></div>
      </div>
      </Card>
    </div>;
  };
}

export default SearchBox;
