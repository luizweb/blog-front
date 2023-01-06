import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ Component }) {
  const { loggedInUser } = useContext(AuthContext);

  if (loggedInUser) {
    return <Component />;
  } else {
    return <Navigate to="/login" />;
  }
}

export default ProtectedRoute;