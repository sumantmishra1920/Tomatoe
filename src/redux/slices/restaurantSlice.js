import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async Thunk to fetch restaurants
export const fetchRestaurants = createAsyncThunk('restaurants/fetchRestaurants', async () => {
  const response = await axios.get('https://117duqflkc.execute-api.ap-south-1.amazonaws.com/prod/restaurants'); // Replace with actual endpoint
  return response.data;
});

const restaurantSlice = createSlice({
  name: 'restaurants',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRestaurants.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRestaurants.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchRestaurants.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default restaurantSlice.reducer;
