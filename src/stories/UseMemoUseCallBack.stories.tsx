import React, {useCallback, useMemo, useState} from "react";

const meta = {
    title: "useMemo",
};

export default meta;


export const DifficultCountingExample = () => {

    const [a, setA] = useState(3)
    const [b, setB] = useState(3)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tempResultA = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 10000000) {
                fake++
                const fakeValue = Math.random()
            }
            tempResultA *= i;
        }
        return tempResultA
    }, [a])


    for (let i = 1; i <= b; i++) {
        debugger
        resultB *= i;
    }

    return <>
        <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
        <input value={b} onChange={(e) => setB(Number(e.currentTarget.value))}/>
        <hr/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>
    </>
};
const UsersSecret = (props: { users: Array<string> }) => {
    console.log('USERS SECRET')
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}

const Users = React.memo(UsersSecret)
export const HelpsToReactMemo = () => {

    console.log('HelpsToReactMemo')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Alex', 'Leha', 'Gleb'])

    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().includes('a'))
    }, [users])


    const addUser = () => {
        const newUser = [...users, 'Igoria' + new Date().getTime()]
        setUsers(newUser);
    }


    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => addUser()}>add user</button>
        {counter}
        <Users users={newArray}/>
    </>
};


















type BooksSecretPropsType = {
    addBook: () => void
}
const BooksSecret = (props: BooksSecretPropsType) => {
    console.log('BooksSecret')
    return <div>
        <button onClick={() => props.addBook()}>add book</button>
    </div>
}
const Book = React.memo(BooksSecret)
export const LikeUseCallBack = () => {

    console.log('LikeUseCallBack')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['Js', 'React', 'HTML'])

    const addBook = () => {
        console.log(books)
        const newBook = [...books, 'Angular' + new Date().getTime()]
        setBooks(newBook);
    }
    const memoizedAddBook = useMemo(() => {
        return () => {
            console.log(books)
            const newBook = [...books, 'Angular' + new Date().getTime()]
            setBooks(newBook);
        }
    }, [books])

const memoizedAddBook2 = useCallback(() => {
            console.log(books)
            const newBook = [...books, 'Angular' + new Date().getTime()]
            setBooks(newBook);
    }, [books])


    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <Book addBook={memoizedAddBook2}/>
    </>
};

