
import React from 'react';
import './Button.css';
import * as Scroll from 'react-scroll';
let Link = Scroll.Link;

const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];

const SIZES = ['btn--medium', 'btn--large'];

const CURSOR = ['pointer','default']

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  cursor,
  scroll,
  tooffset
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  const checkcursor = CURSOR.includes(cursor) ? cursor : CURSOR[0];

  if(scroll == null){
    scroll = "";
  }
  if(tooffset == null){
    tooffset = 80;
  }

  if(type === "submit"){
    return (
      <div className='btn-mobile'>
        <button
          className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkcursor}`}
          onClick={onClick}
          type={type}
        >
          {children}
        </button>
        </div>
    );
  }

  return (
    <Link to={scroll} activeClass="active" spy={true} smooth={true} duration={500} offset={tooffset}
    
    className='btn-mobile'>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkcursor}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};