import Header from "../Header/Header";
import './Complaint.css';
function Complaint() {
    function register(e){
        e.preventDefault();
        alert('Complaint Register');
    }
  return (
    <>
      <Header />
      <div class="container-fluid mt-2" id="complaint1">
        <div class="container">
          <h1>Complaint</h1>
          <div class="row">
            <div class="col-lg-5 col-sm-12 col-12">
            <form onSubmit={register}>
              <div class="form-group">
                <label>Issue</label>
                <input type="text" class="form-control" placeholder="Issue" />
              </div>
              <div class="form-group">
                <label>Issue Urgency</label>
                <input type="text" class="form-control" placeholder="Issue Urgency" />
              </div>
              <div class="form-group">
                <label>Issue Description</label>
                <textarea class="form-control "type="text"  rows="4"  placeholder="Issue Description"/>
              </div>
              <div class="form-group">
             <button class="btn">Register Complaint</button>
              </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Complaint;
