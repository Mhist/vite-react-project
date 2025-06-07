import { Input,List } from "antd";
import  { useState ,useDeferredValue} from "react";
import mock from "mockjs";
const UseDeferredValue = () => {
    interface Item {
        id: number;
        name: string;
        address: string;  }
  const [val,setVal] = useState<string>('');
  const [list] = useState<Item[]>(()=>{
    return mock.mock({
      'list|100':[{
        'id|+1':1 , 
        'name':'@natural',
        'address':'@county(true)'
      }]
    }).list;
  });
  const serachQuery = useDeferredValue(val);
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setVal(value);
  }

  const fintItem = () => {
    return list.filter(item => item.name.toString().includes(serachQuery)); 
  }
  return (
    <>
      <h1>useTransition</h1>
      <Input value={val} onChange={handleChange}/>
          <List
      header={<div>Header</div>}
      footer={<div>Footer</div>}
      bordered
      dataSource={fintItem()}
      renderItem={(item:Item) => (
        <List.Item>
          <List.Item.Meta title={item.name} description={item.address}></List.Item.Meta>
        </List.Item>
      )}
    />
    </>
  );
};

export default UseDeferredValue;
