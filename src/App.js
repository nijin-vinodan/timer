import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.scss';
import HomeScreen from './pages/home-screen/HomeScreen';
import AdminScreen from './pages/admin-screen/AdminScreen';
import firebase from 'firebase';

function App() {

  const config = {
    apiKey: "AIzaSyDMDhDp4TnINdX55wfeMXnEnWqbC30pQRs",
    authDomain: "timer-9a5b0.firebaseapp.com",
    databaseURL: "https://timer-9a5b0.firebaseio.com",
  };

  firebase.initializeApp(config);
  const db = firebase.database();

  return (
    <BrowserRouter>
      <Route path={"/"} exact render={(props) => <HomeScreen firebaseDB={db} {...props} />} />
      <Route path={"/adminVeeraraghavanCngAdmin"} exact render={(props) => <AdminScreen firebaseDB={db} {...props} />} />
    </BrowserRouter>
  );
}

export default App;
