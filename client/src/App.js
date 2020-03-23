
/*Finish Footer*/
/*Need to optimize for mobile*/
/*Need to create contact form */
/*Not all project buttons work */
/*-------------------------------------*/

import React from 'react';
import './App.css';
import Landing from './Landing.js'
import About from './About.js'
import Portfolio from './Portfolio';
import Mid from './Mid'
import Footer from './footer.js'

class App extends React.Component {

  render() {
    return (
      <div className="App">

        <Landing />
        <About />
        <Mid />
        <Portfolio />
        <Footer />
      </div>
    );
  }

}
export default App;
