import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
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
  const Profile = () =>{
    navigate('/');
  }

  return (
    <div className='dashboard'>
        <div className="header">
        <div>Dashboard</div>
        <div onClick={Profile}>Profile</div>
        <div onClick={navigateToPlacement}>Placements</div>
        <div onClick={Academics}>Academics</div>
        <div onClick={FA}>FA</div>
        <div onClick={Achivements}>Achievements</div>
        <div onClick={Results}>Results</div>
        <div>TV</div>
        </div>
    </div>
  );
}

export default Header;
