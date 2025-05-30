
import './App.css'

function App() {
    const num =  3.141592654;
    const object= {
        a:21,
        b:'other'
    }
    return (
      <>
          {/*插值语法：可以用于展示字符串、数字、数组（元素为普通类型）、元素、支持API的调用*/}
          {/*展示序列化的对象*/}
          <div>插值语法展示字符串：{'艺画开天'}</div>
          <div>插值语法展示数字：{2025}</div>
          <div>插值语法展示数字：{['hello world,', ' fight up']}</div>
          <div>插值语法展示元素：{ <span>测试元素</span>}</div>
          <div>插值语法展示布尔值 展示不了、显示空：{true}</div>
          <div>插值语法展示布尔值三元表达式：{true ? 'yes' : 'no'}</div>
          <div>插值语法展示：API调用 { num.toFixed(2 )}</div>
          <div>插值语法展示序列化对象：{JSON.stringify(object)}</div>
      </>
  )
}

export default App
