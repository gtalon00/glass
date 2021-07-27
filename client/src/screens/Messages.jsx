import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MessageCreate from "../components/MessageCreate";
import "../assets/CSS/Messages.css";
import BottomSlideNav from "../components/BottomSlideNav";
import { FiEdit3 } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";

export default function Messages({
  listOfMessages,
  fetchMessages,
  currentUser,
  handleDelete,
  handleUpdate,
  handleCreate,
}) {
  const [toggleEdit, setToggleEdit] = useState(false);
  const [formData, setFormData] = useState({
    context: "",
  });
  const { id } = useParams();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleRevealEdit = async () => {
    toggleEdit ? setToggleEdit(false) : setToggleEdit(true);
  };

  useEffect(() => {
    if (currentUser) {
      fetchMessages(id);
    }
  }, [currentUser]);

  return (
    <div className="msg-parent">
      {/* <div className="bkgrnd-revealed"></div> */}
      <div className="msg-glass-card">
        <div className="msg-gap"></div>
        <div className="msg-list">
          {listOfMessages.map((message) => {
            return (
              <div className="msg-instance" key={message?.id}>
                <div className="msg-user-conatiner">
                  <div className="msg-user">
                    <img
                      className="msg-user-pic"
                      src={message?.user?.profile_pic}
                      alt=""
                    />
                    <div className="msg-headers">
                      <div className="msg-user-username-container">
                        <p className="msg-user-username">
                          {message?.user?.username}
                        </p>
                      </div>
                      {/* <p className='msg-user-timestamp'>{messages.created_at}</p> */}
                      <div className="msg-edit-logo-container">
                        <FiEdit3
                          className="msg-edit-logo edit"
                          onClick={handleRevealEdit}
                        />
                        <AiOutlineDelete
                          className="msg-edit-logo delete"
                          onClick={() => handleDelete(message.id)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <div className="msg-context-parent">
                  <div className="msg-context-container">
                    {toggleEdit ? (
                      <form>
                        <label>
                          Edit
                          <input
                            className="mc-input"
                            type="text"
                            name="context"
                            value={message?.context}
                            onChange={handleChange}
                          />
                          <button></button>
                        </label>
                      </form>
                    ) : (
                      <p className="msg-context">{message?.context}</p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="msg-input-container">
          <MessageCreate id={id} handleCreate={handleCreate} />
        </div>
      </div>
      <div className="bsn-placholder"></div>
      <BottomSlideNav currentUser={currentUser} />
    </div>
  );
}
