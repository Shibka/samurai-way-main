import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { OnOff } from "./OnOff";
import actions from "redux-form/lib/actions";

const meta: Meta<typeof OnOff> = {
  title: "OnOff",
  component: OnOff,
};

export default meta;

type OnOffType = StoryObj<typeof meta>;

export const OnMode: OnOffType = {
  args: {
    on: true,
    onClick: () => {},
  },
};

export const OffMode: OnOffType = {
  args: {
    on: false,
    onClick: () => {},
  },
};
export const ModeChange: OnOffType = {
  render: (args) => {
    // eslint-disable-next-line
    const [value, setValue] = useState(true);

    return <OnOff {...args} on={value} onClick={setValue} />;
  },
};
