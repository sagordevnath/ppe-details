import React from "react";
import MenuBar from "./MenuBar";
import { Helmet } from "react-helmet-async";


export default function PPE() {
  return (
    <>
    <Helmet>
      <title>PPE</title>
    </Helmet>
    <MenuBar />
      <div className="note-header pt-3">
        <div className="container-fluid">
          <div className="row border border-dark p-2">
            <div className="col-12">
              <div className="address">
                <h5 className="mb-1">RS Communications Limited</h5>
                <p className="mb-0">
                  23/D/1, Free School Street, Box Culvert Road, Dhaka-1205,
                  Bangladesh.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h5 className="mb-3">
                Property, plant and equipment <br /> As at 30 June 2023
              </h5>
            </div>
          </div>
        </div>
      </div>
      <table className="width table table-bordered ">
        <tr className="height-25">
          <th className="border border-dark border-2 fs-5" rowSpan={4}>
            SL
          </th>
          <th className="border border-dark border-2 fs-5" rowSpan={4}>
            Particulars
          </th>
          <th className="border border-dark border-2 fs-5" rowSpan={4}>
            Methods
          </th>
          <th className="border border-dark border-2 fs-5" colSpan={4}>
            Costs
          </th>
          <th className="border border-dark border-2 fs-5" colSpan={5}>
            Accumulated depreciation and impairment
          </th>
          <th className="border border-dark border-2 fs-5" rowSpan={2}>
            W.D.V
          </th>
          <th className="border border-dark border-2 fs-5" rowSpan={2}>
            W.D.V
          </th>
        </tr>
        <tr className="">
          <td className="border border-dark border-2 fw-bold">Balance at</td>
          <td className="border border-dark border-2 fw-bold">Addition for</td>
          <td className="border border-dark border-2 fw-bold">Disposal/</td>
          <td className="border border-dark border-2 fw-bold">Total</td>
          <td className="border border-dark border-2 fw-bold">Rate</td>
          <td className="border border-dark border-2 fw-bold">Balance at</td>
          <td className="border border-dark border-2 fw-bold">Charged for</td>
          <td className="border border-dark border-2 fw-bold" rowSpan={2}>
            Adjustment
          </td>
          <td className="border border-dark border-2 fw-bold">Total</td>
        </tr>
        <tr>
          <td className="border border-dark border-2 fw-bold">01-Jul-22</td>
          <td className="border border-dark border-2 fw-bold">the year</td>
          <td className="border border-dark border-2 fw-bold">Adjustment</td>
          <td className="border border-dark border-2 fw-bold">30 June 2023</td>
          <td className="border border-dark border-2 fw-bold"></td>
          <td className="border border-dark border-2 fw-bold">01-Jul-22</td>
          <td className="border border-dark border-2 fw-bold">the year</td>
          <td className="border border-dark border-2 fw-bold">30 June 2023</td>
          <td className="border border-dark border-2 fw-bold">30 June 2023</td>
          <td className="border border-dark border-2 fw-bold">30 June 2022</td>
        </tr>
        <tr>
          <td className="border border-dark border-2 fw-bold">Taka</td>
          <td className="border border-dark border-2 fw-bold">Taka</td>
          <td className="border border-dark border-2 fw-bold">Taka</td>
          <td className="border border-dark border-2 fw-bold">Taka</td>
          <td className="border border-dark border-2 fw-bold"></td>
          <td className="border border-dark border-2 fw-bold">Taka</td>
          <td className="border border-dark border-2 fw-bold">Taka</td>
          <td className="border border-dark border-2 fw-bold">Taka</td>
          <td className="border border-dark border-2 fw-bold">Taka</td>
          <td className="border border-dark border-2 fw-bold">Taka</td>
          <td className="border border-dark border-2 fw-bold">Taka</td>
        </tr>
      <br />
        <tr className="">
          <td className="border border-dark">1</td>
          <td className="text-left border border-dark">Land (freehold)</td>
          <td className="text-left border border-dark text-center">Reducing balance</td>
          <td className="text-end border border-dark"></td>
          <td className="text-end border border-dark"></td>
          <td className="text-end border border-dark"></td>
          <td className="text-end border border-dark"></td>
          <td className="border border-dark"></td>
          <td className="text-end border border-dark"></td>
          <td className="text-end border border-dark"></td>
          <td className="text-end border border-dark"></td>
          <td className="text-end border border-dark"></td>
          <td className="text-end border border-dark"></td>
          <td className="text-end border border-dark"></td>
        </tr>
        <tr className="">
          <td className="border border-dark">2</td>
          <td className="text-left border border-dark">Buildings</td>
          <td className="text-left border border-dark text-center">Straight line</td>
          <td className="text-end border border-dark"></td>
          <td className="text-end border border-dark"></td>
          <td className="text-end border border-dark"></td>
          <td className="text-end border border-dark"></td>
          <td className="border border-dark"></td>
          <td className="text-end border border-dark"></td>
          <td className="text-end border border-dark"></td>
          <td className="text-end border border-dark"></td>
          <td className="text-end border border-dark"></td>
          <td className="text-end border border-dark"></td>
          <td className="text-end border border-dark"></td>
        </tr>
        <tr className="">
          <td className="border border-dark">3</td>
          <td className="text-left border border-dark">Plant and Machenary</td>
          <td className="text-left border border-dark text-center">Straight line</td>
          <td className="text-end border border-dark"></td>
          <td className="text-end border border-dark"></td>
          <td className="text-end border border-dark"></td>
          <td className="text-end border border-dark"></td>
          <td className="border border-dark"></td>
          <td className="text-end border border-dark"></td>
          <td className="text-end border border-dark"></td>
          <td className="text-end border border-dark"></td>
          <td className="text-end border border-dark"></td>
          <td className="text-end border border-dark"></td>
          <td className="text-end border border-dark"></td>
        </tr>
        <tr className="">
          <td className="border border-dark">4</td>
          <td className="text-left border border-dark">Furniture and Fixture</td>
          <td className="text-left border border-dark text-center">Straight line</td>
          <td className="text-end border border-dark"></td>
          <td className="text-end border border-dark"></td>
          <td className="text-end border border-dark"></td>
          <td className="text-end border border-dark"></td>
          <td className="border border-dark"></td>
          <td className="text-end border border-dark"></td>
          <td className="text-end border border-dark"></td>
          <td className="text-end border border-dark"></td>
          <td className="text-end border border-dark"></td>
          <td className="text-end border border-dark"></td>
          <td className="text-end border border-dark"></td>
        </tr>
        <tr className="">
          <td className="border border-dark">5</td>
          <td className="text-left border border-dark">Office Equipment</td>
          <td className="text-left border border-dark text-center">Straight line</td>
          <td className="text-end border border-dark"></td>
          <td className="text-end border border-dark"></td>
          <td className="text-end border border-dark"></td>
          <td className="text-end border border-dark"></td>
          <td className="border border-dark"></td>
          <td className="text-end border border-dark"></td>
          <td className="text-end border border-dark"></td>
          <td className="text-end border border-dark"></td>
          <td className="text-end border border-dark"></td>
          <td className="text-end border border-dark"></td>
          <td className="text-end border border-dark"></td>
        </tr>
        <tr className="">
          <td className="border border-dark">6</td>
          <td className="text-left border border-dark">Electrical Equipment</td>
          <td className="text-left border border-dark text-center">Straight line</td>
          <td className="text-end border border-dark"></td>
          <td className="text-end border border-dark"></td>
          <td className="text-end border border-dark"></td>
          <td className="text-end border border-dark"></td>
          <td className="border border-dark"></td>
          <td className="text-end border border-dark"></td>
          <td className="text-end border border-dark"></td>
          <td className="text-end border border-dark"></td>
          <td className="text-end border border-dark"></td>
          <td className="text-end border border-dark"></td>
          <td className="text-end border border-dark"></td>
        </tr>
        <tr className="">
          <td className="border border-dark">7</td>
          <td className="text-left border border-dark">Automobiles</td>
          <td className="text-left border border-dark text-center">Straight line</td>
          <td className="text-end border border-dark"></td>
          <td className="text-end border border-dark"></td>
          <td className="text-end border border-dark"></td>
          <td className="text-end border border-dark"></td>
          <td className="border border-dark"></td>
          <td className="text-end border border-dark"></td>
          <td className="text-end border border-dark"></td>
          <td className="text-end border border-dark"></td>
          <td className="text-end border border-dark"></td>
          <td className="text-end border border-dark"></td>
          <td className="text-end border border-dark"></td>
        </tr>
        <tr className="">
          <td className="border border-dark">8</td>
          <td className="text-left border border-dark">Assets under construction (AUC)</td>
          <td className="text-left border border-dark text-center">Reducing balance</td>
          <td className="text-end border border-dark"></td>
          <td className="text-end border border-dark"></td>
          <td className="text-end border border-dark"></td>
          <td className="text-end border border-dark"></td>
          <td className="border border-dark"></td>
          <td className="text-end border border-dark"></td>
          <td className="text-end border border-dark"></td>
          <td className="text-end border border-dark"></td>
          <td className="text-end border border-dark"></td>
          <td className="text-end border border-dark"></td>
          <td className="text-end border border-dark"></td>
        </tr>
       
    <br />
        <tr className="border-btm-2 margin-bottom-30">
          <td colSpan={2} className="bold border border-dark border-3 fw-bold">
            {" "}
            At 30 June 2023
          </td>
          <td className="border border-dark border-3"></td>
          <td className="bold text-end border border-dark border-3"></td>
          <td className="bold text-end border border-dark border-3"></td>
          <td className="bold text-end border border-dark border-3"></td>
          <td className="bold text-end border border-dark border-3"></td>
          <td className="bold text-end border border-dark border-3"></td>
          <td className="bold text-end border border-dark border-3"></td>
          <td className="bold text-end border border-dark border-3"></td>
          <td className="bold text-end border border-dark border-3"></td>
          <td className="bold text-end border border-dark border-3"></td>
          <td className="bold text-end border border-dark border-3"></td>
          <td className="bold text-end border border-dark border-3"></td>
        </tr>
    <br />
        <tr className="border-btm-2  border border-dark border-3">
          <td colSpan={2} className="bold border border-dark border-3 fw-bold">
            {" "}
            At 30 June 2022
          </td>
          <td className="border border-dark border-3"></td>
          <td className="text-end border border-dark border-3"></td>
          <td className="text-end border border-dark border-3"></td>
          <td className="text-end border border-dark border-3"></td>
          <td className="bold text-end border border-dark border-3"></td>
          <td className="bold text-end border border-dark border-3"></td>
          <td className="text-end border border-dark border-3"></td>
          <td className="text-end border border-dark border-3"></td>
          <td className="text-end border border-dark border-3"></td>
          <td className="bold text-end border border-dark border-3"></td>
          <td className="bold text-end border border-dark border-3"></td>
          <td className="bold text-end border border-dark border-3"></td>
        </tr>
        <tr className="height-25 border-none"></tr>
      </table>
    </>
  );
}
