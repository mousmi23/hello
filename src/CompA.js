import React from "react";

import { firstName, lastName } from "./App";

const CompA = () => {
  return (
    <>
      <firstName.Consumer>
        {(fname) => {
          return (
            <lastName.Consumer>
              {(lname) => {
                return (
                  <h1>
                    My name {fname} {lname}
                  </h1>
                );
              }}
            </lastName.Consumer>
          );
        }}
      </firstName.Consumer>
    </>
  );
};

export default CompA;
