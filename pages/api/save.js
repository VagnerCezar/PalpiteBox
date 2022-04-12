import { GoogleSpreadsheet } from 'google-spreadsheet'
import moment from 'moment'


<<<<<<< HEAD

<<<<<<< HEAD
const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID)

const genCupon = () => {
=======
const doc = new GoogleSpreadsheet('1Mma0FovnWfL2OpY36E57Pre_SGgAyPw0Fc2twN-sN1Y')
=======
const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID)
>>>>>>> 8d77b04c0168fe69bb0eeac14a4fbe5bead8c04d

const genCupom = () => {
>>>>>>> bc9f86553998ba10138f0a791998f50ccaee773a
  const code = parseInt(moment().format('YYMMDDHHmmssSSS')).toString(16).toUpperCase()
  return code.substr(0, 4) + '-' + code.substr(4, 4) + '-' + code.substr(8, 4)
}

export default async (req, res) => {
  try {
    await doc.useServiceAccountAuth({
      client_email: process.env.SHEET_CLIENT_EMAIL,
      private_key: process.env.SHEET_PRIVATE_KEY
    })
    await doc.loadInfo()
<<<<<<< HEAD
<<<<<<< HEAD
    const sheet = doc.sheetsByIndex[1]
    const data = JSON.parse(req.body)

    const sheetConfig = doc.sheetsByIndex[2]
    await sheetConfig.loadCells('A2:B2')


=======
    // planilha 1
=======
>>>>>>> 8d77b04c0168fe69bb0eeac14a4fbe5bead8c04d
    const sheet = doc.sheetsByIndex[1]
    const data = JSON.parse(req.body)

    const sheetConfig = doc.sheetsByIndex[2]
    await sheetConfig.loadCells('A2:B2')

<<<<<<< HEAD
>>>>>>> bc9f86553998ba10138f0a791998f50ccaee773a
=======

>>>>>>> 8d77b04c0168fe69bb0eeac14a4fbe5bead8c04d
    const mostrarPromocaoCell = sheetConfig.getCell(1, 0)
    const textoCell = sheetConfig.getCell(1, 1)

    let Cupom = ''
    let Promo = ''
<<<<<<< HEAD
    if (mostrarPromocaoCell.value === 'VERDADEIRO') {
      Cupom = genCupon()
      Promo = textoCell.value
    }

=======

    if (mostrarPromocaoCell.value === 'VERDADEIRO') {
      Cupom = genCupom()
      Promo = textoCell.value
    }

<<<<<<< HEAD

>>>>>>> bc9f86553998ba10138f0a791998f50ccaee773a
=======
    // Nome	Email	Whatsapp	Cupom	Promo
>>>>>>> 8d77b04c0168fe69bb0eeac14a4fbe5bead8c04d
    await sheet.addRow({
      Nome: data.Nome,
      Email: data.Email,
      Whatsapp: data.Whatsapp,
<<<<<<< HEAD
<<<<<<< HEAD
=======
      Sugestao: data.Sugestao,
>>>>>>> bc9f86553998ba10138f0a791998f50ccaee773a
=======
>>>>>>> 8d77b04c0168fe69bb0eeac14a4fbe5bead8c04d
      Nota: parseInt(data.Nota),
      'Data Preenchimento': moment().format('DD/MM/YYYY HH:mm:ss'),
      Cupom,
      Promo
    })
    res.end(JSON.stringify({
      showCoupon: Cupom !== '',
      Cupom,
      Promo
    }))
<<<<<<< HEAD
    res.end(req.body)
=======
>>>>>>> bc9f86553998ba10138f0a791998f50ccaee773a
  } catch (err) {
    console.log(err)
    res.end('error')
  }
}