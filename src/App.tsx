import React, {useState} from "react";
import "./App.css";
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontrolledOnOff} from "./components/UncontrolledOnOf/UncontrolledOnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {OnOff} from "./components/OnOff/OnOff";
import {Select} from "./components/Select/Select";

function App() {
    console.log("App rendering");

    let [ratingValue, setRatingValue] = useState<RatingValueType>(4);
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true);
    let [on, setOn] = useState<boolean>(true);
    let [collapsed, setCollapsed] = useState(true)
    let [title, setTitle] = useState('New Select')
    const changeTitle = (title: string) =>{
        setTitle(title)
        setCollapsed(true)
    }
    const toggleItems = () => setCollapsed(!collapsed)
    return (
        <div className={"App"}>
            {/*<OnOff on={on} onClick={setOn} />*/}
            {/*<Accordion*/}
            {/*  titleValue={"Main"}*/}
            {/*  collapsed={accordionCollapsed}*/}
            {/*  onClick={() => {*/}
            {/*    setAccordionCollapsed(!accordionCollapsed);*/}
            {/*  }}*/}
            {/*/>*/}
            <UncontrolledOnOff onClick={setOn} on={true}/>
            {on.toString()}


            <Select onClick={changeTitle} value={''} collapsed={collapsed} onChange={toggleItems} title={title} items={[
                {title: 'Alex', value: 1},
                {title: 'Leha', value: 2},
                {title: 'Gleb', value: 3}
            ]}/>

            <UncontrolledAccordion titleValue={"Users"}/>
        </div>
    );
}

// type PageTitlePropsType = {
//   title: string;
// };
//
// function PageTitle(props: PageTitlePropsType) {
//   console.log("PageTitle rendering");
//   return <h1>{props.title}</h1>;
// }

export default App;
