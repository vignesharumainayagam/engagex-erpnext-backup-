frappe.listview_settings['Attendance'] = {
	add_fields: ["status", "attendance_date"],
	enable_menu:true,
	in_filter :"Employee",
	filt_field:"employee",
	get_indicator: function(doc) {
		return [__(doc.status), doc.status=="Present" ? "green" : "darkgrey", "status,=," + doc.status];
	}
};
exec_filter("Employee","Attendance");
