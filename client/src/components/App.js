import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss'

import React, { Component } from 'react'

import { Switch, Route, Redirect } from 'react-router-dom'

import AuthServices from './../service/auth.service'
import BookList from './pages/Book/Book-list/Books-list'
import BookDetails from './pages/Book/Book-details/Book-details'
import BookForm from './pages/Book/Book-form/Book-form'
import BookEditForm from './pages/Book/Book-edit-form/Book-edit-form'
import ChapterDetails from './pages/Chapter/Chapter-details/Chapter-details'
import ChapterForm from './pages/Chapter/Chapter-form/Chapter-form'
import ChapterEditForm from './pages/Chapter/Chapter-edit-form/Chapter-edit-form'
import Signup from './pages/User/Signup/Signup'
import Login from './pages/User/Login/Login'
import Profile from './pages/User/Profile/Profile'
import ProfileDetails from './pages/User/Profile/Edit-profiles'
import UserDetails from './pages/User/Profile/User-details'
import Events from './pages/Events/Event-list/Events'
import EventDetails from './pages/Events/Event-details/Event-details'
import EventsForm from './pages/Events/Event-list/Events-form'
import EventEditForm from './pages/Events/Event-edit-form/Event-edit-form'
import Navbar from './layout/navbar/Navbar'
import Home from './pages/Home/Home'
import Footer from './layout/footer/Footer'


class App extends Component {

  constructor() {
    super()
    this.state = {

      loggedInUser: undefined

    }

    this.authServices = new AuthServices()

  }

  componentDidMount = () => {

    this.authServices
      .isLoggedIn()
      .then(response => this.setTheUser(response.data))
      .catch(err => this.setTheUser(undefined))
  }


  setTheUser = user => this.setState({ loggedInUser: user })


  render() {

    return (
      <>


        <Navbar storeUser={this.setTheUser} loggedUser={this.state.loggedInUser} />

        <main>
          <Switch>
            <Route path="/" exact render={() => <Home loggedUser={this.state.loggedInUser}/>} />
            <Route path="/registro" render={props => <Signup storeUser={this.setTheUser} {...props} />} />
            <Route path="/acceso-usuario" render={props => <Login storeUser={this.setTheUser} {...props} />} />
            <Route path="/perfil" render={() => this.state.loggedInUser ? <Profile loggedUser={this.state.loggedInUser} /> : <Redirect to="/acceso-usuario" />} />
            <Route path="/editar-perfil/:user_id" render={props => this.state.loggedInUser ? <ProfileDetails {...props} loggedUser={this.state.loggedInUser} /> : <Redirect to="/acceso-usuario" />} />
            <Route path="/eventos" exact render={() => <Events loggedUser={this.state.loggedInUser} />} />
            <Route path="/eventos/nuevo-evento" render={props => this.state.loggedInUser ? <EventsForm {...props} loggedUser={this.state.loggedInUser} /> : <Redirect to="/acceso-usuario" />} />
            <Route path="/eventos/editar-evento/:event_id" render={props => this.state.loggedInUser ? <EventEditForm {...props} loggedUser={this.state.loggedInUser} /> : <Redirect to="/acceso-usuario" />} />
            <Route path="/eventos/:event_id" render={props => <EventDetails {...props} loggedUser={this.state.loggedInUser} />} />
            <Route path="/libros" exact render={() => <BookList loggedUser={this.state.loggedInUser} />} />
            <Route path="/libros/crear" render={props => this.state.loggedInUser ? <BookForm {...props} loggedUser={this.state.loggedInUser} /> : <Redirect to="/acceso-usuario" />} />
            <Route path="/libros/editar/:book_id" exact render={props => this.state.loggedInUser ? <BookEditForm {...props} loggedUser={this.state.loggedInUser} /> : <Redirect to="/acceso-usuario" />} />
            <Route path="/libros/nuevo-capitulo/:book_id" render={props => this.state.loggedInUser ? <ChapterForm {...props} loggedUser={this.state.loggedInUser} /> : <Redirect to="/acceso-usuario" />} />
            <Route path="/libros/:book_id" render={props => <BookDetails {...props} loggedUser={this.state.loggedInUser} />} />         
            <Route path="/capitulo/editar/:capitulo_id" exact render={props => this.state.loggedInUser ? <ChapterEditForm {...props} loggedUser={this.state.loggedInUser} /> : <Redirect to="/acceso-usuario" />} />
            <Route path="/capitulo/:capitulo_id" render={props => <ChapterDetails {...props} loggedUser={this.state.loggedInUser} />} />
            <Route path="/usuario/:user_id" render={props => <UserDetails {...props} loggedUser={this.state.loggedInUser} />} />
          </Switch>
        </main>
     
          <Footer />
     
      </>
    )
  }

}

export default App