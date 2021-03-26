import { Switch, Route } from 'react-router-dom';
import Login from './Components/Login/Login'
import Dashboard from './Components/Dashboard/Dashboard';
import NewOrder from './Components/NewOrder/NewOrder';
import OrderHistory from './Components/OrderHistory/OrderHistory';
import Outstanding from './Components/Outstanding/Outstanding';
import Complaint from './Components/Complaint/Complaint';
function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/Dashboard" component={Dashboard} />
        <Route exact path="/NewOrder" component={NewOrder} />
        <Route exact path="/OrderHistory" component={OrderHistory} />
        <Route exact path="/Outstanding" component={Outstanding}/>
        <Route exact path="/Complaint" component={Complaint}/>
      </Switch>
    </>
  );
}

export default App;
