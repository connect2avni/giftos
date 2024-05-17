import logo from './logo.svg';
import './App.css';
import { BrowserRouter as  Router} from 'react-router-dom';
import WebRoutes from './components/webroutes.componentss';
import CartApp from './cart/CartApp';

function App() {
  return (
  <>
  <Router>

    <WebRoutes/>
    <CartApp/>
  </Router>
  </>
  );
}

export default App;
