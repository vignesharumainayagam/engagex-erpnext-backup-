# Copyright (c) 2013, Frappe Technologies Pvt. Ltd. and contributors
# For license information, please see license.txt
from __future__ import unicode_literals
import frappe
from frappe import _

def execute(filters=None):
	columns, data = [], []
	columns=get_call_log_columns()
	# data=get_call_log_data()
	return columns, data
def get_call_log_columns():
	return [
		_("Campaign Name") + ":data:130", 
		_("Lead Count") + ":Int:80",
		_("Opp Count") + ":Int:80",
		_("Quot Count") + ":Int:80", 
		_("Order Count") + ":Int:100",
		_("Order Value") + ":Float:100",
		_("Opp/Lead %") + ":Float:100",
		_("Quot/Lead %") + ":Float:100",
		_("Order/Quot %") + ":Float:100"
	]
def get_call_log_data():
	return [
		{"Staff Name":"test", 
		"No. of call" :3, 
		"No. of incoming calls" :2, 
		"No. of outgoing call":1}
	]