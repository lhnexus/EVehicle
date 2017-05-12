sap.ui.controller("Panels.Reports.Reports", {

	onInit: function() {
	var data = {
				reports: [
					{reportName: "Marketing Report", date: "12/03/2017",count: "5"},
					{reportName: "Sales Report", date: "10/03/2017", count: "10"},
					{reportName: "Battery Service Report", date: "1/02/2017", count: "20"},
					{reportName: "Customer Service Report", date: "22/03/2017", count: "13"},
					{reportName: "Vehicle Service  Report", date: "21/02/2017", count: "15"}
				]
	};
			
	var model = new sap.ui.model.json.JSONModel();
	model.setData(data);
			
	var list = new sap.m.List({
		//headerText:"Reports"
	});
	
	
	var detailPage = new sap.m.Page("detailPage", {
		title: "Detail Page",
		showNavButton: true,
		navButtonPress: function(){
			sap.ui.getCore().AppContext.App.back();
		},
		content : [
			new sap.ui.layout.form.SimpleForm({ 
				title: "Details",
				content: [
					new sap.m.Label({text: "Report Name"}),
					new sap.m.Text({text: "{reportName}"}),
					new sap.m.Label({text: "Count"}),
					new sap.m.Text({text: "{count}"})
				]
			})
		]
	});
				
	list.bindItems({
		path : "/reports", 
		sorter : new sap.ui.model.Sorter("count"),
		template : new sap.m.StandardListItem({
					title: "{reportName}",
					info: "{count}",
					description: "{date}",
					type: sap.m.ListType.Navigation,
					icon : "sap-icon://manager-insight",
					press:function(evt){
						var oBindingContext = evt.getSource().getBindingContext(); 
						detailPage.setBindingContext(oBindingContext); 
						sap.ui.getCore().AppContext.App.to("detailPage");
			}
		})
	});
			
	var reportPage = new sap.m.Page({
		content : list
	});
			
	var oPanel = this.getView().byId("RPanel");
	                        
			
	var reportApp = new sap.m.App({
		pages: [reportPage, detailPage]
	});//.placeAt("reportList");
	reportApp.setModel(model);
	oPanel.addContent(reportApp);

		
	}
});