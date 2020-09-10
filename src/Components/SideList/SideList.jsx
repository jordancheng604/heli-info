import React from 'react';
import './SideList.scss';
import {Link, withRouter} from 'react-router-dom';

class SideList extends React.Component {
    render(){
        let heliList = this.props.heliList
    return (
        <div className="SideList">
           {heliList.map(aircraft=>{return(
               <Link to={`/${aircraft.model_name}`}>
                   <li className='SideList__card' key={aircraft.id}>
                       <img className='SideList__image'src={aircraft.image} alt=""/>
                       <div>
                           <div className='SideList__make'>{aircraft.manufacturer_code}</div>
                           <div className='SideList__model'>{aircraft.model_name}</div>
                       </div>

                   </li>
               </Link>
           )})}

        </div>
    )}
}
export default withRouter(SideList);