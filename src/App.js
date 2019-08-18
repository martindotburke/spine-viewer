import React from 'react';
import {UploadComponent} from './components/upload-component';
import {SpineViewerComponent} from './components/spine-viewer-component';
import './App.css';

export class App extends React.Component{

  constructor (props) {
    super(props);

    this.state = { 
      files: null 
    };
  }

  render ()
  {
    return (
      <div className="App">
        <header className="App-header">
          {(this.state.files ===null) ? <UploadComponent onFilesUploaded={(files) => this.setState({"files":files})}/> : ""}
          {(this.state.files !==null) ? <SpineViewerComponent files={this.state.files} onFilesUnloaded={(files) => this.setState({"files":null})}/> : ""}
        </header>
      </div>
    );  
  }
}

export default App;
