const FILTER_CATEGORY = "FILTER_CATEGORY"
const FILTER_SORT = "FILTER_SORT"

const initialState = {
  category: 0,
  sortBy: { name: "Лучшие", type: "good" }
}
export const filter = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_CATEGORY:
      return { ...state, category: action.payload }
    case FILTER_SORT:
      return { ...state, sortBy: action.payload }
    default:
      return state
  }
}

export const setCategory = (payload) => ({
  type: FILTER_CATEGORY,
  payload
})
export const setSortBy = (payload) => ({
  type: FILTER_SORT,
  payload
})
