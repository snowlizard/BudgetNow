import { Record } from '@servicenow/sdk/core'

export default Record({
    $id: '8c22a15dc3e07210d33c33bc050131fa',
    table: 'sys_transform_map',
    data: {
        active: true,
        copy_empty_fields: false,
        create_new_record_on_empty_coalesce_fields: false,
        enforce_mandatory_fields: 'No',
        name: 'Schwab transform map',
        order: 100,
        run_business_rules: true,
        run_script: false,
        script: `(function transformRow(source, target, map, log, isUpdate) {

	// Add your code here

})(source, target, map, log, action==="update");`,
        source_table: 'x_842748_budgetnow_schwab_data',
        sys_name: 'Schwab transform map',
        target_table: 'x_842748_budgetnow_transaction',
    },
})
