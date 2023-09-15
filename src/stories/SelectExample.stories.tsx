import React, {ChangeEvent, useMemo, useState} from "react";
import type {Meta, StoryObj} from "@storybook/react";
import {Select, SelectMemo} from "../components/Select/Select";


const meta = {
    title: "SelectHW",

};

export default meta;

type Select = StoryObj<typeof meta>;




export const Example1 = () => {

    const[counter, setCounter]=useState(0)
    const [value, setValue] = useState(1);
    const [value2, setValue2] = useState(2);
    const [value3, setValue3] = useState(3);

    let [items, setItems] = useState([
        {title: 'Minsk', value: 1},
        {title: 'Warsaw', value: 2},
        {title: 'Berlin', value: 3},
        {title: 'London', value: 4},
        {title: 'Rome', value: 5},
        {title: 'Tokio', value: 6},
    ])


    const onClickButtonCounter = () =>{
        console.log('Counter')
        setCounter(counter+1)
    }

    const addItem =()=>{
        console.log('add item')
        const newItem = {title: 'Brest', value: Math.random()}
        setItems([...items, newItem])
    }

    const citiesWithLetterMFilter= useMemo(()=>{
        console.log('Items')
        return items.filter(el => el.title.toLowerCase().includes('m'))
    },[items])

const citiesOfBelarusFilter = useMemo(()=>{
    return items.filter(el=> el.value === 1 || el.title === 'Brest')
}, [items])

    const bigCitiesFilter = useMemo(()=>{
        return items.filter(el => el.title ==='London'|| el.title === 'Tokio')
    }, [items])

    return (
        <div style={{ display: "flex", justifyContent: 'space-evenly' }}>
            <SelectMemo
                onChange={setValue}
                value={value}
                items={citiesWithLetterMFilter}
            />
            <SelectMemo
                onChange={setValue2}
                value={value2}
                items={citiesOfBelarusFilter}
            />
            <SelectMemo
                onChange={setValue3}
                value={value3}
                items={bigCitiesFilter}
            />

<button onClick={onClickButtonCounter}>+</button>
<button onClick={addItem}>add item</button>
        </div>
    )
};

