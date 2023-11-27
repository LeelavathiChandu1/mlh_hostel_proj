// import React, { useState } from "react";
// import axios from 'axios'; // Import axios for making API requests
// import "./Login.css";
// const cors = require('cors'); // Import the cors package
// // const express=require('express')
// // const app = express();

// // // Enable CORS for all routes
// // app.use(cors());

// const Login = () => {
//   const [popupStyle, showPopup] = useState("hide");
//   const [username, setUsername] = useState(""); // State to store the username
//   const [eamcetRank, setEamcetRank] = useState(""); // State to store the EAMCET rank

//   const popup = () => {
//     showPopup("login-popup");
//     setTimeout(() => showPopup("hide"), 3000);
//   };


//   // function RoomBook() {
//   //   const [inputs, setInputs] = useState({});
//   //   let navigate = useNavigate();
  
//   //   const handleChange = (event) => {
//   //     const name = event.target.name;
//   //     const value = event.target.value;
//   //     setInputs((values) => ({ ...values, [name]: value }));
//   //   };
  
//   //   const handleSubmit = (event) => {
//   //     event.preventDefault();
//   //     console.log(inputs);
//   //     // axios.post('http://localhost:8080/insert', {
//   //     //     regdno: '12056666',
//   //     //     name: 'NagaRaju'
//   //     //   })
//   //     axios
//   //       .post("http://localhost:8080/roombook", {
          
//   //       data:{inputs,hostelname:'sarada',roomno:'101'}  
//   //       })
//   //       .then(function (response) {
//   //         console.log(response.data);
//   //         alert(response.data);
//   //         navigate("../success", { replace: true });
//   //       })
//   //       .catch(function (error) {
//   //         console.log(error);
//   //       });
//   //   };


//   const handleLogin = async () => {
//     try {
//       // Make an API POST request to the backend
//       const response = await axios.post('http://localhost:3001/Booking/Login', { username, eamcetRank });
//       if (response.data.success) {
//         // Login successful, you can redirect the user or perform other actions
//         console.log("login sucess")
//       } else {
//         // Login failed, show the error message
//         popup();
//       }
//     } catch (error) {
//       console.error('API request failed: ', error);
//     }
//   };

//   return (
//     <div className="cover">
//       <h1 className="adm1">Login</h1>
//       {/* Update the input fields to set the username and EAMCET rank states */}
//       <input
//         type="text"
//         placeholder="Username"
//         className="log1"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Eamcet rank"
//         className="log1"
//         value={eamcetRank}
//         onChange={(e) => setEamcetRank(e.target.value)}
//       />
//       <div className="login-btn" onClick={handleLogin}>
//         Login
//       </div>
//       <div className={popupStyle}>
//         <h3>Login Failed</h3>
//         <p>Rank is not matched</p>
//       </div>
//     </div>
//   );
// };

// export default Login;


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// const app = express();
const port = 3001; // or your desired port number
// const cores= require('cores')
// const express=require('express')
// Enable CORS for all routes
// app.use(cors());

function Login() {
  const [inputs, setInputs] = useState({});
  // let navigate = useNavigate();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    // axios.post('http://localhost:8080/insert', {
    //     regdno: '12056666',
    //     name: 'NagaRaju'
    //   })
    axios
      .post("http://localhost:3001/Login", {
        
      data:{inputs,hostelname:'sarada',roomno:'101'}  
      })
      .then(function (response) {
        console.log(response.data);
        alert(response.data);
        // navigate("../success", { replace: true });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
   
    <div className="card col-8 col-lg-4 login-card mt-2 hv-center form-horizontal ">
      <form action="" onSubmit={handleSubmit}>
        <div className="mb-3">
          {/* <label htmlfor="exampleFormControlInput1" className="form-label">Rank</label> */}
          <input
            type="text"
            className="form-control"
            placeholder="Enter EAPCET Rank"
            name="rank"
            value={inputs.rank || ""}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          {/* <label htmlfor="exampleFormControlInput1" className="form-label">Rank</label> */}
          <input
            type="text"
            className="form-control"
            placeholder="Student Name (as per SSC)"
            name="studentname"
            value={inputs.studentname || ""}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          {/* <label htmlfor="exampleFormControlInput1" className="form-label">Rank</label> */}
          <select name="branch" className="form-control" onChange={handleChange} defaultValue="">
            <option value="" disabled >Branch</option>
            <option value="AID">AID</option>
            <option value="AIM">AIM</option>
            <option value="CSE">CSE</option>
            <option value="IT">IT</option>
            <option value="ECE">ECE</option>
            <option value="EEE">EEE</option>
            <option value="CIV">CIV</option>
            <option value="ME">MEC</option>
          </select>
        </div>
        <div className="mb-3">
          {/* <label htmlfor="exampleFormControlInput1" className="form-label">Rank</label> */}
          <input
            type="text"
            className="form-control"
            placeholder="Mobile No (Student)"
            name="mobilestudent"
            value={inputs.mobilestudent || ""}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          {/* <label htmlfor="exampleFormControlInput1" className="form-label">Rank</label> */}
          <input
            type="text"
            className="form-control"
            placeholder="Mobile No (Parent)"
            name="mobileparent"
            value={inputs.mobileparent || ""}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Address
          </label>
          <textarea
            className="form-control"
           
            rows="3"
            name="address"
            value={inputs.address || ""}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="mb-3">
          {/* <label htmlfor="exampleFormControlInput1" className="form-label">Rank</label> */}
          <input
            type="submit"
            
          />
        </div>
      </form>
      {/* <form onSubmit={handleSubmit}>
        
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Enter your rank:</label>

          <input
            type="text"
            name="rank"
            value={inputs.rank || ""}
            onChange={handleChange}
          />
        </div>

        <br />
        <br />
        <label>
          Enter hostelname:
          <input
            type="textpassword"
            name="hostelname"
            value={inputs.hostelname || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <br />
        <input type="submit" />
      </form> */}
    </div>
  );
}
export default Login;
