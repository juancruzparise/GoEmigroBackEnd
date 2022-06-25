import express from 'express'
// import { getAllCountries, getCountry, createCountry, updateCountry, deleteCountry } from '../controllers/CountryController.js'
import { getAllNoticies, getNotice, createNotice, updateNotice, deleteNotice } from '../controllers/NoticeController.js'
const router = express.Router()

// router.get('/', getAllCountries)
// router.get('/:id', getCountry)
// router.post('/', createCountry)
// router.put('/:id', updateCountry)
// router.delete('/:id', deleteCountry)
router.get('/', getAllNoticies)
router.get('/:id', getNotice)
router.post('/', createNotice)
router.put('/:id', updateNotice)
router.delete('/:id', deleteNotice)


export default router
