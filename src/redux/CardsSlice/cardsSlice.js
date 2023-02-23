import { createSlice } from "@reduxjs/toolkit";
import { cards } from "../../Cards/cardsData";

export const cardsSlice = createSlice({
  name: "cards",
  initialState: {
    items: cards.sort(() => Math.random() - 0.5),
    score: 0,
    selected: [],
  },
  reducers: {
    turnCard: (state, action) => {
      const id = action.payload;

      const findItem = state.items.find((item) => item.id === id);

      if (findItem.IsItTurned === false) {
        findItem.IsItTurned = !findItem.IsItTurned;
        state.selected.push(findItem);
      }
    },
    closeCards: (state) => {
      if (
        state.selected.length >= 2 &&
        state.selected[0].name !== state.selected[1].name
      ) {
        let findItem2 = state.items.find(
          (item) => item.id === state.selected[0].id
        );
        let findItem3 = state.items.find(
          (item) => item.id === state.selected[1].id
        );

        findItem2.IsItTurned = !findItem2.IsItTurned;

        findItem3.IsItTurned = !findItem3.IsItTurned;
        state.score -= 10;

        state.selected = [];
      }
      if (state.selected.length >= 2) {
        state.selected = [];
        state.score += 50;
      }
    },
    mixAgain: (state) => {
      const mix = [...state.items].sort(() => Math.random() - 0.5);

      state.items.forEach((item) => (item.IsItTurned = false));
      state.selected = [];
      state.score = 0;
      state.items = mix;
    },
  },
});

export const { turnCard, closeCards, mixAgain } = cardsSlice.actions;

export default cardsSlice.reducer;
