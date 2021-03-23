//////////////////////////////////////////////////
////Code developed by Steve Hudak to be used//////
////with Sheridan IxD Thinger guide 2/////////////
//////////////////////////////////////////////////

///////////replace 'thingerUsername' with your exact thinger user name
///////////replace 'led1' with the exact resource name you called your led
/////////// everything from 'authorization to the end of the parenthesis is the resources unique authorization code and is available in your API settings  
var url1 = 'https://api.thinger.io/v3/users/akuneb/devices/esp8266/resources/led1?authorization=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJEYXNoYm9hcmRfdGVzdF8xIiwidXNyIjoiYWt1bmViIn0.AHKCLrA1dqD5zvZ5fgn_DzqbELyX-Ma9CpZWUh9guCI';
///////////replace 'thingerUsername' with your exact thinger user name
///////////replace 'led2' with the exact resource name you called your led
/////////// everything from 'authorization to the end of the parenthesis is the resources unique authorization code and is available in your API settings  
var url2 = 'https://api.thinger.io/v3/users/akuneb/devices/esp8266/resources/led2?authorization=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJEYXNoYm9hcmRfdGVzdF8xIiwidXNyIjoiYWt1bmViIn0.AHKCLrA1dqD5zvZ5fgn_DzqbELyX-Ma9CpZWUh9guCI';
////////// everything from 'Bearer to the end of the parenthes is your unique individual authorization code and is available in your thinger settings
var Auth = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJEYXNoYm9hcmRfdGVzdF8xIiwidXNyIjoiYWt1bmViIn0.AHKCLrA1dqD5zvZ5fgn_DzqbELyX-Ma9CpZWUh9guCI";

////// variables for the 2 seperate data sets and the 2 seperate buttons
var data1;
var data2;
var myButton1;
var myButton2;

function setup() {
    //// make the canvas whatever size you require
    createCanvas(800, 240);
}

function draw() {

    ////// the colour of the background
    background("#28d1d1");
    ////// the colour of the buttons
    var col = color("#ffff00");

    ///// the specifics of the led1 button
    myButton1 = createButton("LED1!")
        .style('font-size', '20px')
        .style('background-color', col)
        .position(width / 3, height / 2)
        .mousePressed(() => doBoth(url1,true))
        .mouseReleased(() => sendData(url1,false));
    ///////this is a nested function that switches the boolean state 
    ////////of the data1 state based on the mouse being clicked

    ///// the specifics of the led2 button
    myButton2 = createButton("LED2!")
        .style('font-size', '20px')
        .style('background-color', col)
        .position(width - width / 3, height / 2)
        .mousePressed(() => doBoth(url2,true))
        .mouseReleased(() => sendData(url2,false));
    ////////this is a nested function that switches the boolean state 
    ////////of the data1 state based on the mouse being clicked

}

//////function that triggers the thinger.io and the ifttt
////// it uses the according data from each button to trigger the events

function doBoth(url, data) {
    trigger_ifttt();
    sendData(url, data);
}

//////////////function send data to ifttt
/////CODE FROM: https://www.youtube.com/watch?v=VBxfQ7HBJJY
function trigger_ifttt(){
 $.ajax({url:"https://maker.ifttt.com/trigger/notif/with/key/bGX3AkakXCHDP6oxhqwo76", success: function(result){alert(result)}});
}

////// this function sends the data boolean state to 
////// thinger.io using a json with the authorization, 
////// the specific resource address, and correct data type  
function sendData(url, data) {
    let postData = {
        method: "POST",
        Headers: {
            'Content-Type': "application/json;charset=UTF-8",
            'Authorization': Auth,
            'Accept': "application/json, text/plain, */*"
        },

        "in": data
    };
    httpPost(url, 'application/json', postData, function (result) {
        console.log(postData);
    });
}