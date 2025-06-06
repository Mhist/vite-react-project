import { useReducer } from "react";

function UseReducer() {
  interface arg {
    name:string,
    age:number,
    sex:string
  }

  interface action {
    type:"add"|"subtract"
  }
  const initialArg:arg = {
    name: "dongfeng",
    age: 18,
    sex: "男",
  };

  function reducer(state: arg, action: action) {
    switch (action.type) {
      case "add":
        return { ...state, age: state.age + 1 };
      case "subtract":
        return { ...state, age: state.age - 1 };
      default:
        throw new Error();
    }
  }

  function init() {
    return initialArg;
  }
  const [state, dispatch] = useReducer(reducer, initialArg, init);

  const handleAdd = () => {
    dispatch({ type: "add" });
  };

  const handleSubstract = () => {
    dispatch({ type: "subtract" }); 
  }
  return (
    <div>
      <h1>UseReducer</h1>
      <div>当前状态: {state.age}</div>
      <button onClick={ handleAdd }>状态加1</button>
      <button onClick={handleSubstract}>状态减1</button>
    </div>
  );
}

export default UseReducer;

