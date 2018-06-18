import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';

import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';

class App extends React.Component {

  public render() {

    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Content />
          <Footer />
        </div>
      </BrowserRouter>
    )

  }
}

export default App;
