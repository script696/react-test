import React, { useEffect } from "react";

const C1 = () => {
  console.log(1);
  useEffect(() => {
    console.log(2);
  }, []);
  return <div>component №1</div>;
};

export default C1;
