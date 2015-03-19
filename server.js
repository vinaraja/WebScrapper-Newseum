var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();

app.get('/scrape', function(req, res){
	// Let's scrape Anchorman 2
	url = 'http://www.newseum.org/todaysfrontpages/?tfp_show=100';
    var links=[];
	var jpg=[];
	request(url, function(error, response, html){
		if(!error){
			var $ = cheerio.load(html);

			//var title, release, rating;
			//var json = { title : "", release : "", rating : ""};
			var count=0;
			var i=0;
			$('a').filter(function(){
		        var data = $(this).attr('href');
                count++;
				
				if(count>31&&count<231)
				{
					links.push("http://www.newseum.org"+data);
					url2 = links[i]; 
					i++;
		  			//console.log(url2); 
	       				request(url2, function(error, response, html){
								if(!error){
						
												var $ = cheerio.load(html);
									
												//var title, release, rating;
												//var json = { title : "", release : "", rating : ""};
												console.log("function called");
												var k=0;
												$('.colorbox-1230').filter(function(){
													console.log("function2 called");
													var data1 = $(this).attr('src');
													
													if(data1.search('.jpg')&&k==1)
													{jpg.push(data1);}
													k++;
													/**fs.appendFile("C:/Users/vinay/Documents/GitHub/node-web-scraper-master/text.txt", data1, 				function(err) {
																if(err) {
																	return console.log(err);
																}
															
																console.log("The txt file was saved!");
															}); **/
											
												})		       
											}
								
		
							})
				}
		         
	        })		       
		} 
		
		res.send('Check your console!')   
	})
	
	    
	   
		
})

app.listen('8081')
console.log('Magic happens on port 8081');
exports = module.exports = app; 