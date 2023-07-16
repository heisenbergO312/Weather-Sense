const styleTime = {
  fontFamily: "Quicksand",
  fontSize: "21px",
  position: "absolute",
  fontWeight:"600",
  top: "10px",
  left: "10px"
};
const styleDay = {
  fontFamily: "Quicksand",
  fontSize: "22px",
  fontWeight:"600",
  position: "absolute",
  top: "10px",
  right: "10px"
};
const stylewindSpeed = {
  fontWeight:"600",
  fontSize: "21px",
  position: "absolute",
  fontFamily: "Quicksand",
  bottom: "10px",
  left: "10px"
};
const stylehumidity = {
  fontWeight:"600",
  fontSize: "21px",
  fontFamily: "Quicksand",
  position: "absolute",
  bottom: "10px",
  right: "10px"
};
const styletemp = {
  fontFamily: "Lato",
  position: "absolute",
  top: "55%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  fontSize: "70px"
};
const stylename = {
  fontFamily: "Oxygen",
  position: "absolute",
  top: "29%",
  left: "65%",
  fontWeight: "",
  transform: "translate(-50%, -50%)",
  fontSize: "1.4em"
};

const styledescription = {
  fontFamily: "Oxygen",
  position: "absolute",
  top: "39%",
  left: "65%",
  fontWeight: "",
  transform: "translate(-50%, -50%)",
  fontSize: "0.8em"
};

const weatherFrame = {
  color:"white",
  backgroundColor:"transparent",
  height: "350px",
  width: "450px",
  position: "relative",
  top: "0",
  bottom: "0",
  left: "0",
  right: "0",
  margin: "auto"
};

const styleInput = {
  backgroundColor:"transparent",
  marginTop: "100px",
  marginBottom: "20px",
  borderRadius: "40px",
  width: "350px",
  marginLeft: "auto",
  marginRight: "auto"
};
const styleIcon = {
  position: "absolute",
  top: "35%",
  left: "40%",
  transform: "translate(-50%, -50%)",
  fontSize: "1em"
};
const styleBox={
  "& .MuiInputBase-input": {
    color: "white" 
  },
  // "& .MuiAutocomplete-popup": {
  //   backgroundColor: "transparent",
  // },
  // "& .MuiAutocomplete-listbox": {
  //   backgroundColor: "transparent",
  // },
  // '& :-webkit-autofill': {
  //   '-webkit-text-fill-color': 'white',
  //   '-webkit-box-shadow': '0 0 0px 1000px #00000000 inset',
  // },   
  '& :-webkit-autofill': {
    'transition-delay': '9999s'
  },
};
export {
  styleTime,
  styleDay,
  stylewindSpeed,
  stylehumidity,
  styletemp,
  weatherFrame,
  styleInput,
  stylename,
  styledescription,
  styleIcon,
  styleBox
};
