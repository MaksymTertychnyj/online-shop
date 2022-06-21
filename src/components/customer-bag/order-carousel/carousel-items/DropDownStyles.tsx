const DropDownStyles = {
  control: (provided: any) => ({
    ...provided,
    background: "#fff",
    borderColor: "#9e9e9e",
    minHeight: "25px",
    height: "25px",
    padding: "auto",
    marginTop: "5px",
    fontSize: "13px",
  }),

  valueContainer: ({ provided }: any) => ({
    ...provided,
    height: "25px",
    width: "120px",
    margin: "auto",
    marginTop: "2px",
    textAlign: "center",
  }),

  input: (provided: any) => ({
    ...provided,
    margin: "auto",
    height: "20px",
  }),

  indicatorsContainer: (provided: any) => ({
    ...provided,
    height: "25px",
  }),
};

export default DropDownStyles;
