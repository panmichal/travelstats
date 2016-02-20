import React, {Component} from 'react';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';

class SearchForm extends Component {
  render() {
    return <div id="search-input">
        <TextField hintText='Place name'/>
        <div id="search-button"><RaisedButton label="Search" primary={true}/></div>
      </div>
  };
}

export default SearchForm;
