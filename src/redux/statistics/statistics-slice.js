import { createSlice } from '@reduxjs/toolkit';
import statisticsOperations from './statistics-operations';
const { getStatistics } = statisticsOperations;
const initialState = {
  statistics: []
};

const statisticSlice = createSlice({
  name: 'statistics',
  initialState,
  extraReducers: {
    [getStatistics.fulfilled](state, action){
      state.statistics = action.payload
    }
  },
});

export default statisticSlice.reducer;
