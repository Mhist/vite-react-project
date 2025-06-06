import { Input,List } from "antd";
import  { useState ,useTransition} from "react";
const UseTransition = () => {
    interface Item {
        id: number;
        name: string;
        address: string;  }
  const [val,setVal] = useState<string>('');
  const [list,setList] = useState<Item[]>([]);
  const [pending,startTransition] = useTransition();
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setVal(value);
    fetch('/api/list?keyWord='+ value,{method:'GET'}).then(res => res.json()).then(data => {
      console.log(data);
      startTransition(() => {
        setList(data.list); 
      })
    //   setList(data.list); 
    })
  }
  return (
    <>
      <h1>useTransition</h1>
      <Input value={val} onChange={handleChange}/>
          <List
      header={<div>Header</div>}
      footer={<div>Footer</div>}
      bordered
      dataSource={list}
      renderItem={(item:Item) => (
        <List.Item>
          <List.Item.Meta title={item.name} description={item.address}></List.Item.Meta>
        </List.Item>
      )}
    />
    </>
  );
};

export default UseTransition;
