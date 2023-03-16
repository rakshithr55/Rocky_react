import React, { Component } from 'react'

export default class IncDecReset extends Component {
    constructor()
    {
        super()
        this.state={count : 0}
    }
    manageIncreament = ()=>{
        this.setState({count : this.state.count+1})
    }
    manageDecreament = ()=>{
        this.setState({count : this.state.count-1})
    }
    manageReset= function(){
        this.setState({count : 0})
    }
  render() {
    return (
      <div >
        <h1>{this.state.count}</h1>
        <button onClick={this.manageIncreament}>+ Increament</button>
        <button onClick={this.manageDecreament}>- Decreament</button>
        <button onClick={this.manageReset.bind(this)}>Reset</button>
      </div>
    )
  }
}
