import React, {useMemo, useState} from "react";

const meta = {
    title: "useMemo",
};

export default meta;

export const Example1 = () => {

    const [a, setA] = useState(3)
    const [b, setB] = useState(3)

    let resultA = 1
    let resultB = 1

   resultA = useMemo(()=>{
       let tempResultA = 1;
       for(let i = 1; i <= a; i++){
           let fake = 0;
           while(fake < 10000000){
               fake++
               const fakeValue = Math.random()
           }
           tempResultA *= i;
       }
       return tempResultA
   }, [a])


for(let i = 1; i <= b; i++){
     resultB *= i;
}

    return <>
        <input value={a} onChange={(e)=>setA(+e.currentTarget.value)}/>
        <input value={b} onChange={(e)=>setB(Number(e.currentTarget.value))}/>
<hr/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>
    </>
};