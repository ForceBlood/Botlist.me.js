const fetch = require("node-fetch");
const events = require("events");
const EventEmitter = new events();
const body = require("raw-body");
const express = require("express");

class BotlistMe extends EventEmitter {
    constructor(token, options, client) {
        super();
        if (!token) {
            throw new ReferenceError("Please specify a Botlist.me Authorization Token. You can find this by navigating to your bots page and clicking the edit button.");
        } else if (typeof token !== "string") {
            throw new TypeError("Token must be of type \"string\".");
        } else {
            Object.defineProperty(this, "token", {
                value: token,
                enumerable: false,
                writable: true,
                configurable: true
              });
            this.options = options || {};
            if (!this.options.interval) {
                this.options.interval = 1800000;
            } else if (this.options.interval && typeof this.options.interval !== "number") {
                throw new TypeError("Interval must be of type \"number\".");
            } else {
                if (this.options.interval < 300000) {
                    throw new RangeError("Interval must be at least 300000ms (5 mins).");
                }
                if (options.Webhook) {
                    this.app = options.app || express();
                    this.app.use(express.json());
                    this.app.use(express.urlencoded({ extended: true }));
                    this.server = this.app.listen(...args);
                }
            }
        }
    }
}

module.exports = BotlistMe;