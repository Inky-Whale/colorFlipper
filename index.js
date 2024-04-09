



function handleClick(){
    const randomHexColorCode = () => {
        let n = (Math.random() * 0xfffff * 1000000).toString(16);
        return "#" + n.slice(0, 6);
      };
      let hexColor = randomHexColorCode();
      hexColor.toUpperCase()
      document.getElementById("colorName").innerText = hexColor
      document.body.style.backgroundColor = hexColor
      
}


document.getElementById("getColorBtn").addEventListener("click",handleClick)

