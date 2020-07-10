const enum MouseAction {
  MouseDown,
  MouseUpOutside,
  MouseUpInside
}

const handleMouseAction = (action: MouseAction) => {
  switch (action) {
    case MouseAction.MouseDown:
      console.log("Mouse Down");
      break;
  }
};
function t1() {
  handleMouseAction(MouseAction.MouseDown)
}
