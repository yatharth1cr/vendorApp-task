import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loginGoogle, fetchUser } from "../api";

export default function LoginPage() {
  const navigate = useNavigate();

  useEffect(() => {
    fetchUser().then((res) => res.data && navigate("/dashboard"));
  }, [navigate]);

  return <button onClick={loginGoogle}>Login with Google</button>;
}
