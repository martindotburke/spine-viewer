import React from 'react'
import Dropzone from 'react-dropzone'

export class UploadComponent extends React.Component 
{
    constructor (props)
    {   
        super(props);

        this.onDrop = (files) => 
        {
            var name = null;
            for (var f in files)
            {
              let n = files[f].name.split('.')[0];
              if (name !== null && name !== n)
              {
                //error
                break;
              }
              name = n;
            }

            var spineImage = false;
            var spineAtlas = false;
            var spineJson = false;

            if (name!==null)
            {
              for (f in files)
              {
                var type = files[f].name.split('.')[1];
                switch (type)
                {
                  case "json":
                    spineJson = true;
                    break;

                  case "png":
                  case "jpg":
                    spineImage = true;
                    break;

                  case "atlas":
                    spineAtlas = true;
                    break;

                  default:
                    break;
                }
              }
            }

            this.setState({
              "files": files, 
              "valid": (name !== null) && (spineAtlas === true) && (spineImage === true) && (spineJson === true)
            });
          }

        this.state = {
            files: [],
            valid: false
        };
    }
    render() {
        const files = this.state.files.map(file => (
            <li key={file.name}>
              {file.name} - {file.size} bytes
            </li>
          ));
        
        return (
            <Dropzone onDrop={this.onDrop}>
            {({getRootProps, getInputProps}) => (
              <section className="container">
                <div {...getRootProps({className: 'dropzone'})}>
                  <input {...getInputProps()} />
                  <img src="./resources/add-file-icon-3.jpg" alt=""/>
                  <p>xDrag 'n' drop some files here, or click to select files</p>
                </div>
                <aside>
                  <h4 style={{color:(this.state.valid === false) ? "#F00" : "#0F0"}}>Files {this.state.valid}</h4>
                  <ul>{files}</ul>
                </aside>
              </section>
            )}
          </Dropzone>
        );
    }
}