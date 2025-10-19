import { useEffect, useState } from "react";
import "./App.css";

const APP_ADDR = import.meta.env.PROD ? "" : "http://localhost:3000";

function App() {
  const [reqInfo, setReqInfo] = useState("");
  useEffect(() => {
    console.log("fetching");
    const fetchInfo = async () => {
      const res = await fetch(`${APP_ADDR}/api/info`);
      console.log("res", res);
      const data = await res.text();
      console.log("data", data);
      setReqInfo(data);
    };
    fetchInfo();
  }, []);
  return (
    <>
      <h1>Welcome to peternetes: {reqInfo}</h1>
    </>
  );
}

export default App;
