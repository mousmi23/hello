import React, { createContext } from "react";
import CompA from "./CompA";
import "./App.css";

const firstName = createContext();
const lastName = createContext();
const App = () => {
  // Counter App-------------------------------
  //   const [myNum, setmyNum] = useState(0);

  //   const changeNum1 = () => {
  //     setmyNum(myNum + 1);
  //   };

  //   const changeNum2 = () => {
  //     setmyNum(myNum - 1);
  //   };
  //   const reset = () => {
  //     setmyNum(0);
  //   };

  //   return (
  //     <div>
  //       <h1>{myNum}</h1>
  //       <button className="btn" onClick={changeNum1}>
  //         Increase
  //       </button>
  //       <button className="btn" onClick={changeNum2}>
  //         Decrease
  //       </button>
  //       <button className="btn" onClick={reset}>
  //         Reset
  //       </button>
  //     </div>
  //   );
  // };

  // Note - Name Change App---------------------

  // const [myName, setmyName] = useState("Buni");

  // const changeName = () => {
  //   let val = myName;
  //   if (val === "Buni") {
  //     setmyName("Mou");
  //   } else {
  //     setmyName("Buni");
  //   }
  // };

  // return (
  //   <div>
  //     <h1>{myName}</h1>
  //     <button className="btn" onClick={changeName}>
  //       Change
  //     </button>
  //   </div>

  return (
    <>
      <firstName.Provider value={"Mousumi"}>
        <lastName.Provider value={"kundu"}>
          <CompA />
        </lastName.Provider>
      </firstName.Provider>
    </>
  );
};

export default App;
export { firstName, lastName };
