import React from 'react';

import "./assets/styles/global.css";
import Router from "./routes"
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#B8B8B8",
    },
    secondary: {
      main: "#5CB646",
    }
  }
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <Router />
      </div>
    </MuiThemeProvider>
  );
}

export default App;