frappe.listview_settings['Vehicle Log'] = {
	enable_menu:true,
	in_filter :"Vehicle",
	filt_field:"license_plate"

};
exec_filter("Vehicle","Vehicle Log");