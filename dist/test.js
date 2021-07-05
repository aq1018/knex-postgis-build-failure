"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const knex_1 = __importDefault(require("knex"));
const knex_postgis_1 = __importDefault(require("knex-postgis"));
const db = knex_1.default(process.env.DATABASE_URL);
const st = knex_postgis_1.default(db);
console.log(st);
//# sourceMappingURL=test.js.map