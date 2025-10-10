import { Record } from '@servicenow/sdk/core'

export default Record({
    $id: '4bc69d70c3603210d33c33bc050131b5',
    table: 'sysrule_view',
    data: {
        active: true,
        advanced: false,
        condition: 'type=withdrawal^EQ',
        device_type: 'browser',
        match_conditions: 'ALL',
        name: 'Withdrawal',
        order: 100,
        overrides_user_preference: true,
        script: `(function overrideView(view, is_list) {

	// Add your code here
	answer = null;  // set the new view to answer

})(view, is_list);`,
        sys_domain: 'global',
        sys_domain_path: '/',
        sys_name: 'Withdrawal',
        table: 'x_842748_budgetnow_transaction',
        view: 'withdrawal',
    },
})
