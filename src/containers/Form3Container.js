import { connect } from 'react-redux';
import Form3 from './../components/f3.js'; // component
import submitForm3 from './../actions/submitForm3.js'; // action

//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.

const mapDispatchToProps = (dispatch) => {
  return {
    submitForm3: (tab, credit, expire, cvv, billing) => dispatch(submitForm3(tab, credit, expire, cvv, billing)),
  };
}


var Form3Container = connect(null, mapDispatchToProps)(Form3);

export default Form3Container;
