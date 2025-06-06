import "./useState.css";
import { useState } from "react";
function UseState() {
  // 初始化函数或更新函数运行了两次   第一次是在组件挂载时运行  第二次是在组件更新时运行
  const initFunc = () => {
    console.log("执行了initFunc");
    return 0;
  };
  const [count, setCount] = useState(initFunc);

  const someFunction = () => {
    console.log("执行了someFunction");
    return 0;
  };
  const someOtherFunction = () => {
    console.log("执行了someOtherFunction");
    return 0;
  };
  const [fn, setFn] = useState(someFunction);
  console.log(fn);
  const handleAdd = () => {
    setCount(count + 1);
    setFn(someOtherFunction);
  };
  const handleSubtract = () => {
    setCount(count - 1);
    console.log(count);
  };
  return (
    <>
      <div className="useState">
        <h1>测试useState:实现一个计数器</h1>
        <h1>
          <a
            href="https://zh-hans.react.dev/reference/react/useState"
            target="_blank"
            rel="noopener noreferrer"
          >
            useState-React官网文档
          </a>
        </h1>
        <h1>
          <a
            href="https://www.yuque.com/dongfengmhist/qxb66l/mihoqtabnyhms7z6/edit"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            useState-语雀笔记
          </a>
        </h1>
        <p>当前计数: {count}</p>
        <button onClick={handleAdd}>增加1</button>
        <button onClick={handleSubtract}>减少1</button>
      </div>
    </>
  );
}
export default UseState;
