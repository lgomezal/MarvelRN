import View from './view'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        heroe: state.heroes.item,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(View)
