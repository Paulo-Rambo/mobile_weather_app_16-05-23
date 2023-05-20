import {createSlice} from '@reduxjs/toolkit';

const autoCompleteSlice = createSlice({
  name: 'autoComplete',
  initialState: {
    loading: true,
    error: null,
    autoCompleteState: false,
  },
  reducers: {
    changeAutoCompleteState: (state, action) => {
      state.autoCompleteState = action.payload;
    },
  },
});

export const {changeAutoCompleteState} = autoCompleteSlice.actions;
export default autoCompleteSlice.reducer;
