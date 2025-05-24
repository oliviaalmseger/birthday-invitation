import { Router } from "express";
import { createOrUpdateGuest, getGuests } from "../controllers/guestController";


const router = Router (); 
router.post('/', createOrUpdateGuest
); 
router.get('/', getGuests); 

export default router; 

