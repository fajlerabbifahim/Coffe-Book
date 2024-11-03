import React from "react";

function Heading({ title, subTitle }) {
  return (
    <div className="text-center font-semibold">
      <h1 className="text-3xl">{title}</h1>
      <p className="text-xl font-base">{subTitle}</p>
    </div>
  );
}

export default Heading;
