import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Rating, RatingValueType } from "./Rating";

const meta: Meta<typeof Rating> = {
  title: "Rating Stories",
  component: Rating,
};

export default meta;

type RatingType = StoryObj<typeof meta>;

// export const Base: RatingType = {
//   args: {
//   },
// };

export const EmptyRating: RatingType = {
  args: {
    value: 0,
    onClick: () => {},
  },
};
export const Rating1: RatingType = {
  args: {
    value: 1,
    onClick: () => {},
  },
};
export const Rating2: RatingType = {
  args: {
    value: 2,
    onClick: () => {},
  },
};
export const Rating3: RatingType = {
  args: {
    value: 3,
    onClick: () => {},
  },
};
export const Rating4: RatingType = {
  args: {
    value: 4,
    onClick: () => {},
  },
};
export const Rating5: RatingType = {
  args: {
    value: 5,
    onClick: () => {},
  },
};

export const ChangeRating: RatingType = {
  render: (args) => {
    // eslint-disable-next-line
    const [rat, setRating] = React.useState<RatingValueType>(1);

    return <Rating {...args} value={rat} onClick={setRating} />;
  },
};
