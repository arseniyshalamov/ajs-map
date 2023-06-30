'use strict'

export default class ErrorRepository {
    constructor() {
        this.repository = new Map();
    }

    add(code, errMessage) {
        this.repository.set(code, errMessage);
    }

    translate(code) {
        if (this.repository.has(code)) {
            return this.repository.get(code);
        } else {
            return 'Unknown error!';
        }
    }
}