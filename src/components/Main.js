import React, { Fragment } from 'react'
import SideBar from '../components/SideBar'
import Chart from '../components/Chart'
import Table from '../components/Table'
import Footer from '../components/Footer'

const Main = () => {
  return (
    <Fragment>
      <div className="main">
        <SideBar />
        <div className="main-table-chart">
          <Chart />
          <Table />
          <Footer />
        </div>
      </div>
    </Fragment>
  )
}

export default Main;