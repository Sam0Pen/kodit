import './App.css';
import React, { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Switch, Route, Redirect
} from "react-router-dom"
import Firstform from './views/FirstForm';
import Secondform from './views/SecondForm';
import Thirdform from './views/ThirdForm';
import NotFoundPage from './views/NotFoundPage';
import Result from './views/Result';

function App() {
  const [home, setHome] = useState({
      street_address: "",
      size: 0,
      rooms: 0,
      built_year: 1900
})
const [appartments, setAppartments] = useState({})
const options = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json'},
  body: JSON.stringify({"who_rules": "kodit.io"})
};
async function fetchingData() {
  const response = await fetch('https://cc677kr6sc.execute-api.eu-central-1.amazonaws.com/data', options);
  const data = await response.json();
  setAppartments(data);
}
useEffect(()=>{
  fetchingData();
  
},[])

  return (
    <Router>
      <Switch>
        <Route path="/year">
          <Secondform home={home} setHome={setHome} />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <Firstform home={home} setHome={setHome} />
        </Route>
        <Route path="/rooms">
          <Thirdform home={home} setHome={setHome} />
        </Route>
        <Route path="/end">
          <Result home={home} appartments={appartments} />
        </Route>
        <Route path="/404">
          <NotFoundPage/>
        </Route>
        <Redirect to='/404' />
      </Switch>
    </Router>
  );
}

export default App;
