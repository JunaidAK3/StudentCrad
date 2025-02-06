import React from "react";
import Cards from "./components/card";
// import Cards from "./components/card";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Cards image="/img/1.jpg" name="Juanid" age={17} id={12345} className={7} />
        <Cards image="/img/2.jpg" name="Ali" age={16} id={56728} className={6} />
        <Cards image="/img/3.jpg" name="Khan" age={19} id={91011} className={8} />
      </div>
    </div>
  );
}
