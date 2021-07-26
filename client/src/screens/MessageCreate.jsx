import { useState } from "react"
import '../assets/CSS/MessageCreate.css'

export default function MessageCreate({handleCreate}) {
    const [formData, setFormData] = useState({
      context: "",
    });
    const { context } = formData;
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };
  
  return (
      <div className='mc-parent'>
      <form
        className='mc-form'
        onSubmit={(e) => {
          e.preventDefault();
          handleCreate(formData);
        }}
        >
        <label className='mc-label'>
          <input className='mc-input' type="text" name="context" value={context} onChange={handleChange} placeholder='Type message here'/>
        </label>
        <button className='mc-btn'>Send</button>
      </form>
        </div>
  )
}
