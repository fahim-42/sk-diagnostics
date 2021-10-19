// import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Services from './Pages/Home/Services/Services';
import Feedback from './Pages/Home/Feedback/Feedback';
import About from './Pages/Home/About/About';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Booking from './Pages/Booking/Booking';
import Contact from './Pages/Contact/Contact';
import Tips from './Pages/Tips/Tips';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>

            <Route path="/services">
              <Services></Services>
            </Route>

            <Route path="/feedback">
              <Feedback></Feedback>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>

            <PrivateRoute path="/booking/:testId">
              <Booking></Booking>
            </PrivateRoute>

            <PrivateRoute path="/contact">
              <Contact></Contact>
            </PrivateRoute>

            <PrivateRoute path="/tips">
              <Tips></Tips>
            </PrivateRoute>

            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
