import { Record } from '@servicenow/sdk/core'

export default Record({
    $id: '48405d38c3203210d33c33bc050131f3',
    table: 'sys_relationship',
    data: {
        advanced: false,
        basic_apply_to: 'x_842748_budgetnow_account',
        basic_query_from: 'x_842748_budgetnow_transaction',
        name: 'Transfers',
        query_with: `(function refineQuery(current, parent) {

    current.addEncodedQuery("type=transfer^destination.account_ownerDYNAMIC90d1921e5f510100a9ad2572f2b477fe^dateONThis month@javascript:gs.beginningOfThisMonth()@javascript:gs.endOfThisMonth()^destination=" + parent.sys_id);

})(current, parent);`,
        simple_reference: false,
        sys_name: 'Transfers',
    },
})
