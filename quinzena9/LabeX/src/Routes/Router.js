import React from 'react'
import AdminHomePage from '../Pages/AdminHomePage';
import ApplicationFormPage from '../Pages/ApplicationFormPage';
import CreateTripPage from '../Pages/CreateTripPage';
import HomePage from '../Pages/HomePage';
import ListTripsPage from '../Pages/ListTripsPage';
import TripDetailsPage from '../Pages/TripDetailsPage';
import {BrowserRouter, Switch, Route} from "react-router-dom"
import LoginPage from '../Pages/LoginPage';
import error from "../img/error.png"
import styled from "styled-components"

const Frame = styled.img`
    border-radius: 10px;
    width: 40vw;
    height: 80vh;
`

const Router = () => {

    return (
        <BrowserRouter>
        <Switch>

          <Route exact path={"/"}> 
            <HomePage></HomePage>
          </Route> 
          
          <Route exact path={"/ListTrips"}> 
            <ListTripsPage></ListTripsPage>
          </Route>

          <Route exact path={"/ApplicationFormPage"}> 
            <ApplicationFormPage></ApplicationFormPage>
          </Route>

          <Route exact path={"/LoginPage"}> 
            <LoginPage></LoginPage>
          </Route>

          <Route exact path={"/AdminHomePage"}> 
            <AdminHomePage></AdminHomePage>
          </Route>

          <Route exact path={"/CreateTripPage"}> 
            <CreateTripPage></CreateTripPage>
          </Route>

          <Route exact path={"/TripDetailsPage"}> 
            <TripDetailsPage></TripDetailsPage>
          </Route>
          
          <Route> 
              <Frame src={error} alt="FOTO DE ERRO"/>
          </Route>  

        </Switch>
      </BrowserRouter>
    )
}

export default Router

