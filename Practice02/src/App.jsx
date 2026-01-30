import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Tailwind CSS
      </h1>
      <Card username="Kiran" btntxt="View Profile" />
      <Card username="Chaudhary" />
    </>
  );
}

export default App;
