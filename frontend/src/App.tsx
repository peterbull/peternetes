import { useEffect, useRef, useState } from "react";
import "./App.css";

const APP_ADDR = import.meta.env.PROD ? "" : "http://localhost:3000";

function App() {
  const [reqInfo, setReqInfo] = useState("");
  // const canvasRef = useRef<HTMLCanvasElement>(null);
  // const animRef = useRef<number>(0);
  // const lastSecondRef = useRef(-1);
  //
  // const draw = () => {
  //   const time = new Date();
  //   const currentSecond = time.getSeconds();
  //   console.log("seconds", currentSecond, lastSecondRef.current);
  //
  //   if (currentSecond === lastSecondRef.current) {
  //     animRef.current = requestAnimationFrame(draw);
  //     return;
  //   }
  //
  //   console.log("current second", currentSecond);
  //   lastSecondRef.current = currentSecond;
  //   console.log("animation frame requested", lastSecondRef.current);
  //
  //   const canvas = canvasRef.current;
  //   if (canvas) {
  //     const ctx = canvas.getContext("2d");
  //     if (ctx) {
  //       console.log("ctx found", ctx);
  //       ctx.clearRect(0, 0, 300, 300);
  //       ctx.save();
  //       ctx.translate(25, 25);
  //       ctx.rotate(currentSecond);
  //       ctx.fillStyle = "rgb(0 0 200 / 50%)";
  //       ctx.fillRect(-150, -150, 50, 50);
  //       ctx.restore();
  //     }
  //   }
  //
  //   animRef.current = requestAnimationFrame(draw);
  // };
  //
  // useEffect(() => {
  //   animRef.current = requestAnimationFrame(draw);
  //   return () => {
  //     if (animRef.current) {
  //       cancelAnimationFrame(animRef.current);
  //     }
  //   };
  // }, []);
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
      {/* <canvas ref={canvasRef} width={300} height={300}></canvas> */}
    </>
  );
}

export default App;
