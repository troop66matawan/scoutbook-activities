"use strict";

class ScoutbookBaseLog {
    constructor(date,count,location,notes) {
        if (this.constructor === ScoutbookBaseLog) {
            throw new Error('ScoutbookBaseLog can\'t be instantiated');
        }
        this.date = date;
        this.count = count;
        this.location = location;
        this.notes = notes;
    }
    set date(value){
        if (value instanceof Date) {
            this._date = value;
        }
    }
    get date() {
        return this._date;
    }

    set count(value){
        if (typeof value === 'string') {
            const floatVal = Number.parseFloat(value);
            if (Number.isNaN(floatVal)) {
                const intVal = Number.parseInt(value);
                if (Number.isInteger(intVal)) {
                    this._count = intVal;
                }
            } else {
                this.count = floatVal;
            }
        } else if (Number.isInteger(value)) {
            this._count = value;
        }
    }
    get count() {
        return this._count;
    }
    set location(value){
        this._location = value;
    }
    get location() {
        return this._location;
    }
    set notes(value){
        this._notes = value;
    }
    get notes() {
        return this._notes;
    }
}

module.exports = ScoutbookBaseLog;