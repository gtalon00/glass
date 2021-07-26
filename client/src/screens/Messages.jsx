import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import MessageCreate from './MessageCreate';
import '../assets/CSS/Messages.css'

export default function Messages({
  listOfMessages,
  setListOfMessages,
  currentUser,
  handleDelete,
  handleChange,
  fetchMessages
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
        <div className='msg-gap'></div>
        <div className='msg-list'>
      {listOfMessages.map(messages => {
        return <div className='msg-instance' key={messages.id}>
          <p className='msg-user'>{messages.user.username}</p>
          <br />
          <p className='msg-context'>{messages.context}</p>
          </div>
      })}
        </div>
        <div className='msg-input-container'>
      <MessageCreate />
        </div>
      </div>
    </div>
  )
}
