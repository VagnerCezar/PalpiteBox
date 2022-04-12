import { GoogleSpreadsheet } from 'google-spreadsheet'


<<<<<<< HEAD

const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID)



export default async (req, res) => {
  try {
    await doc.useServiceAccountAuth({
      client_email: process.env.SHEET_CLIENT_EMAIL,
      private_key: process.env.SHEET_PRIVATE_KEY
    })
    await doc.loadInfo()

=======
const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID)
/*
const fromBase64 = value => {
  const buff = new Buffer.from(value, 'base64');
  return buff.toString('ascii');
}
*/

export default async (req, res) => {

  try {
    await doc.useServiceAccountAuth({
      client_email: process.env.SHEET_CLIENT_EMAIL,
      private_key: fromBase64(process.env.SHEET_PRIVATE_KEY)
    })
    await doc.loadInfo()

    //acessar planilha
>>>>>>> bc9f86553998ba10138f0a791998f50ccaee773a
    const sheet = doc.sheetsByIndex[2]
    await sheet.loadCells('A2:B2')

    const mostrarPromocaoCell = sheet.getCell(1, 0)
    const textoCell = sheet.getCell(1, 1)

<<<<<<< HEAD
=======

>>>>>>> bc9f86553998ba10138f0a791998f50ccaee773a
    res.end(JSON.stringify({
      showCoupon: mostrarPromocaoCell.value === 'VERDADEIRO',
      message: textoCell.value
    }))

  } catch (err) {
    res.end(JSON.stringify({
      showCoupon: false,
      message: ''
    }))
  }
<<<<<<< HEAD



=======
>>>>>>> bc9f86553998ba10138f0a791998f50ccaee773a
}