import React, { useState } from "react";
import './Select.css'

type ItemType = {
    title: string
    value: any
}
export type SelectPropsType = {
    value: any
    onChange: () => void
    onClick: (title:any)=>void
    items: ItemType[]
    title: string
    collapsed: boolean
};

export function Select(props: SelectPropsType) {
    return (
        <>
        <div onClick={()=>props.onChange()} className={props.collapsed? 'select-title-collapsed':'select-title'} >
            {props.title} <span className={'arrow-right' }></span>
        </div>

            <div className={props.collapsed ? '' : 'items'}>
                {!props.collapsed && props.items.map(el=> <div className={'data'} onClick={() =>{props.onClick(el.title)}}>{el.title}</div>)}
            </div>
        </>
    );
}