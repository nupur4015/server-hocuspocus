import mongoose from "mongoose";
import { Database } from "@hocuspocus/extension-database";
import { DocumentModel } from "./models/document.js";


const MONGODB_URI = "mongodb+srv://nwuser:harry1234@cluster0.qfuae.mongodb.net/MAAI?retryWrites=true&w=majority";

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const configureDatabase = () => {

  return new Database({
    fetch: async ({ documentName }) => {
      try {
        const document = await DocumentModel
          .findOne({ name: documentName })
          .sort({ _id: -1 })
          .exec();

        return document ? document.data : null;
      } catch (error) {
        throw error;
      }
    },
    store: async ({ documentName, state }) => {
      try {
        await DocumentModel.findOneAndUpdate(
          { name: documentName },
          { $set: { data: state } },
          { upsert: true }
        );
      } catch (error) {
        throw error;
      }
    },
  });
};

export { configureDatabase };
