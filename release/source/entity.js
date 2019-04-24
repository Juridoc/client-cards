"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity = void 0;
/*!
 * Copyright (C) 2018-2019 Juridoc
 */
const Class = require("@singleware/class");
const RestDB = require("@singleware/restdb");
const ApiCore = require("@juridoc/client-core");
const Types = require("./types");
/**
 * Card entity class.
 */
let Entity = class Entity extends Class.Null {
};
__decorate([
    RestDB.Schema.Primary(),
    RestDB.Schema.Id(),
    Class.Public()
], Entity.prototype, "id", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Id(),
    Class.Public()
], Entity.prototype, "accountId", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Enumeration([...Object.values(Types.Status.Common), ...Object.values(Types.Status.System)]),
    Class.Public()
], Entity.prototype, "status", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Date(),
    Class.Public()
], Entity.prototype, "createdAt", void 0);
__decorate([
    RestDB.Schema.Date(),
    Class.Public()
], Entity.prototype, "updatedAt", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Date(),
    Class.Public()
], Entity.prototype, "expireAt", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Object(ApiCore.Entities.Field),
    Class.Public()
], Entity.prototype, "idNumber", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.String(),
    Class.Public()
], Entity.prototype, "pan", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.String(),
    Class.Public()
], Entity.prototype, "brand", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.String(),
    Class.Public()
], Entity.prototype, "holder", void 0);
__decorate([
    RestDB.Schema.String(),
    Class.Public()
], Entity.prototype, "description", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.String(),
    Class.Public()
], Entity.prototype, "local", void 0);
__decorate([
    RestDB.Schema.String(),
    Class.Public()
], Entity.prototype, "number", void 0);
__decorate([
    RestDB.Schema.String(),
    Class.Public()
], Entity.prototype, "complement", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.String(),
    Class.Public()
], Entity.prototype, "neighborhood", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Object(ApiCore.Entities.Field),
    Class.Public()
], Entity.prototype, "city", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Object(ApiCore.Entities.Field),
    Class.Public()
], Entity.prototype, "state", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.String(),
    Class.Public()
], Entity.prototype, "country", void 0);
__decorate([
    RestDB.Schema.Required(),
    RestDB.Schema.Object(ApiCore.Entities.Field),
    Class.Public()
], Entity.prototype, "zip", void 0);
Entity = __decorate([
    RestDB.Schema.Entity('cards'),
    Class.Describe()
], Entity);
exports.Entity = Entity;
//# sourceMappingURL=entity.js.map