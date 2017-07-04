// ------------------------------------
// Constants
// ------------------------------------
export const DASHBOARD_INCREMENT = 'DASHBOARD_INCREMENT'
export const DASHBOARD_ADD_ITEM = 'DASHBOARD_ADD_ITEM'
export const DASHBOARD_EDIT_ITEM = 'DASHBOARD_EDIT_ITEM'

// ------------------------------------
// Actions
// ------------------------------------
export function dashboardVisitIncrement (value = 1) {
  return {
    type    : DASHBOARD_INCREMENT,
    payload : value
  }
}

export function dashboardAddItem(value) {
  return {
    type: DASHBOARD_ADD_ITEM,
    payload: value
  }
}

export function dashboardEditItem(value) {
  return {
    type: DASHBOARD_EDIT_ITEM,
    payload: value
  }
}

export const actions = {
  dashboardVisitIncrement
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [DASHBOARD_INCREMENT]    : (state, action) => ({
    ...state,
    visitCount: state.visitCount + action.payload
  }),
  [DASHBOARD_ADD_ITEM] : (state, action) => {
    const mockedId = Math.floor(Date.now() / 1000)
    const newItem = {
      label: action.payload.label,
      id: mockedId
    }

    return {
      ...state,
      dashboardItems: [...state.dashboardItems, newItem]
    }
  },
  [DASHBOARD_EDIT_ITEM] : (state, action) => {
    const {label, editItemIndex: index} = action.payload
    let newItem = {
      ...state.dashboardItems[index],
      label
    }

    const immutableDashboardItem = [
      ...state.dashboardItems.slice(0, index),
      newItem,
      ...state.dashboardItems.slice(index+1)
    ]

    return {
      ...state,
      dashboardItems: immutableDashboardItem
    }
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  visitCount: 0,
  dashboardItems: [
    {label: 'Angular'},
    {label: 'JQuery'},
    {label: 'React'}
  ]
}
export default function dashboardReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
