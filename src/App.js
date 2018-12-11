import React, {Component} from 'react';
import './App.scss';
import RoundDisplay from './components/RoundDisplay/Component';
import {COLORS} from './config/style';
import Bar from './components/Bar/Component';
import Icon from './components/Icon/Component';
import Header from './components/Header';
import MainActivity from './components/MainActivity/Component';

class App extends Component {
  render () {
    return (
      <div className="App">
        <Header userIndex={12}></Header>
        <MainActivity userIndex={12}></MainActivity>
      </div>
    );
  }
}

export default App;
