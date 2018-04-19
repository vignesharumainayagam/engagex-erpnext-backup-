// Copyright (c) 2018, Frappe Technologies Pvt. Ltd. and contributors
// For license information, please see license.txt

frappe.ui.form.on('Billings', {
	refresh: function(frm) {

	},
	after_save: function(frm) {
		if (!frm.doc.__islocal) {
	  $.ajax({
	  url : window.location.origin+"/api/method/erpnext.accounts.doctype.journal_entry.journal_entry.quick_entry",
	  dataType: 'text',
	  type: 'POST',
	  contentType: 'application/json',
	  data : JSON.stringify( {
	  "debit" : frm.doc.amount,
	  "credit_account" : frm.doc.credit_account,
	  "debit_account" : frm.doc.debit_account,
	  "contact_phone" : frm.doc.phone_number,
	  "posting_date": frm.doc.expense_date,
	  "user_remark": frm.doc.note
	  }
	  ),
	  beforeSend: function(xhr){
	  xhr.setRequestHeader(
	  'X-Frappe-CSRF-Token', frappe.csrf_token
	  );
	  },success: function(data){
	  console.log(data); 
	  }, error: function(error){
	  console.log(error);
	  }
	  });
	}
	else
	{
		frappe.throw(__("Save the Document first"));
	}
	},
});
