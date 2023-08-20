import React, {ChangeEvent, useRef, useState} from "react";

const meta = {
    title: "input",
};

export default meta;

export const UncontrolledInput = () => <input/>;
export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState("");
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        debugger
        const actualValue = event.currentTarget.value;
        setValue(actualValue);
    }
    return (
        <> <input onChange={onChange}/> - {value} </>
    );
};
export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState("");
    const inputRef = useRef<HTMLInputElement>(null)

    const save = () => {
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value)
    }

    return (
        <>
            <input ref={inputRef}/>
            <button onClick={save}>save</button>
            - value: {value} </>
    );
};

export const ControlledInput =() =>{
const [parentValue, setParentValue] = useState('')

    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>)=> {setParentValue(e.currentTarget.value)}

    return <input value={parentValue} onChange={onChangeHandler} />
}
export const ControlledCheckBox =() =>{
    const [parentValue, setParentValue] = useState(false)

    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>)=> {setParentValue(e.currentTarget.checked)}

    return <input type={"checkbox"} onChange={onChangeHandler} />
}
export const ControlledSelect =() =>{
    const [parentValue, setParentValue] = useState<string | undefined>('2')

    const onChangeHandler = (e:ChangeEvent<HTMLSelectElement>)=> setParentValue(e.currentTarget.value)

    return <select value={parentValue} onChange={onChangeHandler}>
        <option>none</option>
        <option value={"1"}>Minsk</option>
        <option value={"2"}>Warsaw</option>
        <option value={"3"}>London</option>
    </select>
}
export const ControlledFixedInput = () => <input value={"Hellou"}/>;
