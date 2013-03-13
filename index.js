/**
 * @overview
 * @author Matthew Caruana Galizia <m@m.cg>
 * @license Creative Commons Attribution 3.0 Unported (CC BY 3.0)
 * @copyright Copyright (c) 2013, Matthew Caruana Galizia
 * @version 0.1.2
 * @preserve
 */

'use strict';

/*jshint node:true*/

var https = require('https');
var url = require('url');

var Socks5ClientHttpsAgent = require('./lib/agent');

exports.request = function(options, cb) {
	var agent;

	if (typeof options === 'string') {
		options = url.parse(options);
	}

	agent = new Socks5ClientHttpsAgent(options);
	options.agent = agent;

	return https.request(options, cb);
};

exports.get = function(options, cb) {
	var req = exports.request(options, cb);

	req.end();

	return req;
};
