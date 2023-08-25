import {useState} from 'react'


function Bt1({count,onClick}){
  return (
    <button onClick={onClick}> First button clicked {count} times</button>
  );
}


function Bt2({count,onClick}){
  return (
   <button onClick={onClick}>
    Second button clicked {count} times
     </button>
  );
}



export default function App() {
  const [count,setcount] = useState(0);
  function handleclick(){
    setcount(count+1);
  }
  return (
    <div>
      <Bt2 count={count} onClick={handleclick} />
      <Bt1 count={count} onClick={handleclick} />
    </div>
    
  )
}


