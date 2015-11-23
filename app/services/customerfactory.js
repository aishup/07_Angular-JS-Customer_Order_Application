  var customersFactory =function() {
    var customer =[
                   {  name:'alan',
                      id:1,
                      city:'nyc',
                      datejoined:'2000-10- 12',
                      ordertotal:29.2212,
                      orders: [
                        {
                          id:1,
                          product:'kindle',
                          total:29.2212
                        }]
                   },
                   {  name:'caif',
                      id:2,
                      city:'wa dc',
                      datejoined:'2003-01-02',
                      ordertotal:40.2289,
                      orders: [
                        {
                          id:2,
                          product:'kindle',
                          total:40.2289
                        }]
                   },
                   {  name:'doaf',
                      id:3,
                      city:'nj',
                      datejoined:'2010-10-30',
                      ordertotal:100.2299,
                      orders: [
                        {
                          id:3,
                          product:'kindle',
                          total:100.2299
                        }]
                   },
                   {  name:'kaif',
                      id:4,
                      city:'wa',
                      datejoined:'2010-10-30',
                      ordertotal:100.2299,
                      orders: [
                        {
                          id:4,
                          product:'kindle',
                          total:100.2299
                        }]
                   }];
    //defining the factory object
    var factory = {};
    factory.getCustomers = function () {
      return customer;
    }
    factory.getOcustomers = function (customerId) {
      console.log(customerId);
      for(i=0,len=customer.length;i<len;i++) {
        if(customer[i].id == (customerId)) {
           return customer[i];
          } 
        }
      }        
    return factory;
  };

  angular.module('customersApp').factory('customersFactory',customersFactory);