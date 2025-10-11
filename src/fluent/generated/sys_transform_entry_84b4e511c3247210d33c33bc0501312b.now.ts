import { Record } from '@servicenow/sdk/core'

export default Record({
    $id: '84b4e511c3247210d33c33bc0501312b',
    table: 'sys_transform_entry',
    data: {
        choice_action: 'create',
        coalesce: false,
        coalesce_case_sensitive: false,
        coalesce_empty_fields: false,
        date_format: 'yyyy-MM-dd HH:mm:ss',
        map: '8c22a15dc3e07210d33c33bc050131fa',
        source_field: '[Script]',
        source_script: `answer = (function transformEntry(source) {

    if (source.u_withdrawal != "") {
        return source.u_withdrawal;
    } else {
        return source.u_deposit;
    }

})(source);`,
        source_table: 'x_842748_budgetnow_schwab_data',
        sys_name: '[Script]',
        target_field: 'amount',
        target_table: 'x_842748_budgetnow_transaction',
        use_source_script: true,
    },
})
