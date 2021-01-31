import React from 'react';
import {Exp_Data} from './PData';
import Table from './Table';

function Experience() {
  return (
    <div className = "category">
      <h1>Experience</h1>
      <Table arr = {Exp_Data}/>
    </div>
  )
}

export default Experience
