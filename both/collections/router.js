/**
 * Created by ali on 10/15/16.
 */
Router.configure({
    layoutTemplate: 'main'
});
Router.route('/', 'AddEmployee');
Router.route('/AddEmployee/:_id', function () {
    var item = Employee.findOne({_id: this.params._id});
    this.render('EditEmployee', {data: item});
}, {
    name: 'employee.show'
});
