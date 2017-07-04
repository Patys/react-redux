import React from 'react'
import Dashboard from 'components/Dashboard'

class DashboardRoute extends React.Component {
  componentDidMount() {
    this.props.dashboardVisitIncrement();
  }

  render() {
    const {dashboard} = this.props;
    return (
      <Dashboard visitCount={dashboard.visitCount} dashboardItems={dashboard.dashboardItems} />
    );
  }
}

DashboardRoute.propTypes = {
  dashboard     : React.PropTypes.object.isRequired,
  dashboardVisitIncrement : React.PropTypes.func.isRequired
}

export default DashboardRoute
