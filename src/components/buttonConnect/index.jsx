import React from 'react';

const ButtonComponent = () => {
  const handleClick = () => {
    window.location.href = 'mailto:wahyuma123@gmail.com';
  };

  return (
    <button
      onClick={handleClick}
      className="group overflow-hidden relative border-[1px] border-black rounded-full w-[270px] py-3.5 text-lg font-medium"
    >
      <div>
        <span>wahyuma123@gmail.com</span>
      </div>
      <div className="absolute w-full h-full bg-black text-white translate-y-3.5 group-hover:-translate-y-[42.5px] flex justify-center items-center duration-500 transition-all ease-in-out">
        Let's Connect
      </div>
    </button>
  );
};

export default ButtonComponent;
