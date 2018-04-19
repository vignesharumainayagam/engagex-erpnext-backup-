// Copyright (c) 2018, Frappe Technologies Pvt. Ltd. and contributors
// For license information, please see license.txt

frappe.ui.form.on('Staff Timesheet', {
	time_logs_remove: function(frm) {
		calculate_time_and_amount(frm);
	},

	from_time: function(frm, cdt, cdn) {
		calculate_end_time(frm, cdt, cdn);
	},

	to_time: function(frm, cdt, cdn) {
		var child = locals[cdt][cdn];

		if(frm._setting_hours) return;
		frappe.model.set_value(cdt, cdn, "hours", moment(child.to_time).diff(moment(child.from_time),
			"seconds") / 3600);
	},

	hours: function(frm, cdt, cdn) {
		calculate_end_time(frm, cdt, cdn)
	},
	refresh: function(frm) {

	},
	onload: function(frm){
		if (frm.doc.__islocal && frm.doc.time_logs) {
			calculate_time_and_amount(frm);
		}
	},
});

var calculate_end_time = function(frm, cdt, cdn) {
	let child = locals[cdt][cdn];

	if(!child.from_time) {
		// if from_time value is not available then set the current datetime
		frappe.model.set_value(cdt, cdn, "from_time", frappe.datetime.get_datetime_as_string());
	}

	let d = moment(child.from_time);
	if(child.hours) {
		d.add(child.hours, "hours");
		frm._setting_hours = true;
		frappe.model.set_value(cdt, cdn, "to_time",
			d.format(moment.defaultDatetimeFormat)).then(() => {
				frm._setting_hours = false;
			});
	}
}

var calculate_time_and_amount = function(frm) {
	var tl = frm.doc.time_logs || [];
	var total_working_hr = 0;
	for(var i=0; i<tl.length; i++) {
		if (tl[i].hours) {
			total_working_hr += tl[i].hours;
		}
	}

	frm.set_value("total_hours", total_working_hr);
}
