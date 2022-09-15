import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Wilder from "./components/Wilder";

// Array main methods examples
// wilders.map
// const longNamedWilders = wilders.filter((wilder) => wilder.name.length > 5);
// const longNamedWilder = wilders.find((wilder) => wilder.name.length > 5);
// wilders.reduce

function App() {
  // My API → give me my wilders!
  const [wilders, setWilders] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const result = await axios.get("http://localhost:5000/api/wilders");
      console.log(result.data);
      // result.data → wilders
      setWilders(result.data);
    };

    fetch();
  }, []);

  return (
    <div>
      <header>
        <div className="container">
          <h1>Wilders Book</h1>
        </div>
      </header>
      <main className="container">
        <h2>Wilders</h2>
        <section className="card-row">
          {wilders.map((wilder) => {
            return (
              <Wilder
                key={wilder.id}
                name={wilder.name}
                city={wilder.city}
                skills={wilder.skills}
              />
            );
          })}
        </section>
      </main>
      <footer>
        <div className="container">
          <p>&copy; 2022 Wild Code School</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
