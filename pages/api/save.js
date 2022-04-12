import { GoogleSpreadsheet } from 'google-spreadsheet'
import moment from 'moment'



<<<<<<< HEAD
const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID)

const genCupon = () => {
=======
const doc = new GoogleSpreadsheet('1Mma0FovnWfL2OpY36E57Pre_SGgAyPw0Fc2twN-sN1Y')

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
    const sheet = doc.sheetsByIndex[1]
    const data = JSON.parse(req.body)

    const sheetConfig = doc.sheetsByIndex[2]
    await sheetConfig.loadCells('A2:B2')


=======
    // planilha 1
    const sheet = doc.sheetsByIndex[1]
    const data = JSON.parse(req.body)
    // planilha 2
    const sheetConfig = doc.sheetsByIndex[2]
    await sheetConfig.loadCells('A2:B2')

>>>>>>> bc9f86553998ba10138f0a791998f50ccaee773a
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


>>>>>>> bc9f86553998ba10138f0a791998f50ccaee773a
    await sheet.addRow({
      Nome: data.Nome,
      Email: data.Email,
      Whatsapp: data.Whatsapp,
<<<<<<< HEAD
=======
      Sugestao: data.Sugestao,
>>>>>>> bc9f86553998ba10138f0a791998f50ccaee773a
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