import { connect } from 'react-redux';
import Form2 from './../components/f2.js'; // component
import submitForm2 from './../actions/submitForm2.js'; // action

const mapDispatchToProps = (dispatch) => {
  return {
    submitForm2: (tab, address1, address2, phone) => dispatch(submitForm2(tab, address1, address2, phone)),
  };
}

var Form2Container = connect(null, mapDispatchToProps)(Form2);

export default Form2Container;
