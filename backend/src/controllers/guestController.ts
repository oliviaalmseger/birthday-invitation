import { Request, Response } from "express";
import { GuestModel } from "../models/Guest";

// POST rsvp
export const createOrUpdateGuest = async (req: Request, res: Response) => {
  const { name, attending } = req.body;

  //Validering
  if (typeof name !== "string" || name.trim() === "") {
    res.status(400).json({ error: "Du måste skriva in ett namn" });
    return;
  }

  if (typeof attending !== "boolean") {
    res.status(400).json({ error: "Du måste klicka i om du kommer/ej" });
    return;
  }

  try {
    const updatedGuest = await GuestModel.findOneAndUpdate(
      { name: name.trim() },
      { attending },
      { new: true, upsert: true }
    );
    const isNew = updatedGuest?.createdAt === updatedGuest?.updatedAt;
    res.status(200).json({
      message: "Tack för ditt svar!",
      guest: updatedGuest,
    });
  } catch (error) {
    console.error("Fel vid sparning/uppdatering", error);
    res.status(500).json({ error: "Något gick fel" });
  }
};

// GET rsvp
export const getGuests = async (_req: Request, res: Response) => {
  try {
    const guests = await GuestModel.find();
    res.json(guests);
  } catch (error) {
    console.error("❌ Fel vid hämtning:", error);
    res.status(500).json({ error: "Kunde inte hämta gäster" });
  }
};
