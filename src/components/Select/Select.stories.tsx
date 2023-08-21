import React, {useState} from "react";
import type {Meta, StoryObj} from "@storybook/react";

import {Select} from "./Select";

const meta: Meta<typeof Select> = {
    title: "Select",
    component: Select,
};

export default meta;

type Select = StoryObj<typeof meta>;

// export const Collapsed: Select = {
//     args: {
//         titleValue: "Menu",
//         collapsed: true,
//         onChange: () => {
//         },
//         items: [{title: 'Alex', value: 1}, {title: 'Leha', value: 2}, {title: 'Gleb', value: 3}],
//         onClick: () => {
//         }
//     },
// };
export const ChangingSelect: Select = {
    render: (args) => {
        // eslint-disable-next-line
        const [value, setValue] = useState(true);

        return (
            <Select
                {...args}
                title={'Select'}
                collapsed={value}
                onChange={() => setValue(!value)}
                onClick={(id) => {
                    alert(`user with ID ${id}, Hello`)
                }}
                items={[
                    {title: 'Alex', value: 1},
                    {title: 'Leha', value: 2},
                    {title: 'Gleb', value: 3}
                ]}
            />
        );
    },
};