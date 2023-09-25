import React from 'react'
import { Link } from 'react-router-dom';

function EditTest() {
  return (
    <>
    <section className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h4>Edit Test</h4>
          </div>
        </div>
      </div>
    </section>

<section className="content">
  <div className="container-fluid">
    <div className="card card-default">
      <div className="card-header">
        <div className="card-tools">
        <Link to='/admin/testList'>
            <button type="button" className="btn btn-tool text-dark bg-success px-4" data-card-widget="collapse" >
            Back to Test List
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
              <label>Difficulty</label>
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

        <div className='row'>
          <div className='col'>
            <div className="form-group">
                  <label>Title</label>
                  <input type="text" className="form-control" placeholder="Enter test title" />
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

<section className="content">
  <div className="container-fluid">
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title text-primary" >List of Questions</h3>
            </div>
          
            <div className="card-body table-responsive p-0">
              <table className="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th className="t1">Questions</th>
                    <th className="t2">Select</th>
                    <th className="t2">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Question 1</td>
                    <td><input type="checkbox" name="select1" /></td>
                    <td><a href="/admin" class="text-danger" >Delete</a></td>
                  </tr>
                  <tr>
                    <td>Question 2</td>
                    <td><input type="checkbox" name="select2" /></td>
                    <td><a href="/" class="text-danger" >Delete</a></td>
                  </tr>
                  <tr>
                    <td>Question 3</td>
                    <td><input type="checkbox" name="select3" /></td>
                    <td><a href="/" class="text-danger" >Delete</a></td>
                  </tr>
                </tbody>
                <tfoot>
              
                  <tr>
                    
                    <td colspan="3" className='card-header '>
                    <div className="card-tools mt-4">
                      <button type="submit" class="btn btn-secondary folat-right px-4 ">Cancle</button>
                      <button type="submit btn2" class="btn btn-primary ml-4 mr-2 px-4">Update</button>
                      </div>
                    </td>
                  </tr>

                </tfoot>
              </table>
            </div>
            {/* /.card-body */}
          </div>
        </div>
      </div>
    </div>
</section>

    </>

  )
}

export default EditTest;