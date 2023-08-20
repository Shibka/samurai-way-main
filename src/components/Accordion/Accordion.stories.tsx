import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Accordion } from "./Accordion";

const meta: Meta<typeof Accordion> = {
  title: "Accordion",
  component: Accordion,
};

export default meta;

type Accordion = StoryObj<typeof meta>;

export const Collapsed: Accordion = {
  args: {
    titleValue: "Menu",
    collapsed: true,
    onClick: () => {},
  },
};

export const UnCollapsed: Accordion = {
  args: {
    titleValue: "Hello",
    collapsed: false,
    onClick: () => {},
  },
};
export const ChangingAccordion: Accordion = {
  render: (args) => {
    // eslint-disable-next-line
    const [value, setValue] = useState(true);

    return (
      <Accordion
        {...args}
        titleValue={"New"}
        collapsed={value}
        onClick={() => setValue(!value)}
      />
    );
  },
};
