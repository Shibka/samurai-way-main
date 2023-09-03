import React, {useState} from "react";


const meta = {
    title: "ReactMemo",
};

export default meta;

const NewMessagesCounter = (props: any) => {
    return <div>{props.count}</div>
}
const UsersSecret = (props: { users: Array<string> }) => {
    console.log('USERS')
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}
const Users = React.memo(UsersSecret)
export const Example1 = () => {

    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Alex', 'Leha', 'Gleb'])

    const addUser = () => {
        const newUser = [...users, 'Igor' + new Date().getTime()]
        setUsers(newUser);
    }

    users.push(...users, 'Igor' + new Date().getTime())

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>add user</button>
        <NewMessagesCounter count={counter}/>
        <Users users={users}/>
    </>
};

