// New Console
let newConsole = (function (oldCons) {
    return {
        log: function (text) {
            oldCons.log(text);
            let ansDOM = document.getElementById("tutorial-output");
            if (ansDOM) {
                const label = document.createElement("label");
                label.innerHTML = text;
                ansDOM.appendChild(label);
            }
        },
        info: function (text) {
            oldCons.info(text);
        },
        warn: function (text) {
            oldCons.warn(text);
        },
        error: function (text) {
            oldCons.error(text);
        },
    };
})(window.console);

// Old Console
let oldConsole = (function (oldCons) {
    return {
        log: function (text) {
            oldCons.log(text);
        },
        info: function (text) {
            oldCons.info(text);
        },
        warn: function (text) {
            oldCons.warn(text);
        },
        error: function (text) {
            oldCons.error(text);
        },
    };
})(window.console);

const consoleNewProxy = () => {
    window.console = newConsole;
};

const consoleOldProxy = () => {
    window.console = oldConsole;
};

export { consoleNewProxy, consoleOldProxy };
