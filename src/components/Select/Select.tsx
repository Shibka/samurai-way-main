import React, {useState, KeyboardEvent, useEffect, useMemo} from "react";
import styles from './Select.module.css'

type ItemType = {
    title: string
    value: any
}
export type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    onClick: (title: any) => void
    items: ItemType[]
    title: string
    collapsed: boolean
};

export const SelectMemo = React.memo(Select)
export function Select(props: SelectPropsType) {
    const [active, setActive] = useState(false)
    const [hoveredElement, setHoveredElement] = useState(props.value)

    const hoveredItem = props.items.find(i => i.value === hoveredElement)
    const selectedItem = props.items.find(i => i.value === props.value)

    useEffect(() => {
        setHoveredElement(props.value)
    }, [props.value])
    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        console.log(e.key)
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElement) {
                    const pretendentElement = e.key === 'ArrowDown'
                        ? props.items[i + 1]
                        : props.items[i - 1];
                    if (pretendentElement) {
                        props.onChange(pretendentElement.value)
                        return
                    }
                }
            }
            if(!selectedItem){
                props.onChange(props.items[0].value)
            }

        }

        if(e.key === 'Enter' || e.key === 'Escape'){
            setActive(false)
            }
        }

    return (
        <>
            <div
                tabIndex={0}
                         onKeyUp={onKeyUp}
                onClick={() => {
                    setActive(true)
                    props.onChange(props.value)
                }}
                 className={props.collapsed ? styles.selectTitleCollapsed : styles.selectTitle}>
                {props.title} <span  className={styles.arrowRight}></span>
            </div>
            {active && <div className={active? '' : styles.items}>
                {props.items.map(el => <div
                    onMouseEnter={() => {
                        setHoveredElement(el.value)
                    }}
                    className={styles.item + ' ' + (hoveredItem === el ? styles.selected : '')} key={el.value}
                    onClick={() => {
                        props.onClick(el.title)
                    }}>{el.title}</div>)}
            </div>}
        </>
    );
}


// import React, {useState, KeyboardEvent, useEffect} from "react";
// import styles from './Select.module.css'
//
// type ItemType = {
//     title: string
//     value: any
// }
// type SelectPropsType = {
//     value?: any
//     onChange: (value: any) => void
//     items: ItemType[]
// }

// export function Select(props: SelectPropsType) {
//
//     const [active, setActive] = useState(false)
//     const [hoveredElementValue, setHoveredElementValue] = useState(props.value)
//
//     const selectedItem = props.items.find(i => i.value === props.value)
//     const hoveredItem = props.items.find(i => i.value === hoveredElementValue)
//
//     useEffect(() => {
//         setHoveredElementValue(props.value)
//     }, [props.value])
//
//
//     const toggleItems = () => setActive(!active)
//     const onItemClick = (value: any) => {
//         props.onChange(value)
//         toggleItems()
//     }
//     const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
//         if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
//             for (let i = 0; i < props.items.length; i++) {
//                 if (props.items[i].value === hoveredElementValue) {
//                     const pretendentElement = e.key === 'ArrowDown'
//                         ? props.items[i + 1]
//                         : props.items[i - 1];
//                     if (pretendentElement) {
//                         props.onChange(props.value)
//                         break
//                     }
//                 }
//             }
//         }
//     }
//
// }