import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  value: 1,
  status: 'idle',
};
//const baseUrl = 'https://library.austintexas.gov';
const baseUrl = 'http://my-first-drupal9-app.lndo.site';
export const fetchAuth = createAsyncThunk(baseUrl + 'auth/fetchAuth', async () => {
  const response = await fetch('/session/token', { 
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
