class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options: []
    };
  }

  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      };
    });
  }

  handlePick() {
    const rand = Math.floor(Math.random() * this.state.options.length);

    alert(this.state.options[rand]);
  }

  handleAddOption(option) {
    if(!option){
      return 'please add an option';
    }else if(this.state.options.indexOf(option) > -1){
      return 'this item already exists';
    }

    this.setState((prevState) => {
      return{
        options : prevState.options.concat([option])
      }
       
     
    })
  }

  render() {
    const title = "Indecision";
    const subTitle = "Put your life in the hand of a computer";
    return (
      <div>
        <Header title={title} subTitle={subTitle} />
        <Action 
          hasOption={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption handleAddOption={this.handleAddOption} />
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
  render() {
    return (
      <div>
        <button disabled={!this.props.hasOption} onClick={this.props.handlePick}>
          What should i do!
        </button>
      </div>
    );
  }
}

class Options extends React.Component {
  
  render() {
    return (
      <div>
        <button onClick={this.props.handleDeleteOptions}>Remove All</button>
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

const Stateless = (props) => {
  return (
    <div>hello : {props.name}</div>
  )
}

class AddOption extends React.Component {
  constructor(props){
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      error: undefined,
    }
  }
  onSubmit(e) {
    e.preventDefault();
    const input = e.target.elements.input.value.trim();
    const error = this.props.handleAddOption(input);
    
    this.setState(() => {
      return {error};
    })

  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input type="text" name="input" />
          <button>add option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<Stateless name='matboud' />, document.getElementById("app"));
// ReactDOM.render(<IndecisionApp  />, document.getElementById("app"));
