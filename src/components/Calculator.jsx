// react
import { useState } from "react";
// components
import BeautifulScreen from "./BeautifulScreen";
import NumberButton from "./NumberButton";
import OperatorButton from "./OperatorButton";
import EqualButton from "./EqualButton";
import FunctionButton from "./FunctionButton";
import ItSOverNineThousand from "./ItSOverNineThousand";
import Alert from "./Alert";

function Calculator() {
  const listNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const listOperator = ["+", "-", "*", "/"];

  const [operation, setOperation] = useState("");
  const [result, setResult] = useState("");

  const [alert, setAlert] = useState(false);
  const [easter, setEaster] = useState(false);

  const childToParent = (value) => {
    if (value === "C") {
      removeOperation();
    } else if (value === "<") {
      deleteLast();
    } else if (value === "M") {
      save();
    } else if (
      listOperator.includes(value) &&
      listOperator.includes(operation[operation.length - 1])
    ) {
      setAlert(true);
    } else {
      addNumber(value);
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
    // récupérer les nombres (entier ou décimal) et les opérateurs
    // let numbers = operation.split(/[^0-9]/);
    let numbers = operation.split(/[^\d\.]/);
    // si numbers ne contient qu'un seul élément, on rajoute un 0 après
    if (numbers.length === 1) {
      numbers.push(0);
    }

    // récupérer les opérateurs et pas les espaces
    // let operators = operation.split(/[0-9]/);
    let operators = operation.split(/[\d\.]/);
    operators = operators.filter((operator) => operator !== "");
    // si operators ne contient rien, on rajoute un + après
    if (operators.length === 0) {
      operators.push("+");
    }

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
          result = parseFloat(numbers[i]) + parseFloat(numbers[i + 1]);
        } else {
          result = parseFloat(numbers[i]) - parseFloat(numbers[i + 1]);
        }
        numbers.splice(i, 2, result);
        operators.splice(i, 1);
        i--;
      }
    }

    // afficher le résultat en string
    let resultString = result.toString();
    setResult(resultString);

    // si le résultat est supérieur à 9000, on affiche l'easter egg
    if (result > 9000) {
      setEaster(true);
    }
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
      {easter && <ItSOverNineThousand setEaster={setEaster} />}
      {alert && <Alert setAlert={setAlert} />}
    </div>
  );
}

export default Calculator;
