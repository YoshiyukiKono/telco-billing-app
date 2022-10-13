import "./featuredinfohome.css"
import { ArrowUpward } from '@material-ui/icons'
import axios from "axios"
import { useState,useEffect } from "react"
import BillingInfo from "../billInfo/BillingInfo"

import React from 'react'

export default function FeaturedInfoHome() {

  const [monthlyUsage,setmonthlyUsage] = useState(null)
  const [dailyUsage,setdailyUsage] = useState(null)
  

  const fetchMonthlyUsage = async () => {
    const account = window.location.search
    const results = await axios.get(`/.netlify/functions/getMonthlyData${account}`)
    console.log(results)
    if (results.data.length != 0) {
      setmonthlyUsage(Object.values(results)[0][0].datausage)
    }
  }

  const fetchDailyUsage = async () => {
    const account = window.location.search
    const results = await axios.get(`/.netlify/functions/getDailyData${account}`)
    console.log(results)
    console.log(Object.values(results))
    if (results.data.length != 0) {
      setdailyUsage(Object.values(results)[0][0].datausage)
    } else {
      setdailyUsage(0)
    }
  }

  /**
  useEffect(() => {
    fetchDailyUsage()
    fetchMonthlyUsage()
  }, [])
  */
  useEffect(() => {
      
    //const tick = () => { callbackRef.current() } 
    //const id = setInterval(tick, 1000);
    //const id = setInterval(callback, 1000);
    fetchMonthlyUsage()
    const id = setInterval(() => {
      fetchDailyUsage()
      //fetchMonthlyUsage()
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, []);//refはミュータブルなので依存配列に含めなくてもよい


  const useIntervalBy1s = (callback: () => void) => {
    //const callbackRef = useRef<() => void>(callback);
    //useEffect(() => {
    //  callbackRef.current = callback; // 新しいcallbackをrefに格納！
    //}, [callback]);
  };


  return (
    <div className="featured">
      <BillingInfo />
      <div className="featuredItem">
        <span className="featuredTitle">Data (Today)</span>
          <div className="featuredConsumtionContainer">
            <span className="featuredConsumption">{dailyUsage}GB</span>
            <span className="featuredConsumptionRate">
             +4 <ArrowUpward className="featuredIcon"/>
           </span>
         </div>
        <span className="featuredSubtitle">Compared to Yesterday</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Data (Month)</span>
          <div className="featuredConsumtionContainer">
            <span className="featuredConsumption">{monthlyUsage}GB</span>
            <span className="featuredConsumptionRate">
             +56 <ArrowUpward className="featuredIcon"/>
           </span>
         </div>
        <span className="featuredSubtitle">Compared to Last Month</span>
      </div>
    </div>
  )
}
