import './App.css';
import CartPage from './Page/CartPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { routes } from './Router/Route';


function App() {
  return (
    <div className="App">
      <div className="container">
        {/* <CartPage/> */}
      
          {routes}
        </div>
    </div>
      
  );
}

export default App;
