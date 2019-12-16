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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tYXAvbWFwLXBhZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxtRUFBcUIsbUJBQU8sQ0FBQyx5QkFBa0I7QUFDL0MsaUJBQWlCLG1CQUFPLENBQUMsMERBQThCOztBQUV2RCxhQUFhLG1CQUFPLENBQUMsZUFBUTs7QUFFN0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEM7QUFDQSxJQUFJLEtBQVU7O0FBRWQ7QUFDQTtBQUNBLDJCQUEyQiw0Q0FBNEM7QUFDdkUsS0FBSztBQUNMLEMiLCJmaWxlIjoiYnVuZGxlLjU4MjhkYjJkN2IxNjYzMDRlNzU0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBNYXBWaWV3TW9kZWwgPSByZXF1aXJlKFwiLi9tYXAtdmlldy1tb2RlbFwiKTtcbnZhciBtYXBzTW9kdWxlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1nb29nbGUtbWFwcy1zZGtcIik7XG5cbmNvbnN0IGRhdGEgPSByZXF1aXJlKCcuL2RhdGEnKTtcblxuY29uc3QgZGF0YUxBVCA9IGRhdGEubWFwLmdlb2pzb24uZmVhdHVyZXMuY29vcmRpbmF0ZXMubGF0aXR1dGUgXG5cbmZ1bmN0aW9uIG9uTmF2aWdhdGluZ1RvKGFyZ3MpIHtcbiAgICBjb25zdCBjb21wb25lbnQgPSBhcmdzLm9iamVjdDtcbiAgICBjb21wb25lbnQuYmluZGluZ0NvbnRleHQgPSBuZXcgTWFwVmlld01vZGVsKCk7XG59XG5cbmZ1bmN0aW9uIG9uTWFwUmVhZHkoYXJncykge1xuICAgIHZhciBtYXBWaWV3ID0gYXJncy5vYmplY3Q7XG4gICAgdmFyIG1hcmtlciA9IG5ldyBtYXBzTW9kdWxlLk1hcmtlcigpO1xuXG5cbiAgICBtYXJrZXIucG9zaXRpb24gPSBtYXBzTW9kdWxlLlBvc2l0aW9uLnBvc2l0aW9uRnJvbUxhdExuZyg0NS42NDkyNjgzODU5MjEzOTUsIDEzLjc2MjA5MjU5MDMzMjAzMSk7XG4gICAgbWFya2VyLnRpdGxlID0gXCJDYWZmZSBkZWdsaSBzcGVjY2hpXCI7XG4gICAgbWFya2VyLmNvbG9yPSBcImdyZWVuXCJcbiAgICBtYXJrZXIuc25pcHBldCA9IFwiQ29sYXppb25lXCI7XG4gICAgbWFya2VyLnVzZXJEYXRhID0geyBpbmRleCA6IDF9O1xuICAgIG1hcFZpZXcuYWRkTWFya2VyKG1hcmtlcik7XG5cbiAgICAvLyBEaXNhYmxpbmcgem9vbSBnZXN0dXJlc1xuICBtYXBWaWV3LnNldHRpbmdzLnpvb21HZXN0dXJlc0VuYWJsZWQgPSBmYWxzZTtcbn1cblxuZXhwb3J0cy5vbk1hcFJlYWR5ID0gb25NYXBSZWFkeTtcbmV4cG9ydHMub25OYXZpZ2F0aW5nVG8gPSBvbk5hdmlnYXRpbmdUbztcbjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9tYXAvbWFwLXBhZ2UuanNcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwic2NyaXB0XCIsIHBhdGg6IFwiLi9tYXAvbWFwLXBhZ2UuanNcIiB9KTtcbiAgICB9KTtcbn0gIl0sInNvdXJjZVJvb3QiOiIifQ==