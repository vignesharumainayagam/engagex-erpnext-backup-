from __future__ import unicode_literals
from frappe import _

def get_data():
	return [
		{
			"label": _("School"),
			"items": [
				{
					"type": "doctype",
					"name": "School",
				},
				{
					"type": "doctype",
					"name": "Crop Cycle",
				},
				{
					"type": "doctype",
					"name": "Land Unit",
				}
			]
		},
	]