import React from "react";
import Popover from ".";
import Button from "components/Button";

export default {
  title: "UI 组件/Popover",
  components: Popover,
};

export const Default = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "50vh",
    }}
  >
    <Popover content="Hello! ">
      <Button shape="rect">点击</Button>
    </Popover>
  </div>
);

export const WithOffset = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "50vh",
    }}
  >
    <Popover offset={{ x: "-25%" }} content="Hello! ">
      <Button shape="rect">点击</Button>
    </Popover>
  </div>
);
