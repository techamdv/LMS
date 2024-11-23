import React from 'react'

function downTimeEntry() {
  return (
    <>
        <main id="main" className="main">
      <div className="pagetitle">
        <h1>Data Tables</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
            <li className="breadcrumb-item">Tables</li>
            <li className="breadcrumb-item active">Data</li>
          </ol>
        </nav>
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
                      <th>
                        <b>N</b>ame
                      </th>
                      <th>Ext.</th>
                      <th>City</th>
                      <th data-type="date" data-format="YYYY/DD/MM">Start Date</th>
                      <th>Completion</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Unity Pugh</td>
                      <td>9958</td>
                      <td>Curicó</td>
                      <td>2005/02/11</td>
                      <td>37%</td>
                    </tr>
                    <tr>
                      <td>Theodore Duran</td>
                      <td>8971</td>
                      <td>Dhanbad</td>
                      <td>1999/04/07</td>
                      <td>97%</td>
                    </tr>
                    <tr>
                      <td>Joshua Weiss</td>
                      <td>2289</td>
                      <td>Saint-Léonard</td>
                      <td>2010/15/01</td>
                      <td>52%</td>
                    </tr>
                    <tr>
                      <td>Kiona Lowery</td>
                      <td>5952</td>
                      <td>Inuvik</td>
                      <td>2002/17/12</td>
                      <td>72%</td>
                    </tr>
                    <tr>
                      <td>Nina Rush</td>
                      <td>7567</td>
                      <td>Bo‘lhe</td>
                      <td>2008/27/01</td>
                      <td>6%</td>
                    </tr>
                    <tr>
                      <td>Palmer Parker</td>
                      <td>2000</td>
                      <td>Stade</td>
                      <td>2012/24/07</td>
                      <td>58%</td>
                    </tr>
                    <tr>
                      <td>Vielka Olsen</td>
                      <td>3745</td>
                      <td>Vrasene</td>
                      <td>2016/08/01</td>
                      <td>70%</td>
                    </tr>
                    <tr>
                      <td>Meghan Cunningham</td>
                      <td>8604</td>
                      <td>Söke</td>
                      <td>2007/16/02</td>
                      <td>59%</td>
                    </tr>
                    <tr>
                      <td>Iola Shaw</td>
                      <td>6447</td>
                      <td>Albany</td>
                      <td>2014/05/03</td>
                      <td>88%</td>
                    </tr>
                    <tr>
                      <td>Imelda Cole</td>
                      <td>4564</td>
                      <td>Haasdonk</td>
                      <td>2007/16/11</td>
                      <td>79%</td>
                    </tr>
                    <tr>
                      <td>Jerry Beach</td>
                      <td>6801</td>
                      <td>Gattatico</td>
                      <td>1999/07/07</td>
                      <td>36%</td>
                    </tr>
                    <tr>
                      <td>Garrett Rocha</td>
                      <td>3938</td>
                      <td>Gavorrano</td>
                      <td>2000/06/08</td>
                      <td>71%</td>
                    </tr>
                    <tr>
                      <td>Derek Kerr</td>
                      <td>1724</td>
                      <td>Gualdo Cattaneo</td>
                      <td>2014/21/01</td>
                      <td>89%</td>
                    </tr>
                    <tr>
                      <td>Shad Hudson</td>
                      <td>5944</td>
                      <td>Salamanca</td>
                      <td>2014/10/12</td>
                      <td>98%</td>
                    </tr>
                    <tr>
                      <td>Daryl Ayers</td>
                      <td>8276</td>
                      <td>Barchi</td>
                      <td>2012/12/11</td>
                      <td>88%</td>
                    </tr>
                    <tr>
                      <td>Caleb Livingston</td>
                      <td>3094</td>
                      <td>Fatehpur</td>
                      <td>2014/13/02</td>
                      <td>8%</td>
                    </tr>
                    <tr>
                      <td>Sydney Meyer</td>
                      <td>4576</td>
                      <td>Neubrandenburg</td>
                      <td>2015/06/02</td>
                      <td>22%</td>
                    </tr>
                    <tr>
                      <td>Shellie Murphy</td>
                      <td>3845</td>
                      <td>Marlborough</td>
                      <td>2013/13/11</td>
                      <td>72%</td>
                    </tr>
                    <tr>
                      <td>Porter Nicholson</td>
                      <td>4539</td>
                      <td>Bismil</td>
                      <td>2012/22/10</td>
                      <td>23%</td>
                    </tr>
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