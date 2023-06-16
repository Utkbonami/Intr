import Title from "./components/Title";
// import Headers from "./examples/4-global-instance";
// import "./axios/global";

import authFetch from "./axios/interceptors";
import { useEffect } from "react";

function App() {
  const fetchData = async () => {
    try {
      const resp = await authFetch("/posts");
    } catch (error) {
      console.log("Error in Comp")
    }
  };

  useEffect(() => {
    fetchData();
  }, [])

  return (
     <main>
      <Title />
      <h3>Hi</h3>
    </main>
  );
}

export default App;
