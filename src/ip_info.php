<?php
/*
Account Info: 
API Key
f4ce7e8a820fc41dfb3a946daa04c687304df778fc8c32f9c7a2bfbe45645a19
Name
bayon forte
Server IP
157.245.216.183
*NOTE: This account is restricted to my Droplet IP address for bayonforte.com
*/
//From Stackoverflow:
//https://ipinfodb.com/
// get user details
$user_agent = $_SERVER['HTTP_USER_AGENT']; //user browser
$ip_address = $_SERVER["REMOTE_ADDR"];     // user ip adderss
$page_name = $_SERVER["SCRIPT_NAME"];      // page the user looking
$query_string = $_SERVER["QUERY_STRING"];   // what query he used
$current_page = $page_name."?".$query_string; 


// get location 
// you can get your api key form http://ipinfodb.com/
$url = json_decode(file_get_contents("http://api.ipinfodb.com/v3/ip-city/?key=/f4ce7e8a820fc41dfb3a946daa04c687304df778fc8c32f9c7a2bfbe45645a19/ip=".$_SERVER['REMOTE_ADDR']."&format=json"));
$country=$url->countryName;  // user country
$city=$url->cityName;       // city
$region=$url->regionName;   // regoin
$latitude=$url->latitude;    //lat and lon
$longitude=$url->longitude;

// get time
date_default_timezone_set('UTC');
$date = date("Y-m-d");
$time = date("H:i:s");


?>

<?php 
echo("<html>");
echo("
<head>
    <style>
        body{margin:0 auto; text-align:center;}
        h3{color:black;}
        p{color:#444;}
    </style>
</head>
");
echo("<body>");
echo("<hr>");
echo("<h3>IP Info</h3></br>");
echo("<h3>Location Info:</h3>");
echo("<p>url:".$url."</p>");
echo("<hr>");
echo("<p>country:".$country."</p></br>");
echo("<p>city:".$city."</p></br>");
echo("<p>region:".$region."</p></br>");
echo("<p>latitude:".$latitude."</p></br>");
echo("<p>longitude:".$longitude."</p></br>");
echo("<p>date:".$date."</p></br>");
echo("<p>time:".$time."</p></br>");
echo("<hr>");
echo("<h3>User Details:</h3>");
echo("<p>user_agent:".$user_agent."</p></br>");
echo("<p>ip_address:".$ip_address."</p></br>");
echo("<p>page_name:".$page_name."</p></br>");
echo("<p>query_string:".$query_string."</p></br>");
echo("<p>current_page:".$current_page."</p></br>");
echo("</body></html>");
?>