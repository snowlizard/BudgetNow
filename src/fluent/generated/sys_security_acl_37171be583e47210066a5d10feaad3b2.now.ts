import { Acl } from '@servicenow/sdk/core'

export default Acl({
    $id: '37171be583e47210066a5d10feaad3b2',
    script: ``,
    active: true,
    admin_overrides: true,
    decision_type: 'allow',
    description: 'Default access control on x_842748_budgetnow_budget_choice',
    local_or_existing: 'Existing',
    type: 'record',
    table: 'x_842748_budgetnow_budget_choice',
    operation: 'write',
    roles: ['282bf1fac6112285017366cb5f867469'],
})
