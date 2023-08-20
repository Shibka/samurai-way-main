import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { UncontrolledOnOff } from "./UncontrolledOnOff";
import actions from "redux-form/lib/actions";

const meta: Meta<typeof UncontrolledOnOff> = {
  title: "UncontrolledOnOff",
  component: UncontrolledOnOff,
};

export default meta;

type UncontrolledOnOffType = StoryObj<typeof meta>;

export const OnMode: UncontrolledOnOffType = {
  args: {
    on: true,
    onClick: () => {},
  },
};

export const OffMode: UncontrolledOnOffType = {
  args: {
    on: false,
    onClick: () => {},
  },
};
export const ModeChange: UncontrolledOnOffType = {
  render: (args) => {
    // eslint-disable-next-line
    const [value, setValue] = useState(true);

    return <UncontrolledOnOff {...args} on={value} onClick={setValue} />;
  },
};
