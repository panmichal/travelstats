import React, {Component} from 'react';
import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';
import {deepOrange500} from 'material-ui/lib/styles/colors';
import MuiThemeProvider from 'material-ui/lib/MuiThemeProvider';
import AppBar from 'material-ui/lib/app-bar';
import SearchBox from 'components/search-box';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as searchActionCreators from 'actions/search-actions';
import {} from './style.less';

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});


class App extends Component {
  render() {
    return <MuiThemeProvider muiTheme={muiTheme}>
    <div>
    <AppBar
      title="Travel Stats"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
      />
       <SearchBox autocompleteData={this.props.searchAutocomplete} onSearchUpdate={this.props.updateSearchAutocomplete}/>
      </div>
    </MuiThemeProvider>;
  }
}

function mapStateToProps(state) {
  return {
    searchAutocomplete: state.searchAutocomplete,
    searchResults: state.searchResults
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(searchActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
