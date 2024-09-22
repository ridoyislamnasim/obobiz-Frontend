import { createSlice } from "@reduxjs/toolkit";
const initialAmount = () => {
  const item = window.localStorage.getItem("amount");
  return item ? JSON.parse(item) : 0;
};

const initialState = {
  amount: initialAmount(),
  nidData :{},
};

export const amountSlice = createSlice({
  name: "amount",
  initialState,
  reducers: {
    // handle dark mode
    handleAmount: (state, action) => {
      state.amount = action.payload;
      window.localStorage.setItem("amount", action.payload);
    },
    handleNID: (state, action) => {
      state.nidData = action.payload;
    },

  },
});

export const {
  handleAmount,
  handleNID,
} = amountSlice.actions;

export default amountSlice.reducer;
