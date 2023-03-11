import {configureStore} from "@reduxjs/toolkit";
import {jsonplaceholderApi} from "./jsonplaceholder/jsonplaceholder.api";

export const store = configureStore({
    reducer: {
        [jsonplaceholderApi.reducerPath]: jsonplaceholderApi.reducer
    }
})