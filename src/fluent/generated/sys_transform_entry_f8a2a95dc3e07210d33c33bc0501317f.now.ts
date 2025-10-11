import { Record } from '@servicenow/sdk/core'

export default Record({
    $id: 'f8a2a95dc3e07210d33c33bc0501317f',
    table: 'sys_transform_entry',
    data: {
        choice_action: 'create',
        coalesce: false,
        coalesce_case_sensitive: false,
        coalesce_empty_fields: false,
        date_format: 'MM-dd-yyyy',
        map: '8c22a15dc3e07210d33c33bc050131fa',
        source_field: '[Script]',
        source_script: `answer = (function transformEntry(source) {

    return source.u_date.replaceAll('/', '-');

})(source);`,
        source_table: 'x_842748_budgetnow_schwab_data',
        sys_name: '[Script]',
        target_field: 'date',
        target_table: 'x_842748_budgetnow_transaction',
        use_source_script: true,
    },
})
