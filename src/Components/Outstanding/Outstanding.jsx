import Header from "../Header/Header";
import './outstanding.css';
import $ from 'jquery';
import { useHistory } from "react-router-dom";
function Outstanding() {
    let history = useHistory();
    $('#tableTr').click(function() {
        $('#staticBackdrop').modal('show');
    });
    function logoutTrans()
    {
        var check = window.confirm('Are you sure you want to logout');
        if(check)
        history.push("/");
    }
  return (
    <>
      <Header />
      <div class="container-fluid mt-3" id="outstanding1">
        <div class="container">
          <h1>Outstanding</h1>
          <div class="table-responsive">
          <table class="table mt-3 table-hover">
            <thead class="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Last Payment</th>
                <th scope="col">Current Outstanding</th>
                <th scope="col">Last Date</th>
              </tr>
            </thead>
            <tbody>
              <tr id="tableTr">
                <th scope="row">1</th>
                <td>IS 1239</td>
                <td>1000</td>
                <td>1000</td>
                <td>12/12/2021</td>
              </tr>
              <tr  id="tableTr">
                <th scope="row">2</th>
                <td>IS 1239</td>
                <td>1000</td>
                <td>1000</td>
                <td>12/12/2021</td>
              </tr>
              <tr  id="tableTr">
                <th scope="row">3</th>
                <td>IS 1239</td>
                <td>1000</td>
                <td>1000</td>
                <td>12/12/2021</td>
              </tr>
              <tr  id="tableTr">
                <th scope="row">4</th>
                <td>IS 1239</td>
                <td>1000</td>
                <td>1000</td>
                <td>12/12/2021</td>
              </tr>
              <tr  id="tableTr">
                <th scope="row">5</th>
                <td>IS 1239</td>
                <td>1000</td>
                <td>1000</td>
                <td>12/12/2021</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      </div>
      <div class="container text-center mt-5" onClick={logoutTrans} id="logout">
      <button type="button" class="btn">Logout</button>
          </div>
      <div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">Order History</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <h3>Order Name: IS 1239</h3>
                <h3>Last Payment: 2700</h3>
                <h3>Current Outstanding:1000</h3>
                <h3>Date: 08/12/2021</h3>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn" data-dismiss="modal">Close</button>
            </div>
            </div>
        </div>
        </div>
    </>
  );
}
export default Outstanding;
