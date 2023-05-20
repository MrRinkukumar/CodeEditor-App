import "./App.css";
import AppRoute from "./AppRoute";
import { Footer, Navbar } from "./components";

function App() {
  return (
    <div>
      <Navbar />
      <AppRoute />
      <Footer />
    </div>
  );
}

export default App;
