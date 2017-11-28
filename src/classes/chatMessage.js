class ChatMessage {
    constructor(name, time, message) {
        this._name = name;
        this._time = time;
        this._message = message;
    }

    get name() { return this._name; }
    get time() { return this._time; }
    get message() { return this._message; }
}