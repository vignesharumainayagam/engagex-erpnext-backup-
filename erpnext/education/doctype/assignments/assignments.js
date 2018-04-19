// Copyright (c) 2018, Frappe Technologies Pvt. Ltd. and contributors
// For license information, please see license.txt

frappe.ui.form.on('Assignments', {
	refresh: function(frm) {

	},
	onload: function(frm){
		frappe.call({
			method: "frappe.client.get_list",
			args: {
				doctype: "Student Group Student",
				filters: [
							["parent","=", frm.doc.student_group]
						],
				fields: ["student","student_name"]
			},
			callback: function(r) {
				console.log(r.message)
			   for(var e=0; e<r.message.length; e++){
					frappe.model.add_child(cur_frm.doc, "Student List", "students");  
			        $.each(frm.doc.students || [], function(e, v) {
			        frappe.model.set_value(v.doctype, v.name, "student_number", r.message[e].student)
			        frappe.model.set_value(v.doctype, v.name, "student_name", r.message[e].student_name)
			        })
			        frm.refresh_field("students");			
				}
			}
		});
	},
});
