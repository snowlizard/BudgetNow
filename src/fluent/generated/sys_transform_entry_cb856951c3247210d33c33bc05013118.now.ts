import { Record } from '@servicenow/sdk/core'

export default Record({
    $id: 'cb856951c3247210d33c33bc05013118',
    table: 'sys_transform_entry',
    data: {
        choice_action: 'ignore',
        coalesce: false,
        coalesce_case_sensitive: false,
        coalesce_empty_fields: false,
        date_format: 'yyyy-MM-dd HH:mm:ss',
        map: '8c22a15dc3e07210d33c33bc050131fa',
        reference_value_field: 'sys_id',
        source_field: '[Script]',
        source_script: `answer = (function transformEntry(source) {

    if (source.u_withdrawal != "") {
        // Charles Schwab Account
        return "75e172c9c3643210d33c33bc05013191";
		// Schwab Savings
		// return "bff136c9c3643210d33c33bc05013131";
    }
    return "";

})(source);`,
        source_table: 'x_842748_budgetnow_schwab_data',
        sys_name: '[Script]',
        target_field: 'source',
        target_table: 'x_842748_budgetnow_transaction',
        use_source_script: true,
    },
})
