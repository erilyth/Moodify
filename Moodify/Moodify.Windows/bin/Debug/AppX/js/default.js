// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=392286
(function () {
    "use strict";

    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;

    app.onactivated = function (args) {
        if (args.detail.kind === activation.ActivationKind.launch) {
            if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {
                // TODO: This application has been newly launched. Initialize
                // your application here.
            } else {
                // TODO: This application has been reactivated from suspension.
                // Restore application state here.
            }
            args.setPromise(WinJS.UI.processAll());
        }
    };

    app.oncheckpoint = function (args) {
        // TODO: This application is about to be suspended. Save any state
        // that needs to persist across suspensions here. You might use the
        // WinJS.Application.sessionState object, which is automatically
        // saved and restored across suspension. If you need to complete an
        // asynchronous operation before your application is suspended, call
        // args.setPromise().
    };

    app.start();
})();

function swapimage(i) {
    if (i == 0) {
        first.src = "/images/button1h.png";
    }
    if (i == 1) {
        first.src = "/images/button1.png";
    }
    if (i == 2) {
        second.src = "/images/button2h.png";
    }
    if (i == 3) {
        second.src = "/images/button2.png";
    }
    if (i == 4) {
        fourth.src = "/images/button4h.png";
    }
    if (i == 5) {
        fourth.src = "/images/button4.png";
    }
}