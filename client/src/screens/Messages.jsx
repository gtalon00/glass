import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';


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
    <div>
      <h3>Messages</h3>
      {listOfMessages.map(messages => {
        return <div key={messages.id}>
          {messages.context}
        </div>
      })}
    </div>
  )
}
