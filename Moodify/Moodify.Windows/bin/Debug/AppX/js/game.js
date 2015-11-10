var app = WinJS.Application;
var activation = Windows.ApplicationModel.Activation;
var i;
var happy = new Array();
var sad = new Array();
var angry = new Array();
var scary = new Array();
var tags = ["happy%2Cpersons%2Ccheerful%2Cfun%2Cenjoy%2Csmile&safe_search=1", "sad%2Cpersons%2Cfaces%2Cdepressed%2Cgloomy&safe_search=1", "angry%2Cpersons%2Cfaces%2Cprotest&safe_search=1", "scary%2Cpersons%2Cfaces%2Cghost&safe_search=1"];
var searchq = ["happy", "sad", "angry", "scary"];
var presentans, cont1;
var score = 0;
var wronganswer = 0;
var counter = 0;
var presurl;
var wronganswer1, cont2;
var wronganswer2, cont3;

var rand = Math.floor(Math.random() * 4);
var rand1 = Math.floor(Math.random() * 4 + 1);
var rand2 = Math.floor(Math.random() * 50);
//console.log(rand2);
var rand3 = Math.floor(Math.random() * 3 + 1);


WinJS.xhr({
    url: 'https://api.flickr.com/services/rest/?&method=flickr.photos.search&api_key=99056aaf4909c0cae88f82d00eb69942&tags=' + tags[3] + '&format=json&jsoncallback=?'
}).then(function (result) {

    var ftext = result.responseText;
    ftext = ftext.slice(14, -1);
    var res = JSON.parse(ftext);

    for (var j = 0; j < 50; j++) {
        var ulop = document.getElementById("op");
        var item = res["photos"]["photo"][j];
        var photoURL = 'http://farm' + item.farm + '.static.flickr.com/' + item.server + '/' + item.id + '_' + item.secret + '_m.jpg';
        scary[j] = photoURL; //console.log(scary[j], photoURL);

    }
})

WinJS.xhr({
    url: 'https://api.flickr.com/services/rest/?&method=flickr.photos.search&api_key=99056aaf4909c0cae88f82d00eb69942&tags=' + tags[2] + '&format=json&jsoncallback=?'
}).then(function (result) {

    var ftext = result.responseText;
    ftext = ftext.slice(14, -1);
    var res = JSON.parse(ftext);

    for (var j = 0; j < 50; j++) {
        var ulop = document.getElementById("op");
        var item = res["photos"]["photo"][j];
        var photoURL = 'http://farm' + item.farm + '.static.flickr.com/' + item.server + '/' + item.id + '_' + item.secret + '_m.jpg';
        angry[j] = photoURL; //console.log(angry[j], photoURL);

    }
})

WinJS.xhr({
    url: 'https://api.flickr.com/services/rest/?&method=flickr.photos.search&api_key=99056aaf4909c0cae88f82d00eb69942&tags=' + tags[1] + '&format=json&jsoncallback=?'
}).then(function (result) {

    var ftext = result.responseText;
    ftext = ftext.slice(14, -1);
    var res = JSON.parse(ftext);

    for (var j = 0; j < 50; j++) {
        var ulop = document.getElementById("op");
        var item = res["photos"]["photo"][j];
        var photoURL = 'http://farm' + item.farm + '.static.flickr.com/' + item.server + '/' + item.id + '_' + item.secret + '_m.jpg';
        sad[j] = photoURL; //console.log(sad[j], photoURL);

    }
})

WinJS.xhr({
    url: 'https://api.flickr.com/services/rest/?&method=flickr.photos.search&api_key=99056aaf4909c0cae88f82d00eb69942&tags=' + tags[0] + '&format=json&jsoncallback=?'
}).then(function (result) {
    var ftext = result.responseText;
    ftext = ftext.slice(14, -1);
    var res = JSON.parse(ftext);

    for (var j = 0; j < 50; j++) {
        var ulop = document.getElementById("op");
        var item = res["photos"]["photo"][j];
        var photoURL = 'http://farm' + item.farm + '.static.flickr.com/' + item.server + '/' + item.id + '_' + item.secret + '_m.jpg';
        happy[j] = photoURL;
    }
})

