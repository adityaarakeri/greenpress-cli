const { red } = require('./colors');
const { execSync } = require('child_process');

module.exports = function execute(cmd, actionDescription, execProps = null) {
	try {
		execSync(cmd, execProps, (error, stdout, stderr) => {
			if (error) {
				console.log(red(actionDescription ? `Failed to ${actionDescription}: ${error.message}` : error.message));
				
				return false;
			}
			
			if (stderr) {
				console.log(red(actionDescription ? `Error occurred while trying to ${actionDescription}: ${error.message}` : stderr));
				
				return false;
			}
			
			console.log(stdout);
		});
	} catch (error) {
		console.log(red(actionDescription ? `Error occurred while trying to ${actionDescription}: ${error.message}`: error.message));

		return false;
	}

	return true;
}
