import React, { useState } from 'react'
import PageTitle from '../components/PageTitle'

const Pesquisa = () => {
  const [form, setForm] = useState({
    Nome: '',
    Email: '',
    Whatsapp: '',
<<<<<<< HEAD
<<<<<<< HEAD
    Nota: 0
  })



=======
    Nota: '',
    Sugestao: ''
=======
    Nota: 0
>>>>>>> 8d77b04c0168fe69bb0eeac14a4fbe5bead8c04d
  })
>>>>>>> bc9f86553998ba10138f0a791998f50ccaee773a
  const notas = [0, 1, 2, 3, 4, 5]
  const [sucess, setSuccess] = useState(false)
  const [retorno, setRetorno] = useState({})
  const save = async () => {
<<<<<<< HEAD
<<<<<<< HEAD
    //alert('Você ja pode sorrir AGORA')
    //return 1


=======
    alert('Você ja pode sorrir AGORA')
    //return 1
>>>>>>> bc9f86553998ba10138f0a791998f50ccaee773a
=======
>>>>>>> 8d77b04c0168fe69bb0eeac14a4fbe5bead8c04d
    try {
      const response = await fetch('/api/save', {
        method: 'POST',
        body: JSON.stringify(form)
      })
      const data = await response.json()
      setSuccess(true)
      setRetorno(data)
<<<<<<< HEAD

=======
>>>>>>> bc9f86553998ba10138f0a791998f50ccaee773a
    } catch (err) {
    }

  }
  const onChange = evt => {
    const value = evt.target.value
    const key = evt.target.name
    setForm(old => ({
      ...old,
      [key]: value

    }))

  }
  const onChange = evt => {
    const value = evt.target.value
    const key = evt.target.name
    setForm(old => ({
      ...old,
      [key]: value
    }))
  }
  return (
<<<<<<< HEAD

    <div className='p-4'>
      <h1 className='text-white text-center font-bold p-4 block shadow bg-gray-900 my-2 rounded'>Siga nas Redes Sociais</h1>
      <h1 className='text-center font-bold my-4 text-2xl'> Agendado com Sucesso</h1>
      <p className='text-center mb-6'>
        texto de instrução.<br />
        ...
      </p>
      {!sucess && <div className='w-1/5 mx-auto '>
        <label className='font-bold'>Seu nome:</label>
        <input type='text' className='p-4 block shadow bg-blue-200 my-2 rounded' placeholder='Nome' onChange={onChange} name='Nome' value={form.Nome} />
<<<<<<< HEAD
        <label className='font-bold'>Whatsapp:</label>
        <input type='text' className='p-4 block shadow bg-blue-200 my-2 rounded' placeholder='Whatsapp' onChange={onChange} name='Whatsapp' value={form.Whatsapp} />
        <label className='font-bold'>Endereço:</label>
        <input type='text' className='p-4 block shadow bg-blue-200 my-2 rounded' placeholder='Email' onChange={onChange} name='Email' value={form.Email} />
        <label className='font-bold'>Nota:</label>



=======
=======
    <div className='pt-6'>
      <PageTitle title='Pesquisa' />
      <h1 className='text-center font-bold my-4 text-2xl'>Críticas e sugestões</h1>
      <p className='text-center mb-6'>O restaurante X sempre busca por atender melhor seus clientes.<br />
        Por isso, estamos sempre abertos a ouvir a sua opinião.</p>
      {!sucess && <div className='w-1/5 mx-auto'>
        <label className='font-bold'>Seu nome:</label>
        <input type='text' className='p-4 block shadow bg-blue-100 my-2 rounded' placeholder='Nome' onChange={onChange} name='Nome' value={form.Nome} />
>>>>>>> 8d77b04c0168fe69bb0eeac14a4fbe5bead8c04d
        <label className='font-bold'>E-mail:</label>
        <input type='text' className='p-4 block shadow bg-blue-100 my-2 rounded' placeholder='Email' onChange={onChange} name='Email' value={form.Email} />
        <label className='font-bold'>Whatsapp:</label>
        <input type='text' className='p-4 block shadow bg-blue-100 my-2 rounded' placeholder='Whatsapp' onChange={onChange} name='Whatsapp' value={form.Whatsapp} />
        <label className='font-bold'>Nota:</label>
<<<<<<< HEAD
>>>>>>> bc9f86553998ba10138f0a791998f50ccaee773a
        <div className=' flex py-5 '>
=======
        <div className='flex py-6'>
>>>>>>> 8d77b04c0168fe69bb0eeac14a4fbe5bead8c04d
          {notas.map(nota => {
            return (
              <label className='block w-1/6 text-center'>
                {nota}<br />
                <input type='radio' name='Nota' value={nota} onChange={onChange} />
              </label>
            )
          })
          }
        </div>
<<<<<<< HEAD

<<<<<<< HEAD


        <button className='bg-blue-400 px-6 py-4 font-bold rounded shadow-lg hover:underline' onClick={save}>Salvar</button>
      </div>}




      {sucess && <div className='w-1/5 mx-auto '>
        <p className=' mb-6 text-center bg-green-100 border-t border-b border-green-500 text-green-700 py-3'>Obrigado por constribuir com sua sugestão ou crítica.</p>
        {
          retorno.showCoupon && <div className='text-center border p-4 mb-4'>
            Seu cupom: <br />
            <span className='font-bold text-2xl'>{retorno.Cupom}</span>
          </div>
        }
        {
          retorno.showCoupon && <div className='text-center border p-4 mb-4'>
            <span className='font-bold block mb-2 '>{retorno.Promo}</span>
            <br />
            <span className='italic'>Tire um print ou foto desta tela e apresente ao Barbeiro. </span>
          </div>
        }
      </div>
      }




      <PageTitle title='Pesquisa' />
      <h1 className='text-white text-center font-bold p-4 block shadow bg-gray-900 my-2 rounded'>Siga nas Redes Sociais</h1>
=======
        <button className='bg-blue-400 px-6 py-4 font-bold rounded shadow-lg hover:underline' onClick={save}>Salvar</button>
        <pre>
          {JSON.stringify(form, null, 2)}
        </pre>
      </div>}
      {
        sucess && <div className='w-1/5 mx-auto '>
          <p className=' mb-6 text-center bg-green-100 border-t border-b border-green-500 text-green-700 py-3'>Obrigado por constribuir com sua sugestão ou crítica.</p>
          {
            retorno.showCoupon && <div className='text-center border p-4 mb-4'>
              Seu cupom: <br />
              <span className='font-bold text-2xl'>{retorno.Cupom}</span>
            </div>
          }
          {
            retorno.showCoupon && <div className='text-center border p-4 mb-4'>
              <span className='font-bold block mb-2 '>{retorno.Promo}</span>
              <br />
              <span className='italic'>Tire um print ou foto desta tela e apresente ao garçon. </span>
            </div>
          }
        </div>
      }
      <PageTitle title='Pesquisa' />
>>>>>>> bc9f86553998ba10138f0a791998f50ccaee773a
    </div >
=======
        <button className='bg-blue-400 px-12 py-4 font-bold rounded-lg shadow-lg hover:shadow' onClick={save}>Salvar</button>
      </div>}
      {sucess && <div className='w-1/5 mx-auto'>
        <p className='mb-6 text-center bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3'>Obrigado por contribuir com sua sugestão ou crítica.</p>
        {
          retorno.showCoupon && <div className='text-center border p-4 mb-4'>
            Seu cupom: <br />
            <span className='font-bold text-2xl'>{retorno.Cupom}</span>
          </div>
        }
        {
          retorno.showCoupon && <div className='text-center border p-4 mb-4'>
            <span className='font-bold block mb-2'>{retorno.Promo}</span>
            <br />
            <span className='italic'>Tire um print ou foto desta tela e apresente ao garçon.</span>
          </div>
        }
      </div>}
    </div>
>>>>>>> 8d77b04c0168fe69bb0eeac14a4fbe5bead8c04d
  )
}
export default Pesquisa