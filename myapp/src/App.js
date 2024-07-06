// import logo from "./logo.svg";
import "./App.css";
import About from "./components/About";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <NavBar title="My First React App" aboutText="About" />
      <div className="container my-3">
        {/* <TextForm heading="Enter the text to analyze"/> */}
        <About/>
      </div>
    </>
  );
}

export default App;
