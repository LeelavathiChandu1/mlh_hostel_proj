// import Navbar from "./pages/Navbar";

import About from "./About"
import App1 from "./Bookings/App1"

import Navbar from "./Navbar"

// import Complaints from "./pages/Complaints"
// import Admin from "./pages/Admin"
// import Details from "./pages/Details";
import './App.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Login from "./Bookings/Login"
// const { useEffect, useState } = require('react');
// const axios = require('axios');

function App(){
  // <Details/>
  let component
  switch (window.location.pathname){
    // case "/":
    //   component = <Home />
    //   break
    case "/about":
      component = <About/>
      break
    // case "/booking":
    //   component = <App1/>
    //   break
    // case "/complaints":
    //   component = <Complaints/>
    //   break
    // case "/admin":
    //   component = <Admin/>
    //   break
      case "/Booking/App1":
        component=<App1/>
        break
        case "/Booking/Login":
        component=<Login/>
      
    
  }
  
  return(
    <>
    <Navbar/>
    
    <div className="container">
    {component}
    </div>

    


         
    </>
  )
}

export default App
// // import React from 'react';
// // import Navbar from './Navbar';
// // import BookingRoutes from './Bookings/Bookingroutes';

// // function App() {
// //   // You can retrieve the current path from the window.location object
// //   const currentPath = window.location.pathname;
// //   console.log(currentPath)

// //   return (
// //     <div>
// //       <Navbar />
// //       <div className="container">
// //         {/* Pass the currentPath as a prop to BookingRoutes */}
// //         <BookingRoutes currentPath={currentPath} />
// //         {/* Add other components or content here */}
// //       </div>
// //     </div>
// //   );
// // }

// // export default App;
// // import React from 'react';
// // import Navbar from './Navbar';
// // import About from './About'
// // import App1 from './Bookings/App1';
// // import Login from './Bookings/Login';
// // function App() {
// //   // You can retrieve the current path from the window.location object
// //   const currentPath = window.location.pathname;

// //   // Define a function to render the appropriate component based on the current path
// //   // const renderComponent = () => {
// //   //   if (currentPath === '/about') {
// //   //     return <About />;
// //   //   } else if (currentPath === '/Booking/App1') {
// //   //     return <App1 />;
// //   //   } 
// //   //   else if(currentPath === '/Booking/Login')
// //   //   {
// //   //     return <Login />;
// //   //   }
// //   //   // Add more conditions for different paths
// //   };
// //   function renderComponent() {
// //     if (currentPath.startsWith('/Booking/App1')) {
// //       return <App1 />;
// //     } else if (currentPath.startsWith('/Booking/login')) {
// //       return <Login />;
// //     }
// //     else if (currentPath.startsWith('/about')) {
// //       return <About />;
// //     }
// //     // Add more conditions for different paths
// //   }
  

// //   return (
// //     <div>
// //       <Navbar />
// //       <div className="container">
// //         {/* Render the appropriate component based on the currentPath */}
// //         {renderComponent()}
// //         {/* Add other components or content here */}
// //       </div>
// //     </div>
// //   );
// // }

// // export default App;

// import React from 'react';
// import Navbar from './Navbar';
// import App1 from './Bookings/App1';
// import Login from './Bookings/Login';
// import About from './About'; // Import the About component

// function App() {
//   const currentPath = window.location.pathname;

//   function renderComponent() {
//     if (currentPath.startsWith('/Booking/App1')) {
//       return <App1 />;
//     } else if (currentPath.startsWith('/Booking/login')) {
//       return <Login />;
//     } else if (currentPath.startsWith('/about')) {
//       return <About />;
//     }
//     // Add more conditions for different paths
//   }

//   return (
//     <div>
//       <Navbar />
//       <div className="container">
//         {/* Render the appropriate component based on the currentPath */}
//         {renderComponent()}
//         {/* Add other components or content here */}
//       </div>
//     </div>
//   );
// }

// export default App;
