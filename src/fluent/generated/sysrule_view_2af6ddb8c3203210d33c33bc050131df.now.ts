import { Record } from '@servicenow/sdk/core'

export default Record({
    $id: '2af6ddb8c3203210d33c33bc050131df',
    table: 'sysrule_view',
    data: {
        active: true,
        advanced: false,
        condition: 'type=transfer^EQ',
        device_type: 'browser',
        match_conditions: 'ALL',
        name: 'Transfer',
        order: 100,
        overrides_user_preference: true,
        script: `(function overrideView(view, is_list) {

	// Add your code here
	answer = null;  // set the new view to answer

})(view, is_list);`,
        sys_domain: 'global',
        sys_domain_path: '/',
        sys_name: 'Transfer',
        table: 'x_842748_budgetnow_transaction',
        view: 'transfer',
    },
})
