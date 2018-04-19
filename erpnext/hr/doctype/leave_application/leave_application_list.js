frappe.listview_settings['Leave Application'] = {
	add_fields: ["workflow_state", "leave_type", "employee", "employee_name", "total_leave_days", "from_date", "to_date"],
	enable_menu:true,
	in_filter :"Employee",
	filt_field:"employee",
	get_indicator: function(doc) {
		return [__(doc.workflow_state), frappe.utils.guess_colour(doc.workflow_state),
			"workflow_state,=," + doc.workflow_state];
	}
};
exec_filter("Employee","Attendance");

