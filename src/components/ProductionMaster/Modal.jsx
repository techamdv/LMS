import React from 'react'

function Modal() {
    return (
        <>
            <div
                className="modal fade"
                id="verticalycentered"
                tabIndex={-1}
                style={{ display: "none" }}
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Vertically Centered</h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-floating mb-3">
                                        <select className="form-select" id="floatingSelect1" aria-label="Floating label select example">
                                            <option selected="">Plant name</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                        <label htmlFor="floatingSelect1">Plant name</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating mb-3">
                                        <select className="form-select" id="floatingSelect2" aria-label="Floating label select example">
                                            <option selected="">Line name</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                        <label htmlFor="floatingSelect2">Works with selects</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            <button type="button" className="btn btn-primary">
                                Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Modal