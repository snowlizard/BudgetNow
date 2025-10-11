import { Record } from '@servicenow/sdk/core'

export default Record({
    $id: 'a147f199c3647210d33c33bc050131c0',
    table: 'sys_transform_map',
    data: {
        active: true,
        copy_empty_fields: false,
        create_new_record_on_empty_coalesce_fields: false,
        enforce_mandatory_fields: 'No',
        name: 'amex transform map',
        order: 100,
        run_business_rules: true,
        run_script: false,
        script: `(function transformRow(source, target, map, log, isUpdate) {

	// Add your code here

})(source, target, map, log, action==="update");`,
        source_table: 'x_842748_budgetnow_amex_data_import',
        sys_name: 'amex transform map',
        target_table: 'x_842748_budgetnow_transaction',
    },
})
