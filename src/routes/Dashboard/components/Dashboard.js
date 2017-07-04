import React from 'react'
import Dashboard from 'components/Dashboard'

class DashboardRoute extends React.Component {
  componentDidMount() {
    this.props.dashboardVisitIncrement();
  }

  render() {
    return (
      <Dashboard dashboard={this.props.dashboard} />
    );
  }
}

DashboardRoute.propTypes = {
  dashboard     : React.PropTypes.number.isRequired,
  dashboardVisitIncrement : React.PropTypes.func.isRequired
}

export default DashboardRoute
