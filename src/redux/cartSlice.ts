import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductCount {
  [key: string]: {
    count: number;
  };
}

const initialState: ProductCount = {};

const counter = createSlice({
  name: "counter",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload;
      state[id] = { count: (state[id]?.count || 0) + 1 };
    },
    decrement: (state, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload;
      state[id] = { count: (state[id]?.count || 1) - 1 };
    },
    setCount: (state, action: PayloadAction<{ id: string; count: number }>) => {
      const { id, count } = action.payload;
      state[id] = { count };
    },
    clearCount: (state, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload;
      delete state[id];
    },
  },
});

export default counter.reducer;
export const { add, decrement, setCount, clearCount } = counter.actions;
