import React, {useMemo, useState} from "react";


const meta = {
    title: "UseState",
};

export default meta;

function longCounting(){
    console.log('long counting')
    return 1
}
export const Example1 = () => {
    console.log('Example1')
    // let initValue = useMemo(longCounting, [])
    const [counter, setCounter] = useState(longCounting)

    // const changer = (state:number)=>{
    //     return state + 1
    // }
    return <>
        <button onClick={() => setCounter(state => state + 1)}>+</button>
        {counter}
    </>
};
