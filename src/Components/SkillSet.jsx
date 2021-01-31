import React from 'react';

function SkillSet() {
 
    const skillsetArr = ["Html", "Css", "ES6", "React", "React Props", "React Hooks", "State Management", "Context API", "Api", "React Componnets"];
    

  return (
    <div className = "category">
      <h1>skill set</h1>
      {skillsetArr.map((cval, ind)=>{
          return <label className = "lbl">{cval}</label>
      })}
      
      
    </div>
  )
}

export default SkillSet;
