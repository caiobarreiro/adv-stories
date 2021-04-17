export class Timer {
    callback:any;
    delay:any;
    timerId;
    start;
    remaining;
    isPaused: boolean = false;

    constructor(callback, delay) {
        this.callback = callback
        this.delay = delay
        this.remaining = delay;

        this.resume()
    }

    pause = function() {
        window.clearTimeout(this.timerId);
        this.remaining -= Date.now() - this.start;
    };

    resume = function() {
        this.start = Date.now();
        window.clearTimeout(this.timerId);
        this.timerId = window.setTimeout(this.callback, this.remaining);
    };

    clear = function() {
        window.clearTimeout(this.timerId);
    };
}