const url=("https://randomfox.ca/floof/")
const api=async ()=>{
    const request=await fetch(url)
    const response=await request.json()
    const output=await response.image
    console.log(output)
    const data=document.getElementById("root")
    

    data.innerHTML+=`<div class="image"><img src ="${output}"></div>    `
  
}
api()