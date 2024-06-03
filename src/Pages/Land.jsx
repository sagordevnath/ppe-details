import React from 'react'


export default function Land() {
  return (
    <>
      <div className="note-header pt-3">
        <div className="container-fluid">
          <div className="row border border-dark p-2">
            <div className="col-12">
              <div className="address">
                <h5 className="mb-1">RS Communications Limited</h5>
                <div className="row">
                  <div className="col-12">
                    <h5 className="mb-3">Property, plant and equipment <br /> As at 30 June 2023</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <table className='width table table-bordered'>
        <tr className='height-25'>
          <th className='border border-dark' rowSpan={4}>Asset ID Number</th>
          <th className='border border-dark' rowSpan={4}>Particulars</th>
          <th className='border border-dark' rowSpan={4}>Units</th>
          <th className='border border-dark' rowSpan={4}>Date of Purchase</th>
          <th className='border border-dark' rowSpan={4}>Methods</th>
          <th className='border border-dark' colSpan={4}>Costs</th>
          <th className='border border-dark' colSpan={5}>Accumulated depreciation and impairment</th>
          <th className='border border-dark' rowSpan={2}>W.D.V</th>
          <th className='border border-dark' rowSpan={2}>W.D.V</th>
          <th className='border border-dark' rowSpan={4}>Status</th>
        </tr>
        <tr>
          <td className='border border-dark'>Balance at</td>
          <td className='border border-dark'>Addition for</td>
          <td className='border border-dark'>Disposal/</td>
          <td className='border border-dark'>Total</td>
          <td className='border border-dark'>Rate</td>
          <td className='border border-dark'>Balance at</td>
          <td className='border border-dark'>Charged for</td>
          <td className='border border-dark' rowSpan={2}>Adjustment</td>
          <td className='border border-dark'>Total</td>
        </tr>
        <tr>
          <td className='border border-dark'>01-Jul-22</td>
          <td className='border border-dark'>the year</td>
          <td className='border border-dark'>Adjustment</td>
          <td className='border border-dark'>30 June 2023</td>
          <td className='border border-dark'></td>
          <td className='border border-dark'>01-Jul-22</td>
          <td className='border border-dark'>the year</td>
          <td className='border border-dark'>30 June 2023</td>
          <td className='border border-dark'>30 June 2023</td>
          <td className='border border-dark'>30 June 2022</td>
        </tr>
        <tr>
          <td className='border border-dark'>Taka</td>
          <td className='border border-dark'>Taka</td>
          <td className='border border-dark'>Taka</td>
          <td className='border border-dark'>Taka</td>
          <td className='border border-dark'></td>
          <td className='border border-dark'>Taka</td>
          <td className='border border-dark'>Taka</td>
          <td className='border border-dark'>Taka</td>
          <td className='border border-dark'>Taka</td>
          <td className='border border-dark'>Taka</td>
          <td className='border border-dark'>Taka</td>
        </tr>
        <tr>
          <td>1</td>
          <td>Land (freehold)</td>
          <td>0</td>
          <td></td>
          <td></td>
          <td></td>
          <td className="text-end"></td>
          <td className="text-end"></td>
          <td className="text-end"></td>
          <td></td>
          <td className="text-end"></td>
          <td className="text-end"></td>
          <td className="text-end"></td>
          <td className="text-end"></td>
          <td className="text-end"></td>
          <td className="text-end"></td>
          <td>


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
          <td>1</td>
          <td>Land (freehold)</td>
          <td>0</td>
          <td></td>
          <td></td>
          <td> <input
            className="input-group input-group-sm input"
            type="number"
          /></td>
          <td className="text-end"><input
            className="input-group input-group-sm input"
            type="number"
          /></td>
          <td className="text-end"><input
            className="input-group input-group-sm input"
            type="number"
          /></td>
          <td className="text-end"> 5,500,000</td>
          <td><input
            className="input-group input-group-sm input"
            type="number"
          /></td>
          <td className="text-end"><input
            className="input-group input-group-sm input"
            type="number"
          /></td>
          <td className="text-end"></td>
          <td className="text-end"><input
            className="input-group input-group-sm input"
            type="number"
          /></td>
          <td className="text-end"></td>
          <td className="text-end"> 5,500,000</td>
          <td className="text-end"> 500,000</td>
          <td>


            <select className="form-select" aria-label="Default select example">
              <option selected>Not Found</option>
              <option value="1">Active</option>
              <option value="2">Idle/Unused</option>
              <option value="3">Out of Order</option>
            </select>
          </td>
        </tr>


      </table>
            <button type="button" className="btn btn-primary flex justify-end">Add New items</button>
    </>


  )


}
