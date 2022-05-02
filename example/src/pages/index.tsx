import React,{useCallback,useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Main from '@ritem/core'

function App(){

  const [name, setName] = useState('')

  const navigate = useNavigate()

  const nameModel = useCallback((even: any) => {
    setName(even.target.value)
  }, [])

  function go(){
    navigate(`/hi/${name}`)
  }
  return (
    <Main name={name} nameModel={nameModel} go={go} />
  )
}

export default App
