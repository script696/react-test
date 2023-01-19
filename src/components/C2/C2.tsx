import React, { ReactNode, useEffect } from "react";

const C2 = ({ children }: any) => {
  console.log(3);
  useEffect(() => {
    console.log(4);
  }, []);
  return (
    <>
      <div>component №2</div>
      {children}
    </>
  );
};

export default C2;
