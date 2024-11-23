import React from 'react'

function DowntimeReasonModalBody() {
    return (
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Downtime Reason</h5>
                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    />
                </div>
                <div className="modal-body">
                    <div className="col-md-12">
                        <div className="form-floating mb-3">

                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label htmlFor="floatingInput">Others</label>

                        </div>
                    </div>
                    <button type="button" className="btn btn-primary">
                        Save
                    </button>
                </div>

                <table class="table table-bordered p-3">
                    <thead>
                        <tr>
                            <th scope="col">Reason</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>test1</td>
                            <td>Designer</td>
                            <td>28</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default DowntimeReasonModalBody