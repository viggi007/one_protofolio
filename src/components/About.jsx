import React from 'react';

const about = () => {
  return (
    <div name ="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black
     text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore, est.
          Cupiditate commodi quo aut officiis corrupti necessitatibus earum. Harum, enim?
          Velit cum voluptatem repellendus ducimus, doloremque molestias sequi dolorem incidunt!
          Quisquam accusamus quam necessitatibus dolor cum non recusandae iusto quod.
          Hic architecto voluptatibus porro reprehenderit cupiditate expedita quam corporis quidem?
        </p>
        <br />
        <p className="text-xl ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, atque!
          Itaque tempore consectetur ipsum fuga deleniti harum ipsa officia ratione.
          Autem recusandae nobis facilis iure nostrum quibusdam hic perferendis animi.
          Iusto sequi nesciunt quod distinctio commodi nam? Veritatis, voluptate nemo.
          Accusantium incidunt saepe recusandae sunt nam hic numquam distinctio sed.
        </p>
      </div>
    </div>
  );
};

export default about;