import React from 'react';
import './css/main.css';
// import particles from './components/ImageEffect.js'
import particleText from './components/ParticleText.js'

try {
  particleText()
} catch {
  // Error
}

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="main">
        <div id="canvas1"></div>
      </div>
    );
  }
}

export default App;
