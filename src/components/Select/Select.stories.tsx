import React, {ChangeEvent, useState} from "react";
import type {Meta, StoryObj} from "@storybook/react";

import {Select} from "./Select";

const meta: Meta<typeof Select> = {
    title: "Select",
    component: Select,
};

export default meta;

type Select = StoryObj<typeof meta>;

export const Collapsed: Select = {
    args: {
        onChange: () => {
        },
        items: [{title: 'Alex', value: 1}, {title: 'Leha', value: 2}, {title: 'Gleb', value: 3}],
    },
};
export const ChangingSelect: Select = {
    render: (args) => {
        // eslint-disable-next-line
        const [value, setValue] = useState(1);
        // eslint-disable-next-line

        return (
            <Select
                {...args}
                onChange={setValue}
                value={value}
                items={[
                    {title: 'Alex', value: 1},
                    {title: 'Leha', value: 2},
                    {title: 'Gleb', value: 3}
                ]}
            />
        );
    },
};