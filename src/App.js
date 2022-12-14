import Views from "./Views";
import { HashRouter as Router } from "react-router-dom"

function App() {
  return (
    <Router basename="/">
      <Views />
    </Router>
  );
}

export default App;