import React, {useState} from "react";
import "./App.css";
import {Accordion, AccordionMemo} from "./components/Accordion/Accordion";
import {Rating, RatingMemo, RatingValueType} from "./components/Rating/Rating";
import {UncontrolledOnOff, UncontrolledOnOffMemo} from "./components/UncontrolledOnOf/UncontrolledOnOff";
import UncontrolledAccordion, {
    UncontrolledAccordionMemo
} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating, UncontrolledRatingMemo} from "./components/UncontrolledRating/UncontrolledRating";
import {OnOff, OnOffMemo} from "./components/OnOff/OnOff";
import {Select} from "./components/Select/Select";

function App() {
    console.log("App rendering");

    let [ratingValue, setRatingValue] = useState<RatingValueType>(4);
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true);
    let [on, setOn] = useState<boolean>(true);
    let [collapsed, setCollapsed] = useState(true)
    let [title, setTitle] = useState('New Select')
    let [items, setItems] = useState([
        {title: 'Alex', value: 1},
        {title: 'Leha', value: 2},
        {title: 'Gleb', value: 3}
    ])
    let [value, setValue] = useState(1)

    return (
        <div className={"App"}>
            {/*<OnOffMemo on={on}*/}
            {/*           onClick={setOn}/>*/}

            {/*<UncontrolledOnOffMemo onClick={setOn}*/}
            {/*                       on={on}/>*/}

            {/*<AccordionMemo titleValue={title}*/}
            {/*               collapsed={collapsed}*/}
            {/*               onChange={changeCollapsed}*/}
            {/*               items={items}*/}
            {/*               onClick={() => {*/}
            {/*               }}/>*/}

            {/*<RatingMemo onClick={setRatingValue}*/}
            {/*            value={ratingValue}/>*/}


      <Select value={value}
      onChange={setValue}
              items={items}/>




            {/*<UncontrolledAccordionMemo titleValue={title}/>*/}
            {/*<UncontrolledRatingMemo/>*/}

        </div>
    );
}


export default App;
