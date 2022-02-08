import React, {useState, useRef, useMemo} from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser'

function countActiveUsers(users){
  console.log("활성 사용자 수를 세는중...")
  return users.filter(user => user.active).length
}

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });

  const {username, email} = inputs;
  const onChange = e => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const [users, setUsers ]= useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false
    }
  ]);

  const nextId = useRef(4);
  const onCreate = () => {
    const user = {
      id:nextId.current,
      username,
      email
    };

    // setUsers([...users, user]) // 이 방법으로 해도 됨 - spread 연산자
    setUsers(users.concat(user))
    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1;
  };

  const onRemove = id => {
    // id랑 일치하지 않는 원소들만 가지고 배열을 새로 만듬
    setUsers(users.filter(user => user.id !== id));
  };

  const onToggle = id => {
    setUsers(
      users.map(user => user.id === id ? {...user, active: !user.active} : user)
    );
  };

  // 이전에 연산한 값 재사용, [users] 배열이 변경되면 렌더링을 다시하고,  바뀌지 않으면 이전에 연산한 값을 재사용(함수 재호출 ㄴㄴ)
  const count = useMemo(() => countActiveUsers(users), [users]);
  return (
    <>
    <CreateUser
      username={username}
      email={email}
      onChange={onChange}
      onCreate={onCreate} />
    <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
    <div>활성사용자 수 : {count}</div>
    </>
  );    
}

export default App;