import React, { Component } from 'react';
import JsScriptTag from 'react-script-tag';
 
class Demo extends Component {
 
    render() {
        return (<JsScriptTag isHydrating={true} type="text/javascript" src="some_script.js" />);
    }
}

export default Demo;