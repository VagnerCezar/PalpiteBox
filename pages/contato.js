import React from 'react'
import Link from 'next/link'
import PageTitle from '../components/PageTitle'


const Contato = () => {
  return (
    <div>
      <h1>Contato</h1>
      <div>
        <Link href='/'>
          <a>Home</a>
        </Link>
      </div>
      <PageTitle title='Contato' />
    </div>
  )
}
export default Contato
