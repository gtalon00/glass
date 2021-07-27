import { useEffect, useState } from "react";

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
      className="msg-form"
      onSubmit={(e) => {
        e.preventDefault();
        handleUpdate(message.id, formData);
        handleToggleEdit();
      }}
    >
      <label>
        {/* Edit */}
        <input
          className="msg-input"
          // placeholder="context"
          type="text"
          name="context"
          value={formData.context}
          onChange={handleChange}
        />
      </label>
      <button>Edit</button>
    </form>
  );
}
