import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from './redux/todos/slice';

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

function App() {
  const list = useSelector(state => state.todos.list);
  const input = useRef();

  const dispatch = useDispatch();
  const addTodo = () => {
    if (input.current.value !== '') {
      dispatch(
        actions.add({
          id: uuidv4(),
          name: input.current.value
        })
      );
      input.current.value = '';
    }
  };

  const onDelete = id => {
    dispatch(actions.remove(id));
  };

  const deleteAll = () => {
    dispatch(actions.removeAll());
  };

  return (
    <>
      <div style={{ display: 'flex' }}>
        <input style={{ width: 200, height: 42 }} ref={input} />
        <button
          type="button"
          onClick={addTodo}
          style={{ marginLeft: 20, width: 100, height: 50 }}
        >
          Add
        </button>
        <button
          type="button"
          style={{ marginLeft: 20, width: 100, height: 50 }}
          onClick={deleteAll}
        >
          Delete All
        </button>
      </div>
      <ul>
        {list.map((e, index) => (
          <li key={String(index)} style={{ display: 'flex', marginBottom: 20 }}>
            <p>{e.name} </p>
            <button
              type="button"
              style={{ marginLeft: 20, width: 100, height: 50 }}
              onClick={() => onDelete(e.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
