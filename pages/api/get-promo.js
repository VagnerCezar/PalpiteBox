import { GoogleSpreadsheet } from 'google-spreadsheet'


<<<<<<< HEAD

const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID)
<<<<<<< HEAD



export default async (req, res) => {
  try {
    await doc.useServiceAccountAuth({
      client_email: process.env.SHEET_CLIENT_EMAIL,
      private_key: process.env.SHEET_PRIVATE_KEY
    })
    await doc.loadInfo()

=======
const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID)

=======

>>>>>>> 8d77b04c0168fe69bb0eeac14a4fbe5bead8c04d

export default async (req, res) => {
  try {
    await doc.useServiceAccountAuth({
      client_email: process.env.SHEET_CLIENT_EMAIL,
      private_key: process.env.SHEET_PRIVATE_KEY
    })
    await doc.loadInfo()

<<<<<<< HEAD
<<<<<<< HEAD
    //acessar planilha
>>>>>>> bc9f86553998ba10138f0a791998f50ccaee773a
=======
>>>>>>> 8d77b04c0168fe69bb0eeac14a4fbe5bead8c04d
=======
>>>>>>> 8d77b04c0168fe69bb0eeac14a4fbe5bead8c04d
    const sheet = doc.sheetsByIndex[2]
    await sheet.loadCells('A2:B2')

    const mostrarPromocaoCell = sheet.getCell(1, 0)
    const textoCell = sheet.getCell(1, 1)

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> bc9f86553998ba10138f0a791998f50ccaee773a
=======
>>>>>>> 8d77b04c0168fe69bb0eeac14a4fbe5bead8c04d
=======
>>>>>>> 8d77b04c0168fe69bb0eeac14a4fbe5bead8c04d
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
<<<<<<< HEAD
<<<<<<< HEAD



=======
>>>>>>> bc9f86553998ba10138f0a791998f50ccaee773a
=======



>>>>>>> 8d77b04c0168fe69bb0eeac14a4fbe5bead8c04d
=======



>>>>>>> 8d77b04c0168fe69bb0eeac14a4fbe5bead8c04d
}