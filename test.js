const request = require('request');
let urlTest = 'https://eodhistoricaldata.com/api/technical/AAPL.US?api_token=61d6b23a084306.60499458&fmt=json&function=ema&period=100&from=2021-01-01';

//--GET--
let url = 'https://jsonplaceholder.typicode.com/todos/1';
let resGET;
let statusGET
let errorGET

request.get(url, function (error, response) {
  resGET = response.body;
  statusGET = response.statusCode
  errorGET = response.error
  console.log('GET');
  console.log('status: ',statusGET);
  console.log('res: ',resGET);
  console.log('error: ',errorGET);

});

//--POST/PUT--
let customerUrl = 'https://api.dev-capitalix.com/customers/';
let customerLead = {
  email: 'ng_e2e@blackrockng.com',
  mobile: '+4748130055',
  password: '123456Aa',
  first_name: 'Qa',
  last_name: 'API',
  brand_id: 'CAPITALIX',
  system_id: 'web',
  login_type_id: 'regular',
  country_id: 'NO',
  lang_id: 'en',
  daily_deposit_limit: 100,
  auth_method: 'regular',
  token: 'string',
  login: 'true'
};

let resPOST;
let statusPOST;
let errorPOST;

request.post({url:customerUrl,form: customerLead,headers: {"Content-Type":"application/json"}}, function(error, response){
  resPOST = response.body;
  statusPOST = response.statusCode;
  errorPOST = response.error;
  console.log('POST');
  console.log('status: ',statusPOST);
  console.log('res: ',resPOST);
  console.log('error: ',errorPOST);
})

