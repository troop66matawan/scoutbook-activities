"use strict";
const ScoutbookBaseLog = require('./activityBase');

class ScoutbookServiceLog extends ScoutbookBaseLog {
    constructor(date,hours,location,notes) {
        super(date,hours,location,notes);
    }
    set hours(value){
        this.count = value;
    }
    get hours() {
        return this.count;
    }
}

module.exports = ScoutbookServiceLog;