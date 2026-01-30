import logo from './logo.svg';
import './App.css';

let name ="Samira";

function App() {
  return (
    <>
    <nav>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </nav>
    <div className="container">
      <h1>Helllo {name}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nemo beatae architecto. Suscipit cupiditate nemo, odit explicabo quidem eveniet animi enim esse eos fuga, est quasi corrupti error corporis aperiam aspernatur ducimus nesciunt quaerat!</p>
    </div>
    </>
    // <div className="blank">Lovely</div>
  );
}

export default App;
