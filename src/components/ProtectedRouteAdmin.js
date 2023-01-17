import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ Component }) {
  
  const { loggedInUser } = useContext(AuthContext);

  if (loggedInUser && loggedInUser.user.role === "ADMIN"){
    return <Component />
  } 

  if (!loggedInUser || loggedInUser.user.role === "USER") {
    return <Navigate to="/login" />
  }
}

export default ProtectedRoute;