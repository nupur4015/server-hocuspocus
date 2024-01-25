import { Server } from "@hocuspocus/server";
import { configureDatabase } from "./database.js";
import { Logger } from "@hocuspocus/extension-logger";


const server = Server.configure({
    name: "hocuspocus-local",
    port: 1234,
    timeout: 30000,
    debounce: 5000,
    maxDebounce: 30000,
    quiet: true,
    // async onAuthenticate(data) {
    //  if(data.token==='1234'){
    //    return {user: {
    //     name: 'harry'
    //    }
    //   }
    //  }else if(data.token=='123'){
    //   data.connection.readOnly = true;
      
    //   return {user: {
    //     name: 'harry'
    //    }
    //   }

    //  }
    //  else{
    //   throw new error;

    //  }
    // },
    async onListen(){
      console.log("server started");
    },
    extensions: [configureDatabase(), new Logger()],
                
  });
  
  server.listen();