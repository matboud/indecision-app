import React from 'react';

export default class AddOption extends React.Component {
    
      state = {
        error: undefined
      };
    
    onSubmit = (e) => {
      e.preventDefault();
      const input = e.target.elements.input.value.trim();
      const error = this.props.handleAddOption(input);
  
      this.setState(() => ({ error }));
      if(!error) {
        e.target.elements.input.value = '';
      }
    }
    render() {
      return (
        <div>
          {this.state.error && <p className='add-option-error'>{this.state.error}</p>}
          <form className='add-option' onSubmit={this.onSubmit}>
            <input className='add-option__input' type="text" name="input" />
            <button className='button'>add option</button>
          </form>
        </div>
      );
    }
  }