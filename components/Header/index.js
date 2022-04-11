import React from 'react'
import styles from './styles.module.css'
import Link from 'next/link'

const Header = () => {
  return (
    // Conf da barra cinza e logo
    <React.Fragment>
      <div className={styles.wrapper} >

        <div className='container mx-auto'>

          <Link href='/'>
            <a> <img className='mx-auto' src='/logo_barbearia.png' alt='Palpitebox' /></a>
          </Link>
        </div>
      </div>

      <div className='bg-gray-300 p-4 shadow-md text-center'>
        <Link href='/sobre'>
          <a className='text-white bg-gray-700 p-4 px-5 hover:underline rounded'>Sobre</a>
        </Link>
        <a className='bg-gray-300 p-4 px-5 hover:underline'>.......</a>
        <Link href='/contato'>
          <a className='text-white bg-gray-700 p-4 px-5 hover:underline rounded'>Contato</a>
        </Link>
        <a className=' bg-gray-300 p-4 px-5 hover:underline'>...</a>
        <Link href='/pesquisa'>
          <a className='text-white bg-gray-700 p-4 px-5 hover:underline rounded'>pesquisa</a>
        </Link>
        <a className='bg-gray-300 p-4 px-5 hover:underline'>...</a>
      </div>
    </React.Fragment>
  )
}
export default Header