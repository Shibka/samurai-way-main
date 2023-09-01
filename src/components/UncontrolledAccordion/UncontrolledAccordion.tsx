import React, {useReducer} from "react";
import {reducer, TOGGLE_CONSTANT} from "./Reducer";

type AccordionPropsType = {
    titleValue: string;
};


function UncontrolledAccordion(props: AccordionPropsType) {
    // let [collapsed, setCollapsed] = useState(false);
    let [collapsed, dispatch] = useReducer(reducer, false);

    return (
        <div>
            <AccordionTitle
                title={props.titleValue}
                // onClick={() => {setCollapsed(!collapsed)}}
                onClick={() => {
                    dispatch({type: TOGGLE_CONSTANT})
                }}
            />
            {!collapsed && <AccordionBody/>}
        </div>
    );
}

type AccordionTitlePropsType = {
    title: string;
    onClick: () => void;
};

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <>
            <h3
                onClick={() => {
                    props.onClick();
                }}
            >
                {props.title}
            </h3>
        </>
    );
}

function AccordionBody() {
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    );
}

export default UncontrolledAccordion;
