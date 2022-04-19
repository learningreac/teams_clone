import { FaRegBell, FaTasks, FaRegCalendarAlt, FaHeadphonesAlt, FaRegFile } from 'react-icons/fa';
import { BsChatRightText } from 'react-icons/bs';
import { FiUsers } from 'react-icons/fi';
import { BsThreeDots } from 'react-icons/bs'


const SidebarTop = ({handleOptionClick}) => {
    //const classList = isActive? "sidebar-option active" : "sidebar-option";
    // to do add isActive


    return (
        <div className="sidebar-top" onClick={handleOptionClick}>
            <div className="sidebar-option" id='activity'>
                <FaRegBell className='sidebar-icon' />
                <label className='sidebar-label'> Activity </label>
            </div>

            <div className="sidebar-option" id='chat'>
                <BsChatRightText className='sidebar-icon' />
                <label className='sidebar-label'> Chat </label>
            </div>

            <div className="sidebar-option" id='teams'>
                <FiUsers className='sidebar-icon' />
                <label className='sidebar-label'> Teams </label>
            </div>

            <div className="sidebar-option" id='assignments'>
                <FaTasks className='sidebar-icon' />
                <label className='sidebar-label'> Assignments </label>
            </div>
            <div className="sidebar-option" id='calendar'>
                <FaRegCalendarAlt className='sidebar-icon' />
                <label className='sidebar-label'> Calendar </label>
            </div>
            <div className="sidebar-option" id='calls'>
                <FaHeadphonesAlt className='sidebar-icon' />
                <label className='sidebar-label'> Calls </label>
            </div>
            <div className="sidebar-option" id='file'>
                <FaRegFile className='sidebar-icon' />
                <label className='sidebar-label'> File </label>
            </div>
            <div className="sidebar-option" id='more'>
                <BsThreeDots className='sidebar-icon' />
            </div>
        </div>
    )
};

export default SidebarTop;