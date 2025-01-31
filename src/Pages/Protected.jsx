import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Protected({ Comp }) {
  const { isAuthenticated } = useAuth0();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuthenticated) {
      return navigate("/login");
    }
  }, [navigate, isAuthenticated]);
  return <Comp />;
}
export default Protected;