import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className='App'>
      <ToastContainer />
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path='/edit/:id'>
            <EditContact />
          </Route>
          <Route path='/add'>
            <AddContact />
          </Route>
          <Route path='/' exact component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
