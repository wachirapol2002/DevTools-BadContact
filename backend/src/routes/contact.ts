// express typings of request and responses
import { Request, Response, Router } from 'express'
import { db } from '../clients/drizzle.js'
import { contactReports } from '../schema.js'
import { eq, like } from 'drizzle-orm'
import { decode } from 'jsonwebtoken'
import requireJWT from '../middleswares/jwt/requireJWT.js'

const contactRouter = Router()

contactRouter.get<null, any, any, { phoneNumber: string }>(
  '/',
  async function findContact(req, res) {
    const phoneNumber = req.query.phoneNumber
    const contacts = await db.query.contactReports
      .findMany({
        where: like(contactReports.phoneNumber, `%${phoneNumber}%`)
      })
      .execute()

    // if (contacts.length === 0) {
    //   return res.status(404).json({ message: 'Contact not found' })
    // }
    res.json(contacts)
  }
)

contactRouter.get('/:id', async function findContact(req, res) {
  const { id: idString } = req.params
  const id = Number(idString)
  const contact = await db.select().from(contactReports).where(eq(contactReports.id, id)).execute()
  if (contact.length === 0) {
    return res.status(404).json({ message: 'Contact not found' })
  }
  res.json(contact)
})

contactRouter.post('/', async function createContact(req, res) {
  const { phoneNumber, targetName, notes, reporterId } = req.body
  if (!reporterId) {
    return res.status(400).json({ message: 'ReporterId is required' })
  }
  const contactReport = await db
    .insert(contactReports)
    .values({ phoneNumber, targetName, notes, reporter: reporterId })
    .execute()
  res.status(201).json(contactReport)
})

export default contactRouter
