import Ember from 'ember';
import RequestMixin from '../../../mixins/request';
import { module, test } from 'qunit';

module('RequestMixin');

// Replace this with your real tests.
test('it works', function(assert) {
  var RequestObject = Ember.Object.extend(RequestMixin);
  var subject = RequestObject.create();
  assert.ok(subject);
});
