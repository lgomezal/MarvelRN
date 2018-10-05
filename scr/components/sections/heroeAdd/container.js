import View from './view'
import { connect } from 'react-redux'
import * as HeroesActions from '../../../redux/heroes/actions'

const mapStateToProps = (state) => {
    return {
        isFetching: state.heroes.isFetching
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onSubmitHeroe: (data) => {
            dispatch(HeroesActions.postHeroe(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(View)