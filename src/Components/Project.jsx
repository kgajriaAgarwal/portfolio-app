import React from 'react';
import PData from './PData';



function Project() {
debugger
  // const [data] = PData;
  // console.log("PData",data);
  
//     function importAll(r) {
//       let images = {};
//       r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
//       return images;
//   }
  
//  let images = importAll(require.context('../Images/', false, ' /\.(png|jpe?g|svg)$/'));
  
//   // <img src={images['0.png']} />


  const pimg_string = `../Images/wp1.png`;
  

  return (
    <div className = "category">
      <h1>Project Portfolio</h1>
      <div className = "p_div">
      {PData.map((cval, ind)=>{
        return(
          <>
            <h4>{cval.p_name}</h4>
            <h6>{cval.p_skillset}</h6>
            <h5><a href = {cval.p_ghLink} style = {{textDecoration : 'none'}} target = "_blank">{cval.p_ghLink}</a></h5>
            
            <div className = "pimg_div">
            {cval.p_img.map((cimg_val,imgindex) =>{
              return (
              <>
                <img src= {cimg_val}
                alt = "wp-img"/>
              </>
              )
            })}
            
            </div>
            <p>{cval.p_desc}</p>
            <hr/>
            <br/>
          </>
        )
      })
      // <h4>{data.p_name}</h4>
      // <h6>{data.p_skillset}</h6>
      // <img src= {picc} alt = "wp-img"/>
      // <p>{data.p_desc}</p>
      }
      </div>
    </div>
  )
}

export default Project;
