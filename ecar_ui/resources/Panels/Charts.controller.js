sap.ui.controller("Panels.Charts", {

	
	onInit: function() {
	
	this.getView().byId("status_chart").attachBrowserEvent("click",function() {
		window.location='/vehicle.html';
	});
	
	this.getView().byId("region_chart").attachBrowserEvent("click",function() {
		window.location='#vehicleLocation';
	});
	
	this.getView().byId("service_chart").attachBrowserEvent("click",function() {
		window.location='#reports';
	});
	
	this.getView().byId("audit_chart").attachBrowserEvent("click",function() {
		window.location='#reports';
	});
	
	}


});