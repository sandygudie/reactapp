import logo from "./images/logo (2).svg";
import mockup from "./images/illustration-mockups.svg"

import './App.css';

function App() {

  return (
    <>

      <header>

        <img src={logo} alt="logo"/>
      </header>

      <main>

        <img src={mockup} alt="mockup" />
        <div className="content">
          <h2>Build the community your fans will love</h2>
          <p>There are also designs for the mobile view and active states for certain elements on the webpage. Those should be used 
            in the implementation of the design as well.</p>
            <button> Register</button>
        </div>
      </main>

     <footer>
     <i class="fab fa-facebook-f"></i>
     </footer>
     
    </>
  );
}

export default App;
