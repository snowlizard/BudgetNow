import { Record } from '@servicenow/sdk/core'

export default Record({
    $id: '99d7fd99c3647210d33c33bc0501319b',
    table: 'sys_transform_entry',
    data: {
        choice_action: 'ignore',
        coalesce: false,
        coalesce_case_sensitive: false,
        coalesce_empty_fields: false,
        date_format: 'yyyy-MM-dd HH:mm:ss',
        map: 'a147f199c3647210d33c33bc050131c0',
        source_field: '[Script]',
        source_script: `answer = (function transformEntry(source) {

    if (source.u_amount < 0) {
        return "revenue";
    } else {
        return "withdrawal";
    }

})(source);`,
        source_table: 'x_842748_budgetnow_amex_data_import',
        sys_name: '[Script]',
        target_field: 'type',
        target_table: 'x_842748_budgetnow_transaction',
        use_source_script: true,
    },
})
