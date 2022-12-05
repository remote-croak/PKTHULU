"use strict";
var CultStats = /** @class */ (function () {
    function CultStats() {
        this._maxPoints = 30;
        this._remPoints = this._maxPoints - 6;
        this._maxScore = 13;
        this._age = 5;
        this._grade = 1;
        this._lore = 1;
        this._sanity = 1;
        this._physED = 1;
        this._trash = 1;
        this._shop = 1;
        this._chName = "";
        this._type = "";
        this._hometown = "";
        this._lucky = "";
    }
    Object.defineProperty(CultStats.prototype, "age", {
        // getters and setters for cultist stats
        get: function () {
            return this._age;
        },
        set: function (age) {
            this._age = age;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CultStats.prototype, "grade", {
        get: function () {
            return this._grade;
        },
        set: function (grade) {
            this.remPoints(this._grade, 'add');
            this._grade = grade;
            this.remPoints(this._grade, 'sub');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CultStats.prototype, "lore", {
        get: function () {
            return this._lore;
        },
        set: function (lore) {
            this.remPoints(this._lore, 'add');
            this._lore = lore;
            this.remPoints(this._lore, 'sub');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CultStats.prototype, "sanity", {
        get: function () {
            return this._sanity;
        },
        set: function (sanity) {
            this.remPoints(this._sanity, 'add');
            this._sanity = sanity;
            this.remPoints(this._sanity, 'sub');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CultStats.prototype, "physED", {
        get: function () {
            return this._physED;
        },
        set: function (phys) {
            this.remPoints(this._physED, 'add');
            this._physED = phys;
            this.remPoints(this._physED, 'sub');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CultStats.prototype, "shop", {
        get: function () {
            return this._shop;
        },
        set: function (shop) {
            this.remPoints(this._shop, 'add');
            this._shop = shop;
            this.remPoints(this._shop, 'sub');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CultStats.prototype, "trash", {
        get: function () {
            return this._trash;
        },
        set: function (trash) {
            this.remPoints(this._trash, 'add');
            this._trash = trash;
            this.remPoints(this._trash, 'sub');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CultStats.prototype, "name", {
        get: function () {
            return this._chName;
        },
        set: function (name) {
            this._chName = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CultStats.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (type) {
            this._type = type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CultStats.prototype, "hometown", {
        get: function () {
            return this._hometown;
        },
        set: function (home) {
            this._hometown = home;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CultStats.prototype, "points", {
        get: function () {
            return this._remPoints;
        },
        enumerable: false,
        configurable: true
    });
    CultStats.prototype.remPoints = function (points, op) {
        if (op == 'add') {
            this._remPoints += points;
        }
        else if (op == 'sub') {
            this._remPoints -= points;
        }
    };
    Object.defineProperty(CultStats.prototype, "lucky", {
        get: function () {
            return this._lucky;
        },
        set: function (stat) {
            this._lucky = stat;
        },
        enumerable: false,
        configurable: true
    });
    return CultStats;
}());
