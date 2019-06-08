import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';

export default class IndecisionApp extends React.Component {
    constructor(props) {
      super(props);
      this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
      this.handlePick = this.handlePick.bind(this);
      this.handleAddOption = this.handleAddOption.bind(this);
      this.handleDeleteItem = this.handleDeleteItem.bind(this);
      this.state = {
        options: []
      };
    }
  
    componentDidMount() {
      try{
        const json = localStorage.getItem('options');
        const options = JSON.parse(json);
        
        if(options) {
          this.setState(()=>({options}));
        }
      }catch (e) {
        // at least the state is not going to be updated if we got an error (like passing an invalide data to the state)
      }
    }
  
    componentDidUpdate(prevProps, prevState ) {
      if(prevState.options.length !== this.state.options.length){
        const json = JSON.stringify(this.state.options);
        localStorage.setItem('options', json);
      }
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