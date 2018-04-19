from frappe import _

def get_data():
	return {
		'heatmap': True,
		'heatmap_message': _('This is based on the Time Sheets created against this project'),
		'fieldname': 'project',
		'transactions': [
			{
				'items': ['Task']
			},
			{
				'items': ['Course Schedule']
			},
			{
				'items': ['Batch Assignment']
			},
			{
				'items': ['Batch Discussion']
			},
			{
				'items': ['Batch Files']
			},
		]
	}
