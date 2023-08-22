// Style
import "./App.css";

// Components
import { Sidebar } from "./components";

// Pages
import { Home, About, Resume, Portfolio, Contact } from "./pages";

function App() {
  return (
    <>
      <Sidebar />
      <main className="main">
        <Home />
        <About />
        <Resume />
        <Portfolio />
        <Contact />
      </main>
    </>
  );
}

export default App;
