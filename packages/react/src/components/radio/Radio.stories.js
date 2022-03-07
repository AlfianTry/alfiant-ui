import Radio from "./Radio";

export default {
  title: 'Radio',
};

const Template = (args) => <Radio {...args} />

export const Basic = Template.bind({});
Basic.args = {
  disabled: false,
  label: 'Dengan mencentang ini, saya menyatakan menyetujui Ketentuan Layanan dan Kebijakan Majoo.'
};
