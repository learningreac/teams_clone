import './contact-card.css';
import { FaUserAstronaut } from 'react-icons/fa';
import { HiOutlineMicrophone } from 'react-icons/hi';
import { MdOutlineSlowMotionVideo } from 'react-icons/md';
import { BsThreeDots } from 'react-icons/bs';


const ContactCard = ({item}) => {
    return (
        <div className='contact-card'>
            <div className='contact-top'>
               <FaUserAstronaut className='contact-avatar'/>
               <div className='contact-info'>
                   <label className='contact-title'>{item.name}</label>
                   <label className='contact-subtitle'>{item.type}</label>
               </div>
            </div>
            <div className='contact-icons'>
              <HiOutlineMicrophone className="contact-icon"/>
              <MdOutlineSlowMotionVideo className="contact-icon"/>
              <BsThreeDots className="contact-icon"/>
            </div>
        </div>
    )
};

export default ContactCard;