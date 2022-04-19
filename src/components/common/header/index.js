import './header.css';
import { MdDashboard } from 'react-icons/md';
import {GoSearch} from 'react-icons/go'


const Header = () => {
    return (
        <div className='header'>
            <div className='header-menu'>
                <MdDashboard />
            </div>
            <div className='header-leftFold'>
                <label className='header-label'>Microsoft Teams </label>
            </div>
            <div className='header-rightFold'>
               <div className='header-search'>
                    <GoSearch />
                    <input placeholder='search'/>
                    
               </div>
            </div>
        </div>
    )
};

export default Header;