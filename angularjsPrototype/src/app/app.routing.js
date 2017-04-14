"use strict";
var router_1 = require('@angular/router');
var user_component_1 = require('./components/user.component');
var about_component_1 = require('./components/about.component');
var customer_component_1 = require('./components/customer.component');
var services_component_1 = require('./components/services.component');
var appRoutes = [
    {
        path: '',
        component: user_component_1.UserComponent
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent
    },
    {
        path: 'customers',
        component: customer_component_1.CustomerComponent
    },
    {
        path: 'services',
        component: services_component_1.ServicesComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map