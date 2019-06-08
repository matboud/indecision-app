import React from 'react';
import Option from './Option';

const Options = props => {
    return (
      <div>
        <button onClick={props.handleDeleteOptions}>Remove All</button>
        {
          props.options.length === 0 && <p>no item to show!</p>
        }
        {props.options.map((option, index) => (
          <Option key={index} optionText={option} handleDeleteItem={props.handleDeleteItem}>
            {option}
          </Option>
        ))}
      </div>
    );
  };

  export default Options;