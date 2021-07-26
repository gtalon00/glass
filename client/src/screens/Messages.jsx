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
  const [messages, setMessages] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    if (currentUser) {
      fetchMessages(id);
    }
  },[currentUser])

  return (
    <div className='messages-parent'>
      <div className='messages-glass-card'>
      {listOfMessages.map(messages => {
        return <div key={messages.id}>
          {messages.user_id}
          <br />
          {messages.context}
        </div>
      })}
      <MessageCreate />
      </div>
    </div>
  )
}
