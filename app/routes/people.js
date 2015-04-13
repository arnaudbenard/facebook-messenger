import Ember from 'ember';
import RequestMixin from '../mixins/request';

export default Ember.Route.extend(RequestMixin, {

    model() {
        return this.request({
            url: 'http://reqr.es/api/users',
            type: 'GET',
            data: {}
        });
    }
});
