import { useSearchParams } from "react-router-dom";


const ErrorPage = () => {

  const [params] = useSearchParams();

  const message = params.get("message");

  return (
    <div style={{ padding: 20 }}>
      <h2>Authentication Error</h2>
      <p>{message || "Unknown error"}</p>
    </div>
  );
}

export default ErrorPage;