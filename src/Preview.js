import React, { Component } from 'react';

class Preview extends Component{

    render(){
        return (
                <div class="Preview">
                <div id="preview" className="pane"  dangerouslySetInnerHTML={{
                    __html: this.props.html
                }}>
                </div>
                </div>
        );
    }

}


export default Preview;
