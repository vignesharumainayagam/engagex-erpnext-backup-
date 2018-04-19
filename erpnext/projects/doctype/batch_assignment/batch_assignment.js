// Copyright (c) 2018, Frappe Technologies Pvt. Ltd. and contributors
// For license information, please see license.txt

frappe.ui.form.on('Batch Assignment', {
	refresh: function(frm) {

	},

	onload: function(frm){
			frappe.call({
				method: "frappe.client.get_list",
				args: {
					doctype: "Student",
					fields: ["name","first_name"]
				},
				callback: function(r) {
					console.log(r.message)
   for(var e=0; e<r.message.length; e++){
		frappe.model.add_child(cur_frm.doc, "Student List", "students");  
        $.each(frm.doc.students || [], function(e, v) {
        frappe.model.set_value(v.doctype, v.name, "student_number", r.message[e].name)
        frappe.model.set_value(v.doctype, v.name, "student_name", r.message[e].first_name)
        })
        frm.refresh_field("students");			
}


				}
			});
},
});
// args: {
// 					"fee_structure": frm.doc.fee_structure
// 				},