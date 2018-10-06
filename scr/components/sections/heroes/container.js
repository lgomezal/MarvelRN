import View from './view'
import { connect } from 'react-redux'
import * as HeroesActions from '../../../redux/heroes/actions'
import { Actions } from 'react-native-router-flux'

const mapStateToProps = (state) => {
    return {
        isFetching: state.heroes.isFetching,
        list: state.heroes.list,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchHeroesList: () => {
            dispatch(HeroesActions.fetchHeroesList())
        },
        onHeroeTapped: (heroe) => {
            dispatch(HeroesActions.setItem(heroe))
            Actions.heroeDetail({ title: heroe.name })
        },
        fetchHeroesListFiltered: (text) => {
            dispatch(HeroesActions.fetchHeroesListFiltered(text))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(View)
