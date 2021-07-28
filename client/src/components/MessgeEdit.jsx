import { useEffect, useState } from "react";
import "../assets/CSS/MessageEdit.css";

export default function MessgeEdit({
  message,
  handleToggleEdit,
  handleUpdate,
}) {
  const [formData, setFormData] = useState({ context: "" });

  useEffect(() => {
    const prefillFormData = () => {
      setFormData({
        context: message.context,
      });
    };
    prefillFormData();
  }, [message.context]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form
      className="msg-edit-form"
      onSubmit={(e) => {
        e.preventDefault();
        handleUpdate(message.id, formData);
        handleToggleEdit();
      }}
    >
      <label>
        <input
          className="msg-edit-input"
          type="text"
          name="context"
          value={formData.context}
          onChange={handleChange}
        />
      </label>
      <div className="msg-edit-button-container">
        <button className="msg-edit-button">Edit</button>
      </div>
    </form>
  );
}
