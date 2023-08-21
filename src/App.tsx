import React, { useState } from "react";
import "./App.css";
import {Accordion} from "./components/Accordion/Accordion";
import { Rating, RatingValueType } from "./components/Rating/Rating";
import {UncontrolledOnOff} from "./components/UncontrolledOnOf/UncontrolledOnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import { UncontrolledRating } from "./components/UncontrolledRating/UncontrolledRating";
import { OnOff } from "./components/OnOff/OnOff";
import {Select} from "./components/Select/Select";

function App() {
  console.log("App rendering");

  let [ratingValue, setRatingValue] = useState<RatingValueType>(4);
  let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true);
  let [on, setOn] = useState<boolean>(true);
  return (
    <div className={"App"}>
      {/*<OnOff on={on} onClick={setOn} />*/}

      <UncontrolledOnOff onClick={setOn} on={true}/>
      {on.toString()}
      {/*<Accordion*/}
      {/*  titleValue={"Main"}*/}
      {/*  collapsed={accordionCollapsed}*/}
      {/*  onClick={() => {*/}
      {/*    setAccordionCollapsed(!accordionCollapsed);*/}
      {/*  }}*/}
      {/*/>*/}
        <Select onClick={()=>{}} value={''} collapsed={false} onChange={()=>{}} title={'dds'} items={[
                {title: 'Alex', value: 1},
        {title: 'Leha', value: 2},
        {title: 'Gleb', value: 3}
            ]}/>

      <UncontrolledAccordion titleValue={"Users"} />
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
