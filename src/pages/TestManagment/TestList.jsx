import React from 'react'
import { Link } from 'react-router-dom';


  
function TestList() {
  return (
    <>
    <section className="content-header">
        <div className="container-fluid">
            <div className="row mb-2">
            <div className="col-sm-6">
                <h4>List of Test</h4>
            </div>
            </div>
        </div>
    </section>

<section className="content">
  <div className="container-fluid">
    <div className="card card-default">
      <div className="card-header">
        <div className="card-tools">
            <Link to='/admin/createTest'>
            <button type="button" className="btn btn-tool" data-card-widget="collapse" >
            Back to Create Test
            </button>
            </Link>

        </div>
      </div>

      <div className="card-body">
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label>Subject</label>
              <select className="form-control select2" style={{ width: "100%;" }}>
                <option selected="selected">Alabama</option>
                <option>Alaska</option>
                <option>California</option>
                <option>Delaware</option>
                <option>Tennessee</option>
                <option>Texas</option>
                <option>Washington</option>
              </select>
            </div>
            <div className="form-group">
              <label>Difficulty Level</label>
              <select className="form-control select2" style={{ width: "100%;" }}>
                <option selected="selected">Easy</option>
                <option>Medium</option>
                <option>Hard</option>
              </select>
            </div>
            
          </div>
          <div className="col-md-6">
          <div className="form-group">
              <label>Module</label>
              <select className="form-control select2"  style={{ width: "100%;" }}>
                <option selected="selected">Alabama</option>
                <option>Alaska</option>
                <option>California</option>
                <option>Delaware</option>
                <option>Tennessee</option>
                <option>Texas</option>
                <option>Washington</option>
              </select>
            </div>

          </div>
        </div>

        
      </div>
      
      <div className="card-footer">
        {/* Add buttons or actions here */}
      </div>
    </div>
  </div>
</section>

<div className="row">
  <div className="col-12">
    <div className="card">
      <div className="card-header">
        <h3 className="card-title text-primary" >List of Questions</h3>
      </div>
     
      <div className="card-body table-responsive p-0">
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
                <th>Test Id</th>
              <th className="t1">Questions</th>
              
              <th colspan='2' className="t2">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
            <td>1</td>
              <td>Question 1</td>
              
              <td><a href="/admin" class="text-success" >Edit</a></td>
              <td><a href="/" class="text-danger" >Delete</a></td>

            </tr>
            <tr>
            <td>2</td>
              <td>Question 1</td>
              
              <td><a href="/" class="text-success" >Edit</a></td>
              <td><a href="/" class="text-danger" >Delete</a></td>
            </tr>
            <tr>
            <td>3</td>
              <td>Question 1</td>
              
              <td><a href="/" class="text-success" >Edit</a></td>
              <td><a href="/" class="text-danger" >Delete</a></td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              
              
            </tr>
          </tfoot>
        </table>
      </div>
      {/* /.card-body */}
    </div>
  </div>
</div>


    </>

  )
}

export default TestList;