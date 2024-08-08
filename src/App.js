import "./App.css";
import SampleButton from "./SampleButton";

function App() {
  return (
    <div className="App">
      <SampleButton userName={"ALL"} number={1} />
      <SampleButton userName={"Music"} />
      <SampleButton userName={"Drama"} />
      <SampleButton userName={"Sports"} />
      <SampleButton userName={"News"} />
      <SampleButton userName={"Bikes"} />
      <SampleButton userName={"Cars"} />
      <SampleButton userName={"Fav"} />

      
    </div>
  );
}

export default App;
