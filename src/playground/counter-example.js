
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.plus = this.plus.bind(this),
    this.minus = this.minus.bind(this),
    this.reset = this.reset.bind(this),
    this.state = {
      count : 0,
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

ReactDOM.render(<Counter/>, document.getElementById('app'));


// let count = 0;
// const addOne = () => {
//   count++;
//   renderCounterApp();
// };
// const minusOne = () => {
//   count--;
//   renderCounterApp();
// };
// const reset = () => {
//   count = 0;
//   renderCounterApp();
// };

// const appRoot = document.getElementById('app');

// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={reset}>reset</button>
//     </div>
//   );

//   ReactDOM.render(templateTwo, appRoot);
// };

// renderCounterApp();
