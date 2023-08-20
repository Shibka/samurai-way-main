import React, {ChangeEvent, useRef, useState} from "react";
import type {Meta, StoryObj} from "@storybook/react";

const meta = {
    title: "input",
    // component: OnOff,
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
export const ControlledInput = () => <input value={"Hellou"}/>;
