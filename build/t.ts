const enum Levels {
  CRITICAL = 50,
  ERROR = 40,
  WARNING = 30,
  INFO = 20,
  DEBUG = 10,
  NOTSET = 0
}

const handleMouseAction2 = (action: Levels): void => {
  switch (action) {
    case Levels.CRITICAL:
      console.log("Mouse Down");
      break;
  }
};

const enum MouseAction {
  MouseDown,
  MouseUpOutside,
  MouseUpInside
}

const handleMouseAction = (action: MouseAction): void => {
  switch (action) {
    case MouseAction.MouseDown:
      console.log("Mouse Down");
      break;
  }
};

enum requestWrongCodes {
  missingParameter = 'A',
  wrongParameter = 'B',
  invalidToken = 'C',
}
console.log(requestWrongCodes.wrongParameter) // 'B'
