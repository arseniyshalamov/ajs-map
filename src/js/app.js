'use strict'

export default class ErrorRepository {
    constructor() {
        this.repository = new Map([
            [405, 'Method Not Allowed'],
            [404, 'Not Found'],
            [502, 'Bad Gateway']
        ]);
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