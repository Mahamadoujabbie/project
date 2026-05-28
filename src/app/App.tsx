import "./App.css";
import { MdExpandMore } from "react-icons/md";
import { useState } from "react";
import { MdOutlineExpandLess } from "react-icons/md";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="app-container">
      <div className="main-content">
        <main className="main">
          <nav className="nav">
            <ul className="logCode">
              <img className="code" src="/src/assets/codebyht.jpeg" alt="" />
              <li>CodeByHeart</li>
            </ul>
            <div className="nav-menu-trigger">
              more
              <button
                type="button"
                className="nav-toggle"
                aria-label="Toggle navigation menu"
                aria-expanded={isMenuOpen}
                onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
              >
                {isMenuOpen ? <MdOutlineExpandLess /> : <MdExpandMore />}
              </button>
              <div className={`nav-dropdown ${isMenuOpen ? "open" : ""}`}>
                <ul className="nav-list nav-list-mobile">
                  <li className="list-item">Home</li>
                  <li className="list-item">Patterns</li>
                  <li className="list-item">Features</li>
                  <li className="list-item">About</li>
                  <li className="list-item">How it works</li>
                  <li className="list-item">Contacts</li>
                </ul>
              </div>
            </div>
            <ul className="nav-list">
              <li className="list-item">Home</li>
              <li className="list-item">Patterns</li>
              <li className="list-item">Features</li>
              <li className="list-item">About</li>
              <li className="list-item">How it works</li>
              <li className="list-item">Contacts</li>
            </ul>
            <ul className="logs">
              <li className="logs">Login</li>
              <li id="get-start" className="logs">
                Get Started
              </li>
            </ul>
          </nav>
          <div className="main-heading">
            <h1>
              Centrilized Control <br /> for
              <span className="highlight"> Smarter Living</span>
            </h1>
            <h5 className="sub-heading">
              Experience the future of home automation <br /> with our
              cutting-edge platform.
            </h5>
            <li className="demo">Request a Demo</li>
          </div>
          <div className="main-content-2">
            <nav className="nav-2">
              <ul className="logCode">
                <img className="code" src="/src/assets/codebyht.jpeg" alt="" />

                <li>CodeByHeart</li>
              </ul>
              <ul className="nav-list-2">
                <li className="middle-items">items</li>
                <li className="middle-items">led</li>
                <li className="middle-items">Kapet</li>
              </ul>
              <ul className="logCode">
                <img className="code" src="/src/assets/pp.jpeg" alt="" />
                <li>maha</li>
              </ul>
            </nav>
            <div className="boxes">
              <ul className="box">
                <img className="img" src="/src/assets/graph.jpeg" alt="" />
              </ul>
              <ul id="box-2" className="box">
                <img className="img" src="/src/assets/house.jpeg" alt="" />
              </ul>
              <ul>
                <div className="box-3-4">
                  <li className="box-3">
                    <img
                      className="img-3"
                      src="/src/assets/sound.jpeg"
                      alt=""
                    />
                  </li>
                  <li className="box-3">
                    <img className="box-3" src="/src/assets/plus.jpeg" alt="" />
                  </li>
                </div>
                <div className="box-5">
                  <img
                    className="img-5"
                    src="/src/assets/profile.jpeg"
                    alt=""
                  />
                </div>
              </ul>
            </div>
          </div>
        </main>
        <footer></footer>
      </div>
    </div>
  );
}

export default App;
