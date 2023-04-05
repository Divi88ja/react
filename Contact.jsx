export default function Contact(){

    

    return<>
    <div>
     <div className="container id">
      <div className="row bg-light sd">
        <div className="col-10 offset-1">
          <div>
          <img src="logo192.png" className="ig rounded mx-auto d-block" height="100px" width="100px" />
          </div>
         <form name="myform" >

           First Name:<input type="text" placeholder="Enter Your First Name" name="first" className="form-control" />
           Middle Name:<input type="text" placeholder="Enter Your Middle Name" name="middle" className="form-control" />
           Last Name:<input type="text" className="form-control" name="last" placeholder="Enter Your Last Name" />
           ContactNumber:<input type="number" className="form-control" name="phone" placeholder="Enter Phone Number Here" />
          <button className="btn btn-danger mt-2" onClick={Validation1}>Submit</button>
          <button className="btn btn-success mt-2 ms-3">Save</button>

         </form>
        </div>
      </div>
     </div>
     </div>
    </>

var Validation1 = ()=>{
  var first = document.myform.first.value;

  if(first == "" && first == null){
    alert("First Name Required.....")
  }
}
}