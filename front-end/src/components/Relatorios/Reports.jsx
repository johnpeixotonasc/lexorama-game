import React from 'react'
import './Reports.css'
import '../Style/Layout.css'
import SearchIcon from '@material-ui/icons/Search';
import VisibilityIcon from '@material-ui/icons/Visibility';

function reports() {
  return (
    <main className='reports'>
      <div className="reports-main container">
        <div className="reports-main-contents">

          <div className="reports-contents-title">
            <h3 className="contents-title">
              Relatórios-Pacientes
            </h3>
          </div>

          <table>
            <tbody>
              <tr className="reports-main-search">
                <td><i className="reports-search"> <SearchIcon /> </i></td>
              </tr>
              <tr>
                <td>Player@</td>
                <td><i className='reports-Visibility'><VisibilityIcon /></i> </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  )
}

export default reports