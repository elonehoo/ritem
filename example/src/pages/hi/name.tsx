import React from "react"
import { useNavigate, useParams } from 'react-router-dom'
import Hi from '@ritem/hi'

function name(){
  const { name } = useParams()

  const navigate = useNavigate()

  function back() {
    navigate(-1)
  }

  return (
    <Hi name={name} back={back} />
  )
}

export default name
