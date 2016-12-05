import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

FlowRouter.route('/', {
  name: 'Home_page',
  action() {
    BlazeLayout.render('Main_layout', { main: 'List_matches_page' });
  },
});

FlowRouter.route('/matches/new', {
  name: 'New_match_page',
  action() {
    BlazeLayout.render('Main_layout', { main: 'New_match_page' });
  },
});
