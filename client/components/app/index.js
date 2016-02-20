import React, {Component} from 'react';
import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';
import {deepOrange500} from 'material-ui/lib/styles/colors';
import MuiThemeProvider from 'material-ui/lib/MuiThemeProvider';
import AppBar from 'material-ui/lib/app-bar';
import SearchBox from 'components/search-box';
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
       <SearchBox />
      </div>
    </MuiThemeProvider>;
  }
}

export default App;
