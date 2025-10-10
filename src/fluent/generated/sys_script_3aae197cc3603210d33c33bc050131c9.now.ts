import { BusinessRule } from '@servicenow/sdk/core'

export default BusinessRule({
    $id: '3aae197cc3603210d33c33bc050131c9',
    action: ['update', 'insert'],
    filter_condition: `type=withdrawal^EQ`,
    script: `(function executeRule(current, previous /*null when async*/ ) {

    let amount = current.amount * -1;
    let sourceAccount = new GlideRecord('x_842748_budgetnow_account');
    if (sourceAccount.get(current.source.sys_id)) {
        if (previous) {
            sourceAccount.balance += previous.amount;
        }
        sourceAccount.balance += amount;
        sourceAccount.update();
    }

})(current, previous);`,
    table: 'x_842748_budgetnow_transaction',
    name: 'Handle withdrawal amount',
    order: 100,
    when: 'before',
    active: true,
    add_message: false,
    abort_action: false,
})
