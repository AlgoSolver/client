import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {QueryClientProvider} from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools';
import client from './hooks';

ReactDOM.render(
// <React.StrictMode>
<QueryClientProvider client={client}>
  <ReactQueryDevtools initialIsOpen={false}/>
  <App/>
</QueryClientProvider>,
// </React.StrictMode>

document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
