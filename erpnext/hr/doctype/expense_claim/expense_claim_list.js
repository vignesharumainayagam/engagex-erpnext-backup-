frappe.listview_settings['Expense Claim'] = {
	add_fields: ["approval_status", "total_claimed_amount", "docstatus"],
	enable_menu:true,
	in_filter :"Employee",
	filt_field:"employee",
	filters:[["approval_status","!=", "Rejected"]],
	get_indicator: function(doc) {
		if(doc.status == "Paid") {
			return [__("Paid"), "green", "status,=,'Paid'"];
		}else if(doc.status == "Unpaid") {
			return [__("Unpaid"), "orange"];
		} else if(doc.status == "Rejected") {
			return [__("Rejected"), "grey"];
		}
	}
};
exec_filter("Employee","Expense Claim");

