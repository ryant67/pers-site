import React from 'react'
import { useEffect, useState } from 'react'

export default function LoginDis() {

  const [users, setUsers] = useState(null);

  useEffect(() => {
    fetch('api/users')
      .then(res => res.json())
      .then(json => setUsers(json.users))
      .then(console.log(users))
      .catch(err => console.log(err))
  }, [])

  return (
    <div>LoginDis</div>
  )
}
