webpackHotUpdate("bundle",{

/***/ "./map/map-page.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const MapViewModel = __webpack_require__("./map/map-view-model.js");
var mapsModule = __webpack_require__("../node_modules/nativescript-google-maps-sdk/map-view.js");

const data = __webpack_require__("./map/data.js");

const dataLAT = data.map.geojson.features.coordinates.latitute

function onNavigatingTo(args) {
    const component = args.object;
    component.bindingContext = new MapViewModel();
}

function onMapReady(args) {
    var mapView = args.object;
    var marker = new mapsModule.Marker();


    marker.position = mapsModule.Position.positionFromLatLng(45.649268385921395, 13.762092590332031);
    marker.title = "Caffe degli specchi";
    marker.color= "green"
    marker.snippet = "Colazione";
    marker.userData = { index : 1};
    mapView.addMarker(marker);

    // Disabling zoom gestures
  mapView.settings.zoomGesturesEnabled = false;
}

exports.onMapReady = onMapReady;
exports.onNavigatingTo = onNavigatingTo;
; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./map/map-page.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./map/map-page.js" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tYXAvbWFwLXBhZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxtRUFBcUIsbUJBQU8sQ0FBQyx5QkFBa0I7QUFDL0MsaUJBQWlCLG1CQUFPLENBQUMsMERBQThCOztBQUV2RCxhQUFhLG1CQUFPLENBQUMsZUFBUTs7QUFFN0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEM7QUFDQSxJQUFJLEtBQVU7O0FBRWQ7QUFDQTtBQUNBLDJCQUEyQiw0Q0FBNEM7QUFDdkUsS0FBSztBQUNMLEMiLCJmaWxlIjoiYnVuZGxlLmEzMmI4N2YzMWUxYjk4OGFkYmU0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBNYXBWaWV3TW9kZWwgPSByZXF1aXJlKFwiLi9tYXAtdmlldy1tb2RlbFwiKTtcbnZhciBtYXBzTW9kdWxlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1nb29nbGUtbWFwcy1zZGtcIik7XG5cbmNvbnN0IGRhdGEgPSByZXF1aXJlKCcuL2RhdGEnKTtcblxuY29uc3QgZGF0YUxBVCA9IGRhdGEubWFwLmdlb2pzb24uZmVhdHVyZXMuY29vcmRpbmF0ZXMubGF0aXR1dGVcblxuZnVuY3Rpb24gb25OYXZpZ2F0aW5nVG8oYXJncykge1xuICAgIGNvbnN0IGNvbXBvbmVudCA9IGFyZ3Mub2JqZWN0O1xuICAgIGNvbXBvbmVudC5iaW5kaW5nQ29udGV4dCA9IG5ldyBNYXBWaWV3TW9kZWwoKTtcbn1cblxuZnVuY3Rpb24gb25NYXBSZWFkeShhcmdzKSB7XG4gICAgdmFyIG1hcFZpZXcgPSBhcmdzLm9iamVjdDtcbiAgICB2YXIgbWFya2VyID0gbmV3IG1hcHNNb2R1bGUuTWFya2VyKCk7XG5cblxuICAgIG1hcmtlci5wb3NpdGlvbiA9IG1hcHNNb2R1bGUuUG9zaXRpb24ucG9zaXRpb25Gcm9tTGF0TG5nKDQ1LjY0OTI2ODM4NTkyMTM5NSwgMTMuNzYyMDkyNTkwMzMyMDMxKTtcbiAgICBtYXJrZXIudGl0bGUgPSBcIkNhZmZlIGRlZ2xpIHNwZWNjaGlcIjtcbiAgICBtYXJrZXIuY29sb3I9IFwiZ3JlZW5cIlxuICAgIG1hcmtlci5zbmlwcGV0ID0gXCJDb2xhemlvbmVcIjtcbiAgICBtYXJrZXIudXNlckRhdGEgPSB7IGluZGV4IDogMX07XG4gICAgbWFwVmlldy5hZGRNYXJrZXIobWFya2VyKTtcblxuICAgIC8vIERpc2FibGluZyB6b29tIGdlc3R1cmVzXG4gIG1hcFZpZXcuc2V0dGluZ3Muem9vbUdlc3R1cmVzRW5hYmxlZCA9IGZhbHNlO1xufVxuXG5leHBvcnRzLm9uTWFwUmVhZHkgPSBvbk1hcFJlYWR5O1xuZXhwb3J0cy5vbk5hdmlnYXRpbmdUbyA9IG9uTmF2aWdhdGluZ1RvO1xuOyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL21hcC9tYXAtcGFnZS5qc1wiKSApIHtcbiAgICBcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgIG1vZHVsZS5ob3QuZGlzcG9zZSgoKSA9PiB7XG4gICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogXCJzY3JpcHRcIiwgcGF0aDogXCIuL21hcC9tYXAtcGFnZS5qc1wiIH0pO1xuICAgIH0pO1xufSAiXSwic291cmNlUm9vdCI6IiJ9