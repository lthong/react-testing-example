import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from 'components/App';
import Root from 'Root';
import 'stylesheets/index.css';

ReactDOM.render(
  <React.StrictMode>
    <Root>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Route path="/" component={App} />
      </BrowserRouter>
    </Root>
  </React.StrictMode>,
  document.getElementById('root')
);
