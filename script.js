string= "";
buttons= document.querySelectorAll(".buttom");
Array.from(buttons).forEach((button)=>{
    button.addEventListener("click",()=>{
         if(button.innerText=='=')
         {
            string= eval(string);
            document.querySelector("input").value=string
        }
        else if(button.innerText=='C') {
           string="";
           document.querySelector("input").value=string
        }
        else{
            if(button.innerText == 'X'){
                string = string+'*';
                document.querySelector("input").value=string
            }
            else if(button.innerText=='sqr')
            {
                string = string+='**2';
                document.querySelector("input").value=string

            }

            else if(button.innerText=='^')
            {
                string = string+='**';
                document.querySelector("input").value=string

            }
            else{
                string = string+button.innerText;
                document.querySelector("input").value=string
            }
        }
    })
})