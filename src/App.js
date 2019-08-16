import React from 'react';
import {UploadComponent} from './components/upload-component.jsx';
import './App.css';

export class App extends React.Component{

  constructor (props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { 
      path: null 
    };
  }

  render ()
  {
    return (
      <div className="App">
        <header className="App-header">
          {(this.state.path ===null) ? <UploadComponent name="test" /> : ""}
        </header>
      </div>
    );
  }
}

export default App;
