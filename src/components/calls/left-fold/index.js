import './left-fold.css';
import MenuItems from './Menu-items';
import DialerList from './DialerList';

const LeftFold = () => {
    return (
        <div className='leftfold'>
            <div className='leftfold-menu'>
                <label className='menu-label'>Calls</label>
                <MenuItems />
            </div>
            <div className='leftfold-dialer'>
                <label className='dialer-label'> Suggested </label>
            </div>
            <div className='dialer-search'>
                <input placeholder='Type a name' />
            </div>
            <DialerList />
        </div>
    )
};

export default LeftFold;