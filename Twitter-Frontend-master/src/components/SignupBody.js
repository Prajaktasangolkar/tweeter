// import React, { useEffect, useState, useContext } from "react";
// import { FcGoogle } from "react-icons/fc";
// import { Link, useNavigate } from "react-router-dom";
// import { BsTwitter } from "react-icons/bs";
// import { useToast } from "@chakra-ui/toast";
// import { urlContext } from "../index";

// function SignupBody() {
//   const [userName, setUserName] = useState("");
//   const [password, setPassword] = useState("");
//   const url = useContext(urlContext);

//   const toast = useToast();
//   const successToast = () => {
//     toast({
//       title: `Successfully registered, please login`,
//       position: "top",
//       isClosable: true,
//     });
//   };

//   const handleChangeUserName = (e) => {
//     setUserName(e.target.value.toLowerCase());
//   };

//   const handleChangePassword = (e) => {
//     setPassword(e.target.value);
//   };

//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const newPerson = {
//       username: userName,
//       password: password,
//     };

//     fetch(`${url}/signup`, {
//       method: "POST",
//       headers: {
//         "Content-type": "application/json",
//       },
//       body: JSON.stringify(newPerson),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.status === "ok") {
//           successToast();
//           setTimeout(() => {
//             navigate("/");
//           }, 600);
//         }
//       })
//       .then(setUserName(""))
//       .then(setPassword(""));
//   };

//   return (
//     <div className="container">
//       <div className="homeContainer">
//         <div className="homeContainer-logo">
//           <BsTwitter />
//         </div>
//         <br></br>
//         <div className="homeContainer-header">
//           <h2>Join Twitter today</h2>
//         </div>
//         <form
//           className="homeContainer-form"
//           action={`${url}/signup`}
//           method="post"
//           onSubmit={handleSubmit}
//         >
//           <input
//             required
//             className="homeContainer-input"
//             type="text"
//             placeholder="Enter Username"
//             value={userName}
//             onChange={handleChangeUserName}
//           ></input>
//           <br></br>
//           <input
//             required
//             className="homeContainer-input"
//             type="password"
//             placeholder="Enter Password"
//             value={password}
//             onChange={handleChangePassword}
//           ></input>
//           <br></br>
//           <button className="homeContainer-btn" type="submit">
//             Sign up
//           </button>
//         </form>
//         <div className="homeContainer-signup">
//           Already have an account? <Link to="/">Sign in</Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SignupBody;
import React, { useEffect, useState, useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { BsTwitter } from "react-icons/bs";
import { useToast } from "@chakra-ui/toast";
import { urlContext } from "../index";

function SignupBody() {
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [location, setLocation] = useState("");
  const [dob, setDob] = useState('');
  
  const url = useContext(urlContext);

  const toast = useToast();
  const successToast = () => {
    toast({
      title: `Successfully registered, please login`,
      position: "top",
      isClosable: true,
    });
  };

  const handleChangeFullName = (e) => {
    setFullName(e.target.value);
  };

  const handleChangeUserName = (e) => {
    setUserName(e.target.value.toLowerCase());
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };



  const handleChangeLocation = (e) => {
    setLocation(e.target.value);
  };
  const handleChangeDob = (e) => {
    console.log(e.target.value);
    setDob(e.target.value);
    console.log(dob);
  };
  useEffect(() => {
    console.log(dob); // Log the updated dob state
  }, [dob]);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPerson = {
      fullName: fullName,
      username: userName,
      email: email,
      password: password,
      profilePicture: profilePicture,
      location: location,
      dob:dob
    };

    fetch(`${url}/signup`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newPerson),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "ok") {
          successToast();
          setTimeout(() => {
            navigate("/");
          }, 600);
        }
      })
      .then(() => {
        // Clear the form fields after submission
        setFullName("");
        setUserName("");
        setEmail("");
        setPassword("");
        setProfilePicture("");
        setLocation("");
      });
  };

  return (
    
    <div className="container">
    <div className="homeContainer">
      <div className="homeContainer-logo">
        <BsTwitter />
      </div>
      <br></br>
      <div className="homeContainer-header">
        <h2>Join Twitter today</h2>
      </div>
      <form
        className="homeContainer-form"
        action={`${url}/signup`}
        method="post"
        onSubmit={handleSubmit}
      >
        <input
          required
          className="homeContainer-input"
          type="text"
          placeholder="Enter Full Name"
          value={fullName}
          onChange={handleChangeFullName}
        ></input>
        <br></br>
        <input
          required
          className="homeContainer-input"
          type="text"
          placeholder="Enter Username"
          value={userName}
          onChange={handleChangeUserName}
        ></input>
        <br></br>
        <input
          required
          className="homeContainer-input"
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={handleChangeEmail}
        ></input>
        <br></br>
        <input
          required
          className="homeContainer-input"
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={handleChangePassword}
        ></input>
        <br></br>
       
        <br></br>
        <input
          className="homeContainer-input"
          type="text"
          placeholder="Enter Location"
          value={location}
          onChange={handleChangeLocation}
        ></input>
        <br></br>
        <input
          className="homeContainer-input"
          type="date"
          placeholder="Enter Date of Birth"
          value={dob}
          onChange={handleChangeDob}
        ></input>
        <br></br>
        <button className="homeContainer-btn" type="submit">
          Sign up
        </button>
      </form>
      <div className="homeContainer-signup">
        Already have an account? <Link to="/">Sign in</Link>
      </div>
    </div>
  </div>
  );
}

export default SignupBody;
