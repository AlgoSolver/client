// primary : [1,2,3] light, ow:dark
// green, red, orange,teal,purple : [1,2] light, ow:dark
// dark :all:light
// gray: 1 light , ow:dark

export const theme = {
  colors: {
    primary: [
      "#374FC7",
      "#3E55CC",
      "#556BDA",
      "#8394ED",
      "#BEC8FB",
      "#DAE0FD",
      "#F7F8FF",
    ],
    red: [
      "#F2323F",
      "#FA3F48",
      "#FC5F64",
      "#FC9C9E",
      "#FCDCDD",
      "#FCDCDD",
      "#FCF2F2",
    ],
    green: [
      "#3DBA4E",
      "#47C257",
      "#5DD26D",
      "#8AE896",
      "#C2F7C9",
      "#DCFAE0",
      "#F7FCF8",
    ],
    yellow: [
      "#FCB017",
      "#FFBC21",
      "#FEC63D",
      "#FDE7B1",
      "#FDE7B1",
      "#FDF1D3",
      "#FCFAF4",
    ],
    orange: [
      "#F76F34",
      "#FC895E",
      "#FC895E",
      "#FCB59B",
      "#FCD4C6",
      "#FCE4DB",
      "#FCF4F0",
    ],
    teal: [
      "#23BA99",
      "#2EC39F",
      "#4FDCB9",
      "#93F4DB",
      "#C1F8EA",
      "#D8FAF2",
      "#F0FCF9",
    ],
    purple: [
      "#6B4BCC",
      "#7355D3",
      "#D8CEF9",
      "#BCAAF6",
      "#D8CEF9",
      "#F5F3FC",
      "#F5F3FC",
    ],

    dark: ["#141518", "#2C2D30", "#606266", "#7E8085", "#7E8085"],
    gray: ["#9FA1A6", "#BABDC2", "#D5D7DB", "#E8EAED", "#F8F9FA"],
    light: ["#FAFAFB", "#e2e2ea", "#f3f2f5", "#fafafc", "#ffffff"],
    blue: ["#004FC4", "#0063F7", "#5B8DEF", "#9DBFF9", "#E5F0FF"],
  },
  gradients: [
    "linear-gradient(45deg, #374FC7 0%, #6B4BCC 100%)",
    "linear-gradient(147.14deg, #FF8800 6.95%, #E63535 93.05%)",
    "linear-gradient(147.14deg, #3E7BFA 6.95%, #6600CC 93.05%)",
    "linear-gradient(147.14deg, #00CFDE 6.95%, #05A660 93.05%)",
    "linear-gradient(145.51deg, #FDDD48 7.21%, #00B7C4 94.47%)",
    "linear-gradient(147.14deg, #FF3B3B 6.95%, #6600CC 93.05%)",
    "linear-gradient(147.14deg, #73DFE7 6.95%, #0063F7 93.05%)",
    "linear-gradient(145.51deg, #AC5DD9 7.21%, #004FC4 94.47%)",
  ],
  elevation: [
    {
      shadow: "inset 0px 0.5px 4px rgba(96, 97, 112, 0.32)",
      desc: "-01 (inset) Focused input forms",
    },
    {
      shadow: "none",
      desc:
        "00 (Base) Background, Alerts, Button disabled, Input Forms disabled ",
    },
    {
      shadow:
        "0px 0px 1px rgba(40, 41, 61, 0.08), 0px 0.5px 2px rgba(96, 97, 112, 0.16)",
      desc: "01 Card, Pressed button, Progressive button",
    },
    {
      shadow:
        "0px 0px 1px rgba(40, 41, 61, 0.04), 0px 2px 4px rgba(96, 97, 112, 0.16)",
      desc: "02 Button, Notification badges",
    },
    {
      shadow:
        " 0px 0px 2px rgba(40, 41, 61, 0.04), 0px 4px 8px rgba(96, 97, 112, 0.16)",
      desc: "03 Navigation Menu, Bar",
    },
    {
      shadow:
        "0px 2px 4px rgba(40, 41, 61, 0.04), 0px 8px 16px rgba(96, 97, 112, 0.16)",
      desc: "04 Card Raised, Button Raised, Dropdown Menu",
    },
    {
      shadow:
        "0px 2px 8px rgba(40, 41, 61, 0.04), 0px 16px 24px rgba(96, 97, 112, 0.16)",
      desc: "05 Picker, Popover",
    },
    {
      shadow:
        "0px 2px 8px rgba(40, 41, 61, 0.08), 0px 20px 32px rgba(96, 97, 112, 0.24)",
      desc: "06 Modals, Dialogue",
    },
    {
      shadow: "inset 0px -1px 0px #e2e2ea",
      desc: "07 bottom navbar",
    },
    {
      shadow:
        " 0 10px 15px -3px rgba(0,0,0,0.1),0 4px 6px -2px rgba(0,0,0,0.05)",
      desc: "08 box  shadow ",
    },
    {
      shadow:"rgb(0 0 0 / 10%) 0px 1px 2px, rgb(0 0 0 / 8%) 0px 2px 8px",
      desc:"09"
    }
  ],
  breakpoints: {
    phone: "max-width: 37.5em", // 600px
    bigPhone: "max-width:47.9375em", // 767px;
    tabPort: "max-width: 56.25em", //900px
    tabLAnd: "max-width: 75em", //1200px
    bigDesktop: "min-width: 112.5em", //1800px
  },
  sizes: {
    nav: "6.4rem",
  },
};
