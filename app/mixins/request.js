import Ember from 'ember';

export default Ember.Mixin.create({

    request(params={}) {
        return new Ember.RSVP.Promise((resolve, reject) => {
            Ember.$.ajax({
                url: params.url,
                data: params.data,
                type: params.type,
            })
            .success(resolve)
            .fail(reject);
        });
    },

});
