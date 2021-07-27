import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import MessageCreate from './MessageCreate';
import '../assets/CSS/Messages.css'
import BottomSlideNav from '../components/BottomSlideNav';
import { FiEdit3 } from 'react-icons/fi'
import { AiOutlineDelete } from 'react-icons/ai'

export default function Messages({
  listOfMessages,
  setListOfMessages,
  currentUser,
  handleDelete,
  handleChange,
  fetchMessages,
  handleCreate
}) {
  // const [messages, setMessages] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    if (currentUser) {
      fetchMessages(id);
    }
  },[currentUser])

  return (
    <div className='msg-parent'>
      <div className='msg-glass-card'>
        <div className='msg-gap'>

        </div>
        <div className='msg-list'>
      {listOfMessages.map(messages => {
        return <div className='msg-instance' key={messages?.id}>
          <div className='msg-user-conatiner'>
          <div className='msg-user'>
              <img className='msg-user-pic' src={messages?.user?.profile_pic} alt='' />
          <div className='msg-headers'>
          <div className='msg-user-username-container'><p className='msg-user-username'>{messages?.user?.username}</p></div>
                {/* <p className='msg-user-timestamp'>{messages.created_at}</p> */}
                <div className='msg-edit-logo-container'><FiEdit3 className='msg-edit-logo edit' /><AiOutlineDelete className='msg-edit-logo delete' onClick={handleDelete}/></div>
          </div>
          </div>
          </div>
          <br />
          <div className='msg-context-parent'>
          <div className='msg-context-container'>
          <p className='msg-context'>{messages?.context}</p>
          </div>
          </div>
          </div>
      })}
        </div>
        <div className='msg-input-container'>
          <MessageCreate
            id={id}
            handleCreate={handleCreate}
          />
        </div>
      </div>
      <div className='bsn-placholder'></div>
      <BottomSlideNav currentUser={currentUser}/>
    </div>
  )
}
