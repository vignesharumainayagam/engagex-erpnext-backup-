frappe.listview_settings['Leave Allocation'] = {
	enable_menu:true,
	in_filter :"Employee",
	filt_field:"employee"

};
exec_filter("Employee","Leave Allocation");