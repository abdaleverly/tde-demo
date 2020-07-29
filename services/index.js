'use strict';

const base_page = `<html>
    <h1>demo v1</h1>
</html>
`
module.exports.handler = (event, context, callback) => {
    console.log(JSON.stringify(event));
    callback(
        null,
        {
            statusCode: 200,
            body: base_page,
            headers: {'Content-Type': 'text/html'},
        }
    );
}