const core = require('@actions/core');
const github = require('@actions/github');

try {
	const status = core.getInput("status");
	console.log(`Status: ${status}`);
} catch (error) {
	core.setFailed(error.message);
}

