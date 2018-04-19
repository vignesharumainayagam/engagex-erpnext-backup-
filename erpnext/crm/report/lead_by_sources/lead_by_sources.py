# Copyright (c) 2013, Frappe Technologies Pvt. Ltd. and contributors
# For license information, please see license.txt


from __future__ import unicode_literals
import frappe
from frappe import _
from frappe.utils import flt
from erpnext.accounts.report.financial_statements import (get_period_list, get_columns, get_data)

def execute(filters=None):

	columns  = 	[
		{
			"fieldname": "lead_source",
			"label": _("Lead Sources"),
			"fieldtype": "Link",
			"options": "Lead Source",
			"width": 01
		},
		{
			"fieldname": "lead_name",
			"label": _("Lead Name"),
			"fieldtype": "Link",
			"options": "Lead Name",
			"width": 250
		},
		{
			"fieldname": "lead_status",
			"label": _("Status"),
			"width": 120
		},
		{
			"fieldname": "contact_number",
			"label": _("Contact Number"),
			"fieldtype": "Data",
			"width": 120
		},
		{
			"fieldname": "email_id",
			"label": _("E-Mail ID"),
			"fieldtype": "Data",
			"width": 120
		},
		{
			"fieldname": "lead_owner",
			"label": _("Lead Owner"),
			"fieldtype": "Link",
			"options": "User",
			"width": 120
		},
		{
			"fieldname": "next_contact_date",
			"label": _("Next Contact Date"),
			"fieldtype": "Datetime",
			"width": 120
		},
		{
			"fieldname": "lead_type",
			"label": _("Lead Type"),
			"width": 120
		}
	]


	# data = [{
	# "lead_name":"Web1"
	# },
	# {
	# "lead_name":"Kartheek",
	# "lead_source":"Web1"
	# },
	# {
	# "lead_name":"Vicky",
	# "lead_source":"Web1"
	# },
	# {
	# "lead_name":"Google"
	# },
	# {
	# "lead_name":"Gnanam",
	# "lead_source":"Google"
	# },
	# {
	# "lead_name":"Nixon",
	# "lead_source":"Google"
	# }
	# ]

	array = []

	source = frappe.db.get_list('Lead Source', filters={},
			 fields=['source_name']) 

	for d in source:
		array.append({"lead_name":d.source_name})
		leads = frappe.db.get_list('Lead', filters={"source": d.source_name}, fields=['source', 'lead_name', 
								'status', 'email_id', 'lead_owner', 'mobile_no', 'contact_date', 'type'])
		for i in leads:
			array.append({"lead_name":i.lead_name, "lead_source": i.source,
						  "lead_status": i.status, "lead_owner": i.lead_owner,
						  "email_id": i.email_id, "contact_number": i.mobile_no, 'lead_type': i.type, 
						  "next_contact_date": i.contact_date})

	data = array


	chart = get_chart_data()

	# return columns, data

	return columns, data, chart


def get_chart_data():
	labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug" ],



	datasets = [            
			{
                "title": "Student",
                "values": [25, 40, 30, 35, 8, 52, 17, -4]
            },
            {
                "title": "Program",
                "values": [25, 50, -10, 15, 18, 32, 27, 14]
            },
            {
                "title": "Student Group",
                "values": [15, 20, -3, -15, 58, 12, -17, 37]
            }
        ]

	chart = {
		"data": {
			'labels': labels,
			'datasets': datasets,
			"type": 'bar'
		}
	}

	return chart

