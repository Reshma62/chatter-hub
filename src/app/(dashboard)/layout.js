"use client"

import React from 'react'
import Header from '../components/Header';

const DashboardLayout = ({chidren}) => {
  return (
    <div>
      <Header />
      { chidren }
      <p>footer</p>
    </div>
  )
}

export default DashboardLayout