import React from "react";

const Cards = () => {
  return (
    <div className="h-screen  w-full mt-2 bg-black text-white flex justify-center items-center  ">
      <div className="  pr-4 first flex row my-2 justify-center items-center w-[600px] h-[400px] ">
        <div className="line text-center flex-col items-center flex justify-start   h-full w-fit">
          <div className="circle border-2 rounded-3xl  h-3 w-3 border-orange-600 bg-orange-600 "></div>
          <div className="line border-2 h-full  border-orange-600"></div>
        </div>
        <div className="relative date w-1/2 text-center items-center flex justify-center h-3/4 ">
          <span className=" text-3xl absolute font-bold flex items-center justify-center text-center transform -rotate-90 w-3/4 left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2  ">
            <span className="pr-2">11TH </span>
            <span className="px-2"> SEPTEMBER </span>
            <span> 2001 </span>
          </span>
        </div>
        <div className=" content w-auto h-full   text-center items-center flex justify-center flex-col">
          <img
            className="bg-cover bg-no-repeat h-full w-full"
            src="../assets/anime_girl_5.jpg"
          ></img>
          <span className="text-left">
            <span className="font-bold text-xl">
              Lorem ipsum dolor sit amet
            </span>
            <br></br> consectetur adipisicing elit. Cum magni dolorum corporis
            deleniti facilis ratione pariatur delectus et quas quo architecto
            similique hic commodi natus, error rem a!
          </span>
        </div>
      </div>
      
    </div>
  );
};

export default Cards;
