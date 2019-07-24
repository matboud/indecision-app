import React from "react";
const Option = props => (
  <div className="option">
    <p className='option__text'>{props.index + ". " + props.optionText}</p>

    <button
      onClick={e => {
        props.handleDeleteItem(props.optionText);
      }}
      className="button button--link"
    >
      remove
    </button>
  </div>
);

export default Option;
