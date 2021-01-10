import React from 'react';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

const App2 = ()=>{
	return <Router>
      <App />
    </Router>
}
export default App2;