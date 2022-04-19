import { MdOutlinePhoneAndroid } from 'react-icons/md';
import { RiContactsLine } from 'react-icons/ri';
import { GrHistory } from 'react-icons/gr';
import { FiVoicemail } from 'react-icons/fi';


const Menu = () => {
    return (
        <>
            <div className="menu-item" id='dial'>
                <MdOutlinePhoneAndroid className='item-icon' />
                <label className="item-label"> Speed Dial</label>
            </div>
            <div className="menu-item" id="contacts">
                <RiContactsLine className='item-icon' />
                <label className="item-label"> Contacts</label>
            </div>
            <div className="menu-item" id='history'>
                <GrHistory className='item-icon' />
                <label className="item-label"> History</label>
            </div>
            <div className="menu-item" id='viocemail'>
                <FiVoicemail className='item-icon' />
                <label className="item-label"> Voicemail</label>
            </div>

        </>
    )
};

export default Menu;