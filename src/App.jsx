import "bootstrap/dist/css/bootstrap.min.css";
import PakClock from "./assets/components/PakClock";
import Description from "./assets/components/Description";
import Time from "./assets/components/Time";

function App() {
  return (
    <center>
      <PakClock />
      <Description />
      <Time />
    </center>
  );
}

export default App;
