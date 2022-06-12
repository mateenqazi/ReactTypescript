import { useState } from "react"

const GuestList: React.FC = () => {
  const [name, setName] = useState("")
  const [guest, setGuest] = useState<string[]>([])
  const onClickHandler = () => {
    setName('')
    setGuest([...guest, name])
  }
  return <div>
    <h3>Guest List</h3>
    <ul>
      {guest.map((g, key) => <li key={key}>{g}</li>)}
    </ul>
    <input value={name} onChange={(e) => setName(e.target.value)} />
    <button onClick={onClickHandler}>Add Guest</button>
  </div>
}

export default GuestList