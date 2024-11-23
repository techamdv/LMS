import React from 'react'

function MachineDowntimeModalBody() {
    return (

        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Machine Downtime</h5>
                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    />
                </div>
                <div className="modal-body">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="form-floating mb-3">
                                <select className="form-select" id="floatingSelect1" aria-label="Floating label select example">
                                    <option selected="">Linamar</option>
                                </select>
                                <label htmlFor="floatingSelect1">Plant name</label>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-floating mb-3">
                                <select className="form-select" id="floatingSelect2" aria-label="Floating label select example">
                                    <option selected="">Cylinder head</option>
                                </select>
                                <label htmlFor="floatingSelect2">Line name</label>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-floating mb-3">
                                <select className="form-select" id="floatingSelect2" aria-label="Floating label select example">
                                    <option selected="">Machine-1</option>
                                </select>
                                <label htmlFor="floatingSelect2">Machine name</label>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-md-6">
                            <div className="form-floating mb-3">
                                <select className="form-select" id="floatingSelect1" aria-label="Floating label select example">
                                    <option selected="">Part-1</option>
                                </select>
                                <label htmlFor="floatingSelect1">Part name</label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-floating mb-3">
                                <select className="form-select" id="floatingSelect1" aria-label="Floating label select example">
                                    <option selected="">Employee-1</option>
                                </select>
                                <label htmlFor="floatingSelect1">Employee name</label>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-md-6">
                            <div className="form-floating mb-3">
                                <select className="form-select" id="floatingSelect1" aria-label="Floating label select example">
                                    <option selected="">Reason-1</option>
                                </select>
                                <label htmlFor="floatingSelect1">Downtime reason</label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-floating mb-3">

                                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                <label htmlFor="floatingInput">Others</label>

                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-md-6">
                            <div className="form-floating mb-3">
                                <input type="date" className="form-control" />
                                <label htmlFor="floatingInput">Start date</label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-floating mb-3">
                                <input type="date" className="form-control" />
                                <label htmlFor="floatingInput">End date</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal-footer">
                    {/* <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button> */}
                    <button type="button" className="btn btn-primary">
                        Save
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MachineDowntimeModalBody