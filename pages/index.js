import React from 'react'
import Link from 'next/link'
import useSWR from 'swr'

const fatcher = (...args) => fetch(...args).then(res => res.json())

const Index = () => {
  const { data, error } = useSWR('/api/get-promo',)
  return (
    <div>
      <p className='mt-12 text-center font-bold'>
        O restaurante X sempre busca por atender melhor seus clinetes.<br />
        Por isso, estamos sempre abertos a ouvir a sua opinião
      </p>
      <div className='text-center my-12'>
        <Link href='/pesquisa'>
          <a className='bg-blue-400 px-6 py-4 font-bold shadow-lg '>Dar opinião ou sugestão </a>
        </Link>
      </div>
      <p className='my-12 text-center font-bold '>
        Ao dar sua opinião e/ou sugestão,<br />
        ganhe 10% na sua próxima compra.
      </p>
    </div>
  )
}
export default Index