"use strict";
const ScoutbookCampingLog = require('./activityCamping');
const ScoutbookServiceLog = require('./activityService');
const ScoutbookHikingLog = require('./activityHiking');

class ScoutbookActivities {
    static supportedActivities = [
        'Camping',
        'Service',
        'Hiking'
    ];
    constructor() {
        this._camping = [];
        this._hiking = [];
        this._service = [];
    }
    get camping() {
        return this._camping;
    }
    addCamping(value) {
        if (value instanceof ScoutbookCampingLog) {
            this._camping.push(value);
        }
    }
    get service() {
        return this._service;
    }
    addService(value) {
        if (value instanceof ScoutbookServiceLog) {
            this._service.push(value);
        }
    }
    get hiking() {
        return this._hiking;
    }
    addHiking(value) {
        if (value instanceof ScoutbookHikingLog) {
            this._hiking.push(value);
        }
    }
}

module.exports = ScoutbookActivities;