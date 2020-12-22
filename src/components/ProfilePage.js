import React from 'react'
import {useParams} from 'react-router-dom'

export default function ProfilePage() {
  const {id} = useParams()
  return (
    <div>
      <h1>ID: {id}</h1>
    </div>
  )
}