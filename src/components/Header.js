import React from "react";

const Header = props => (
  <div className='header'>
    <h1 className='header__title'>{props.title}</h1>
    {props.subTitle && <h2 className= 'header__subtitle'>{props.subTitle}</h2>}
  </div>
);

// this piece of code is the one that take control if there is no props (title in this case) passed to our component
Header.defaultProps = {
  title: "default title"
};

export default Header;
