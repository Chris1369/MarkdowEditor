import React, { Component } from 'react'

class Button extends Component {
    state = {
        textButton: "Choose Mode"
    }
    dark =  () => {
        const body = document.querySelector('.container')
        body.classList.toggle('dark')

    } 
    render() {
        return (

            <div className="text-center m-4">
                <button className="btn btn-light" onClick ={this.dark}>{this.state.textButton}</button>
            </div>
        )
    }
}

export default Button
