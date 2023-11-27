// import { useState } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'
// // import { BrowserRouter as Router, Route} from 'react-router-dom';
// // import App from '../App'
// // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// // import Login from './Login';
// import './app1.css'
// import Data from "./data.js"
// import Card from "./card.js"
// import Buttons from './Buttons'
// import Bookingroutes from './Bookingroutes'
// function App1() {
//   const [item,setItems] = useState(Data)
//   const menuItems=[... new Set(Data.map((val)=>val.cat))]
//   const filterItems=(cat1)=>{
//     const newItems=Data.filter((newval)=> newval.cat === cat1)
//     setItems(newItems)
//   }

//   return (
    
//       <div className='container-fluid'>
//         <div className='row'>
//           <h2 className='text-center col-12 fw-bold mt-3 mb-5'>Select your room and book it</h2>
//           <Buttons 
//            menuItems={menuItems}
//            filterItems={filterItems}
//            setItems={setItems}
//            />
//           <Card item={item}/>

//         </div>
//         {/* <Router>
//       <Routes>
//         <Route path="/" element={<App />} /> 
//         <Route path="/Booking/App1" element={<Login />} /> 
//       </Routes>
//     </Router> */}
//     <div>
      
//       <Bookingroutes/>
//     </div>
        
//       </div>

     
    
//   )
// }

// export default App1

import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import 'bootstrap/dist/css/bootstrap.min.css';
import './app1.css';
import Data from "./data.js";
import Card from "./card.js";
import Buttons from './Buttons';
import Bookingroutes from './Bookingroutes';

function App1() {
  const [item, setItems] = useState(Data);
  const menuItems = [...new Set(Data.map((val) => val.cat))];
  
  const filterItems = (cat1) => {
    const newItems = Data.filter((newval) => newval.cat === cat1);
    setItems(newItems);
  };
  


  return (
    <div className='container-fluid'>
      <div className='row'>
        <h2 className='text-center col-12 fw-bold mt-3 mb-5'>Select your room and book it</h2>
        <Buttons 
          menuItems={menuItems}
          filterItems={filterItems}
          setItems={setItems}
          
        />
        <Card item={item} />
        
      </div>
      <div>
      
       
      </div>
     
    </div>
  );
}

export default App1;

// import React from 'react';
// import { useState } from 'react';
// import { Link } from 'react-router-dom'; // Import Link from React Router
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './app1.css';
// import Data from "./data.js";
// import Card from "./card.js";
// import Buttons from './Buttons';
// import Bookingroutes from './Bookingroutes';
// import Login from './Login';
// // Import your Login component here if it's not already imported

// function App1() {
//   const [item, setItems] = useState(Data);
//   const menuItems = [...new Set(Data.map((val) => val.cat))];
  
//   const filterItems = (cat1) => {
//     const newItems = Data.filter((newval) => newval.cat === cat1);
//     setItems(newItems);
//   };

//   return (
//     <div className='container-fluid'>
//       <div className='row'>
//         <h2 className='text-center col-12 fw-bold mt-3 mb-5'>Select your room and book it</h2>
//         <Buttons 
//           menuItems={menuItems}
//           filterItems={filterItems}
//           setItems={setItems}
//         />
//         <Card item={item} />
//       </div>
//       <div>
//         {/* Use the Link component to navigate to the Login component */}
//         {/* <Link to="Booking/login">
//           <button className="btn btn-primary">Book room</button>
//         </Link> */}
//         <Link to="/Booking/login"> {/* Change the path to "/Booking/login" */}
//   <button className="btn btn-primary">Book room</button>
// </Link>

//       </div>
//       <div>
//         <Bookingroutes />
//       </div>
//     </div>
//   );
// }

// export default App1;
