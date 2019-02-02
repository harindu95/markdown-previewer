import React, { Component } from 'react';
import marked from 'marked';
import sample from './example.js';
import './App.css';

import Editor from './Editor.js';
import Preview from './Preview.js' ;

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            markdown: sample.markdown,
            html: sample.html,
        };
        this.renderMarkdown = this.renderMarkdown.bind(this);
    }


    renderMarkdown(markdown){
        var html = marked(markdown);
        this.setState({
            markdown: markdown,
            html: html
        });
    }


  render() {
    return (
            <div className="App">
            <header >
            <h1> Markdown Editor </h1>
            <span class="sub"> Made with <em>React</em> and <em>Marked</em> </span>
            </header>
            <Editor markdown={this.state.markdown} renderMarkdown={this.renderMarkdown}/>
            <Preview html={this.state.html}/>
      </div>
    );
  }
}

export default App;
