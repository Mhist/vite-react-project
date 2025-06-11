import { useRef, useState } from "react";

const UseRef = () => {
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [count, setVal] = useState(0);
  const ref = useRef(0);
  const handleClick = () => {
    const intervalId = setInterval(() => {
      setVal(count => count + 1);
    }, 1000);
    intervalRef.current = intervalId;
  };
  const handleStopClick = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const handleNumClick = () => {
    ref.current += 1;
    alert(`点击次数：${ref.current}`); 
  }
  return (
    <div>
      <h1>UseRef</h1>
      <p>count: {count}</p>
      <button onClick={handleClick}>点击</button>
      <button onClick={handleStopClick}>停止点击</button>

      <h1>点击计数器 {ref.current}</h1>
      <span>如果在 JSX 中显示 {'ref.current'} {ref.current}，数字不会在点击时更新。这是因为修改 ref.current 不会触发重新渲染——用于渲染的信息应该使用 state。</span>
      <button onClick={handleNumClick}>点击</button>

    </div>
  );
};
export default UseRef;
