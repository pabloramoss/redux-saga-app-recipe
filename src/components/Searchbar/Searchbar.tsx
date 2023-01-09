import { ChangeEvent, useState } from "react"

const Searchbar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  return (
    <form style={{display: "flex"}}>
      <input placeholder="Buscar receta..." onChange={handleChange} />
      <button onClick={()=>console.log("api call")}>Buscar</button>
    </form>
  )
}

export default Searchbar