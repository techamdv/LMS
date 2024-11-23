import React from 'react'
import { Outlet } from 'react-router-dom'
import MachineDowntimeModalBody from './MachineDowntimeModalBody'
import DowntimeReasonModalBody from './DowntimeReasonModalBody'

function Modal({ flag }) {
    return (
        <>
            <div
                className="modal fade modal-lg"
                id="verticalycentered"
                tabIndex={-1}
                style={{ display: "none" }}
                aria-hidden="true"
            >
                {flag ? <DowntimeReasonModalBody /> : <MachineDowntimeModalBody />}

            </div>

        </>
    )
}

export default Modal