setTimeout(function () {
    score = 0;
    wronganswer = 0;
    counter = 0;
    rand = Math.floor(Math.random() * 4);
    rand1 = Math.floor(Math.random() * 4 + 1);
    rand2 = Math.floor(Math.random() * 50);
    //console.log(rand2);
    rand3 = Math.floor(Math.random() * 3 + 1);

    presentans = rand3;
    cont1 = rand3;

    switch (rand) {
        case 0: presurl = happy[rand2]; break;
        case 1: presurl = sad[rand2]; break;
        case 2: presurl = angry[rand2]; break;
        case 3: presurl = scary[rand2]; break;
    }
    //console.log(presurl, happy[rand2], sad[rand2], angry[rand2], scary[rand2]);
    mainer.innerHTML = "<img src=" + presurl + " alt='pppppppp' style='border-radius:10%;position:absolute;height:65vh;width:50vw;' />";
    switch (cont1) {
        case 1: ans1.innerHTML = searchq[rand];
            ans2.innerHTML = searchq[((rand + 1) % 4)];
            ans3.innerHTML = searchq[((rand + 2) % 4)];
            break;
        case 2: ans2.innerHTML = searchq[rand];
            ans3.innerHTML = searchq[((rand + 1) % 4)];
            ans1.innerHTML = searchq[((rand + 2) % 4)];
            break;
        case 3: ans3.innerHTML = searchq[rand];
            ans1.innerHTML = searchq[((rand + 1) % 4)];
            ans2.innerHTML = searchq[((rand + 2) % 4)];
    }
}, 2500);


function change() {
    rand = Math.floor(Math.random() * 4);
    rand1 = Math.floor(Math.random() * 4 + 1);
    rand2 = Math.floor(Math.random() * 50);
    rand3 = Math.floor(Math.random() * 3 + 1);

    presentans = rand3;
    cont1 = rand3;

    switch (rand) {
        case 0: presurl = happy[rand2]; break;
        case 1: presurl = sad[rand2]; break;
        case 2: presurl = angry[rand2]; break;
        case 3: presurl = scary[rand2]; break;
    }
    mainer.innerHTML = "<img src=" + presurl + " alt='pppppppp' style='border-radius:10%;position:absolute;height:65vh;width:50vw;' />";
    switch (cont1) {
        case 1: ans1.innerHTML = searchq[rand];
            ans2.innerHTML = searchq[((rand + 1) % 4)];
            ans3.innerHTML = searchq[((rand + 2) % 4)];
            break;
        case 2: ans2.innerHTML = searchq[rand];
            ans3.innerHTML = searchq[((rand + 1) % 4)];
            ans1.innerHTML = searchq[((rand + 2) % 4)];
            break;
        case 3: ans3.innerHTML = searchq[rand];
            ans1.innerHTML = searchq[((rand + 1) % 4)];
            ans2.innerHTML = searchq[((rand + 2) % 4)];
    }
}

function next(a) {
    if (a == presentans) {
        console.log("hi");
        score += 5;
        plusfive.runtimeStyle.visibility = "visible";
        plusfive.classList.add("runanimation");
        setTimeout(function () {
            plusfive.runtimeStyle.visibility = "hidden";
            plusfive.classList.remove("runanimation");
        }, 2000);
        console.log("out");
        counter++;
        if (counter == 15) {
            //You Win
            win.click();
        }
    }
    else {
        wronganswer++;
        if (wronganswer == 5) {
            //You lose the game as you answered wrong 5 times
            lose.click();
        }
    }
    scoreboard.innerHTML = score.toString();
    wrong.innerHTML = wronganswer.toString() + "/5";
    change();
}

function changesound() {
    if (myaudio.paused == false) {
        sound.src = "/images/soundoff.jpg";
        myaudio.pause();
    }
    else {
        sound.src = "/images/soundon.jpg";
        myaudio.play();
    }
}