import React, { useState } from "react";
import "./App.css";
import Accordion from "./components/Accordion/Accordion";
import { Rating, RatingValueType } from "./components/Rating/Rating";
import UncontrolledOnOff from "./components/OnOff/UncontrolledOnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import { UncontrolledRating } from "./components/UncontrolledRating/UncontrolledRating";
import OnOff from "./components/OnOff/OnOff";

function App() {
  console.log("App rendering");

  let [ratingValue, setRatingValue] = useState<RatingValueType>(4);
  let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true);
  let [on, setOn] = useState<boolean>(true);
  return (
    <div className={"App"}>
      {/*<OnOff on={on} onClick={setOn} />*/}

      <UncontrolledOnOff onClick={setOn} />
      {on.toString()}
      {/*<UncontrolledOnOff />*/}
      {/*<UncontrolledOnOff />*/}
      <Accordion
        titleValue={"Main"}
        collapsed={accordionCollapsed}
        onClick={() => {
          setAccordionCollapsed(!accordionCollapsed);
        }}
      />
      <UncontrolledAccordion titleValue={"Users"} />

      {/*<Rating value={ratingValue} onClick={setRatingValue} />*/}
      {/*<UncontrolledRating />*/}

      {/*<PageTitle title={"This is App component"} />*/}
      {/*<PageTitle title={"My friends"} />*/}
      {/*Article 1*/}
      {/*<UncontrolledRating value={0} />*/}
      {/*<Accordion titleValue={"Menu"} collapsed={true} />*/}
      {/*<Accordion titleValue={"Users"} collapsed={false} />*/}
      {/*Article 2*/}
      {/*<UncontrolledRating value={1} />*/}
      {/*<UncontrolledRating value={2} />*/}
      {/*<UncontrolledRating value={3} />*/}
      {/*<UncontrolledRating value={4} />*/}
      {/*<UncontrolledRating value={5} />*/}
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
