"use strict";
const ScoutbookBaseLog = require('./activityBase');

class ScoutbookCampingLog extends ScoutbookBaseLog {
    constructor(date,nights,location,notes) {
        super(date,nights,location,notes);
    }
    set nights(value){
        this.count = value;
    }
    get nights() {
        return this.count;
    }
}

module.exports = ScoutbookCampingLog;