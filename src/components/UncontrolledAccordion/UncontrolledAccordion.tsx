import React, { useState } from "react";

type AccordionPropsType = {
  titleValue: string;
  // collapsed: boolean;
};

function UncontrolledAccordion(props: AccordionPropsType) {
  let [collapsed, setCollapsed] = useState(true);

  return (
    <div>
      <AccordionTitle
        title={props.titleValue}
        onClick={() => setCollapsed(!collapsed)}
      />
      {collapsed && <AccordionBody />}
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
