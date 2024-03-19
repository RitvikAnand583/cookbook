import { useEffect } from "react";
import { useNavigate } from "react-router";

const isAuthenticated = true;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!isAuthenticated) navigate("/login");
    },
    [navigate]
  );

  //future purposes
  //   if (isLoading) return <div>Loading</div>;

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
