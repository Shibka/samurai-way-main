import React, {useState, KeyboardEvent, useEffect} from "react";
import styles from './Select.module.css'

type ItemType = {
    title: string
    value: any
}
export type SelectPropsType = {
    value: any
    onChange: () => void
    onClick: (title: any) => void
    items: ItemType[]
    title: string
    collapsed: boolean
};

export function Select(props: SelectPropsType) {
    const [hovered, setHovered] = useState(props.value)

    const hoveredItem = props.items.find(i => i.value === hovered)
    const selectedItem = props.items.find(i => i.value === props.value)

    useEffect(() => {
        setHovered(props.value)
    }, [props.value])
    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        debugger
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hovered) {
                    const pretendentElement = e.key === 'ArrowDown'
                        ? props.items[i + 1]
                        : props.items[i - 1];
                    if (pretendentElement) {
                        props.onChange()
                        break
                    }
                }
            }
        }
        }
    //
    //     if(e.key === 'Enter' || e.key === 'ArrowUp')
    // }
    return (
        <>
            <div
                 onClick={() => props.onChange()}
                 className={props.collapsed ? styles.selectTitleCollapsed : styles.selectTitle}>
                {props.title} <span onKeyUp={onKeyUp} tabIndex={0} className={styles.arrowRight}></span>
            </div>
            <div className={props.collapsed ? '' : styles.items}>
                {!props.collapsed && props.items.map(el => <div
                    onMouseEnter={() => {
                        setHovered(el.value)
                    }}
                    className={styles.item + ' ' + (hoveredItem === el ? styles.selected : '')} key={el.value}
                    onClick={() => {
                        props.onClick(el.title)
                    }}>{el.title}</div>)}
            </div>
        </>
    );
}