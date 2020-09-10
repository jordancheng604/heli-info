import React from 'react';
import axios from 'axios';
import NavBar from './NavBar/NavBar';
import { withRouter } from 'react-router-dom';
import './Main.scss';
import SideList from './SideList/SideList';
import OneHeli from './OneHeli/OneHeli';

class Main extends React.Component {
    state = {
        data: [],
        mainAircraft: {},
    }
    async componentDidMount(props){
        axios.get('https://heli-info.herokuapp.com/list')
        .then(res=>{this.setState({data: res.data})})
        .catch(console.error("An error occured with the list."))

        axios.get('https://heli-info.herokuapp.com/Chinook')
        .then(res=>{this.setState({mainAircraft: res.data})})
    }
    componentDidUpdate(prevProps){
        if(this.props.match.params !== prevProps.match.params){
            axios.get(`https://heli-info.herokuapp.com/${this.props.match.params.modelname}`)
            .then(res=>{this.setState({mainAircraft: res.data})})
            .catch(console.error())
        }
    }

    render(props) {
    return (
        <div>
            <NavBar/>
            <SideList heliList={this.state.data} classname="SideList"/>
            <OneHeli  singleAircraft={this.state.mainAircraft}/>
        </div>
    )}
}
export default withRouter(Main);
