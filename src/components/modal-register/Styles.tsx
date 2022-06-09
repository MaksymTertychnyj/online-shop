import { style } from "typestyle";

const Styles = {
  input: style({
    width: 200,
    height: 30,
    fontSize: 14,
    textOverflow: "ellipsis",
  }),

  label: style({
    fontSize: 13,
    fontWeight: "bold",
  }),

  footer: style({
    justifyContent: "center",
  }),

  phoneInput: style({
    width: 50,
    height: 50,
  }),
};

export default Styles;
