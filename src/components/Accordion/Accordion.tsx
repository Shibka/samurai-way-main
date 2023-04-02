import React from "react";

type AccordionPropsType = {
  titleValue: string;
  collapsed: boolean;
};

function Accordion(props: AccordionPropsType) {
  if (props.collapsed === true) {
    return (
      <>
        <AccordionTitle title={props.titleValue} />
        <AccordionBody />
      </>
    );
  }
  return (
    <>
      <AccordionTitle title={props.titleValue} />
    </>
  );
}

type AccordionTitlePropsType = {
  title: string;
};

function AccordionTitle(props: AccordionTitlePropsType) {
  return (
    <>
      <h3>{props.title}</h3>
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

export default Accordion;
