'use client'

import { useRouter } from "next/navigation"
import React, {FormEvent, useState} from 'react'

function Search() {
    const [search, setSearch] = useState("")
    const router = useRouter()

    const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      setSearch("")
      router.push(`/search/${search}`)
    };

  return (
    <form onSubmit={handleSearch}>
      <input className="bg-white border-2" type="text" value={search} placeholder={"Enter..."} onChange={(e) => setSearch(e.target.value)} />
      <button type="submit" className="bg-blue-500 text-white font-bold px-4">Search</button>
    </form>
  )
}

export default Search