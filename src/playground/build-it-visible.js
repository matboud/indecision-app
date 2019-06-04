class BuildIt extends React.Component {
    constructor(props) {
        super(props);
        this.visibility = this.visibility.bind(this)
        this.state = {
            isVisible: false,
        }
    }

    visibility() {
        this.setState({
            isVisible: !this.state.isVisible,
        })
    }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.visibility}>
          {!this.state.isVisible ? "show details" : "hide details"}
        </button>
        <h2>{this.state.isVisible ? "the details are showing up" : ""}</h2>
      </div>
    );
  }
}

ReactDOM.render(<BuildIt/>, document.getElementById('app'))

// const app = {
//     show : false,
// }

// const visibility = () => {
//     app.show = !app.show;
//     console.log(app.show);
//     rerender();
// }

// const rerender = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={visibility}>{!app.show ? 'show details' : 'hide details'}</button>
//             <h2>{app.show ? 'the details are showing up' : ''}</h2>
//         </div>
//     )
//     ReactDOM.render(template, appRoot);
// }

// const appRoot = document.getElementById('app');
// rerender();
