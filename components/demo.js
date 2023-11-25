import React from 'react';

const Home = () => {
  return (
    <div className="h-full" >
    {/* <Image className="absolute h-full w-auto object-cover -z-80 opacity-90" src={Wallpaper} width={3841} height={2159}/> */}
    <div className="h-full relative flex justify-center items-center tracking-widest">
    <div className="text-left absolute top-8 left-8">Top Left</div>
    <div className="text-center absolute top-8">Top Center</div>
    <div className="text-right absolute top-8 right-8">Top Right</div>
    <div className="text-left absolute left-8">Center Left</div>
    <div className="text-center">Center</div>
    <div className="text-right absolute right-8">Center Right</div>
    <div className="text-left absolute bottom-8 left-8">Bottom Left</div>
    <div className="text-center absolute bottom-4 ">Bottom Center</div>
    <div className="text-right absolute bottom-8 right-8">Bottom Right</div>
  </div>
</div>
  );
};

export default Home;