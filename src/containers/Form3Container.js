import { connect } from 'react-redux';
import Form3 from './../components/f3.js'; // component
import submitForm3 from './../actions/submitForm3.js'; // action

const mapDispatchToProps = (dispatch) => {
  return {
    submitForm3: (tab, credit, expire, cvv, billing) => dispatch(submitForm3(tab, credit, expire, cvv, billing)),
  };
}


var Form3Container = connect(null, mapDispatchToProps)(Form3);

export default Form3Container;
