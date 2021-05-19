module.exports = () => {
    return `
    <!DOCTYPE html>
    <html>
    <head>
        <title>NASA Picture of the day</title>
        <style>
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
    <form method="POST" align="center" action="/showData">
        <label>Enter Date: </label>
        <input type="date" name="Date">
        <br><br>
    
        <button class="button"><span>Submit </span></button>
    </form>
    </body>
    </html>
    `
}