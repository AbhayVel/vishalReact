import { useState } from "react";


const Home = (props:any) =>{
  debugger;
let [count, setCount] = useState(0)
 const  btnClick = ()=>{
  count = props.name;
  // count=  count+1;
  setCount(count+1)
  console.log(count);
  
 }
    return (
      <div>
        <div>Home {count}</div>  
        <button type="button" onClick={btnClick}>Inside Home  - click</button>  
      </div>
      );
}

export default Home;