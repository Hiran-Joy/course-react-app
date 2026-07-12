import React, { useState } from 'react'
import axios from 'axios'

const InsertCourse = () => {

    const [input, changeInput] = useState({
        course: "",
        duration: "",
        fee: "",
        mode: "",
        trainer: ""
    })

    const inputHandler = (event) => {
        changeInput({
            ...input,
            [event.target.name]: event.target.value
        })
    }

    const submitData = () => {

        console.log(input) // Teacher's first debugging step

        axios.post(
            "https://host-demo-app.onrender.com/api/add-course",
            input
        )
        .then((response) => {
            console.log(response.data)
            alert(response.data.message || "Course Added Successfully")
        })
        .catch((error) => {
            console.log(error)
            alert("Failed to Add Course")
        })
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col col-12">
                        <div className="row g-3">

                            <div className="col-12">
                                <label className="form-label">Course Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="course"
                                    value={input.course}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-12">
                                <label className="form-label">Duration</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="duration"
                                    value={input.duration}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-12">
                                <label className="form-label">Fee</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="fee"
                                    value={input.fee}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-12">
                                <label className="form-label">Mode</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="mode"
                                    value={input.mode}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-12">
                                <label className="form-label">Trainer</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="trainer"
                                    value={input.trainer}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-12">
                                <button
                                    className="btn btn-warning"
                                    onClick={submitData}
                                >
                                    Submit
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InsertCourse