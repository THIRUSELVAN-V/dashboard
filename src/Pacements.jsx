import React from 'react';
import './Pacements.css';
import { GiTrophyCup } from "react-icons/gi";
function Pacements() {
  return (
    <div>
      <div className='h1'>Placement Profile</div>
      <div className='top'>
        <div className='pr2'>
          <div className='pinfo1'>
            <div className='prv1'><GiTrophyCup />Full-Stack Rank</div>
            <div className='prv2'></div>
          </div>
          <div className='pinfo1'>
            <div className='prv1'><GiTrophyCup />Placement Cumulative %</div>
            <div className='prv2'>7.33</div>
          </div>
          <div className='pinfo1'>
            <div className='prv1'><GiTrophyCup />Current Sem Placement FA %</div>
            <div className='prv2'>0</div>
          </div>
          <div className='pinfo1'>
            <div className='prv1'><GiTrophyCup />Eligibility</div>
            <div className='prv2'>Need Improvement</div>
          </div>
          <div className='pinfo1'>
            <div className='prv1'><GiTrophyCup />Next Level</div>
            <div className='prv2'>Attention to Attain Dream Offer</div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div className='ro2'>
            <div className='t1'>Placement Status</div>
            <div className='t1'>Training Assessment Status</div> 
          </div>
          <div className='bbox'>
            <div className='pinfo2'>
                <div className='prv1'><GiTrophyCup />Registered</div>
                <div className='prv2'>0</div>
            </div>
            <div className='pinfo2'>
                <div className='prv1'><GiTrophyCup />Attended</div>
                <div className='prv2'>0</div>
            </div>
            <div className='pinfo2'>
                <div className='prv1'><GiTrophyCup />Attendance %</div>
                <div className='prv2'>0</div>
            </div>
            <div className='pinfo2'>
                <div className='prv1'><GiTrophyCup />Attended</div>
                <div className='prv2'>54</div>
            </div>
            <div className='pinfo2'>
                <div className='prv1'><GiTrophyCup />Assessment %</div>
                <div className='prv2'>7.3</div>
            </div>
            <div className='pinfo2'>
                <div className='prv1'><GiTrophyCup />Attendance %</div>
                <div className='prv2'>100</div>
            </div>
          </div>
        </div>
        <div>
          <div className='er'>
              <div>Placement Status</div>
              <div>Training Assessment Status</div> 
          </div>
        </div>
      </div>
      {/* <div>
        <div className='ro2'>
          <div className='t1'>Placement Status</div>
          <div className='t1'>Training Assessment Status</div> 
        </div>
        <div className='pinfo2'>
            <div className='prv1'><GiTrophyCup />Registered</div>
            <div className='prv2'>0</div>
        </div>
        <div className='pinfo2'>
            <div className='prv1'><GiTrophyCup />Attended</div>
            <div className='prv2'>0</div>
        </div>
        <div className='pinfo2'>
            <div className='prv1'><GiTrophyCup />Attendance %</div>
            <div className='prv2'>0</div>
        </div>
        <div className='pinfo2'>
            <div className='prv1'><GiTrophyCup />Attended</div>
            <div className='prv2'>54</div>
        </div>
        <div className='pinfo2'>
            <div className='prv1'><GiTrophyCup />Assessment %</div>
            <div className='prv2'>7.3</div>
        </div>
        <div className='pinfo2'>
            <div className='prv1'><GiTrophyCup />Attendance %</div>
            <div className='prv2'>100</div>
        </div>
      </div> */}
    </div>
  )
}

export default Pacements