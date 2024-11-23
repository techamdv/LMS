import React from 'react'

function SiderBar() {
    return (
        <>
            {/* ======= Sidebar ======= */}
            <aside id="sidebar" className="sidebar">
                <ul className="sidebar-nav" id="sidebar-nav">
                    <li className="nav-item">
                        <a className="nav-link " href="index.html">
                            <i className="bi bi-grid" />
                            <span>Dashboard</span>
                        </a>
                    </li>
                    {/* End Dashboard Nav */}
                    <li className="nav-item">
                        <a
                            className="nav-link collapsed"
                            data-bs-target="#components-nav"
                            data-bs-toggle="collapse"
                            href="#"
                        >
                            <i className="bi bi-menu-button-wide" />
                            <span>Raw data</span>
                            {/* <i className="bi bi-chevron-down ms-auto" /> */}
                        </a>
                    </li>
                    {/* End Components Nav */}
                    <li className="nav-item">
                        <a
                            className="nav-link collapsed"
                            data-bs-target="#forms-nav"
                            data-bs-toggle="collapse"
                            href="#"
                        >
                            <i className="bi bi-journal-text" />
                            <span>Production Master</span>
                            <i className="bi bi-chevron-down ms-auto" />
                        </a>
                        <ul
                            id="forms-nav"
                            className="nav-content collapse "
                            data-bs-parent="#sidebar-nav"
                        >
                            <li>
                                <a href="forms-elements.html">
                                    <i className="bi bi-circle" />
                                    <span>Part master</span>
                                </a>
                            </li>
                            <li>
                                <a href="forms-layouts.html">
                                    <i className="bi bi-circle" />
                                    <span>Downtime entry</span>
                                </a>
                            </li>
                            <li>
                                <a href="forms-editors.html">
                                    <i className="bi bi-circle" />
                                    <span>Defective part entry</span>
                                </a>
                            </li>
                            <li>
                                <a href="forms-validation.html">
                                    <i className="bi bi-circle" />
                                    <span>Quality rejection</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    {/* End Forms Nav */}
                    <li className="nav-item">
                        <a
                            className="nav-link collapsed"
                            data-bs-target="#tables-nav"
                            data-bs-toggle="collapse"
                            href="#"
                        >
                            <i className="bi bi-layout-text-window-reverse" />
                            <span>Administrative</span>
                            <i className="bi bi-chevron-down ms-auto" />
                        </a>
                        <ul
                            id="tables-nav"
                            className="nav-content collapse "
                            data-bs-parent="#sidebar-nav"
                        >
                            <li>
                                <a href="tables-general.html">
                                    <i className="bi bi-circle" />
                                    <span>Plant master</span>
                                </a>
                            </li>
                            <li>
                                <a href="tables-data.html">
                                    <i className="bi bi-circle" />
                                    <span>Line master</span>
                                </a>
                            </li>
                            <li>
                                <a href="tables-data.html">
                                    <i className="bi bi-circle" />
                                    <span>Device status</span>
                                </a>
                            </li>
                            <li>
                                <a href="tables-data.html">
                                    <i className="bi bi-circle" />
                                    <span>Shift master</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    {/* End Tables Nav */}
                </ul>
            </aside>
            {/* End Sidebar*/}
        </>
    )
}

export default SiderBar