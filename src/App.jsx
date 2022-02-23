import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, asyncIncrement } from './store/features/counterSlice'
import { loadData } from './store/features/movieSlice'

const App = () => {
  const { count } = useSelector(state => state.counter)
  const { list } = useSelector(state => state.movie)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadData())
  }, [])
  return (
    <div>
      <button onClick={() => {
        dispatch(increment({ step: 1 }))
      }}>+</button>
      <button onClick={() => {
        dispatch(asyncIncrement({ step: 2 }))
      }}>异步+</button>
      <button onClick={() => {
        dispatch(decrement())
      }}>-</button>
      {count}
      <hr />
      <div>
        <ul>
          {
            list.map(({ name, tvId }) => {
              return <li key={tvId}>{name}</li>
            })
          }
        </ul>
      </div>
    </div>
  )
}
export default App