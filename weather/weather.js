const request=require('request');

let getWeather=(lat,lng,callback)=>{
request({
	url:`https://api.darksky.net/forecast/adee625c8ac52c7274e63ec53a7552e2/${lat},${lng}`,
	json: true
},(error,response,body)=>{
if(!error&&response.statusCode===200){
	callback(undefined,{
	temperature: body.currently.temperature,
	apparentTemperature: body.currently.apparentTemperature
	});
	}
	else{
	callback('Unable to fetch weather');
}
});
};

module.exports.getWeather=getWeather;
 