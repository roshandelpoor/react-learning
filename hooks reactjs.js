قرار است که ما این کامپننت زیر را با هوک ها بنویسیم
کامپننت قبلی
import React from 'react'

const Card = (props) => {
  const {
    contact,
    index
  } = props
  
  const activeClass = contact.favorite ? 'active' : ''

  return (
    <section className="card-container">
      <header className="card-header">
        <span initials={contact.initials}></span>

        <h2>{contact.name}</h2>
        <div
          className={`favorite ${activeClass}`}
          onClick={() => { props.handleFavoriteToggle(index) }}
        >
          ☆
        </div>
      </header>

      <main>
        <ul>
          <li>
            <span>Phone</span>
            {contact.phone ? contact.phone : 'n/a'}
          </li>
          <li>
            <span>Email</span>
            {contact.email ? contact.email : 'n/a'}
          </li>
        </ul>
      </main>
    </section>
  )
}

export default Card

کامپننت جدید

import React, { useState, useEffect } from 'react'

const Card = () => {

  const [favorite, setFavorite] = useState(false) //****//
  const [initials, setInitials] = useState("LK") //****//
  const [name, setName] = useState("Mohammad Roshandelpoor") //****//
  const [phone, setPhone] = useState("09168187257") //****//
  const [email, setEmail] = useState("roshandelpoor@outlook.com") //****//
  
  const activeClass = favorite ? 'active' : ''

	
  useEffect( () => {
      console.log(`value has change to: ${favorite}`)

      // for use
      //
      // 1- local storage
      // 2- make api call
      // 3- DOM interactions
      // 4- etc

  })


  return (
    <section className="card-container">
      <header className="card-header">
        <span initials={initials}></span>

        <h2>{name}</h2>
        <div
          className={`favorite ${activeClass}`}
          onClick={() => { setFavorite(!favorite) }} //****//
        >
          ☆
        </div>
      </header>

      <main>
        <ul>
          <li>
            <span>Phone</span>
            {phone ? phone : 'n/a'}
          </li>
          <li>
            <span>Email</span>
            {email ? email : 'n/a'}
          </li>
        </ul>
      </main>
    </section>
  )
}

export default Card
