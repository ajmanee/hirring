/**
 * Created by ali on 10/15/16.
 */
Template.AddEmployee.helpers({
    employee: function(){
        return Employee.find();
    }
})