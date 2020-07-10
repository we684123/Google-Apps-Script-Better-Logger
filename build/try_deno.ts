const enum MouseAction {
  MouseDown = 50,
  MouseUpOutside = 40,
  MouseUpInside = 30
}

const handleMouseAction = (action: MouseAction) => {
  console.log("action = " + action);

  switch (action) {
    case MouseAction.MouseDown:
      console.log("Mouse Down");
      break;
    case MouseAction.MouseUpOutside:
      console.log("Mouse MouseUpOutside");
      break;
    case MouseAction.MouseUpInside:
      console.log("Mouse MouseUpInside");
      break;
  }
};
// handleMouseAction(MouseAction.MouseDown)
// handleMouseAction(MouseAction.MouseUpOutside)
// handleMouseAction(MouseAction.MouseUpInside)
console.log(MouseAction[50]);
