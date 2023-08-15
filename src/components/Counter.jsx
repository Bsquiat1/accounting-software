import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/action'; // Adjust the path

function CounterComponent() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={() => dispatch(increment())} className='btn'>Increment</button>
      <button onClick={() => dispatch(decrement())}className='btn'>Decrement</button>
    </div>
  );
}
export default CounterComponent