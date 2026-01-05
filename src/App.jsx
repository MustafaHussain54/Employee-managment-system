import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./Utils/localStorage";
import { AuthContext } from "./context/AuthProvider";
const App = () => {
  // useEffect(()=>{
  //   // setLocalStorage()
  //   getLocalStorage()
  // })
  const [user, setUser] = useState(null);
  const handleLogin = (email, password) => {
    if (email == "admin@123" && password == "123") {
      setUser("Admin");
      
    } else if (email == "user@123" && password == "123") {
      setUser("Employee");
      
    } else {
      alert("Invalid cresentials");
    }
  };
const data = useContext(AuthContext)
console.log(data);

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user === "Admin" && <AdminDashboard />}
      {user === "Employee" && <EmployeeDashboard />}
      {/* {user == 'Employee' ? <EmployeeDashboard/> :<AdminDashboard/>} */}
    </>
  );
};

export default App;
