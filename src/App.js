import './App.css';

import { Route, Switch } from "react-router-dom";
import { Header } from "./Components/Header/Header-component";
import { Home } from "./Pages/Home/Home-component";
import { Stock } from "./Pages/Stock/Stock-component";
import Shop from "./Pages/Shop/Shop-component";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/stock" component={Stock} />
        <Route path="/shop" component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
