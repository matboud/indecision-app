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
          {this.state.error && <p>{this.state.error}</p>}
          <form onSubmit={this.onSubmit}>
            <input type="text" name="input" />
            <button>add option</button>
          </form>
        </div>
      );
    }
  }