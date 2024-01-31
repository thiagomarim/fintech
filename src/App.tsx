import "./Style.css";
import Header from "./components/Header";
import Sidenav from "./components/Sidenav";
import Resumo from "./pages/Resumo";

function App() {
  return (
    <div>
      <Sidenav />
      <main>
        <Resumo />
        <Header />
      </main>
    </div>
  );
}

export default App;
