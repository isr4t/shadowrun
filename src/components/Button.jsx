import React from "react";

const Button = ({ title, id, rightIcon, leftIcon, containerClass }) => {
  return (
    <button
      id={id}
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden 
                  rounded-full bg-violet-50 px-7 py-3 text-black 
                  flex items-center justify-center gap-2 font-semibold 
                  transition-all duration-300 hover:bg-violet-200 
                  ${containerClass}`}
    >
      {leftIcon && <span className="text-lg">{leftIcon}</span>}
      <span className="relative inline-flex font-sans text-xs uppercase tracking-wide">
        {title}
      </span>
      {rightIcon && <span className="text-lg">{rightIcon}</span>}
    </button>
  );
};

export default Button;
