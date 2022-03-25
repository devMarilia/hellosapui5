sap.ui.define([
  "sap/ui/core/mvc/XMLView"
], function (XMLView) {
  "use strict";

  XMLView.create({
    viewName : "sap.ui.demo.hellosapui5.view.MainView"
  }).then(function (oView) {
		oView.placeAt("content");
  });
});
