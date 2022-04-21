import DialerItem from "./DialerItem";
import {dialerlistdata} from '../../../data/calls.js';


const DialerList = () => {
    return (
        <div className="dialer-suggested">
            <label className="suggested-label">Suggested</label>
            <div className="suggested-list">
               {dialerlistdata.map(item => <DialerItem key={item.id} item={item}/>)}
            </div>
        </div>
    )
};

export default DialerList;