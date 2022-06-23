import { style } from "typestyle";

const Styles = {
  container: style({
    paddingTop: 25,
    paddingBottom: 20,
  }),

  buttonChange: style({
    width: 80,
    fontSize: 14,
  }),

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
};

export default Styles;
