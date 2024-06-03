import React from 'react'

export default function PPEDetails() {
  return (
    <>
        <div className="note-header pt-3">
        <div className="container-fluid">
            <div className="row p-2">
                <div className="col-12">
                    <div className="address">
                        <h5 className="mb-1">RS Communications Limited</h5>
                        <h5>Property, plant and equipment</h5>
                        <p className="mb-0">23/D/1, Free School Street, Box Culvert Road, Dhaka-1205, Bangladesh.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <table className='width table table-bordered fs-6'>
        <tr className='height-25'>
            <th className='border border-dark'>Asset id number</th>
            <th className='border border-dark'>Particulars</th>
            <th className='border border-dark'>Date of purchase</th>
            <th className='border border-dark'>Costs
                <p className='text-center border-top border-dark mb-0'>Balance at</p>
                <p className='text-center border-top border-dark mb-0'>01-July-19</p>
                <p className='text-center border-top border-dark mb-0'>Taka</p>
            </th>
        </tr>
        <tr className='height-25'>
            <th className='border border-dark'>1</th>
            <th className='border border-dark'>Land</th>
            <th className='border border-dark'></th>
            <th className='border border-dark'>500000</th>
        </tr>
        <br />
        <tr className='height-25'>
            <th className='border border-dark' colSpan={3}>Total Tk. As on 30 June 2020</th>
            <th className='border border-dark'>500000</th>
        </tr>
       
    </table>
        </>


  )


}
