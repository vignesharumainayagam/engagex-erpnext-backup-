// Copyright (c) 2016, Frappe Technologies Pvt. Ltd. and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports["Call Log"] = {
	"filters": [
			{
				"fieldname": "month",
				"label": "Month",
				"fieldtype": "Select",
				"options": ["January","February","March","April","May","June","July","August","September","October","November","December"],
			},
			{
				"fieldname": "year",
				"label": "Year",
				"fieldtype": "Select",
				"options": ["2017","2018","2019","2020","2021","2022","2023","2024","2025"],
			}
	]};

