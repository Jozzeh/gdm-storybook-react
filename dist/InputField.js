import { useState } from "react";
import PropTypes from "prop-types";

function InputField(props) {
  const {
    label,
    value,
    onChange,
    placeholder
  } = props;
  const [inputValue, setInputValue] = useState("");

  function handleChange(e) {
    setInputValue(e.target.value);
    onChange(e.target.value);
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "Labeltje"
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "text",
    onChange: e => {
      handleChange(e);
    },
    value: inputValue ? inputValue : value,
    placeholder: placeholder
  }));
}

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired
};
InputField.defaultProps = {
  label: "Input",
  placeholder: "",
  value: ""
};
export default InputField;