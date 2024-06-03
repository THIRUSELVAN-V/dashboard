// StudentDashboard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './StudentDashboard.css';
import pro from './thiru.png';
import { FaPhone } from 'react-icons/fa';
import { FiClock, FiCalendar } from 'react-icons/fi';
import { TbLogout } from 'react-icons/tb';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const StudentDashboard = () => {
  const navigate = useNavigate();
  const navigateToPlacement = () => {
    navigate('/placement');
  };
  const Academics = () =>{
    navigate('/Academics');
  };
  const FA = () =>{
    navigate('/FA');
  }
  const Achivements = () =>{
    navigate('/Achivements');
  }
  const Results = () =>{
    navigate('/Results');
  }

  const chartData = {
    labels: ['Semester 1'],
    datasets: [
      {
        label: 'Semester Grade Point Average (SGPA)',
        data: [8.33],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: {},
    },
  };

  return (
    <div className="dashboard">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <div className='top'>
        <div>
          <div className="dashboard1">
            <div className="header1">
              <img src={pro} alt="Student Photo" className="student-photo" />
              <div className="det">
                <div>THIRUSELVAN V</div>
                <div>7376231CS335</div>
                <br />
                <div className="sem">SEMESTER - II</div>
                <div className="value1">CONTINUING</div>
                <br />
              </div>
            </div>
            <div>
              <div className="value2">
                B.E. COMPUTER SCIENCE AND ENGINEERING
              </div>
              <br />
              <div className="value2">Mentor: SELVAM S (CD56789) <FaPhone /></div>
              <br />
              <div className="value2">Special Lab: STUDENT SPECIAL GROUP | ARUN K</div>
              <br />
              <div className="value2">Boarding: Hostel: SAPPHIRE , Room No:237</div>
              <br />
              <div className="value2">Warden: Mr.VETTRI MAARAN <FaPhone /></div>
              <br />
            </div>
          </div>
        </div>
        <div>
          <div className="dashboard1">
            <div className="header1">
              <div>
                <div className="bh2">Attendance Overview</div> <br />
                <div className="box1">
                  <div className="header2">
                    <div className="clock"><FiClock size={34} color="white" /></div>
                    <div className="det2">
                      <div className="v1">Total Days</div>
                      <div className="v2">64</div>
                    </div>
                  </div>
                  <div className="header3">
                    <div className="calendar"><FiCalendar size={34} color="white" /></div>
                    <div className="det2">
                      <div className="v1">Present Days</div>
                      <div className="v2">58</div>
                    </div>
                  </div>
                </div>
                <br />
                <div className="box1">
                  <div className="header2">
                    <div className="clock"><i className="fa fa-briefcase"></i></div>
                    <div className="det2">
                      <div className="v1">On Duty</div>
                      <div className="v2">5</div>
                    </div>
                  </div>
                  <div className="header3">
                    <div className="leave"><TbLogout size={34} color="white" /></div>
                    <div className="det2">
                      <div className="v1">Leave</div>
                      <div className="v2">1</div>
                    </div>
                  </div>
                </div>
                <br />
                <div className="box1">
                  <div className="header2">
                    <div className="percent"><FiClock size={34} color="white" /></div>
                    <div className="det2">
                      <div className="v1">On Duty</div>
                      <div className="v2">5</div>
                    </div>
                  </div>
                  <div className="header3">
                    <div className="calendar"><FiClock size={34} color="white" /></div>
                    <div className="det2">
                      <div className="v1">Today ( FN | AN )</div>
                      <div className="v2">PR | -</div>
                    </div>
                  </div>
                </div>
                <br />
                <div className="box1">
                  <div className="header2">
                    <div className="percent"><FiClock size={34} color="white" /></div>
                    <div className="det2">
                      <div className="v1">Previous Day (Hostel)</div>
                      <div className="v2">AB</div>
                    </div>
                  </div>
                </div>
                <br />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="chart-container">
            <Bar data={chartData} options={chartOptions} />
          </div>
        </div>
      </div>
      <div className='r2'>
        <div className='info1'>
          <div className='rv1'>Placement FA %</div>
          <div className='rv2'>73.3</div>
        </div>
        <div className='info1'>
          <div className='rv1'>Formative Assessment (Academic %)</div>
          <div className='rv2'>69</div>
        </div>
        <div className='info1'>
          <div className='rv1'>Arrear Count</div>
          <div className='rv2'>0</div>
        </div>
        <div className='info1'>
          <div className='rv1'>Fees Due (₹)</div>
          <div className='rv2'>0</div>
        </div>
        <div className='info2'>
          <div className='rv3'>Placement Offers</div>
          <div className='x'>X</div>
          <div className='rv4'>Not Applicable!</div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
