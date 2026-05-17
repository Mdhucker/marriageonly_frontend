import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

function AuthSuccess() {

  const [params] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {

    const app = params.get("app");

    const access = params.get("access");

    const refresh = params.get("refresh");

    console.log("APP:", app);
    console.log("ACCESS:", access);
    console.log("REFRESH:", refresh);

    if (!access || !refresh) {
      navigate("/MembershipForm", { replace: true });
      return;
    }

    localStorage.setItem("app", app || "");

    localStorage.setItem("access", access);

    localStorage.setItem("refresh", refresh);

    navigate("/MembershipForm", { replace: true });

  }, [params, navigate]);

  return (
    <div>
      Signing in...
    </div>
  );
}

export default AuthSuccess;