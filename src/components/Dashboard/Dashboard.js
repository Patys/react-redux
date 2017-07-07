import React from 'react'
import ListJSX from './ListJSX'

export class Dashboard extends React.Component {
  state = {
    inputValue: '',
    editItemIndex: null,
    draggedItemIndex: null
  }

  handleDragStart = (ev) => {
    ev.dataTransfer.effectAllowed = 'move';
    // ev.dataTransfer.setData("text", ev.target);
    this.setState({draggedItemIndex: ev.target.id});
  }

  handleDragOver = (ev) => {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = 'move';
  }

  handleDrop = (ev) => {
    const droppedItemIndex = ev.currentTarget.id;
    if(this.editItemIndex === null) {
      this.props.reorderItem({
        start: this.state.draggedItemIndex,
        end: droppedItemIndex
      });
    }
    this.setState({draggedItemIndex: null});
  }

  onChangeInput = (ev) => {
    this.setState({
      inputValue: ev.target.value
    });
  }

  onSubmit = (ev) => {
    ev.preventDefault();
    const {inputValue: label, editItemIndex: editItemIndex} = this.state;
    if(label && label.length) {
      this.props.updateItem({label, editItemIndex});
      this.setState({
        inputValue: '',
        editItemIndex: null
      });
    } else {
      alert('Value can not be empty');
    }
  }

  itemOnEdit = (editItemIndex) => () => {
    const editedItem = this.props.dashboardItems[editItemIndex];
    this.setState({inputValue: editedItem.label, editItemIndex});
  }

  render() {
    const {visitCount, dashboardItems} = this.props;
    return (
      <div style={{ margin: '0 auto' }} >
        <h2>Dashboard visits: {visitCount}</h2>

        <form onSubmit={this.onSubmit}>
          <input
            value={this.state.inputValue}
            type='text'
            placeholder='Type here...'
            onChange={this.onChangeInput} />
          <input
            value={this.state.editItemIndex===null ? 'Add new item to list' : 'Edit item'}
            type='submit' />
        </form>

        <ListJSX
          onDragStart={this.handleDragStart}
          onDragOver={this.handleDragOver}
          onDrop={this.handleDrop}
          activeIndex={this.state.editItemIndex}
          dashboardItems={dashboardItems}
          onClick={this.itemOnEdit}/>
      </div>
    )
  }
}

Dashboard.propTypes = {
  dashboardItems: React.PropTypes.array.isRequired,
  visitCount: React.PropTypes.number.isRequired,
  updateItem: React.PropTypes.func.isRequired
}

export default Dashboard
