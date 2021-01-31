import React from 'react';

function Table(props) {
  console.log(props.arr);
  return (
    <div>
      <div className = "edtable-div">
        <table>
        {props.arr.map((cval,index)=>{
         console.log("current value is:", cval);
         return (
           <>
            <tr>
            <td style = {{color: 'darkcyan'}}>{cval.year}</td>
            <td>{cval.institute}</td>
            <td>{cval.percentage}</td>
            </tr>
           </>
          );
        })}
        </table>
      </div>
    </div>
  )
}

export default Table;
