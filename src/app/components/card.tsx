import React from "react";
import Image from "next/image";

interface CardProps {
  name: string;
  age: number;
  id: number;
  className: number;
  image: string;
}

const Cards: React.FC<CardProps> = ({ name, age, id, className, image }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-gray-400 rounded-lg p-4 w-full max-w-[400px] mx-auto">
      <div className="w-32 h-32 md:w-48 md:h-48 relative border-2 border-black">
        <Image 
          src={image} 
          alt={name} 
          layout="fill" 
          objectFit="cover" 
        />
      </div>
      <div className="mt-4 md:mt-0 md:ml-6 text-left">
        <p className="text-black text-lg font-bold">Name: {name}</p>
        <p className="text-black text-lg font-bold">Age: {age}</p>
        <p className="text-black text-lg font-bold">Roll No.: {id}</p>
        <p className="text-black text-lg font-bold">Class: {className}</p>
      </div>
    </div>
  );
};

export default Cards;
