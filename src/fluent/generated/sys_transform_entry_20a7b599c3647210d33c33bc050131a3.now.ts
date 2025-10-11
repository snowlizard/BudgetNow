import { Record } from '@servicenow/sdk/core'

export default Record({
    $id: '20a7b599c3647210d33c33bc050131a3',
    table: 'sys_transform_entry',
    data: {
        choice_action: 'create',
        coalesce: false,
        coalesce_case_sensitive: false,
        coalesce_empty_fields: false,
        date_format: 'yyyy-MM-dd HH:mm:ss',
        map: 'a147f199c3647210d33c33bc050131c0',
        source_field: 'u_description',
        source_script: `answer = (function transformEntry(source) {

	// Add your code here
	return ""; // return the value to be put into the target field

})(source);`,
        source_table: 'x_842748_budgetnow_amex_data_import',
        sys_name: 'u_description',
        target_field: 'description',
        target_table: 'x_842748_budgetnow_transaction',
        use_source_script: false,
    },
})
