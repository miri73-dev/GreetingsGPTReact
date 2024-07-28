import { configureStore } from '@reduxjs/toolkit'
import './App.css'
import ListButtons from './Components/ListButtons'
import counterSlice from './slices/counterSlice'
import { Provider } from 'react-redux'
import buttonSlice from './slices/buttonSlice'

const myStore = configureStore({
  reducer:{
    counterSlice,
    buttonSlice
  }
})

export type RootState = ReturnType<typeof myStore.getState>;

function App() {
  return (
    <>
      <Provider store={myStore}>
        <h1>hello</h1>
        <ListButtons></ListButtons>
      </Provider>
    </>
  )
}

export default App