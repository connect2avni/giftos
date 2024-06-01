import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import WebRoutes from './components/webroutes.components';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

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
