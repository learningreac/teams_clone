import { MdOutlinePhoneAndroid } from 'react-icons/md';
import { RiContactsLine } from 'react-icons/ri';
import { FiVoicemail } from 'react-icons/fi';
import {VscHistory} from 'react-icons/vsc'

import './menu-item.css';


// to do is active
const MenuItems = () => {
    return (
        <div className='menu-items'>
            <div className="menu-item" id='dial'>
                <MdOutlinePhoneAndroid className='item-icon' />
                <label className="item-label"> Speed Dial</label>
            </div>
            <div className="menu-item" id="contacts">
                <RiContactsLine className='item-icon' />
                <label className="item-label"> Contacts</label>
            </div>
            <div className="menu-item" id='history'>
                <VscHistory className='item-icon' />
                <label className="item-label"> History</label>
            </div>
            <div className="menu-item" id='viocemail'>
                <FiVoicemail className='item-icon' />
                <label className="item-label"> Voicemail</label>
            </div>

        </div>
    )
};

export default MenuItems;