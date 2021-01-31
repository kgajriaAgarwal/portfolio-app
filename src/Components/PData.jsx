import React from 'react';

const Ed_Data = [
  {year:"2009 - 2013",
  institute: "B.tech. (computer science),SDBCT, Rgpv university",
  percentage: "67%"
  },
  {year:"12th",
  institute: "CBSE",
  percentage: "68%"
  },
  {year:"10th",
  institute: "CBSE",
  percentage: "77%"
  }
]

const Exp_Data = [
  {year:"2015 - 2016",
  institute: "Queen's college",
  percentage: "Mathematics faculty"
  },
  {year:"2017-2018",
  institute: "Parkhya It solutions",
  percentage: "IOS Application developer"
  }
]

 const PData = [{
  p_id: "p_01",
  p_name: "EventPlanningWebsite using html,js,css",
  p_skillset: "html, js, css",
  p_ghLink: "https://github.com/kgajriaAgarwal/weddingplanner_jsApp.git",
  p_img: [ `../Images/wp1.png`,`../Images/wp2.png`,`../Images/wp3.png`,`../Images/wp4.png`,`../Images/wp5.png`],
  pimg_title: ["Home Page","services page","more services page", "Testimonial page","Contact Form"],
  //[ `../Images/wp1.png`,`../Images/wp2.png`,`../Images/wp3.png`,`../Images/wp4.png`,`../Images/wp5.png`],
  p_desc: "A simple wedding planning website designed using html, css, js, with good UI,clean and simple code. "
  
 },{
  p_id: "p_02",
  p_name: "Calculator project using html,js,css",
  p_skillset: "html, js, css",
  p_ghLink: "https://github.com/kgajriaAgarwal/calculator_Js_App.git",
  p_img: [ `../Images/calculator.png`,`../Images/c1.png`,`../Images/c2.png`,`../Images/c3.png`],
  p_desc: "A simple calculator designed using html, css, js, with good UI,clean and simple code. "
},{
  p_id: "p_03",
  p_name: "Quiz App using html,js,css",
  p_skillset: "html, js, css",
  p_ghLink: "https://github.com/kgajriaAgarwal/quiz_JsApp.git",
  p_img: [ `../Images/q1.png`,`../Images/q2.png`,`../Images/q3.png`,`../Images/q4.png`],
  p_desc: "Quiz Application designed  & developed using html, css, js, with good UI,clean and simple code. The functionality of the app is done using javascript and designed using html and css.The user choose the category initially according to which questions apper to the user and the the countdown begins to answer the question and then finally score appear according to the correct and wrong questions answered "
},{
  p_id: "p_04",
  p_name: "Avatar App using React",
  p_skillset: "js, ES6, css, React, jsx , class Componnets",
  p_ghLink: "https://github.com/kgajriaAgarwal/AvatarApp_react.git",
  p_img: [ `../Images/av1.png`,`../Images/av2.png`,`../Images/av3.png`,`../Images/av4.png`],
  p_desc: "An avatar app developed using React. React concepts used are state , props , jsx and third party library tachyons.Here the avtar is developed using https://joeschmoe.io/api/v1/${props.name} and the name is passed using the props between the componnets. "
},{
  p_id: "p_05",
  p_name: "React challenges App using React, react hooks",
  p_skillset: "js, ES6, css, React, jsx , react Hooks(usestate()), statemanagement",
  p_ghLink: "https://github.com/kgajriaAgarwal/challengeApp_React.git",
  p_img: [ `../Images/ch1.png`,`../Images/ch2.png`,`../Images/ch3.png`,`../Images/ch4.png`,`../Images/ch5.png`,`../Images/ch6.png`,`../Images/ch7.png`],
  p_desc: "Being a self taught react developer I have learnt react step by step with creating  small callenges in react like creating a digital clock, small netflix app clone, Handling various input fields with a single function, evemt handling, props for state management, done State management in functional components using useState hooks, using setTimeout and setInterval foe asynchronus programming.  "
},{
  p_id: "p_06",
  p_name: "todo App using React",
  p_skillset: "js, ES6, css, React, jsx , react Hooks(usestate()), statemanagement, event handling, functioal components, props for  passing data between the components",
  p_ghLink: "https://github.com/kgajriaAgarwal/ToDoApp_react.git",
  p_img: [ `../Images/todo1.png`,`../Images/todo2.png`,`../Images/todo3.png`,`../Images/todo4.png`],
  p_desc: "To do app  is developed using react. It contains all the basic functionality like adding the task to the todo list, deleting the task and editing the tash here functional componnets are use and the state managemnet is done using useStste Hooks."
},{
  p_id: "p_07",
  p_name: "Responsive Ecommerce App using React",
  p_skillset: "js, ES6, css, React, jsx , react Hooks(usestate()), statemanagement, event  handling, functioal components, react Router , props for  passing data between the components",
  p_ghLink: "https://github.com/kgajriaAgarwal/responsive_reactApp.git",
  p_img: [ `../Images/ec1.png`,`../Images/ec2.png`,`../Images/ec3.png`,`../Images/ec4.png`],
  p_desc: "A simple Ecommerce App created using react,react concepts and react router and for design bootstrap is used. It conatins almost all the concets of react router like switch , router, browser router  for the purpose of routing .here the code is divided into logical group  also called components making the code reusable.   "
},{
  p_id: "p_08",
  p_name: "CoinStar App using React",
  p_skillset: "js, ES6, css, React, jsx , react Hooks(usestate()), statemanagement, event handling, functioal components, react Router , props for  passing data between the components, contesxtAPi concets, usecontext Hook, API, axios,useParam Hook, chart.js library",
  p_ghLink: "https://github.com/kgajriaAgarwal/CoinStarReactApp.git",
  p_img: [ `../Images/cs1.png`,`../Images/cs2.png`,`../Images/cs3.png`,`../Images/cs4.png`,`../Images/cs5.png`,`../Images/cs6.png`,`../Images/cs7.png`,`../Images/cs8.png`,`../Images/cs9.png`],
  p_desc: "Coin Star App  based on crypto currency created using react,react concepts and react router  and context API and for design bootstrap is used. It conatins almost all the concepts of react.Here for the data I have used public API 'https://api.coingecko.com/api/v3/coins'  and then the data of the particular coin is shown using chart.js and rest detail is also shown.Now for the better User experience some data is already shown on the home page that is stored in the context and the data store in context is also used in some other components also.Here the concept of conditional render is also used. "
},{
  p_id: "p_09",
  p_name: "Portfolio App using React",
  p_skillset: "js, ES6, css, React, jsx , react Hooks(usestate()), statemanagement, event handling, functioal components, react Router , props for  passing data between the components",
  p_ghLink: "https://github.com/kgajriaAgarwal/weddingplanner_jsApp.git",
  p_img: [ `../Images/p1.png`,`../Images/p2.png`,`../Images/p3.png`,`../Images/p4.png`],
  p_desc: "Portfolio app contain all the small project that i have made during the process of learning React.These projects conatin all concets that i have learnt in react.This Portfolio conatin all the Information necessary for emploment like Qualification,Prior Experience, personal details, contact details etc. "
}
];

export default PData;
export {Ed_Data,Exp_Data};