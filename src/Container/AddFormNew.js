import { connect } from 'react-redux';
import AddFormNew from '../Component/AddFormNew';
import { sendData } from '../Action/Index';

const mapDispatchToProps = dispatch => ({
    sendData: (name, price, descript) => {
        dispatch(sendData(name, price, descript))
    }
})

export default connect (
    null,
    mapDispatchToProps
)(AddFormNew)