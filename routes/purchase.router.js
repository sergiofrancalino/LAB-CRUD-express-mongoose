import express from "express";
import PurchaseModel from "../models/purchase.model.js";

// INTERAÇÃO 3: Rotas "/purchases"

const purchaseRoute = express.Router();

// Rota POST /purchases

purchaseRoute.post("/purchases", async (req, res) => {
  try {
    const newPurchase = await PurchaseModel.create({
      ...req.body,
    });

    return res.status(201).json(newPurchase);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error.errors);
  }
});

// GET /purchases/:purchaseId

purchaseRoute.get("/purchases/:purchaseId", async (req, res) => {
  try {
    const { purchaseId } = req.params;

    const onePurchase = await PurchaseModel.findById(purchaseId).populate("album");

    return res.status(201).json(onePurchase);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error.errors);
  }
});

export default purchaseRoute;
