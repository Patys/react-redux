// ------------------------------------
// Constants
// ------------------------------------
export const DASHBOARD_INCREMENT = 'DASHBOARD_INCREMENT'

// ------------------------------------
// Actions
// ------------------------------------
export function dashboardVisitIncrement (value = 1) {
  return {
    type    : DASHBOARD_INCREMENT,
    payload : value
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
  })
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
