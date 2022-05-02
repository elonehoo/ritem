import React,{useCallback,useState} from 'react'
import Main from '@ritem/core'

function App(){

  const [name, setName] = useState('')

  const nameModel = useCallback((even: any) => {
    setName(even.target.value)
  }, [])

  function go(){
    console.log('go')
  }
  return (
    <Main name={name} nameModel={nameModel} go={go} />
  )
}

export default App
