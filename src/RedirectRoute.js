// RedirectRoute.js
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const routeRedirects = {
  "dubai-visa": "/dubai-tourist-visa-for-indians",
  // add more if needed
};

const RedirectRoute = () => {
  const { routeName } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const redirectTo = routeRedirects[routeName];
    if (redirectTo) {
      navigate(redirectTo, { replace: true });
    } else {
      navigate("/not-found"); // fallback or 404
    }
  }, [routeName, navigate]);

  return null;
};

export default RedirectRoute;
