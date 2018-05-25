import { connect } from 'react-redux';
import Form1 from './../components/f1.js'; // component
import submitForm1 from './../actions/submitForm1.js'; // action

const mapDispatchToProps = (dispatch) => {
  return {
    submitForm1: (tab, name, email, password) => dispatch(submitForm1(tab, name, email, password)),
  };
}

var Form1Container = connect(null, mapDispatchToProps)(Form1);

export default Form1Container;
