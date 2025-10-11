import { BusinessRule } from "@servicenow/sdk/core";

export default BusinessRule({
    $id: "b2373681c3a43210d33c33bc05013179",
    action: ["update","insert"],
    filter_condition:`type=revenue^EQ`,
    script: `(function executeRule(current, previous /*null when async*/ ) {

    let destinationAccount = new GlideRecord('x_842748_budgetnow_account');
    if (destinationAccount.get(current.destination.sys_id)) {
        if (previous) {
            if (previous.destination.sys_id != current.destination.sys_id) {
                var prevGR = new GlideRecord("x_842748_budgetnow_account");
                if (prevGR.get(previous.destination.sys_id)) {
                    prevGR.balance -= previous.amount;
                    prevGR.update();
                }
            } else {
                destinationAccount.balance -= previous.amount;
            }
        }
        destinationAccount.balance += current.amount;
        destinationAccount.update();
    }

})(current, previous);`,
    table: "x_842748_budgetnow_transaction",
    name: "Handle revenue",
    order: 100,
    when: "before",
    active: true,
    add_message: false,
    abort_action: false
});
