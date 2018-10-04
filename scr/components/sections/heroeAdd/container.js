import View from './view'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        isFetching: state.heroes.isFetching
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(View)