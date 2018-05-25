import { connect } from 'react-redux';
import App from './../app.js';


const mapStateToProps = (state) => {
  return {
    tab: state.formReducer.tab || 'F1'
  };
}

const AppContainer = connect(mapStateToProps, null)(App);

export default AppContainer;
