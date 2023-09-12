import { useState, useEffect } from "react";
import { createClient } from "contentful";
import "./App.css";

const client = createClient({
  space: import.meta.env.VITE_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_KEY,
});

function App() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    client.getEntries().then((response) => {
      console.log(response);
    });
  }, []);

  return <div></div>;
}

export default App;
