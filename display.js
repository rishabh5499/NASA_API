const layout = require("./layout")

module.exports = ({ pic_date, expain, url, title, flag }) => {
    if(flag==1){
        return layout({
            content: `
            <h2 style="padding-left: 150px;"><label>Title:</label>
            <p id="title"><strong>&nbsp &nbsp &nbsp ${title}</strong></p></h2>
            
            <h2 style="padding-left: 150px;"><label>Date: </label>
            <span id="date">&nbsp &nbsp ${pic_date}</span></h2>
            <br><br>
            
            <h2 style="padding-left: 150px;"><label>Video</label></h2>
            <iframe id="picture" width="420" height="345" src="${url}"></iframe>
            <br><br>

            <h2><label>Explanation: </label></h2>
            <p id="explanation">&nbsp &nbsp &nbsp ${expain}</p>
            `
        });
    } else if(flag==0){
        return layout({
            content: `
            <h2 style="padding-left: 150px;"><label>Title:</label>
            <p id="title"><strong>&nbsp &nbsp &nbsp ${title}</strong></p></h2>
            
            <h2 style="padding-left: 150px;"><label>Date: </label>
            <span id="date">&nbsp &nbsp ${pic_date}</span></h2>
            <br><br>

            <h2 style="padding-left: 150px;"><label>Image</label></h2>
            <img id="picture" src="${url}" alt="NASA Picture Of The Day">
            <br><br>

            <h2><label>Explanation: </label></h2>
            <p id="explanation">&nbsp &nbsp &nbsp ${expain}</p>
            `
        });
    }
}