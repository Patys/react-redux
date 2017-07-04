import React, {PropTypes} from 'react'

const ListJSX = ({dashboardItems, activeIndex, onClick}) => {
  const items = dashboardItems.map((item, i) => {
    const itemJSX = activeIndex === i
      ? <p><b><u>{item.label}</u></b></p>
      : <p>{item.label}</p>

    return (
      <h4
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
  onClick: PropTypes.func.isRequired
}

export default ListJSX
