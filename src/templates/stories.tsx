import { ComponentMeta, ComponentStory } from '@storybook/react'

import COMPONENT_NAME from '.'

export default {
  title: 'Elements/COMPONENT_NAME',
  component: COMPONENT_NAME
} as ComponentMeta<typeof COMPONENT_NAME>

type COMPONENT_NAMEStory = ComponentStory<typeof COMPONENT_NAME>

const StoryTemplate = (args: COMPONENT_NAMEStory) => <COMPONENT_NAME {...args} />

export const MyStory = StoryTemplate.bind({})
MyStory.args = {
  // ...
}


