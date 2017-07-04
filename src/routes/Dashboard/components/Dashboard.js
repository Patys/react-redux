import React from 'react'
import Dashboard from 'components/Dashboard'

class DashboardRoute extends React.Component {
  componentDidMount() {
    this.props.dashboardVisitIncrement();
  }

  updateItem = ({editItemIndex, label}) => {
    if(editItemIndex===null) {
      this.props.dashboardAddItem({label})
    }
    else {
      this.props.dashboardEditItem({editItemIndex, label})
    }
  }

  render() {
    const {dashboard} = this.props;
    return (
      <Dashboard
        visitCount={dashboard.visitCount}
        dashboardItems={dashboard.dashboardItems}
        updateItem={this.updateItem} />
    );
  }
}

DashboardRoute.propTypes = {
  dashboard     : React.PropTypes.object.isRequired,
  dashboardVisitIncrement : React.PropTypes.func.isRequired,
  dashboardAddItem: React.PropTypes.func.isRequired,
  dashboardEditItem: React.PropTypes.func.isRequired
}

export default DashboardRoute
