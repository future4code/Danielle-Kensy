import './App.css';
import GlobalStyle from './globalStyle';
import AdminHomePage from './Pages/AdminHomePage';
import ApplicationFormPage from './Pages/ApplicationFormPage';
import CreateTripPage from './Pages/CreateTripPage';
import HomePage from './Pages/HomePage';
import ListTripsPage from './Pages/ListTripsPage';
import TripDetailsPage from './Pages/TripDetailsPage';

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <HomePage></HomePage>
    </div>
  );
}

export default App;
