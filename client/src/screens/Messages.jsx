import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MessageCreate from "../components/MessageCreate";
import "../assets/CSS/Messages.css";
import BottomSlideNav from "../components/BottomSlideNav";
import MessageEdit from "../components/MessgeEdit";
import { FiEdit3 } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import LeftSideNav from "../components/LeftSideNav";

export default function Messages({
  listOfMessages,
  fetchMessages,
  currentUser,
  setCurrentUser,
  handleDelete,
  handleUpdate,
  handleCreate,
}) {
  const [toggleEdit, setToggleEdit] = useState(false);

  const { id } = useParams();

  const handleToggleEdit = async (id) => {
    toggleEdit ? setToggleEdit(false) : setToggleEdit(id);
  };

  useEffect(() => {
    if (currentUser) {
      fetchMessages(id);
    }
  }, [currentUser]);

  return (
    <div className="msg-parent">
      <div className="msg-glass-card-nav-container"></div>
      <LeftSideNav currentUser={currentUser} setCurrentUser={setCurrentUser} />
      {/* <div className="bkgrnd bkgrnd-revealed"></div> */}
      <div className="msg-glass-card">
        <div className="msg-gap"></div>
        <div className="msg-list">
          {listOfMessages.map((message) => {
            return (
              <div className="msg-instance" key={message?.id}>
                <div className="msg-user-conatiner">
                  <div className="msg-user">
                    <div className="msg-user-img-container">
                      <img
                        className="msg-user-pic"
                        src={message?.user?.profile_pic}
                        alt=""
                      />
                    </div>
                    <div className="msg-headers">
                      <div className="msg-user-username-container">
                        <p className="msg-user-username">
                          {message?.user?.username}
                        </p>
                      </div>
                      {/* <p className='msg-user-timestamp'>{messages?.created_at}</p> */}
                      <div className="msg-edit-logo-container">
                        {currentUser.id === message?.user?.id ? (
                          <div className="msg-edit-logo-conditional">
                            <FiEdit3
                              className="msg-edit-logo edit"
                              onClick={() => handleToggleEdit(message.id)}
                            />
                            <AiOutlineDelete
                              className="msg-edit-logo delete"
                              onClick={() => handleDelete(message.id)}
                            />
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <div className="msg-context-parent">
                  <div className="msg-context-container">
                    {toggleEdit === message.id ? (
                      <MessageEdit
                        message={message}
                        handleUpdate={handleUpdate}
                        handleToggleEdit={handleToggleEdit}
                      />
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
      <BottomSlideNav
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
      />
    </div>
  );
}
