import React, { useState } from 'react'


const Pesquisa = () => {
  const [form, setForm] = useState({
    Nome: '',
    Email: '',
    Whatsapp: ''
  })
  const [sucess, setSuccess] = useState(false)
  const [retorno, setRetorno] = useState({})
  const save = async () => {
    alert('Você ja pode sorrir AGORA')
    try {
      const response = await fetch('/api/save', {
        method: 'POST',
        body: JSON.stringify(form)
      })
      const data = await response.json()
      setSuccess(true)
      setRetorno(data)
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

  return (
    <div className='pt-6'>
      <h1 className='text-center font-bold my-4 text-2xl'>Críticas e sugestões</h1>
      <p className='text-center mb-6'>
        O restaurante X sempre busca por atender melhor seus clinetes.<br />
        Por isso, estamos sempre abertos a ouvir a sua opinião</p>
      {!sucess && <div className='w-1/5 mx-auto '>
        <label className='font-bold'>Seu nome:</label>
        <input type='text' className='p-4 block shadow bg-blue-200 my-2 rounded' placeholder='Nome' onChange={onChange} name='Nome' value={form.Nome} />
        <label className='font-bold'>Email:</label>
        <input type='text' className='p-4 block shadow bg-blue-200 my-2 rounded' placeholder='Email' onChange={onChange} name='Email' value={form.Email} />
        <label className='font-bold'>Whatsapp:</label>
        <input type='text' className='p-4 block shadow bg-blue-200 my-2 rounded' placeholder='Whatsapp' onChange={onChange} name='Whatsapp' value={form.Whatsapp} /> <br />
        <button className='bg-blue-400 px-6 py-4 font-bold rounded shadow-lg hover:underline' onClick={save}>Salvar</button>
      </div>}
      {sucess && <div className='w-1/5 mx-auto '>
        <p className=' mb-6 text-center bg-green-100 border-t border-b border-green-500 text-green-700 px-4 py3'>Obrigado por contribuir com sua sugetão</p>
        {
          retorno.showCoupon && <div className='text-center border p-4 mb-4'>
            Seu cupom: <br />
            <span className='font-bold text-2x1'>{retorno.Cupom}</span>
          </div>
        }
        {
          retorno.showCoupon && <div className='text-center border p-4 mb-4'>
            <span className='font-bold block mb-2'>{retorno.Promo}</span>
            <br />
            <span className='italic'>Tire print ou foto desta  tela e apresente ao garçon.</span>
          </div>
        }
      </div>}
    </div>
  )
}
export default Pesquisa