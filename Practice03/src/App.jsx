import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen overflow-hidden"
      style={{ backgroundColor: color }}
    >
      <div className="fixed z-50 flex justify-center bottom-12 inset-x-0">
        <div className="flex gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <div className="fixed z-50 bottom-12 left-0 right-0 bg-yellow-300"></div>

          <button
            onClick={() => setColor("red")}
            className="px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            className="px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("blue")}
            className="px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
