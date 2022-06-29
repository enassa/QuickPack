import React from "react";
import { StoryBookPage } from "../../../components/pages/storybook-page/storybook-page";
import HeaderStories from "../../common/storybook-head/storybook-head.stories";

export default {
  title: "Example/StoryBookPage",
  component: StoryBookPage,
};

const Template = (args) => <StoryBookPage {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  // More on composing args: https://storybook.js.org/docs/react/writing-stories/args#args-composition
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};
