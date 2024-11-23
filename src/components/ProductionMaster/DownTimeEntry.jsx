import React, { useState } from 'react'

function downTimeEntry() {
  const [staticEntryData, setStaticEntryData] = useState(
    
      [
        {
          "PlantName": "Linamar",
          "Linename": "Cylinder Head",
          "Machine_Name": "OP-70",
          "Employee_Name": "v g",
          "Partno": "46337773-OP70",
          "Partname": "LCH-OP70",
          "Downtime_Reason": "Energy Loss",
          "Start_Time": "2024-08-22T11:17",
          "End_Time": "2024-08-22T11:20",
          "Others": "test",
          "Created_Date": "8/22/2024",
          "Edit": "<a href='javascript:...'>Edit</a>",
          "Remove": "<button class='remove-btn'>Remove</button>"
        },
        {
          "PlantName": "Linamar",
          "Linename": "Cylinder Head",
          "Machine_Name": "OP-70",
          "Employee_Name": "v g",
          "Partno": "46337773-OP70",
          "Partname": "LCH-OP70",
          "Downtime_Reason": "Die & Tool Loss",
          "Start_Time": "2024-08-22T11:00",
          "End_Time": "2024-08-22T00:13",
          "Others": "bds",
          "Created_Date": "8/22/2024",
          "Edit": "<a href='javascript:...'>Edit</a>",
          "Remove": "<button class='remove-btn'>Remove</button>"
        },
        {
          "PlantName": "Linamar",
          "Linename": "Cylinder Head",
          "Machine_Name": "OP-70",
          "Employee_Name": "v g",
          "Partno": "46337773-OP70",
          "Partname": "LCH-OP70",
          "Downtime_Reason": "Yield Loss",
          "Start_Time": "2024-08-22T11:00",
          "End_Time": "2024-08-22T11:08",
          "Others": "",
          "Created_Date": "8/22/2024",
          "Edit": "<a href='javascript:...'>Edit</a>",
          "Remove": "<button class='remove-btn'>Remove</button>"
        },
        {
          "PlantName": "Linamar",
          "Linename": "Cylinder Head",
          "Machine_Name": "OP-80",
          "Employee_Name": "t d",
          "Partno": "46337774-OP80",
          "Partname": "LCH-OP80",
          "Downtime_Reason": "Machine Fault",
          "Start_Time": "2024-08-22T10:30",
          "End_Time": "2024-08-22T10:50",
          "Others": "urgent",
          "Created_Date": "8/22/2024",
          "Edit": "<a href='javascript:...'>Edit</a>",
          "Remove": "<button class='remove-btn'>Remove</button>"
        },
        {
          "PlantName": "Linamar",
          "Linename": "Cylinder Head",
          "Machine_Name": "OP-90",
          "Employee_Name": "r p",
          "Partno": "46337775-OP90",
          "Partname": "LCH-OP90",
          "Downtime_Reason": "Material Shortage",
          "Start_Time": "2024-08-22T12:15",
          "End_Time": "2024-08-22T12:45",
          "Others": "test",
          "Created_Date": "8/22/2024",
          "Edit": "<a href='javascript:...'>Edit</a>",
          "Remove": "<button class='remove-btn'>Remove</button>"
        },
        {
          "PlantName": "Linamar",
          "Linename": "Cylinder Head",
          "Machine_Name": "OP-100",
          "Employee_Name": "j h",
          "Partno": "46337776-OP100",
          "Partname": "LCH-OP100",
          "Downtime_Reason": "Operator Error",
          "Start_Time": "2024-08-22T09:30",
          "End_Time": "2024-08-22T09:45",
          "Others": "testing",
          "Created_Date": "8/22/2024",
          "Edit": "<a href='javascript:...'>Edit</a>",
          "Remove": "<button class='remove-btn'>Remove</button>"
        },
        {
          "PlantName": "Linamar",
          "Linename": "Cylinder Head",
          "Machine_Name": "OP-110",
          "Employee_Name": "a j",
          "Partno": "46337777-OP110",
          "Partname": "LCH-OP110",
          "Downtime_Reason": "Maintenance",
          "Start_Time": "2024-08-22T13:05",
          "End_Time": "2024-08-22T13:15",
          "Others": "none",
          "Created_Date": "8/22/2024",
          "Edit": "<a href='javascript:...'>Edit</a>",
          "Remove": "<button class='remove-btn'>Remove</button>"
        }
      ]   
  )

  return (
    <>
        <main id="main" className="main">
      <div className="pagetitle">
        <h1>Down Time Entries</h1>
        {/* <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
            <li className="breadcrumb-item">Tables</li>
            <li className="breadcrumb-item active">Data</li>
          </ol>
        </nav> */}
      </div>

      <section className="section">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Datatables</h5>

                {/* Table with stripped rows */}
                <table className="table datatable">
                <thead>
    <tr>
      <th><b>Plant Name</b></th>
      <th><b>Line Name</b></th>
      <th><b>Machine Name</b></th>
      <th><b>Employee Name</b></th>
      <th><b>Part No</b></th>
      <th><b>Part Name</b></th>
      <th><b>Downtime Reason</b></th>
      <th><b>Start Time</b></th>
      <th><b>End Time</b></th>
      <th><b>Others</b></th>
      <th><b>Created Date</b></th>
      {/* <th><b>Edit</b></th>
      <th><b>Remove</b></th> */}
    </tr>
  </thead>
                  <tbody>
                    {
                      staticEntryData.map(data => {
                        return (
                          <tr key={data.Partno}> {/* Use a unique key like Partno for better performance */}
                            <td>{data.PlantName}</td>
                            <td>{data.Linename}</td>
                            <td>{data.Machine_Name}</td>
                            <td>{data.Employee_Name}</td>
                            <td>{data.Partno}</td>
                            <td>{data.Partname}</td>
                            <td>{data.Downtime_Reason}</td>
                            <td>{data.Start_Time}</td>
                            <td>{data.End_Time}</td>
                            <td>{data.Others}</td>
                            <td>{data.Created_Date}</td>
                            {/* <td dangerouslySetInnerHTML={{ __html: data.Edit }}></td> Handle HTML for the Edit link */}
                            {/* <td>{data.Remove}</td> Display the Remove button */}
                          </tr>
                        );
                      })
                    }
                                       
                    
                  </tbody>
                </table>
                {/* End Table with stripped rows */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    </>
 
  )
}

export default downTimeEntry