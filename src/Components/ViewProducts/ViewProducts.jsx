import Header from "../Header/Header";
import './viewproduct.css';
function ViewProducts()
{
    function addtocard(){
        alert('Added to Cart');
    }
    return(
        <>
            <Header/>
            <div class="container-fluid" id="view1">
                <div class="container">
                    <div class="row mt-5">
                        <div class="col-lg-4">
                                <div class="pro1 border p-3">
                                    <h2>IS 1239</h2>
                                    <p><b>Description</b>: WATER,AIR & NON HAZARDOUS GAS & STEAM LINES</p>
                                    <select class="form-control">
                                        <option selected>Select Quantity</option>
                                        <option>10</option>
                                        <option>20</option>
                                        <option>30</option>
                                        <option>40</option>
                                     </select>
                                     <button class="btn mt-3" onClick={addtocard}>Add to Cart</button>
                                    </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="pro1 border p-3">
                                    <h2>IS 1239</h2>
                                    <p><b>Description</b>: WATER,AIR & NON HAZARDOUS GAS & STEAM LINES</p>
                                    <select class="form-control">
                                        <option selected>Select Quantity</option>
                                        <option>10</option>
                                        <option>20</option>
                                        <option>30</option>
                                        <option>40</option>
                                     </select>
                                     <button class="btn mt-3" onClick={addtocard}>Add to Cart</button>
                                    </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="pro1 border p-3">
                                    <h2>IS 1239</h2>
                                    <p><b>Description</b>: WATER,AIR & NON HAZARDOUS GAS & STEAM LINES</p>
                                    <select class="form-control">
                                        <option selected>Select Quantity</option>
                                        <option>10</option>
                                        <option>20</option>
                                        <option>30</option>
                                        <option>40</option>
                                     </select>
                                     <button class="btn mt-3" onClick={addtocard}>Add to Cart</button>
                                    </div>
                            </div>
                            
                        </div>
                        <div class="row mt-5">
                        <div class="col-lg-4">
                                <div class="pro1 border p-3">
                                    <h2>IS 1239</h2>
                                    <p><b>Description</b>: WATER,AIR & NON HAZARDOUS GAS & STEAM LINES</p>
                                    <select class="form-control">
                                        <option selected>Select Quantity</option>
                                        <option>10</option>
                                        <option>20</option>
                                        <option>30</option>
                                        <option>40</option>
                                     </select>
                                     <button class="btn mt-3" onClick={addtocard}>Add to Cart</button>
                                    </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="pro1 border p-3">
                                    <h2>IS 1239</h2>
                                    <p><b>Description</b>: WATER,AIR & NON HAZARDOUS GAS & STEAM LINES</p>
                                    <select class="form-control">
                                        <option selected>Select Quantity</option>
                                        <option>10</option>
                                        <option>20</option>
                                        <option>30</option>
                                        <option>40</option>
                                     </select>
                                     <button class="btn mt-3" onClick={addtocard}>Add to Cart</button>
                                    </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="pro1 border p-3">
                                    <h2>IS 1239</h2>
                                    <p><b>Description</b>: WATER,AIR & NON HAZARDOUS GAS & STEAM LINES</p>
                                    <select class="form-control">
                                        <option selected>Select Quantity</option>
                                        <option>10</option>
                                        <option>20</option>
                                        <option>30</option>
                                        <option>40</option>
                                     </select>
                                     <button class="btn mt-3" onClick={addtocard}>Add to Cart</button>
                                    </div>
                            </div>
                            
                        </div>
                    </div>
            </div>
        </>
    )
}

export default ViewProducts;