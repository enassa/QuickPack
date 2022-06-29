import React from "react";
import { StoryBookHead } from "../../../components/common/storybook-header/storybook-header";

export default {
  title: "Example/StoryBookHead",
  component: StoryBookHead,
};

const Template = (args) => <StoryBookHead {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
