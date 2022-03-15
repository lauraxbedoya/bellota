import './App.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import AppRouter from './AppRouter';

const App = () => {
  return (
    <Router>
      <AppRouter />
    </Router>
  )
}

export default App
