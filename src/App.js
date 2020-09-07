import React, {Component} from 'react';
import logo from './logo.svg';
import './App.sass';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import Child from './components/Child';

class App extends Component {
  render(){
    return(
      <div>
        Parent Component
        <Child/>
        {/* <Header/>
        <Body/>
        <Footer/> */}
      </div>
    )
  }
}

export default App;