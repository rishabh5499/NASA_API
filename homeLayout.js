module.exports = ({ content }) => {
    return `
    <!DOCTYPE html>
    <html>
    <head>
        <title>NASA Picture of the day</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
        <style type="text/css">
		.alert {
		  left: 0;
		  margin: auto; // Centers alert component
		  position: absolute; // So that it will display relative to the entire page
		  right: 0;
		  text-align: center; // Centers 'Alert Test' text
		  top: 1em;
		  width: 50%;
		  z-index: 1; // Displays over app and bootstrap Navbar
		}
        body{
        	background-color: #e1e858;
        	margin-top: 220px;
        }
        .button {
            border-radius: 4px;
            background-color: #f4511e;
            border: none;
            color: #FFFFFF;
            text-align: center;
            font-size: 28px;
            padding: 20px;
            width: 200px;
            transition: all 0.5s;
            cursor: pointer;
            margin: 5px;
          }
          
          .button span {
            cursor: pointer;
            display: inline-block;
            position: relative;
            transition: 0.5s;
          }
          
          .button span:after {
            content: '\\00bb';
            position: absolute;
            opacity: 0;
            top: 0;
            right: -20px;
            transition: 0.5s;
          }
          
          .button:hover span {
            padding-right: 25px;
          }
          
          .button:hover span:after {
            opacity: 1;
            right: 0;
          }
        </style>
    </head>
    <body>
    <h1 align="center">NASA Astronomy Picture Of The Day</h1>
    <span align="center">${content}</span>
    <br><br>
    <form method="POST" align="center" action="/dateCheck">
        <label>Enter Date: </label>
        <input type="date" name="Date">
        <br><br>

        <button class="button"><span>Submit </span></button>
    </form>
    </body>
    </html>
    `
}