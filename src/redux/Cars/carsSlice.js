import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { requestAllCars } from '../../services/api';


export const fetchCars = createAsyncThunk('cars/fetchCars', async () => {
  
  const response = await requestAllCars();
  console.log(response);
  return response;
});

// Створюємо slice для автомобілів
const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    cars: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cars = action.payload;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});


export const carsReducer = carsSlice.reducer;