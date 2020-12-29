const FETCH_CREDIT = "FETCH_CREDIT"
const HIDE_LOADER = "HIDE_LOADER"
const SHOW_LOADER = "SHOW_LOADER"

const initialState = {
  item: [],
  loading: false
}
export const credit = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CREDIT:
      return { ...state, item: action.payload }
    // return { ...state, credit: state.credit.concat([action.payload]) }
    // return { ...state, posts: [...state.posts, action.payload] };
    case HIDE_LOADER:
      return { ...state, loading: false }
    case SHOW_LOADER:
      return { ...state, loading: true }
    default:
      return state
  }
}

export const fetchCredit = (payload) => ({
  type: FETCH_CREDIT,
  payload
})

export const setHideLoader = () => ({
  type: HIDE_LOADER
})
export const setShowLoader = () => ({
  type: SHOW_LOADER
})
