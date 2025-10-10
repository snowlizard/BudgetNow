import { Record } from '@servicenow/sdk/core'

export default Record({
    $id: '9013e9f0c3a03210d33c33bc050131b6',
    table: 'sys_ui_policy',
    data: {
        active: true,
        conditions: 'type=withdrawal^EQ',
        global: true,
        inherit: false,
        isolate_script: true,
        on_load: true,
        order: 100,
        reverse_if_false: true,
        run_scripts: false,
        script_false: `function onCondition() {

}`,
        script_true: `function onCondition() {

}`,
        short_description: 'Transcation type is withdrawal',
        sys_domain: 'global',
        sys_domain_path: '/',
        sys_name: 'Transcation type is withdrawal',
        table: 'x_842748_budgetnow_transaction',
        ui_type: 0,
    },
})
