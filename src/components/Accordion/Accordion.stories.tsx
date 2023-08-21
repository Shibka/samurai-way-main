import React, {useState} from "react";
import type {Meta, StoryObj} from "@storybook/react";

import {Accordion} from "./Accordion";

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
        onChange: () => {
        },
        items: [{title: 'Alex', value: 1}, {title: 'Leha', value: 2}, {title: 'Gleb', value: 3}],
        onClick: () => {
        }
    },
};

export const UnCollapsed: Accordion = {
    args: {
        titleValue: "Hello",
        collapsed: false,
        onChange: () => {
        },
        items: [{title: 'Alex', value: 1}, {title: 'Leha', value: 2}, {title: 'Gleb', value: 3}],
        onClick: () => {
        }
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
