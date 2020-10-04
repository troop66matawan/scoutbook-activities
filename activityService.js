"use strict";
const ScoutbookBaseLog = require('./activityBase');

class ScoutbookServiceLog extends ScoutbookBaseLog {
    constructor(date,hours,location,notes) {
        super(date,hours,location,notes);
        this.conservation = false;
    }
    set hours(value){
        this.count = value;
    }
    get hours() {
        return this.count;
    }
    set conservation(value) {
        this.conservation = value;
    }
    get conservation() {
        return this.conservation;
    }
}

module.exports = ScoutbookServiceLog;