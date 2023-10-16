// react
import { useState } from "react";
// components
import BeautifulScreen from "./BeautifulScreen";
import NumberButton from "./NumberButton";
import OperatorButton from "./OperatorButton";
import EqualButton from "./EqualButton";
import FunctionButton from "./FunctionButton";
import ItSOverNineThousand from "./ItSOverNineThousand";

function Calculator() {
  const listNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const listOperator = ["+", "-", "*", "/"];

  const [operation, setOperation] = useState("");
  const [result, setResult] = useState("");

  const childToParent = (value) => {
    if (listNumber.includes(value) || listOperator.includes(value)) {
      addNumber(value);
    } else if (value === "C") {
      removeOperation();
    } else if (value === "Del") {
      deleteLast();
    } else if (value === "save") {
      save();
    }
  };

  function addNumber(number) {
    let concat = operation.concat(number.toString());
    setOperation(concat);
  }

  function removeOperation() {
    setOperation("");
    setResult("");
  }

  function deleteLast() {
    let newOperation = operation.slice(0, -1);
    setOperation(newOperation);
  }

  function save() {
    console.log("SAVE!");
  }

  const calculate = (operation) => {
    // récupérer les nombres et les opérateurs
    let numbers = operation.split(/[^0-9]/);

    // récupérer les opérateurs et pas les espaces
    let operators = operation.split(/[0-9]/);
    operators = operators.filter((operator) => operator !== "");

    // calculer le résultat
    let result;
    // parcourir les opérateurs, dès qu'on trouve une multiplication ou une division, on la fait
    for (let i = 0; i < operators.length; i++) {
      if (operators[i] === "*" || operators[i] === "/") {
        if (operators[i] === "*") {
          result = numbers[i] * numbers[i + 1];
        } else {
          result = numbers[i] / numbers[i + 1];
        }
        numbers.splice(i, 2, result);
        operators.splice(i, 1);
        i--;
      }
    }

    // parcourir les opérateurs, dès qu'on trouve une addition ou une soustraction, on la fait
    for (let i = 0; i < operators.length; i++) {
      if (operators[i] === "+" || operators[i] === "-") {
        if (operators[i] === "+") {
          result = parseInt(numbers[i]) + parseInt(numbers[i + 1]);
        } else {
          result = parseInt(numbers[i]) - parseInt(numbers[i + 1]);
        }
        numbers.splice(i, 2, result);
        operators.splice(i, 1);
        i--;
      }
    }

    // afficher le résultat en string
    let resultString = result.toString();
    setResult(resultString);
  };

  const equal = () => {
    calculate(operation);
  };

  return (
    <div className={"all"}>
      <div className={"calculator"}>
        <BeautifulScreen operation={operation} result={result} />
        <div className={"buttonsStyle"}>
          <FunctionButton handleClick={childToParent} />
          <div className={"buttons"}>
            <NumberButton handleClick={childToParent} />
            <OperatorButton handleClick={childToParent} />
            <EqualButton equal={equal} />
          </div>
        </div>
      </div>
      <ItSOverNineThousand result={result} />
    </div>
  );
}

export default Calculator;
