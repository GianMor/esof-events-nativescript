const application = require("tns-core-modules/application");
const config = require("./config")
const MapAPI = config.google.map.provideAPIKey || "AIzaSyDcNjogyKYCtce76MzNruKbU4TCaqHfj2U"

//gogle map sdk key
if(application.ios) {
    GMSServices.provideAPIKey(MapAPI);
  }



application.run({ moduleName: "app-root" });

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
