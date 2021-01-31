import React from 'react';
import {Ed_Data} from './PData';
import Table from './Table';

function Education() {
  // console.log("edata",Ed_Data);

  return (
    <div className = "category">
       <h1>Education</h1>
       <Table arr = {Ed_Data}/>
    </div>
  )
}

export default Education;
