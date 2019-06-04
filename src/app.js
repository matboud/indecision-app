class IndecisionApp extends React.Component {
  render() {
    const title = "Indecision";
    const subTitle = "Put your life in the hand of a computer";
    const options = ["one", "two", "tree"];
    return (
      <div>
        <Header title={title} subTitle={subTitle} />
        <Action />
        <Options options={options} />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subTitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  handlePick() {
    alert("pick!!");
  }
  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What should i do!</button>
      </div>
    );
  }
}

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.removeAll = this.removeAll.bind(this)
  }
  removeAll() {
    alert(this.props.options);
  }
  render() {
    return (
      <div>
        <button onClick={this.removeAll}>Remove All</button>
        {this.props.options.map((option, index) => (
          <Option key={index} optionText={option}>
            {option}
          </Option>
        ))}
        
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return <div>{this.props.optionText}</div>;
  }
}

class AddOption extends React.Component {
  onSubmit(e) {
    e.preventDefault();
    const input = e.target.elements.input.value.trim;

    if (input) {
      alert(input)
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input type="text" name="input" />
          <button>add option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
