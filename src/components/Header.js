import React from 'react';

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

  export default Header;