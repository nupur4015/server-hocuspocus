import { Server } from "@hocuspocus/server";
import { configureDatabase } from "./database.js";


const server = Server.configure({
    name: "hocuspocus-local",
    port: 1234,
    timeout: 30000,
    debounce: 5000,
    maxDebounce: 30000,
    quiet: true,
    //async onAuthenticate({ documentName, token }) {
     //will implement later
    //},
    async onListen(){
      console.log("server started");
    },
    extensions: [configureDatabase()],
  
  });
  
  server.listen();