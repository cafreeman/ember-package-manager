import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    loginOrSignUp(isLogin) {
      if (isLogin) {
        console.log("triggering login from the route");
      } else {
        console.log("triggering signup from the route");
      }
    }
  }
});
