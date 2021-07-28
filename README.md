# glass

<br>

## MVP / What is Glass

Glass is an megassing application where you can search for and connect with other users to chat with. Have multiple chat rooms with different users with appeasing visuals and clean functionality. Be able to set a profile picture, look at your list of contacts, and view your current messages. With Glass you can edit and delete any sent messages, typos and mis-clicking be annoying so let's make them an ease to fix!
<br>

### Goals

- _Glassy look to the application._
- _Easy to navigate UI._

<br>

### Libraries and Dependencies

|   Library    | Description                                                                           |
| :----------: | :------------------------------------------------------------------------------------ |
|    React     | _JavaScript library for building user interfaces._                                    |
| React Router | _It enables the navigation among views of various components in a React Application._ |
|    Axios     | _Making and Exicuting HTTP request._                                                  |

<br>

### Client (Front End)

[Figma for Glass](https://www.figma.com/file/5QyWcwG4sbbL4DShqquetc/Untitled?node-id=0%3A1)

[Component Tree](https://whimsical.com/glass-tree-WpDcwsFnGZh16xJhu1Sy5y)

### File Structure

```structure

src
|__ screens/
      |__ Room.jsx
      |__ Message.jsx
      |__ Register.jsx
      |__ LogIn.jsx
      |__ Landing.jsx
      |__ UserSettings.jsx
      |__ Users.jsx
|__ components/
      |__ Header.jsx
      |__ Layout.jsx
      |__ Footer.jsx
|__ services/

```

#### Time Estimates

| Task                           | Priority | Estimated Time | Time Invested |
| ------------------------------ | :------: | :------------: | :-----------: |
| Proposal                       |    L     |    1.5 hrs     |    1.5 hrs    |
| Pseudo Code                    |    H     |     .5 hrs     |    .5 hrs     |
| Back End                       |    H     |    4.5 hrs     |     6 hrs     |
| Create React App               |    H     |     .5 hrs     |    .5 hrs     |
| Room.jsx Functionality         |    H     |     3 hrs      |     3 hrs     |
| Message.jsx Functionality      |    H     |     3 hrs      |     3 hrs     |
| Register.jsx Functionality     |    H     |     3 hrs      |     2 hrs     |
| LogIn.jsx Functionality        |    H     |     3 hrs      |     2 hrs     |
| Landing.jsx Functionality      |    H     |     3 hrs      |     2 hrs     |
| UserSettings.jsx Functionality |    H     |     3 hrs      |    .5 hrs     |
| Users.jsx Functionality        |    H     |     3 hrs      |    3.5 hrs    |
| Create CRUD Actions            |    H     |     3 hrs      |     4 hrs     |
| CSS Login-In                   |    H     |     4 hrs      |     4 hrs     |
| CSS Register                   |    H     |     4 hrs      |     4 hrs     |
| CSS Chat Room                  |    H     |     4 hrs      |     4 hrs     |
| CSS Chat List                  |    H     |     4 hrs      |     4 hrs     |
| CSS Contact List               |    H     |     4 hrs      |     4 hrs     |
| CSS Account Settings           |    H     |     4 hrs      |     4 hrs     |
| CSS Landing                    |    H     |     4 hrs      |     3 hrs     |
| TOTAL                          |          |     28 hrs     |   55.5 hrs    |

<br>

### Server (Back End)

[ERD](https://app.diagrams.net/)
<br>

---

## Post-MVP

- _Websockets._
- _Light / Dark mode._
- _User Bio._
- _Group Chats._

---

## Code Showcase

````
{  {currentUser.id === message?.user?.id ? (

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
                   ```

This is where I conditionally rendered the edit functionality for the messages. If it's the users message, then the icons for edit and delete will appear. There is also conditional rendering to make it so when you select the message; instead of just having the edit pop up for every message the belongs to the current user, it will show up for the specific message you select.
````
