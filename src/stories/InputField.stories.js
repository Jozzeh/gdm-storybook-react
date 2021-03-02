import React from 'react';

import InputField from './InputField';

export default {
  title: 'Example/InputField',
  component: InputField,
};

const Template = (args) => <InputField {...args} />;

export const InputVeld = Template.bind({});
InputVeld.args = {
  value: "",
  placeholder: "Test",
  label: 'Vul hier iets in',
  onChange: (value) => {console.log(value)} 
};
