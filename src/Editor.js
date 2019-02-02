import React, { Component } from 'react';

class Editor extends Component{

    constructor(props){
        super(props);
        this.state = {
            value: props.markdown  
        };
        this.handleChange = this.handleChange.bind(this);
        this.renderMarkdown = props.renderMarkdown;
    }


    handleChange(event){
        this.setState(
            {
                value: event.target.value
            }
        );

        this.renderMarkdown(this.state.value);
    }

    render(){
        return (
                <div className="Editor">
                <textarea id="editor" className="pane" onChange={this.handleChange} onKeyUp={this.handleChange}>
                {this.state.value}
                </textarea>
                </div>
        );
    }

}


export default Editor;
