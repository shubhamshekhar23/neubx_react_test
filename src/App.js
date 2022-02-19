import React, { useState, useEffect } from "react";
// import PageRoutes from "./routes/PageRoutes";

function App() {
  let [message, setMessage] = useState({});
  const API_URL = "http://ec2-3-90-187-207.compute-1.amazonaws.com/api/greet";

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((result) => {
        setMessage(result);
      });
  });

  return <React.Fragment>{JSON.stringify(message)}</React.Fragment>;
}

export default App;
