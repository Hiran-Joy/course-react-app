import React from 'react'

const InsertCourse = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
            <div className="col col-12 col-sn-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col col-12 col-sn-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <label htmlFor="" className="form-label">Course Name</label>
                        <input type="text" className="form-control" />

                    </div>
                    <div className="col col-12 col-sn-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        
                        <label htmlFor="" className="form-label">Duration</label>
                        <input type="text" className="form-control" />

                    </div>
                    <div className="col col-12 col-sn-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        
                        <label htmlFor="" className="form-label">Fee</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sn-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        
                        <label htmlFor="" className="form-label">Mode</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sn-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        
                        <label htmlFor="" className="form-label">Trainer</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sn-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button className="btn btn-warning">Submit</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default InsertCourse
