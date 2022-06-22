import { style } from "typestyle";

const NavigationBarStyles = {
  image: style({
    width: 30,
    height: 30,
    borderRadius: 5,
  }),

  bagButton: style({
    width: 35,
    marginLeft: 20,
  }),

  bagPrice: style({
    fontSize: 10,
    color: "red",
  }),

  link: style({
    color: "#dcdcdc",
    marginLeft: 20,
  }),
};

export default NavigationBarStyles;
