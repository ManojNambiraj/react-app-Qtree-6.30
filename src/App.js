// import { useState } from "react";
import "./App.css";
import GlobalRedux from "./pages/Global/GlobalRedux";
import GlobalState from "./pages/Global/GlobalState";
import RouterPages from "./pages/RouterPages";
import ShoppingCart from "./pages/ShoppingCart";
import UserApp from "./pages/UserApp";
// import SampleButton from "./SampleButton";

function App() {
  // const [like, setLike] = useState(0);

  // const handleLike = () => {
  //   setLike(like + 1);
  // };

  // const handleDislike = () => {
  //   setLike(like - 1);
  // };

  return (
    <div className="App">
      {/* <RouterPages /> */}

      {/* <ShoppingCart /> */}

      {/* <UserApp /> */}

      {/* <GlobalState /> */}

      <GlobalRedux />

      {/* <h1>{like}</h1>

      <button onClick={handleLike}>Like👍</button>
      <button onClick={handleDislike}>Dislike👎</button> */}

      {/* <SampleButton userName={"ALL"} color={"red"} />
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
