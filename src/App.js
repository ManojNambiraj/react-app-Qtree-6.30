import { useState } from "react";
import "./App.css";
// import SampleButton from "./SampleButton";

function App() {

  const [like, setLike] = useState(0);
  const [Dislike, setDislike] = useState(0);

  const handleLike = () => {
    setLike(like + 1)
  }

  const handleDislike = () => {
    setDislike(Dislike + 1)
  }

  return (
    <div className="App">

      <h1>{like}</h1><h3>{Dislike}</h3>

      <button onClick={handleLike}>Like👍</button>
      <button onClick={handleDislike}>Dislike👎</button>


      {/* <SampleButton userName={"ALL"} number={1} color={"red"} />
      <SampleButton userName={"Music"} color={"blue"} />
      <SampleButton userName={"Drama"} color={"green"} />
      <SampleButton userName={"Sports"} color={"yellow"} />
      <SampleButton userName={"News"} color={"crimson"} />
      <SampleButton userName={"Bikes"} color={"lavender"} />
      <SampleButton userName={"Cars"} color={"pista"} />
      <SampleButton userName={"Fav"} color={"aqua"} /> */}
    </div>
  );
}

export default App;


// Hooks -> useState