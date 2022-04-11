import React from 'react'
import Link from 'next/link'
import PageTitle from '../components/PageTitle'

const Sobre = () => {
  return (
    <div>
      < PageTitle title='Sobre' />
      <h1 className=' p-4 m-12 text-center font-bold'> Tradição e Compromisso com seu bigode<br />
        Texto barbearia
      </h1>
      <div>
        <Link href='/'>
          <a>Home</a>
        </Link>
      </div>
    </div>
  )
}
export default Sobre