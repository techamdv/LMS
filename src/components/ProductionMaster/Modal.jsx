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
                                            <option selected="">Cylinder head</option>
                                        </select>
                                        <label htmlFor="floatingSelect2">Line name</label>
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