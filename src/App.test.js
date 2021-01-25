import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders welcome message', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App/>, div);
});

// describe('Sample Test', () => {
//   it('use the right home page', () => {
//     const app = new App();
//     expect(app.Home).toEqual("/");
//   })
// })