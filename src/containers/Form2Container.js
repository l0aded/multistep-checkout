import { connect } from 'react-redux';
import Form2 from './../components/f2.js'; // component
import submitForm2 from './../actions/submitForm2.js'; // action

//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.

const mapDispatchToProps = (dispatch) => {
  return {
    submitForm2: (tab, address1, address2, phone) => dispatch(submitForm2(tab, address1, address2, phone)),
  };
}

// const mapStateToProps = (state) => {
//   return {
//     videos: state.videoList,
//   };
// }

var Form2Container = connect(null, mapDispatchToProps)(Form2);

export default Form2Container;
