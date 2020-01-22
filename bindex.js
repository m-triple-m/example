var fs = require('fs')
console.log(convertFile('index.js'));

function convertFile(path) {
	console.log('Convert file', path)
	fs.readFile(path, {
		encoding: 'utf8'
	}, function(error, content) {
        console.log(content);
		if (error) throw error

		fs.writeFile("bindex.js", content, {
			encoding: 'utf8'
		}, function(error) {
			if (error) throw error

			console.log('Successfully converted', path)
		})
	})
}