import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Rating, RatingValueType } from "./Rating";

const meta: Meta<typeof Rating> = {
  title: "Rating Stories",
  component: Rating,
};

export default meta;

type Story = StoryObj<typeof meta>;

// export const Base: Story = {
//   args: {
//   },
// };

export const EmptyRating: Story = {
  args: {
    value: 0,
    onClick: () => {},
  },
};
export const Rating1: Story = {
  args: {
    value: 1,
    onClick: () => {},
  },
};
export const Rating2: Story = {
  args: {
    value: 2,
    onClick: () => {},
  },
};
export const Rating3: Story = {
  args: {
    value: 3,
    onClick: () => {},
  },
};
export const Rating4: Story = {
  args: {
    value: 4,
    onClick: () => {},
  },
};
export const Rating5: Story = {
  args: {
    value: 5,
    onClick: () => {},
  },
};

export const ChangeRating: Story = {
  render: (args) => {
    // eslint-disable-next-line
    const [rat, setRating] = React.useState<RatingValueType>(1);

    return <Rating {...args} value={rat} onClick={setRating} />;
  },
};
