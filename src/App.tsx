import style from './App.module.scss'

import { useEffect, useState } from 'react';
import { useAppDispatch } from './hooks/useApp';

import { Todo, addTodo, setTodosState, setStorFn } from './store/todoSlice';
import NewTodoForm from './components/NewTodoForm/NewTodoForm';
import TodoList from './components/TodoList/TodoList';
import { Container } from './components/Container/Container';
import { useLocalStorage } from './hooks/useLocalStorage';
import { b64EncodeUnicode } from './utils/utils';

export function Login() {
  const [logged, setLogged] = useState(false)
  const [name, setName] = useState('')
  const [users, setUsers] = useState<string[]>([])
  const { setItem, getItem, remUserInfo } = useLocalStorage('methed.2d.users')
  const nnKey = name ? b64EncodeUnicode(name.toLowerCase()) : 'no'
  const { setItem: setItemU, getItem: getItemU } = useLocalStorage('methed.2d.' + nnKey)
  const dispatch = useAppDispatch();


  useEffect(() => {
    if (!logged) {
      let usersNew = getItem()
      if (!usersNew) usersNew = []
      if (JSON.stringify(users) !== JSON.stringify(usersNew)) setUsers(usersNew)
      // console.log('useEffect(users: ', users);
    } else {
      console.log('logged name: ', name);
      const myTodos = getItemU()
      if (!myTodos) {
        setItemU([
          {
            id: '111',
            title: 'learn react',
            completed: true,
          },
          {
            id: '222',
            title: 'learn redux',
            completed: false,
          },
          {
            id: '333',
            title: 'learn typescript',
            completed: false,
          },
        ])
      }
      const tdList: Todo[] = getItemU()
      dispatch(setTodosState(tdList));
      // tdList.forEach((el: Todo) => {
      //   dispatch(addTodoSt({ t: el.title, st: el.completed }));
      // });
      console.log('myTodos: ', myTodos);
      dispatch(setStorFn({ storFn: setItemU }))
    }
  }, [logged, dispatch, getItem, getItemU, name, setItemU, users]);

  const handlerSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault()
    if (!name) return;
    setUsers((prev) => {
      const nn = name.toLowerCase()
      let r = prev
      if (!prev.includes(nn)) {
        r = [...prev, nn]
        setUsers(r)
        setItem(r)
      }
      setLogged(true)
      return r
    })
  }

  return (
    <Container>
      {!logged && (<>
        <h1 className={style.header}>
          <div className={style.logoBlock}>
            <img src='./img/logo.png' alt='logo' />
          </div>
          Входите! Есть Дело.
        </h1>
        <form onSubmit={handlerSubmit}>
          <label>
            <span>укажите ваше имя:</span>
            <input type='text'
              value={name}
              onChange={e => setName(e.target.value)}
            ></input>
            <button className={style.ok} disabled={!name} type='submit'>ok</button>
          </label>

        </form>
        {users.length > 0 && (
          <div className={style.usersBlock}>
            <div>возможно вы:</div>
            <ul className={style.users}
              onClick={(e) => {
                const t = e.target as HTMLInputElement
                if (t && t instanceof HTMLButtonElement) {
                  setName(t.innerText.trim())
                  return
                }
                if (t && t instanceof HTMLElement) {
                  const b = t.closest('li')?.querySelector('button')
                  if (b) {
                    const nn = b.innerText.trim()
                    if (!window.confirm(`Удалить дела пользователя ${nn}?`)) return
                    const nnKey = nn ? b64EncodeUnicode(nn.toLowerCase()) : 'no'
                    remUserInfo(nn, 'methed.2d.' + nnKey)
                    setUsers(getItem())
                    setName('')
                  }
                }
              }}
            >
              {users.map((el, i) => (<li className={style.userItem} key={i}>
                <button className={style.userSelect}>{el}</button>
                <b className={style.del}>&times;</b>
              </li>))}
            </ul>
            {/* <button
              onClick={() => { setUsers([]); remItem() }}
            >нет!</button> */}
          </div>
        )}
      </>)}
      {logged && (<>
        <div className={style.tLine}>
          <h1><span className={style.firstUpper}>{name}</span>. Дела:</h1>
          <button onClick={() => { setLogged(false); setName('') }}>выход</button>
        </div>

        <App />
      </>)}
    </Container>
  );
}

function App() {
  const [text, setText] = useState('');
  const dispatch = useAppDispatch();

  const handleAction = () => {
    if (text.trim().length) {
      dispatch(addTodo(text));
      setText('');
    }
  }

  return (
    <div className='App'>
      <NewTodoForm
        value={text}
        updateText={setText}
        handleAction={handleAction}
      />
      <TodoList />
    </div>
  );
}

export default App;
