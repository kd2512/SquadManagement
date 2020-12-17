import React, {Component} from 'react' ;
import { connect } from 'react-redux';
import { deleteCharacterById } from '../actions'

class HeroList extends React.Component{
    render(){
        return(
            <div>
                <h4>Your Hero Squad</h4>
                <ul className="list-group">
                    {
                        this.props.heroes.map(hero => {
                            return(
                                <li key={hero.id} className="list-group-item">
                                    <div className="list-item">
                                        {hero.name}
                                    </div>
                                    <div onClick={()=> this.props.deleteCharacterById(hero.id)} 
                                    className="list-item right-button">
                                        --
                                    </div>
                                </li>

                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        heroes : state.heroes
    }
}

export default connect(mapStateToProps, {deleteCharacterById}) (HeroList) ;