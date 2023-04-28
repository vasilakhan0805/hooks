import React from "react";
import Hooks from "../components/hooks";
import Todo from "../components/Todo";
import UseReducer from "../components/UseReducer";


const Root = ()=> {
   return(
    <div>
        <Hooks/>
        <Todo />
        <UseReducer />
    </div>
   )  
}


export default Root