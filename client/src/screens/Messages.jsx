import { useState, useEffect } from 'react'


export default function Messages({ currentUser, listOfMessages }) {
  const [messages, setMessages] = useState()
  
  // useEffect
  // will get all messages with id (probably from the params)
  // if statement for currentUser
  // set state

  useEffect(() => {
    const extractMessages = () => {
      // const users = 
    }
    if (listOfMessages.length && currentUser) {
      extractMessages()
    }
  }, [currentUser])

  return (
    <div>
      <h3>Messages</h3>
      
    </div>
  )
}
