// index.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";



import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// App.js
import React from "react";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <MyNavbar />
      <main className="content"> 
        <h1>Welcome to the Online Art Store</h1>
        <p>Discover and buy beautiful artwork from talented artists.</p>
        <p>Explore</p>
      </main>
    </>
  );
};

export default App;