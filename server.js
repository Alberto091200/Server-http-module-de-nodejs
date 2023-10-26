const http = require('http')
const fs = require('fs');

const server = http.createServer((req, res) => {
	const path = req.url

	console.log(path)

	if (path === '/index.html') {

		res.statusCode = 200
        res.write(fs.readFileSync('./index.html', 'utf8'))
        res.end()

    } else if (path === '/about.html'){

        res.statusCode = 200
        res.write(fs.readFileSync('./about.html', 'utf8', (err) => {
            if (err)
            console.log('NO FUFA')
        }))
        res.end()

    } else if(path === '/contact.html'){

        res.statusCode = 200
        res.write(fs.readFileSync('./contact.html', 'utf8', (err) => {
            if (err)
            console.log('NO FUFA')
        }))

        res.end()

    } else if( path === '/style.css'){

        res.statusCode = 200
        res.write(fs.readFileSync('./style.css', 'utf8'))

        res.end()

    } else {

        res.statusCode = 404;
        res.write(fs.readFileSync('./error.html', 'utf8'))

        res.end()

    }
})

server.listen(3000, () => console.log('Server on...'))