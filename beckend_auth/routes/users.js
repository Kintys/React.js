import express from 'express'
import bcrypt from 'bcrypt'
import { readJSON, writeJSON } from '../utils/fileDb.js'
import { requireAuth, requireRole } from '../middleware/auth.js'

const router = express.Router()
const file = './data/users.json'

router.get('/all', requireAuth, requireRole('admin'), async (req, res) => {
  const users = await readJSON(file)
  res.json(users)
})

router.get('/:id', requireAuth, async (req, res) => {
  const users = await readJSON(file)
  const user = users.find((u) => u.id == req.params.id)
  if (!user) return res.sendStatus(404)
  res.json(user)
})

// Пагінований роут
router.get('/', requireAuth, requireRole('admin'), async (req, res) => {
  const users = await readJSON(file)
  const pageNum = parseInt(req.query.page) || 1
  const limitNum = parseInt(req.query.limit) || 10
  const totalItems = users.length
  const totalPages = Math.ceil(totalItems / limitNum)
  const startIdx = (pageNum - 1) * limitNum
  const endIdx = startIdx + limitNum
  const items = users.slice(startIdx, endIdx)
  res.json({
    items,
    page: pageNum,
    limit: limitNum,
    totalItems,
    totalPages,
  })
})



router.post('/add', requireAuth, requireRole('admin'), async (req, res) => {

  const { email, name, password, role = 'user' } = req.body

  const requiredFields = ['email', 'name', 'password']
  for (const field of requiredFields) {
    if (!req.body?.[field]) {
      return res.status(400).json({ message: 'Data incorrect!' })
    }
  }

  const users = await readJSON(file)

  const salt = await bcrypt.genSalt(10)
  const newPassword = await bcrypt.hash(password, salt)
  const lastId = users.length ? users[users.length - 1].id : 0
 
  const newUser = {
    id: lastId + 1,
    email,
    name,
    role,
    password:newPassword
  }

  users.push(newUser)
  const isWrite =  await writeJSON(file, users)

  res.status(201).json({ status: true })
})

router.delete('/delete/:id', requireAuth, requireRole('admin'), async (req, res) => {
  const userId = parseInt(req.params.id)


  if (!userId) {
    return res.status(400).json({ message: 'ID користувача не знайдено' })
  }


  const usersList = await readJSON(file)
  const foundUser = usersList.find((u) => u.id === userId)


  if (!foundUser) {
    return res.status(404).json({ message: 'Користувача не знайдено' })
  }

  const updatedUsers = usersList.filter((u) => u.id !== userId)
  await writeJSON(file, updatedUsers)
  res.json({ message: 'Користувача успішно видалено' })
})




export default router

