import logo from './logo.svg';
import './App.css';
import { BrowserRouter as  Router} from 'react-router-dom';
import WebRoutes from './components/webroutes.componentss';

function App() {
  return (
  <>
  <Router>

    <WebRoutes/>
  </Router>
  </>
  );
}

export default App;
