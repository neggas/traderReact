import './App.css';

import { Route, Switch } from "react-router-dom";
import { Header } from "./Components/Header/Header-component";
import { Home } from "./Pages/Home/Home-component";
import { Stock } from "./Pages/Stock/Stock-component";
import { Shop } from "./Pages/Shop/Shop-component";

import { Provider } from "react-redux"
import store from "./Redux/store"

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/stock" component={Stock} />
          <Route path="/shop" component={Shop} />
        </Switch>
      </div>
    </Provider>

  );
}

export default App;
