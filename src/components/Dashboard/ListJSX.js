import React, {PropTypes} from 'react'

const ListJSX = ({dashboardItems, activeIndex, onClick, onDrop, onDragStart, onDragOver}) => {
  const items = dashboardItems.map((item, i) => {
    const itemJSX = activeIndex === i
      ? <p><b><u>{item.label}</u></b></p>
      : <p>{item.label}</p>

    return (
      <h4
        onDragOver={onDragOver}
        onDragStart={onDragStart}
        onDrop={onDrop}
        draggable='true'
        id={i}
        key={i}
        onClick={onClick(i)}>{itemJSX}</h4>
    )
  })

  return (
    <div>
      { items }
    </div>
  )
}

ListJSX.propTypes = {
  dashboardItems: PropTypes.array.isRequired,
  activeIndex: PropTypes.number,
  onClick: PropTypes.func.isRequired,
  onDragStart: PropTypes.func.isRequired,
  onDragOver: PropTypes.func.isRequired,
  onDrop: PropTypes.func.isRequired
}

export default ListJSX
