import React from 'react'

export default function ElectricalEquipment() {
  return (
    <>
      <div className="note-header pt-3">
        <div className="container-fluid">
          <div className="row p-2">
            <div className="col-12">
              <div className="address border border-dark border-2 ">
                <h5 className="mb-1">RS Communications Limited</h5>
                <div className="row">
                  <div className="col-12">
                    <h5 className="mb-3">Electrical Equipment <br /> As at 30 June 2023</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <table className='width table table-bordered'>
        <tr className='height-25'>
          <th className='border border-dark border-2' rowSpan={4}>Asset ID Number</th>
          <th className='border border-dark border-2' rowSpan={4}>Particulars</th>
          <th className='border border-dark border-2' rowSpan={4}>Units</th>
          <th className='border border-dark border-2' rowSpan={4}>Date of Purchase</th>
          <th className='border border-dark border-2' rowSpan={4}>Methods</th>
          <th className='border border-dark border-2' colSpan={4}>Costs</th>
          <th className='border border-dark border-2' colSpan={5}>Accumulated depreciation and impairment</th>
          <th className='border border-dark border-2' rowSpan={2}>W.D.V</th>
          <th className='border border-dark border-2' rowSpan={2}>W.D.V</th>
          <th className='border border-dark border-2' rowSpan={4}>Status</th>
        </tr>
        <tr>
          <td className='border border-dark border-2 fw-bold'>Balance at</td>
          <td className='border border-dark border-2 fw-bold'>Addition for</td>
          <td className='border border-dark border-2 fw-bold'>Disposal/</td>
          <td className='border border-dark border-2 fw-bold'>Total</td>
          <td className='border border-dark border-2 fw-bold'>Rate</td>
          <td className='border border-dark border-2 fw-bold'>Balance at</td>
          <td className='border border-dark border-2 fw-bold'>Charged for</td>
          <td className='border border-dark border-2 fw-bold' rowSpan={2}>Adjustment</td>
          <td className='border border-dark border-2 fw-bold'>Total</td>
        </tr>
        <tr>
          <td className='border border-dark border-2 fw-bold'>01-Jul-22</td>
          <td className='border border-dark border-2 fw-bold'>the year</td>
          <td className='border border-dark border-2 fw-bold'>Adjustment</td>
          <td className='border border-dark border-2 fw-bold'>30 June 2023</td>
          <td className='border border-dark border-2 fw-bold'></td>
          <td className='border border-dark border-2 fw-bold'>01-Jul-22</td>
          <td className='border border-dark border-2 fw-bold'>the year</td>
          <td className='border border-dark border-2 fw-bold'>30 June 2023</td>
          <td className='border border-dark border-2 fw-bold'>30 June 2023</td>
          <td className='border border-dark border-2 fw-bold'>30 June 2022</td>
        </tr>
        <tr>
          <td className='border border-dark border-2 fw-bold'>Taka</td>
          <td className='border border-dark border-2 fw-bold'>Taka</td>
          <td className='border border-dark border-2 fw-bold'>Taka</td>
          <td className='border border-dark border-2 fw-bold'>Taka</td>
          <td className='border border-dark border-2 fw-bold'></td>
          <td className='border border-dark border-2 fw-bold'>Taka</td>
          <td className='border border-dark border-2 fw-bold'>Taka</td>
          <td className='border border-dark border-2 fw-bold'>Taka</td>
          <td className='border border-dark border-2 fw-bold'>Taka</td>
          <td className='border border-dark border-2 fw-bold'>Taka</td>
          <td className='border border-dark border-2 fw-bold'>Taka</td>
        </tr>
        <br />
        <tr>
          <td className='border border-dark border-2'></td>
          <td className='border border-dark border-2'>Electrical Equipment</td>
          <td className='border border-dark border-2'></td>
          <td className='border border-dark border-2'></td>
          <td className='border border-dark border-2'></td>
          <td className='border border-dark border-2'></td>
          <td className="border border-dark border-2"></td>
          <td className="border border-dark border-2"></td>
          <td className="border border-dark border-2"></td>
          <td className='border border-dark border-2'></td>
          <td className="border border-dark border-2"></td>
          <td className="border border-dark border-2"></td>
          <td className="border border-dark border-2"></td>
          <td className="border border-dark border-2"></td>
          <td className="border border-dark border-2"></td>
          <td className="border border-dark border-2"></td>
          <td className='border border-dark border-2'>
            <select className="form-select" aria-label="Default select example">
              <option selected>Not Found</option>
              <option value="1">Active</option>
              <option value="2">Idle/Unused</option>
              <option value="3">Out of Order</option>
            </select>
          </td>
        </tr>
        <br />
        <tr>
          <td className='border border-dark'>1</td>
          <td className='border border-dark'>
            <input className="input-group input-group-sm input" type="text" placeholder='electric' />
            </td>
          <td className='border border-dark'>
            <input className="input-group input-group-sm input" type="text" placeholder='unit' />
            </td>
          <td className='border border-dark'>
            <input className="input-group input-group-sm input" type="number" placeholder='date' />
            </td>
          <td className='border border-dark'>Straight line</td>
          <td className='border border-dark'> <input
            className="input-group input-group-sm input"
            type="number"
          /></td>
          <td className="border border-dark"><input
            className="input-group input-group-sm input"
            type="number"
          /></td>
          <td className="border border-dark"><input
            className="input-group input-group-sm input"
            type="number"
          /></td>
          <td className="border border-dark"></td>
          <td className='border border-dark'><input
            className="input-group input-group-sm input"
            type="number"
          /></td>
          <td className="border border-dark"><input
            className="input-group input-group-sm input"
            type="number"
          /></td>
          <td className="border border-dark"></td>
          <td className="border border-dark"><input
            className="input-group input-group-sm input"
            type="number"
          /></td>
          <td className="border border-dark"></td>
          <td className="border border-dark"></td>
          <td className="border border-dark"></td>
          <td className='border border-dark'>




            <select className="form-select" aria-label="Default select example">
              <option selected>Not Found</option>
              <option value="1">Active</option>
              <option value="2">Idle/Unused</option>
              <option value="3">Out of Order</option>
            </select>
          </td>
        </tr>




      </table>
      <button type="button" className="btn btn-secondary btn-sm">Add new items</button>
    </>
  )
}
