const name = new URLSearchParams(window.location.search).get("name")
const countryDetails = document.querySelector(".country-details")
const image = document.querySelector(".country-details img")
const countryHeading=document.querySelector(".details-container h2")
const details1=document.querySelector(".details1")
const details2=document.querySelector(".details2")
const buttonBox=document.querySelector(".button-box")
const backButton = document.querySelector(".back-button")



fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
.then((res)=>res.json())
.then((data)=>{
    console.log(data);
    image.src=data[0].flags.svg
    countryHeading.textContent=data[0].name.common
    details1.innerHTML=`
    <p><b>Native Name:</b> ${data[0].name.nativeName?Object.values(data[0].name.nativeName)[0].common:data[0].name.common}</p>
    <p><b>Population:</b> ${(data[0].population).toLocaleString('en-IN')}</p>
    <p><b>Region:</b> ${data[0].region}</p>
    <p><b>Sub Region:</b> ${data[0].subregion||""}</p>
    <p><b>Capital:</b> ${data[0].capital?data[0].capital[0]:""}</p>
    `
    details2.innerHTML=`
    <p><b>Top Level Domain:</b> ${data[0].tld?data[0].tld.join(", "):""}</p>
    <p><b>Currencies:</b> ${data[0].currencies?Object.values(data[0].currencies).map((currency)=>currency.name).join(", "):""}</p>
    <p><b>Languages:</b> ${data[0].languages?Object.values(data[0].languages).slice(0,3).join(", "):""}</p>
    `
     
    
   async function makeRequest()
   {
    if(data[0].borders)
        {
         const borders = data[0].borders
         for(const border of borders)
         {
             const res = await(await fetch(`https://restcountries.com/v3.1/alpha/${border}`)).json()
             const button = document.createElement("button")
             button.classList.add("border-button")
             button.textContent=res[0].name.common
             buttonBox.append(button)
         }
        //  borders.forEach((border)=>{
        //    fetch(`https://restcountries.com/v3.1/alpha/${border}`)
        //    .then((res)=>res.json())
        //    .then(([data])=>{
        //      const button = document.createElement("button")
        //      button.classList.add("border-button")
        //      button.textContent=data.name.common
        //      buttonBox.append(button)
        //    })
     
         
         
     
        //  })
        }

        else{
            throw new Error("")
        }
   
   
    }

    makeRequest()
    .then(()=>{
        const borderButton = document.querySelectorAll(".border-button")
        console.log(borderButton);
        document.addEventListener("click",(e)=>{
             if(e.target.className=="border-button"){
                location.href=`country.html?name=${e.target.innerText}`
                // open(`country.html?name=${e.target.innerText}`)
             }
        })
    })



       

    // buttonBox.innerHTML=`
    // <button class="border-button">France</button>
    // <button class="border-button">Germany</button>
    //  <button class="border-button">Netherlands</button>
    // `
    


    backButton.addEventListener("click",()=>{
        history.back()
    })
    

})

