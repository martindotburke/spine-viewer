import React from 'react'
import * as PIXI from 'pixi.js'

export class SpineViewerComponent extends React.Component 
{
    constructor (props)
    {   
        super(props);

        this.app = new PIXI.Application({width: 256, height: 256});
        this.app.renderer.backgroundColor = 0x061639;
    }

    attachCanvas = (parent) => {
      parent.appendChild (this.app.view);
    }

    render() {
        const files = this.props.files.map(file => (
            <li key={file.name}>
              {file.name} - {file.size} bytes
            </li>
          ));
        
        return (
            <div ref={this.attachCanvas}>
                  <h4>File</h4>
                  <ul>{files}</ul>
            </div>
        );
    }
}