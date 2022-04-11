import React from 'react'
import Link from 'next/link'
import PageTitle from '../components/PageTitle'



const Contato = () => {
  return (
    <div className='p-4 mx-auto'>
      <h1 className='text-white text-center font-bold p-4 block shadow bg-gray-900 my-2 rounded'>Siga nas Redes Sociais</h1>
      <div className='mx-auto bg-green-600 p-4'>
        <Link href='https://web.whatsapp.com/'>
          <a> <img className='mx-auto' src='/logo_whats.png' alt='Palpitebox' /></a>
        </Link>
        <Link href='https://web.whatsapp.com/'>
          <a> <img className='mx-auto' src='/logo_insta.png' alt='Palpitebox' /></a>
        </Link>
      </div>
      <h1 className='text-white text-center font-bold p-4 block shadow bg-gray-900 my-2 rounded'>Texto</h1>
      <div className='text-center font-bold' >
        <Link href='/'>
          <a>Home</a>
        </Link>
      </div>
      <PageTitle title='Contato' />
    </div>
  )
}
export default Contato
// linhas 