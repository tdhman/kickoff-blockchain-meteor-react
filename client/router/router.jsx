import React from 'react';
import {mount} from 'react-mounter';

import {Dashboard} from '/client/layouts/dashboard.jsx';
import Overview from '/client/components/pages/overview.jsx';
import Reports from '/client/components/pages/reports.jsx';
import Login from '/client/components/pages/login.jsx';
import ErrorPage from '/client/components/pages/ErrorPage.jsx';


FlowRouter.route("/", {
  name: 'Dashboard',
  action (){
    mount(Dashboard, {
      content: <Overview />
    });
  }
});

FlowRouter.route('/dashboard/overview', {
  name: 'Overview',
  action() {
    mount(Dashboard, {
      content: <Overview />
    });
  }
});

FlowRouter.route('/dashboard/reports', {
  name: 'Reports',
  action() {
    mount(Dashboard, {
      content: <Reports />
    });
  }
});

FlowRouter.route('/login', {
  name: 'Login',
  action() {
    mount(Login);
  }
});

FlowRouter.route('/*', {
  action() {
    mount(ErrorPage);
  }
});