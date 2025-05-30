
import './App.css'
import * as React from "react";

function App() {
    const fn = <T,>(param: T,e:React.MouseEvent) => {
        console.log('Hello World!',param,e);
    }
    return (
      <>
          {/*事件：驼峰onClick   如果需要传参传递高阶函数、如果不需要就直接丢给函数体*/}
          {/*如果想支持泛型呢？ 纠正泛型 <T,> */}
          <div onClick={(e)=>fn('123', e)}>点击加1</div>  
      </>
  )
}

export default App
