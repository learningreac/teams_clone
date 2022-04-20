import "./dialer-item.css";
import { FaRegUser } from 'react-icons/fa';
import { HiOutlineMicrophone } from 'react-icons/hi';
import { MdOutlineSlowMotionVideo } from 'react-icons/md';

const DialerItem = ({item}) => {
    return (
      
            <div className="dialer-item">
                <FaRegUser className="item-avatar" />
                <div className="item-info">
                    <label className="item-title">{item.name}</label>
                    <label className="item-subtitle">{item.type}</label>
                </div>
                <div className="item-icons">
                    <HiOutlineMicrophone className="item-icon" />
                    <MdOutlineSlowMotionVideo className="item-icon" />
                </div>
            </div>

      
    )
};

export default DialerItem;