import React from "react";

import Banner from "../Components/HomeComponents/Banner";
import Heading from "../Components/HomeComponents/Heading";
function Home() {
  return (
    <div>
      {/* banner */}
      <Banner />
      {/* heading */}
      <Heading title={"ami fahim vodai "} subTitle={"ami tanzila magi"} />
      {/* tab category button  */}
      {/* dynamic nasted componnent */}
    </div>
  );
}

export default Home;
