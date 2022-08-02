import React from "react";
import Router from "./routes/Router";
import GlobalState from "./Global/GlobalState";

function App() {
  return (
    <GlobalState>
      <Router />
    </GlobalState>
  );
}

export default App;
