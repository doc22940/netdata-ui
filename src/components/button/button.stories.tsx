import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { text, boolean } from "@storybook/addon-knobs"
import { readmeCleanup } from "../../../utils/readme"
import Button from "."

// @ts-ignore
import readme from "./README.md"
import { ButtonType } from "./button"
import { Icon } from "../icon"

const mockStory = storiesOf("Button", module)

const subData = {
  readme: {
    sidebar: readmeCleanup(readme),
  },
  jest: ["button.test.tsx"],
}

mockStory.add(
  "Button Default",
  () => {
    return (
      <Button
        disabled={boolean("Disabled", false)}
        type={ButtonType.default}
        label={text("Label prop", "LABEL")}
        onClick={action("clicked")}
      />
    )
  },
  subData
)

mockStory.add(
  "Button No Fill",
  () => (
    <Button
      disabled={boolean("Disabled", false)}
      type={ButtonType.noFill}
      onClick={action("clicked")}
      label={text("Label", "LABEL")}
    />
  ),
  subData
)

mockStory.add(
  "Button Icon",
  () => (
    <Button
      icon={<Icon name={text("name", "plus")} />}
      disabled={boolean("Disabled", false)}
      type={ButtonType.default}
      onClick={action("clicked")}
    />
  ),
  subData
)

mockStory.add(
  "Button Icon No Fill",
  () => (
    <Button
      icon={<Icon name={text("name", "+")} />}
      disabled={boolean("Disabled", false)}
      type={ButtonType.noFill}
      onClick={action("clicked")}
      label={text("Label", "LABEL")}
    />
  ),
  subData
)
