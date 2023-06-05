import { useState } from "react";

function AddTask({addTask}) {
    const [value,setValu] = useState('')
    const addItem =()=>{
   addTask(value);
   setValu('')


    };



  return (
    <>
      <div className="input-container">
        <input type="text" className="input"
        placeholder="add new task"
        value={value}
        onChange={(e)=>{setValu(e.target.value)}}
        />
        
        <button onClick={addItem} className="add-btn">Add</button>
      </div>
    </>
  );
}
export default AddTask;
