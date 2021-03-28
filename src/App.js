import React from 'react';
import './css/main.css';
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
        <div className="introOverlay"></div>
      </div>
    );
  }
}

export default App;
