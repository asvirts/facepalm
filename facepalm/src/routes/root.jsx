import logo from "../assets/fp-logo.png";
import "../index.css";

function Root() {
  return (
    <div>
      <img src={logo} className="main-logo" alt="Facepalm logo" />
      <h1>Facepalm</h1>
    </div>
  );
}

export default Root;