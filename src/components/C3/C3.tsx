import React, { useEffect } from "react";

const C3 = () => {
  console.log(5);
  useEffect(() => {
    console.log(6);
  }, []);
  return <div>component №3</div>;
};

export default C3;
