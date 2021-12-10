import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import './style/main.scss';
import { Header } from './Components/Header';
import { Main } from './Components/Main';
import { useSelector } from "react-redux"



function App() {
  const { citySelect } = useSelector(state => state.history)

  return (
    <>
      <Switch>
        <Redirect exact from="/" to={`/${citySelect}`} />
        <Route path={`/:cityPath`}>
          <Header />
          <Main />
        </Route>
      </Switch>
    </>
  );
}

export default App;
