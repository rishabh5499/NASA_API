const homeLayout = require("./homeLayout")

module.exports = ({ message }) => {
  if(!message){
    return homeLayout({
      content: `
      `
    })
  } else {
    return homeLayout({
      content: `
        <div class="alert alert-danger">
          <strong>Warning!</strong> ${message}
        </div>
      `
    })
  }  
}