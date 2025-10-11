import { Record } from '@servicenow/sdk/core'

export default Record({
    $id: '817bf9ddc3647210d33c33bc0501314c',
    table: 'sys_transform_entry',
    data: {
        choice_action: 'ignore',
        coalesce: false,
        coalesce_case_sensitive: false,
        coalesce_empty_fields: false,
        date_format: 'yyyy-MM-dd HH:mm:ss',
        map: 'a147f199c3647210d33c33bc050131c0',
        reference_value_field: 'sys_id',
        source_field: '[Script]',
        source_script: `answer = (function transformEntry(source) {

    if (JSON.parse(source.u_amount) < 0) {
        return "b1e17111c3647210d33c33bc05013195";
    } else {
        return "";
    }

})(source);`,
        source_table: 'x_842748_budgetnow_amex_data_import',
        sys_name: '[Script]',
        target_field: 'destination',
        target_table: 'x_842748_budgetnow_transaction',
        use_source_script: true,
    },
})
