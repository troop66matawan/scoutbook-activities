"use strict";
const ScoutbookBaseLog = require('./activityBase');

class ScoutbookHikingLog extends ScoutbookBaseLog {
    constructor(date,miles,location,notes) {
        super(date,miles,location,notes);
    }
    set miles(value){
        this.count = value;
    }
    get miles() {
        return this.count;
    }
}

module.exports = ScoutbookHikingLog;