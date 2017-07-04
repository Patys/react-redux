import React from 'react'
import ListJSX from './ListJSX'

export const Dashboard = ({visitCount, dashboardItems}) => (
  <div style={{ margin: '0 auto' }} >
    <h2>Dashboard visits: {visitCount}</h2>
    <ListJSX dashboardItems={dashboardItems}/>
  </div>
)

Dashboard.propTypes = {
  dashboardItems: React.PropTypes.array.isRequired,
  visitCount: React.PropTypes.number.isRequired
}

export default Dashboard
