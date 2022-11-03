import { configureStore } from '@reduxjs/toolkit';

import { StreemingAvailability } from './services/Streaming_Availability';

export const store = configureStore({
  reducer: {
    [StreemingAvailability.reducerPath]: StreemingAvailability.reducer,
    
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(StreemingAvailability.middleware),
});
