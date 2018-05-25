import { connect } from 'react-redux';
import Checkout from './../components/checkout.js'
import submitCart from './../actions/submitCart.js'


const mapDispatchToProps = (dispatch) => {
  return {
    submitCart: (tab) => dispatch(submitCart(tab)),
  };
}

const mapStateToProps = (state) => {
  console.log('checkout states', state)
  return {
    tab: state.formReducer.tab,
    name: state.formReducer.name,
    email: state.formReducer.email,
    password: state.formReducer.password,
    address1: state.formReducer.address1,
    address2: state.formReducer.address2,
    phone: state.formReducer.phone,
    credit: state.formReducer.credit,
    expire: state.formReducer.expire,
    cvv: state.formReducer.cvv,
    billing: state.formReducer.billing,
  };
}

const CheckoutContainer = connect(mapStateToProps, mapDispatchToProps)(Checkout);

export default CheckoutContainer;
