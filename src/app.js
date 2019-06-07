class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteItem = this.handleDeleteItem.bind(this);
    this.state = {
      options: props.options
    };
  }

  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }

  handlePick() {
    const rand = Math.floor(Math.random() * this.state.options.length);

    alert(this.state.options[rand]);
  }

  handleDeleteItem(optionTR) {
    this.setState((ps)=>({
      options: ps.options.filter((option)=> optionTR !== option )
    }))
  }

  handleAddOption(option) {
    if (!option) {
      return "please add an option";
    } else if (this.state.options.indexOf(option) > -1) {
      return "this item already exists";
    }

    this.setState(prevState => ({
      options: prevState.options.concat([option])
    }));
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
          handleDeleteItem={this.handleDeleteItem}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: []
};

const Header = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subTitle && <h2>{props.subTitle}</h2>}
    </div>
  );
};

// this piece of code is the one that take control if there is no props (title in this case) passed to our component
Header.defaultProps = {
  title: "default title"
};

const Action = props => {
  return (
    <div>
      <button disabled={!props.hasOption} onClick={props.handlePick}>
        What should i do!
      </button>
    </div>
  );
};

const Options = props => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {props.options.map((option, index) => (
        <Option key={index} optionText={option} handleDeleteItem={props.handleDeleteItem}>
          {option}
        </Option>
      ))}
    </div>
  );
};

const Option = props => {
  return (
    <div>
      {props.optionText}

      <button onClick={(e)=>{
        props.handleDeleteItem(props.optionText)
      }}>delete</button>
    </div>
  );
};

const Stateless = props => {
  return <div>hello : {props.name}</div>;
};

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      error: undefined
    };
  }
  onSubmit(e) {
    e.preventDefault();
    const input = e.target.elements.input.value.trim();
    const error = this.props.handleAddOption(input);

    this.setState(() => ({ error }));
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

ReactDOM.render(
  <IndecisionApp name="matboud" />,
  document.getElementById("app")
);
// ReactDOM.render(<IndecisionApp  />, document.getElementById("app"));
