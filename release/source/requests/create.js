"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Create = void 0;
/*!
 * Copyright (C) 2018-2019 Juridoc
 */
const Class = require("@singleware/class");
const RestDB = require("@singleware/restdb");
const ApiCore = require("@juridoc/client-core");
/**
 * Card creation request.
 */
let Create = class Create extends Class.Null {
};
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Object(ApiCore.Entities.Field),
    Class.Public()
], Create.prototype, "idNumber", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.String(15, 20),
    Class.Public()
], Create.prototype, "pan", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.String(),
    Class.Public()
], Create.prototype, "holder", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Number(0, 11),
    Class.Public()
], Create.prototype, "month", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Number(new Date().getFullYear(), new Date().getFullYear() + 25),
    Class.Public()
], Create.prototype, "year", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.String(3, 4),
    Class.Public()
], Create.prototype, "cvv", void 0);
__decorate([
    RestDB.Schema.String(),
    Class.Public()
], Create.prototype, "description", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.String(),
    Class.Public()
], Create.prototype, "local", void 0);
__decorate([
    RestDB.Schema.String(),
    Class.Public()
], Create.prototype, "number", void 0);
__decorate([
    RestDB.Schema.String(),
    Class.Public()
], Create.prototype, "complement", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.String(),
    Class.Public()
], Create.prototype, "neighborhood", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Object(ApiCore.Entities.Field),
    Class.Public()
], Create.prototype, "city", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Object(ApiCore.Entities.Field),
    Class.Public()
], Create.prototype, "state", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.String(),
    Class.Public()
], Create.prototype, "country", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Object(ApiCore.Entities.Field),
    Class.Public()
], Create.prototype, "zip", void 0);
Create = __decorate([
    RestDB.Schema.Entity('cards'),
    Class.Describe()
], Create);
exports.Create = Create;
//# sourceMappingURL=create.js.map