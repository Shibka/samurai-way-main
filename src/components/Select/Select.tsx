import React, { useState } from "react";



type ItemType = {
    title: string
    value: any
}
export type SelectPropsType = {
    value: any
    onChange: () => void
    onClick: (value:any)=>void
    items: ItemType[]
    title: string
    collapsed: boolean
};

export function Select(props: SelectPropsType) {
    return (
        <div onClick={()=>props.onChange()}>
            {props.title}


            <ul>
                {!props.collapsed && props.items.map(el=> <li onClick={() =>{props.onClick(el.value)}}>{el.title}</li>)}
            </ul>
        </div>
    );
}