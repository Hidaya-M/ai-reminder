import "./index.css";
import Lottie from "react-lottie";
import animationData from "./lotties/yuLAtsW2xa.json";
function App() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="body">
      <div className="App">
        <header>
          <nav className="navbar">
            <div className="logo" style={{ display: "flex" }}>
              <a href="#">
                <img
                  src="/src/assets/img/—Pngtree—two medicine blue capsules_5749000.png"
                  alt=""
                  style={{ width: "30px" }}
                />
              </a>
              <a>Aiminder</a>
            </div>

            <ul className="menu">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Reminder</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Settings</a>
              </li>
            </ul>
            <div className="buttons">
              <input type="button" defaultValue="Login" />
              <input type="button" defaultValue="Register" />
            </div>
          </nav>
          <div className="mo" style={{ display: "flex" }}>
            <div className="text-content">
              <h2>
                Welcome Sweetie,
                <br />
                to the Future of Medicine Management
              </h2>
              <p>
                Say goodbye to missed doses and confusion – our intelligent AI
                assistance ensures you never forget a dose again.
              </p>
            </div>
            <div  className="mp" style={{ marginLeft: "150px" }}>
              <Lottie   options={defaultOptions} height={400} width={400} />
            </div>
          </div>
          <div className="play-button">
            <span style={{ cursor: "pointer" }} className="play">
              Start Now
            </span>
            <i className="fas fa-play" />
          </div>
        </header>
      </div>
    </div>
  );
}

export default App;
