import React, {Component} from 'react';
import './App.css';
import {sampleText} from './sampleText'

import marked from 'marked'

import Button from './component/Button'

class App extends Component {
  state= {
    text: sampleText
  }

  componentDidMount () {
    const text = localStorage.getItem('text')
    if(text){
      this.setState({text})
    }else{
      this.setState({text : sampleText})
    }
  }

  componentWillUpdate () {
    const text = this.state.text
    localStorage.setItem('text', text)
  }

  handleChange = event => {
    const text = event.target.value
    this.setState({text})

    if(text.includes('```')){
      console.log('COUCOU')
      if(text){
        console.log('COUCOU2')
      }
    }
  }

  renderText = text => {
    const __html = marked(text, {sanitize: true})
    return {__html}
  
  }

  
  render(){
    return (
      <div className="container p-5">
          <h1 className="text-center mb-5">MarkDown Editor</h1>
          <Button />
        <div className="row">
          <div className="col-sm-6">
            <textarea 
            onChange={this.handleChange}
            value={this.state.text}
            rows="35" 
            className="form-control"/>
          </div>
          <div className="col-sm-6">
            <div dangerouslySetInnerHTML={this.renderText(this.state.text) } />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
