#!/usr/bin/env node
const { version } = require("./package.json");
const create = require("./controllers/create");
const missing = require("./controllers/missing");
const populate = require("./controllers/populate");
const start = require("./controllers/start");
const stop = require("./controllers/stop");
const upgrade = require("./controllers/upgrade");
const { 
	createCmd, 
	missingCmd, 
	populateCmd,
	startCmd,
	stopCmd,
	upgradeCmd
} = require("./commands");

const argv = require("yargs")
.usage("Usage: $0 <command> [options]")
.help('h')
.alias('h', 'help')
.alias('l', 'local')
.command(createCmd)	
.command(missingCmd)
.command(populateCmd)
.command(startCmd)
.command(stopCmd)
.command(upgradeCmd)
.argv;

switch (argv._[0]) {
	case 'create': 
		create(argv);
		break;
	case 'missing':
		missing(argv);
		break;
	case 'populate':
		populate(argv);
		break;
	case 'start':
		start(argv);
		break;
	case 'stop':
		stop(argv);
		break;
	case 'upgrade':
		upgrade(argv);
		break;
}

