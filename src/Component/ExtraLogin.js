import React from "react";

const ExtraLogin = ({ index }) => {
  const uData = [
    {
      first: "Your Orders",
      second: "Log Out",
    },
    {
      first: "Add Products",
      second: "Log Out",
    },
    {
      first: "Log In",
      second: "Sign Up",
    },
  ];
  const handleFirst = () => {
    console.log("clik");
  };
  const handleSecond = () => {
    console.log("Xlik");
  };
  return (
    <div id="hide" onClick={handleFirst}>
      {" "}
      <h4>{uData[1].first}</h4>
      <h4 onClick={handleSecond}>{uData[0].second}</h4>
    </div>
  );
};

export default ExtraLogin;
