import mongoose from "mongoose";

const documentSchema = new mongoose.Schema({
  name: { type: String, unique: true },
  data: { type: Buffer },
});

const DocumentModel = mongoose.model("Document", documentSchema);

export { DocumentModel };