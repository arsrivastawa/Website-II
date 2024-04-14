import React from "react";

function Button({ title }) {
  return (
    <div className="btn duration-200 font-squid text-white relative w-fit hover:text-[#ec0e89] hover:cursor-pointer ">
      <img src="../assets/buttonFinal.png" className="w-[110px] block"></img>
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 ">
        {title}
      </div>
    </div>
  );
}

export default Button;
