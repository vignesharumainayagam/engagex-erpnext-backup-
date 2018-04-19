// Copyright (c) 2016, Frappe Technologies Pvt. Ltd. and contributors
// For license information, please see license.txt
/* eslint-disable */

// frappe.query_reports["Lead by sources"] = {
// 	"filters": [
// 		{
// 			"fieldname": "accumulated_values",
// 			"label": __("Accumulated Values"),
// 			"fieldtype": "Check"
// 		}
// 	],
// 	"tree": true,
// 	"name_field": "lead_name",
// 	"parent_field": "lead_source",
// 	"initial_depth": 3


// }




	frappe.query_reports["Lead by sources"] = {
		"filters": [
			{
				"fieldname": "company",
				"label": __("Company"),
				"fieldtype": "Link",
				"options": "Company"
			}
		],
		"formatter": function(row, cell, value, columnDef, dataContext, default_formatter) {
		if (columnDef.df.fieldname=="lead_source") {
			value = dataContext.lead_source;

			columnDef.df.is_tree = true;
		}

		value = default_formatter(row, cell, value, columnDef, dataContext);

		if (!dataContext.lead_source) {
			var $value = $(value).css("font-weight", "bold");
			if (dataContext.warn_if_negative && dataContext[columnDef.df.fieldname] < 0) {
				$value.addClass("text-danger");
			}

			value = $value.wrap("<h1></h1>").parent().html();
		}

		return value;
	},

		"tree": true,
		"name_field": "lead_name",
		"parent_field": "lead_source",
		"initial_depth": 5
}


