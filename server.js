var express = require('express');
var connect = require('connect');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var url = require("url");
//var app     = express();
var http=require ('http');
var links=[];
var jpg=[];
var flag=true;
var x;
var y;
var z;
var u;
var app = connect()
	.use(connect.bodyParser())
	.use(connect.static('public'))
	.use(function (req, res) {

	// Let's scrape Anchorman 2
	
	//url = 'http://www.newseum.org/todaysfrontpages/?tfp_show=100';
    if(flag==true)
	{
	request("http://www.newseum.org/todaysfrontpages/?tfp_show=100", function(error, response, html){
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
												//console.log("function called");
												var k=0;
												$('.colorbox-1230').filter(function(){
													//console.log("function2 called");
													var data1 = $(this).attr('src');
													
													if(data1.search('.jpg')&&k==1&&jpg.length<100)
													{jpg.push('"'+data1+'"');}
													k++;
													
											
												})		       
											}
									
		
							})
							
							
				}
				
				
		         
	        })
					       
		} 
			
		flag=false;
	
	})
	
	}
	function random(high,low) {
    high++;
    return Math.floor((Math.random())*(high-low))+low;
	}
	var parsed_url = url.parse(req.url);
		var uri = parsed_url.pathname;
		if(uri === "/test"){
			x=random(0,jpg.length);
			console.log(x);
			if(x!=y&&x!=u&&x!=z){
	   res.writeHead(200, {"Content-Type": "text/plain"});	
	     						
		res.end(jpg[x]);
			}
			else
			x=random(0,jpg.length);
		//console.log(jpg.length);
	   
		}
		if(uri === "/test2"){
			y=random(0,jpg.length);
			console.log(y);
			if(y!=x&&y!=u&&y!=z){
	   res.writeHead(200, {"Content-Type": "text/plain"});	
	     						
		res.end(jpg[y]);
			}
			else
			y=random(0,jpg.length);
		//console.log(jpg.length);
	   
		}
		if(uri === "/test3"){
			z=random(0,jpg.length);
			console.log(z);
			if(z!=x&&z!=u&&z!=y){
				
	   res.writeHead(200, {"Content-Type": "text/plain"});	
	     						
		res.end(jpg[z]);
			}
			else
			z=random(0,jpg.length);
		//console.log(jpg.length);
	   
		}
		if(uri === "/test4"){
			u=random(0,jpg.length);
			console.log(u);
			if(u!=x&&u!=z&&u!=y)
	   {
		   res.writeHead(200, {"Content-Type": "text/plain"});	
	       res.end(jpg[u]);
	   }
	   else
	     u=random(0,jpg.length);
		//console.log(jpg.length);
	   
		}
		
		
})

app.listen('3600')
console.log('Magic happens on port 8081');
exports = module.exports = app; 