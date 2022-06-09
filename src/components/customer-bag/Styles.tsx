import { style } from "typestyle";

const Styles = {
  container: style({
    alignItems: "center",
    marginBottom: 20,
  }),

  body: style({
    height: 250,
    fontSize: 13,
    fontWeight: "bold",
  }),

  image: style({
    marginTop: 15,
    width: 60,
    height: 70,
  }),

  bodyItem: style({
    fontWeight: "normal",
    fontSize: 14,
    marginLeft: 5,
  }),

  textHeader: style({
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
  }),
};
export default Styles;
