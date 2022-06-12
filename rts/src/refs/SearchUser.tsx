import { useState, useRef, useEffect } from "react"

const array = [
  { name: "Mateen", age: 25 },
  { name: "Ali", age: 23 },
  { name: "Zargham", age: 15 },
  { name: "Wasif", age: 19 },
  { name: "Kamal", age: 29 },
  { name: "Haris", age: 81 },
]
const SearchUser: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [name, setName] = useState('')
  const [user, setUser] = useState<{
    name: string;
    age: number;
  } | undefined>()

  const onClickHandler = () => {
    const searchName = array.find(a => a.name === name)
    setUser(searchName)
  }

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  return <div>
    <h3>Search User</h3>
    <input ref={inputRef} value={name} onChange={(e) => setName(e.target.value)} />
    <button onClick={onClickHandler}>Find</button>

    {user?.name}
    {user?.age}
  </div>
}
export default SearchUser