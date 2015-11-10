var activation = Windows.Phone.ApplicationModel.Activation;
var app = WinJS.Application;
var nav = WinJS.Navigation;
var sched = WinJS.Utilities.Scheduler;
var ui = WinJS.UI;
var audio = new Audio();
var synth = new Windows.Media.SpeechSynthesis.SpeechSynthesizer();

function say(msg) {
    synth.synthesizeTextToStreamAsync(msg).then(function (s) {
        var blob = MSApp.createBlobFromRandomAccessStream(s.contentType, s);
        audio.src = URL.createObjectURL(blob, { oneTimeOnly: true });
        audio.play();
    });
}
