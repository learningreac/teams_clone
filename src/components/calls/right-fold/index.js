import './right-fold.css';
import { GoSearch } from 'react-icons/go';
import {RiUserAddLine} from 'react-icons/ri';
import {callsContactData} from '../../../data/calls'
import ContactCard from './ContactCard';

const RightFold = () => {
    const contacts = callsContactData;
    return (
        <div className='rightFold'>
            <div className='rightFold-heading'>
                <label className='heading-label'> Contacts</label>
            </div>
            <div className='rightFold-options'>
                <div className='contact-search'>
                    <input placeholder="Find a contact" />
                    <GoSearch className='contact-search-icon'/>
                </div>
                <div className='add-button'>
                    <RiUserAddLine className='add-icon'/>
                    <label className='add-label'>Add Contact</label>
                </div>
            </div>
            <div className='contact-list'>
                {contacts.map(item => <ContactCard key={item.id} item={item} />)}
            </div>
        </div>
    )
};

export default RightFold;