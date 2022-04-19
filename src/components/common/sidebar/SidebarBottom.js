import {AiOutlineAppstore} from 'react-icons/ai';
import {MdOutlineHelpOutline} from 'react-icons/md';


const SidebarBottom = () => {
    return (
        <div className="sidebar-bottom">
             <div className="sidebar-option" id='apps'>
                <AiOutlineAppstore className='sidebar-icon' />
                <label className='sidebar-label'> Apps </label>
            </div>
            <div className="sidebar-option" id='help'>
                <MdOutlineHelpOutline className='sidebar-icon' />
                <label className='sidebar-label'> Help </label>
            </div>
	
        </div>
    )
};

export default SidebarBottom;