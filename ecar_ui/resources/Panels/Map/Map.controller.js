sap.ui.controller("Panels.Map.Map", {

	onInit: function() {

		this.onInitTableList(); 
	},

	onInitTableList: function() {

		var oPanel = this.getView().byId("MPanel"); 

		var oTable = new sap.ui.table.Table("vehicleTable", {
			title: "Vehicle Information",
			visibleRowCount: 10, 
			firstVisibleRow: 3,
			selectionMode: sap.ui.table.SelectionMode.Single,
			selectionBehavior: sap.ui.table.SelectionBehavior.Row
		});

		oTable.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({
				text: "STATUS"
			}),
			template: new sap.ui.core.Icon().setSrc("sap-icon://accept")
				.setColor("green"),
			width: "100px"
		}));
		oTable.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({
				text: "VID"
			}),
			template: new sap.ui.commons.TextView().bindProperty("text", "ID"),
			width: "200px"
		}));
		oTable.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({
				text: "MODEL"
			}),
			template: new sap.ui.commons.TextView().bindProperty("text", "MODEL"),
			width: "100px"
		}));
		oTable.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({
				text: "MAKE"
			}),
			template: new sap.ui.commons.TextView().bindProperty("text", "MAKE"),
			width: "100px"
		}));
		oTable.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({
				text: "COLOR"
			}),
			template: new sap.ui.commons.TextView().bindProperty("text", "COLOR"),
			width: "100px"
		}));
		oTable.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({
				text: "AGE"
			}),
			template: new sap.ui.commons.TextView().bindProperty("text", "AGE"),
			width: "100px"
		}));
		// oTable.addColumn(new sap.ui.table.Column({ label: new sap.ui.commons.Label({text:"Battery ID"}), 
		// 										   template: new sap.ui.commons.TextView().bindProperty("text","ID_BATTERY"),
		// 										   width: "100px"}));
		oTable.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({
				text: "LATITUDE"
			}),
			template: new sap.ui.commons.TextView().bindProperty("text", "LAT"),
			width: "150px"
		}));
		oTable.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({
				text: "LONGITUDE"
			}),
			template: new sap.ui.commons.TextView().bindProperty("text", "LNG"),
			width: "150px"
		}));
		oTable.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({
				text: "MILES"
			}),
			template: new sap.ui.commons.TextView().bindProperty("text", "MILES"),
			width: "100px"
		}));

		oTable.addColumn(new sap.ui.table.Column({
			label: new sap.ui.commons.Label({
				text: "CUSTOMER"
			}),
			template: new sap.ui.commons.TextView().bindProperty("text", "CUSTOMER_ID"),
			width: "100px"
		}));
		var oModel = new sap.ui.model.odata.ODataModel("/vehicleService.xsodata", true);
		oModel.bCache = false;
		oModel.refresh(); 
		console.log(oModel);
		oTable.setModel(oModel);
		oTable.bindRows("/vehicle");
		oPanel.addContent(oTable);
		
		//oTable.placeAt("vehicleInfoField");
		oModel.read('/vehicle', {
			success: function(oData) {
				if (oData.results.length > 0) {
					sap.ui.getCore().setModel(oData, "vehicleInformation");
					
				}
			}
		});
	}

});