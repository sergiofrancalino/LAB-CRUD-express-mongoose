import express from "express";
import AlbumModel from "../models/album.model.js";

// INTERAÇÃO 2 - Rotas Album

const albumRoute = express.Router();

// Rota POST /albums

albumRoute.post("/albums", async (req, res) => {
  try {
    const newAlbum = await AlbumModel.create(req.body);
    return res.status(201).json(newAlbum);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error.errors);
  }
});

// Rota GET /albums

albumRoute.get("/albums", async (req, res) => {
  try {
    const allAlbum = await AlbumModel.find({});
    return res.status(201).json(allAlbum);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error.errors);
  }
});

// Rota GET /albums/:albumId

albumRoute.get("/albums/:albumId", async (req, res) => {
  try {
    const { albumId } = req.params;
    const oneAlbum = await AlbumModel.findById(albumId);

    if (!oneAlbum) {
      return res.status(400).json({ err: "não existe!" });
    }
    return res.status(200).json(oneAlbum);
  } catch (error) {
    onsole.log(error);
    return res.status(400).json(error.errors);
  }
});

// Rota PUT /albums/:albumId

albumRoute.get("/edit/:albumId", async (req, res) => {
  try {
    const { albumId } = req.params;
    const updatedAlbum = await AlbumModel.findOneAndUpdate(
      { albumId: albumId },
      { ...req.body },
      { new: true, runValidators: true }
    );

    return res.status(200).json(updatedAlbum);
  } catch (error) {
    onsole.log(error);
    return res.status(400).json(error.errors);
  }
});

// Rota DELETE /albums/:albumId

albumRoute.delete("/albums/:albumId", async (req, res) => {
  try {
    const { albumId } = req.params;

    const deletedAlbum = await AlbumModel.findByIdAndDelete(albumId);
    return res.status(204).json(deletedAlbum);
  } catch (error) {
    onsole.log(error);
    return res.status(400).json(error.errors);
  }
});

export default albumRoute;
