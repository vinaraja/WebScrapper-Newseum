var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();

app.get('/scrape', function(req, res){
	// Let's scrape Anchorman 2
	url = 'http://www.newseum.org/todaysfrontpages/?tfp_show=100';
    var links=[];
	request(url, function(error, response, html){
		if(!error){
			var $ = cheerio.load(html);

			//var title, release, rating;
			//var json = { title : "", release : "", rating : ""};
			var count=0;
			
			$('a').filter(function(){
		        var data = $(this).attr('href');
                count++;
				if(count>31&&count<231)
				{
					links.push(data);
				}
		         
	        })		       
		} 
		console.log(links[0]+"aaaaaaaaaaaaaaaaaaaaa")  ;   
	})
	
	     if(links[0]!=null)
		 {
			console.log(links[0]+"bbbbbbbbbbbbbbbbbbbbbbbbbbb")  ;   
	      url2 = "'http://www.newseum.org"+links[0]+"'"; 
		  console.log(url2); 
	       request(url2, function(error, response, html){
					if(!error){
						
						var $ = cheerio.load(html);
			
						//var title, release, rating;
						//var json = { title : "", release : "", rating : ""};
						console.log("function called");
						$('a').filter(function(){
							console.log("function2 called");
							var data1 = $(this);
							console.log(data1);
					
						})		       
					}
        res.send('Check your console!')
	})
		 }
})

app.listen('8081')
console.log('Magic happens on port 8081');
exports = module.exports = app; 