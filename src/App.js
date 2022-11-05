import Header from "../src/Components/Header";
import Todos from "./Components/Todos";

import "./index.css";
import "devextreme/dist/css/dx.light.css";
import Button from "devextreme-react/button";
import AppRouter from "./Router/AppRouter";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <AppRouter />
      </div>
    </>
  );
}

export default App;
