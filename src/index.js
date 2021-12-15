import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "./Theme";

ReactDOM.render(
	<MuiThemeProvider theme={theme}>
		<CssBaseline />
			<App />
	</MuiThemeProvider>,
	document.getElementById('root')
);