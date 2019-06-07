
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.plus = this.plus.bind(this),
    this.minus = this.minus.bind(this),
    this.reset = this.reset.bind(this),
    this.state = {
      count : props.count,
    } 
  }

  plus(){
    this.setState(() => {
      return {
        count : this.state.count+1,
      }
    })
    console.log('plus')
  }
  

  minus() {
    this.setState(() => {
      return {count : this.state.count-1,}
    })
  }

  reset() {
    this.setState(() => {
      return {count : 0,}
    })
  }
  
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.plus}>+1</button>
        <button onClick={this.minus}>-1</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    )
  }
}

Counter.defaultProps= {
  count: 0
}

ReactDOM.render(<Counter/>, document.getElementById('app'));
