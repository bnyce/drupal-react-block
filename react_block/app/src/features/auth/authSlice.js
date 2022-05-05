import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  value: 1,
  status: 'idle',
};
export const fetchAuth = createAsyncThunk('auth/fetchAuth', async () => {
  const response = await fetch('https://library.austintexas.gov/session/token', { 
   // mode: 'cors', 
})

    
    return response.text();
  
})

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchAuth.fulfilled, (state, action) => {
      state.status =  'idle';
      state.value = action.payload;
    })
  }
})

export default authSlice.reducer
