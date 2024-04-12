export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <div className="w-full flex justify-center">
        <img
          className="w-[50%] sm:w-[30%] lg:w-[20%] xl:w-[15%]"
          src="../assets/cooking.gif"
        />
      </div>
      <div className="text-2xl sm:text-4xl lg:text-6xl xl:text-7xl text-center font-squid font-normal text-white">
        Something Is <br />
        cooking...
      </div>
      {/* <div className="text-7xl font-squid font-normal text-white">
        HacK-O-VErSe
      </div> */}
    </div>
  );
}
