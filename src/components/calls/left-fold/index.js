import './left-fold.css';
import Menu from './Menu';

const LeftFold = () => {
    return (
        <div className='leftfold'>
            <div className='leftfold-menu'>
                <label className='menu-label'>Calls</label>
                <Menu />
            </div>
            <div className='leftfold-dialer'>
                <label className='dialer-label'> Suggested </label>
            </div>
            <div className='dialer-search'>
                <input placeholder='Type a name' />
            </div>
        </div>
    )
};

export default LeftFold;