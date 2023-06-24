'use strict'

export default class ErrorRepository {
    constructor() {
        this.repository = new Map();
    }

    add(code, errMessage) {
        this.repository.set(code, errMessage);
    }

    translate(code) {
        let text = null;
        if (this.repository.has(code)) {
            text = this.repository.get(code);
        } else {
            text = 'Unknown error!';
        }
        return text;
    }
}