import React from 'react'
import './home.css';
import Topbar from  '../../components/Topbar/Topbar'
import Sidebar from '../../components/Sidebar/Sidebar';
import HomeBox from '../../components/homebox/Homebox';
import { useHistory } from 'react-router-dom';


export default function Home() {
  let history = useHistory();
  const account = window.location.search;
  if(!account){
    history.push("/home?account=100001");
  }

  return(
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <HomeBox />
      </div>
    </div>
    )
  }
