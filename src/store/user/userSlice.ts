import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  word: string
  arrayOfWords: string[]
}

const initialState: CounterState = {
  word: "Portez Ce whisky au vieux juge blonde qui fume", 
  arrayOfWords: ["ayoub","iyed","louay"],
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    sayHelloWord: (state) => {
      console.log(state.word)
    },

    addItems: (state, {payload}: PayloadAction<string>) => {
      state.arrayOfWords.push(payload) 
    },
  },
})

export const { sayHelloWord,addItems } = counterSlice.actions

export default counterSlice.reducer
