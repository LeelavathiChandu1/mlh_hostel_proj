// bookings/BookingRoutes.js
// import React from 'react';
// import { Switch, Route } from 'react-router-dom';
// // import { Switch, Route } from 'react-router-dom';

// // import BookingPage from './BookingPage';
// // import ConfirmationPage from './ConfirmationPage';
// import Login from './Login'; // Import the Login component

// function BookingRoutes() {
//   return (
//     <Switch>
//       {/* <Route exact path="/bookings" component={BookingPage} />
//       <Route path="/bookings/confirmation" component={ConfirmationPage} /> */}

//       <Route path="/bookings/login" component={Login} /> {/* Add this route */}
//     </Switch>
//   );
// }

// export default BookingRoutes;
// import React from 'react';
// import Login from './Login';

// function BookingRoutes({ currentPath }) {
//   let component = null;

//   // Conditionally render components based on the currentPath
//   if (currentPath === '/bookings/login') {
//     component = <Login />;
//   }

//   // Add more conditions for other pages as needed

//   return <div>{component}</div>;
// }

// export default BookingRoutes;

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import App1 from './App1';
// import Login from './Login'; // Import the Login component

// function BookingRoutes() {
//   return (
//     <Router>
//       <Routes><Route path="/Booking/App1" exact component={App1} />
//       <Route path="Booking/login" component={Login} /> </Routes>
//       {/* Add other routes as needed */}
//     </Router>
//   );
// }

// export default BookingRoutes;

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import App1 from './App1';
// import Login from './Login';

// function BookingRoutes() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/Booking/App1" element={<App1 />} />
//         <Route path="/Booking/login" element={<Login />} />
//         {/* Add other routes as needed */}
//       </Routes>
//     </Router>
//   );
// }

// export default BookingRoutes;

// import React from 'react';
// import ReactDOM from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import App1 from './App1'; // Import your App1 component
// import Bookingroutes from './Bookingroutes';
// import Login from './Login';
// const root = ReactDOM.createRoot(document.getElementById('root'));

// function Index() {
//   return (
//     <React.StrictMode>
//       <div>
//         <App1 />
//         <Login /> {/* Render your routing component */}
//       </div>
//     </React.StrictMode>
//   );
// }

// root.render(<Index />);

// export default Index;

