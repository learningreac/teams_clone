import './left-fold.css';
import MenuItems from './MenuItems';
import DialerList from './DialerList';
import { HiOutlineMicrophone } from 'react-icons/hi';
import { MdOutlineSlowMotionVideo } from 'react-icons/md';

const LeftFold = () => {
    return (
        <div className='leftfold'>
            <div className='leftfold-menu'>
                <label className='menu-label'>Calls</label>
                <MenuItems />
            </div>
            <div className='leftfold-dialer'>
                <label className='dialer-label'> Make a call </label>
                <div className='dialer-search'>
                    <input placeholder='Type a name' />
                </div>
                <DialerList />
                <div className='dialer-bottom'>
                    <HiOutlineMicrophone className='dialer-bottom-icon' />
                    <MdOutlineSlowMotionVideo className='dialer-bottom-icon' />
                </div>
            </div>
        </div>
    )
};

export default LeftFold;