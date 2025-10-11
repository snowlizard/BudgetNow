import { Record } from '@servicenow/sdk/core'

export default Record({
    $id: '64a7b599c3647210d33c33bc050131a0',
    table: 'sys_transform_entry',
    data: {
        choice_action: 'create',
        coalesce: false,
        coalesce_case_sensitive: false,
        coalesce_empty_fields: false,
        date_format: 'MM-dd-yyyy',
        map: 'a147f199c3647210d33c33bc050131c0',
        source_field: '[Script]',
        source_script: `answer = (function transformEntry(source) {

    return source.u_date.replaceAll('/', '-');

})(source);`,
        source_table: 'x_842748_budgetnow_amex_data_import',
        sys_name: '[Script]',
        target_field: 'date',
        target_table: 'x_842748_budgetnow_transaction',
        use_source_script: true,
    },
})
