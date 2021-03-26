import Header from '../Header/Header'
import './Dashboad.css';
import { useHistory } from "react-router-dom";
function Dashboard(){
    let history = useHistory();
    function createNewOrder()
    {
        history.push("/Neworder");
    }
    function orderHistory()
    {
        history.push("/OrderHistory");
    }
    function Outstanding()
    {
        history.push("/Outstanding");
    }
    function logoutTrans()
    {
        var check = window.confirm('Are you sure you want to logout');
        if(check)
        history.push("/");
    }
    function Complaint()
    {
        history.push("/Complaint");
    }
    return(
        
        <>
        <Header/>
            <div class="container-fluid mt-5" id="section2">
        <div class="container">
            <h2>WELCOME TO <span>VISHAL PIPES LTD.</span></h2>
            <p>No wonder they are the soul of any constructions and industrial infrastructure! Think about aforesaid
                sectors; think of VISHAL PIPES LTD. where products (Brand 'VPL India') are epitomes of excellence in
                quality, corroborated by National & International Standards.</p>
            <div class="row mt-3">
                <div class="col-lg-6 col-6">
                    <a href="#Vishal" id="newOrder" onClick={createNewOrder}><div class="content rounded shadow d-flex align-items-center justify-content-center">
                        <h1>New Order</h1>
                        <div class="spinner-border text-danger ml-2" id="orderSpinner" role="status">
                            <span class="sr-only">Loading...</span>
                          </div>
                    </div></a>
                </div>
                <div class="col-lg-6 col-6">
                <a href="#Vishal" id="newOrder" onClick={orderHistory}>  <div class="content rounded shadow d-flex align-items-center justify-content-center">
                        <h1>Order History</h1> 
                        <div class="spinner-border text-danger ml-1" role="status">
                            <span class="sr-only">Loading...</span>
                          </div>
                    </div></a>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col-lg-6 col-6">
                <a href="#Vishal" id="newOrder" onClick={Outstanding}>  <div class="content rounded shadow d-flex align-items-center justify-content-center">
                        <h1>Outstanding</h1> 
                        <div class="spinner-border text-danger ml-1" role="status">
                            <span class="sr-only">Loading...</span>
                          </div>
                    </div></a>
                </div>
                <div class="col-lg-6 col-6">
                <a href="#Vishal" id="newOrder" onClick={Complaint}>  <div class="content rounded shadow d-flex align-items-center justify-content-center">
                        <h1>Complaint</h1> 
                        <div class="spinner-border text-danger ml-1" role="status">
                            <span class="sr-only">Loading...</span>
                          </div>
                    </div></a>
                </div>
            </div>
        </div>
    </div>
    <div class="container text-center mt-5" onClick={logoutTrans} id="logout">
      <button type="button" class="btn">Logout</button>
          </div>
        </>
    )
}
export default Dashboard;