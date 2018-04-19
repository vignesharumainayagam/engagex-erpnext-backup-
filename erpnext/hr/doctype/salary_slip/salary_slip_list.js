frappe.listview_settings['Salary Slip'] = {
	add_fields: ["employee", "employee_name"],
		enable_menu:true,
	in_filter :"Employee",
	filt_field:"employee"
};
exec_filter("Employee","Salary Slip");
