const application = require("tns-core-modules/application");

//gogle map sdk key
if(application.ios) {
    GMSServices.provideAPIKey("AIzaSyDcNjogyKYCtce76MzNruKbU4TCaqHfj2U");
  }



application.run({ moduleName: "app-root" });

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
