// add this...
// 1
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import Vue from 'vue';
// and add this 
// 2
import VueApollo from 'vue-apollo';

import App from './App.vue';
import router from './router';

// just some styles
import 'tachyons';

Vue.config.productionTip = false;

// 3
// Here you create the httpLink
const httpLink = new HttpLink({
  // You should use an absolute URL here for the endpoint
  uri: 'https://api.graph.cool/simple/v1/cjsc6g9ls5gnx0198gofnxzm0'
});

// 4
// Now you instantiate the ApolloClient by passing in the httpLink
const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true
});

// 5
// Here you install the vue plugin
Vue.use(VueApollo);

// 6
// Next you create a new apollo client instance through 
// VueApollo and set the defaultClient to the apolloClient 
// we just created. You also set $loadingKey to ‘loading’ 
// so that we can easily display a loading indicator in the UI.
const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
  defaultOptions: {
    $loadingKey: 'loading'
  }
});

new Vue({
  // 7 
  // Specify the provide object on your root component
  apolloProvider,
  router,
  render: h => h(App)
}).$mount('#app');
