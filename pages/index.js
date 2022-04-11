import React from 'react'
import Link from 'next/link'
import useSWR from 'swr'
import PageTitle from '../components/PageTitle'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const Index = () => {
  const { data, error } = useSWR('/api/get-promo', fetcher)

  return (
    <div>
      <PageTitle title='Seja Bem vindo' />
      <h1 className='text-white text-center font-bold p-4 block shadow bg-gray-900 my-2 rounded'>Texto</h1>
      <p className='mt-12 text-center font-bold'>
        Seja muito bem vindo!<br /><br />
        Estamos disponíveis de: <br />
        Segunda a Sábado de 8:00 às 21:30
      </p>
      <div className='text-center my-12'>
        <Link href='/pesquisa'>
          <a className='bg-green-400 px-6 py-4 font-bold shadow-lg '> Agende seu Pedido </a>
        </Link>
      </div>


      {!data && <p>Carregando...</p>}
      {!error && data && data.showCoupon &&
        <p className='my-12 text-center'>
          {data.message}
        </p>
      }


      <h1 className='text-white text-center font-bold p-4 block shadow bg-gray-900 my-2 rounded'>Texto</h1>
    </div>
  )
}
export default Index