import { Record } from '@servicenow/sdk/core'

export default Record({
    $id: '28b0d938c3203210d33c33bc0501316a',
    table: 'sys_relationship',
    data: {
        advanced: false,
        basic_apply_to: 'x_842748_budgetnow_account',
        basic_query_from: 'x_842748_budgetnow_transaction',
        name: 'Revenue',
        query_with: `(function refineQuery(current, parent) {

    current.addEncodedQuery("type=revenue^destination.account_ownerDYNAMIC90d1921e5f510100a9ad2572f2b477fe^dateONThis year@javascript:gs.beginningOfThisYear()@javascript:gs.endOfThisYear()^destination=" + parent.sys_id);
})(current, parent);`,
        simple_reference: false,
        sys_name: 'Revenue',
    },
})
