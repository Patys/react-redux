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

  reorderItem = ({start, end}) => {
    end = parseInt(end, 10);
    start = parseInt(start, 10);

    const reorderIsCorrect = !isNaN(start) && !isNaN(end) && start !== end;

    if(reorderIsCorrect) {
      this.props.dashboardReorderItem({start, end});
    }
  }

  render() {
    const {dashboard} = this.props;
    return (
      <Dashboard
        reorderItem={this.reorderItem}
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
  dashboardEditItem: React.PropTypes.func.isRequired,
  dashboardReorderItem: React.PropTypes.func.isRequired
}

export default DashboardRoute
