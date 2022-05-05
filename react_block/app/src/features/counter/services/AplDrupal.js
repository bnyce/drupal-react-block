// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints

export const aplDrupalApi = createApi({
  reducerPath: 'aplDrupalApi',
  baseQuery: fetchBaseQuery({ 
      baseUrl: 'https://library.austintexas.gov/webform_rest/shared_learning_room_reservation/complete_submission/' }),
      prepareHeaders: (headers, { getState }) => {
          const token = getState().auth.value
        // If we have a token set in state, let's assume that we should be passing it.
        if (token) {
            headers.set('X-CSRF-Token', `${token}`)
        }
          
        return headers
  },
  endpoints: (builder) => ({
    getSlrReservationByUuid: builder.query({
      query: (uuid) => `${uuid}?_format=json`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetSlrReservationByUuidQuery } = aplDrupalApi
