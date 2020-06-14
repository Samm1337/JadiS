import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import Header from './Components/Header.jsx'
import Navigation from './Components/Navigation.jsx'
import Footer from './Components/Footer.jsx'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 0
    }
  }

  render() {
    return (
      <div>
      <Header />
      <div className="row">
        <Navigation />
      </div>
      <Footer />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));