import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  value: 1,
  status: 'idle',
};
export const fetchEvent = createAsyncThunk('auth/fetchEvent', async () => {
  const response = await fetch('https://library.austintexas.gov/aplapi/event/f817a290-34c6-4ef0-826f-e2037edd3329', { 
})
    .then(response => response.json());
            
    return response;
})

const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchEvent.fulfilled, (state, action) => {
      state.status =  'idle';
      state.value = action.payload;
    })
  }
})

export default eventSlice.reducer
