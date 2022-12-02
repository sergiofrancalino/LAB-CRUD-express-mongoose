import { Schema, model } from "mongoose";

const albumSchema = new Schema({
  performer: { type: String },
  title: { type: String },
  cost: { type: Number },
});

// MONGO COLLECTION: "Album" in "Albuns"

const AlbumModel = model("Album", albumSchema);

export default AlbumModel;