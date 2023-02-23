import { configureStore } from "@reduxjs/toolkit";
import cardsSlice from "./CardsSlice/cardsSlice";


export const store = configureStore({
    reducer: {
        cards:cardsSlice
    }
})