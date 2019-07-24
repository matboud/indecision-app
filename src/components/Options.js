import React from "react";
import Option from "./Option";

const Options = props => (
  <div>
    <div className='widget-header'>
      <h3 className='widget-header__h3'>Your Options</h3>
      <button
        onClick={props.handleDeleteOptions}
        className="button button--link"
      >
        Remove All
      </button>
    </div>
    {props.options.length === 0 && <p className='message'>no item to show!</p>}
    {props.options.map((option, index) => (
      <Option
        key={index}
        index={index +1}
        optionText={option}
        handleDeleteItem={props.handleDeleteItem}
      >
        {option}
      </Option>
    ))}
  </div>
);

export default Options;
