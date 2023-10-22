import React from "react";
import ES5Functions from "./ES5Functions";
import ArrowFunctions from "./ArrowFunctions";
import ImpliedReturn from "./ImpliedReturn";
import FunctionParenthesisAndParameters from "./FunctionParenthesisAndParameters";
import WorkingWithArrays from "./WorkingWithArrays";
import ArrayIndexAndLength from "./ArrayIndexAndLength";
import AddingAndRemovingDataToFromArrays from "./AddingAndRemovingDataToFromArrays";
import ForLoops from "./ForLoops";
import MapFunction from "./MapFunction";
import FindFunction from "./FindFunction";
import FilterFunction from "./FilterFunction";
import TemplateLiterals from "./TemplateLiterals";
import House from "./House";
import Spread from "./Spread";
import Destructing from "./Destructing";
import FunctionDestructing from "./FunctionDestructing";

function WorkingWithFunctions() {
  return (
    <div>
      WorkingWithFunctions
      <ES5Functions />
      <ArrowFunctions />
      <ImpliedReturn />
      <FunctionParenthesisAndParameters />
      <WorkingWithArrays />
      <ArrayIndexAndLength />
      <AddingAndRemovingDataToFromArrays />
      <ForLoops />
      <MapFunction />
      <FindFunction />
      <FilterFunction />
      <TemplateLiterals />
      <House />
      <Spread />
      <Destructing />
      <FunctionDestructing />
    </div>
  );
}

export default WorkingWithFunctions;