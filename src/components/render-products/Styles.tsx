import { style } from "typestyle";

const Styles = {
  body: style({
    height: 60,
  }),

  buttonLeftSide: style({
    height: 25,
    backgroundColor: "#FFA500",
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    fontSize: 13,
    color: "white",
    textOverflow: "ellipsis",
    cursor: "default",
  }),

  buttonRightSide: style({
    height: 25,
    backgroundColor: "#12AD2B",
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    fontSize: 13,
    color: "white",
    cursor: "pointer",
  }),

  textButton: style({
    marginTop: 2,
  }),

  image: style({
    height: 140,
    marginTop: 3,
  }),

  popover: style({
    // width: 300,
    //height: 100,
    paddingLeft: 10,
  }),
};

export default Styles;
