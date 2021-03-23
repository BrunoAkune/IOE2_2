//////////////////////////////////////////////////
////Code developed by Steve Hudak to be used//////
////with Sheridan IxD Thinger guide 2/////////////
//////////////////////////////////////////////////

///////////replace 'thingerUsername' with your exact thinger user name
///////////replace 'led1' with the exact resource name you called your led
/////////// everything from 'authorization to the end of the parenthesis is the resources unique authorization code and is available in your API settings  
var url1 = 'https://api.thinger.io/v3/users/thingerUsername/devices/esp8266/resources/led1?authorization=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJEYXNoYm9hcmRfdGVzdF8xIiwidXNyIjoiYWt1bmViIn0.AHKCLrA1dqD5zvZ5fgn_DzqbELyX-Ma9CpZWUh9guCI';

///////////replace 'thingerUsername' with your exact thinger user name
///////////replace 'led2' with the exact resource name you called your led
/////////// everything from 'authorization to the end of the parenthesis is the resources unique authorization code and is available in your API settings
var url2 = 'https://api.thinger.io/v3/users/thingerUsername/devices/esp8266/resources/led2?authorization=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJEYXNoYm9hcmRfdGVzdF8xIiwidXNyIjoiYWt1bmViIn0.AHKCLrA1dqD5zvZ5fgn_DzqbELyX-Ma9CpZWUh9guCI';

////////// everything from 'Bearer to the end of the parenthes is your unique individual authorization code and is available in your thinger settings
var Auth = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJEYXNoYm9hcmRfdGVzdF8xIiwidXNyIjoiYWt1bmViIn0.AHKCLrA1dqD5zvZ5fgn_DzqbELyX-Ma9CpZWUh9guCI";

////// variables for the 2 seperate data sets and the 2 seperate buttons
var data1;
var data2;
var myButton1;
var myButton2;

function setup() {
    //// make the canvas whatever size you require
    createCanvas(windowWidth, 240);

    ////Create button elements - they are DOM elements
    //// so use css to style them
    myButton1 = createButton("LED1!")
        .style('font-size', '20px')
        .style('color', "#ffff00")
        .style('border', '2px solid yellow')
        .style('background-color', "#28d1d1")
        .position(width / 3, height / 2)
        .mouseOver(button1Hover)
        .mouseOut(button1Off)
        .mousePressed(led1On)
        .mouseReleased(led1Off);

    myButton2 = createButton("LED2!")
        .style('font-size', '20px')
        .style('color', "#ffff00")
        .style('border', '2px solid yellow')
        .style('background-color', "#28d1d1")
        .position(width - width / 3, height / 2)
        .mouseOver(button2Hover)
        .mouseOut(button2Off)
        .mousePressed(led2On)
        .mouseReleased(led2Off);
}

function draw() {

    ////// the colour of the background
    background("#28d1d1");

}

function windowResized () {
    resizeCanvas(windowWidth, windowHeight);
}

//////These are functions triggering the click and hover events for led button 1
function led1On() {
    ////this sends a boolean state of true to the led1 json function 
sendData1(true);
    myButton1.style('border', '3px solid yellow');
}

function led1Off() {
    ////this sends a boolean state of false to the led1 json function
sendData1(false);
    myButton1.style('border', '2px solid yellow');
}
//////the hover effect
function button1Hover() {

    myButton1.style('background-color', "#ffffff");
}
//////the non-hover effect
function button1Off() {

    myButton1.style('border', '2px solid yellow').style('background-color', "#28d1d1");;

}

//////These are functions triggering the click and hover events for led button 2
function led2On() {
    ////this sends a boolean state of true to the led2 json function 
sendData2(true);
    myButton2.style('border', '3px solid yellow');
}

function led2Off() {
    
    ////this sends a boolean state of false to the led2 json function
sendData2(false);
    myButton2.style('border', '2px solid yellow');
}
//////the hover effect
function button2Hover() {

    myButton2.style('background-color', "#ffffff");
}
//////the non-hover effect
function button2Off() {

    myButton2.style('border', '2px solid yellow').style('background-color', "#28d1d1");;

}


////// this function sends the data1 boolean state to 
////// thinger.io using a json with the authorization, 
////// the specific resource address, and correct data type  
function sendData1(data1) {
    let postData = {
        method: "POST",
        Headers: {
            'Content-Type': "application/json;charset=UTF-8",
            'Authorization': Auth,
            'Accept': "application/json, text/plain, */*"
        },

        "in": data1
    };
    httpPost(url1, 'application/json', postData, function (result) {
        console.log(postData);
    });
}

////// this function sends the data2 boolean state to 
////// thinger.io using a json with the authorization, 
////// the specific resource address, and correct data type
function sendData2(data2) {
    let postData = {
        method: "POST",
        Headers: {
            'Content-Type': "application/json;charset=UTF-8",
            'Authorization': Auth,
            'Accept': "application/json, text/plain, */*"
        },

        "in": data2
    };
    httpPost(url2, 'application/json', postData, function (result) {
        console.log(postData);
    });
}
