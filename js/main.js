let currentPage = location.pathname;
if(currentPage == "/WebProgramiranje1/index.html" || currentPage == "/WebProgramiranje1/"){
    ajaxCallBack("indexSlider", function(result){
        document.querySelector("#customCarousel1").innerHTML = writeSlider(result);
    });
    ajaxCallBack("products", function(result){
        document.querySelector("#productArea").innerHTML = writeProducts(result);
    });
    ajaxCallBack("reasons", function(result){
        document.querySelector("#reasons").innerHTML = writeReasons(result);
    });
    ajaxCallBack("testimonials", function(result){
        document.querySelector("#testimonials").innerHTML = writeTestimonials(result);
    });
}else if(currentPage == "/WebProgramiranje1/testimonial.html"){
    ajaxCallBack("testimonials", function(result){
        document.querySelector("#testimonials").innerHTML = writeTestimonials(result);
    });
}else if(currentPage == "/WebProgramiranje1/product.html"){
    ajaxCallBack("products", function(result){
        document.querySelector("#productArea").innerHTML = writeProducts(result);
    });
}
function writeTestimonials(data){
    html = "";
    data.forEach(el => html += `<div class="carousel-item ${el.id == 1 ? 'active' : ''}">
        <div class="box col-lg-10 mx-auto">
           <div class="img_container">
              <div class="img-box">
                 <div class="img_box-inner">
                    <img src="images/${el.image.src}" alt="${el.image.alt}">
                 </div>
              </div>
           </div>
           <div class="detail-box">
              <h5>${el.displayName}</h5>
              <h6>${el.displayWho}</h6>
              <p>${el.displayComment}</p>
           </div>
        </div>
     </div>`);
    return html;
}
function writeReasons(data){
    html = "";
    data.forEach(el => html += `<div class="col-md-4">
        <div class="box ">
           <div class="img-box">
              ${el.image}
           </div>
           <div class="detail-box">
              <h5>
                 ${el.title}
              </h5>
              <p>
                 ${el.description}
              </p>
           </div>
        </div>
     </div>`);
    return html;
}
function writeProducts(data){
    html = "";
    data.forEach(el => html += `
        <div class="col-sm-6 col-md-4 col-lg-4">
            <div class="box">
                <div class="option_container">
                    <div class="options">
                        <input type="button" data-id="${el.id}" value="Add To Cart" class="option1" />
                        <input type="button" data-id="${el.id}" value="Buy Now" class="option2" />
                    </div>
                </div>
                <div class="img-box">
                    <img src="images/${el.image.src}" alt="${el.image.alt}">
                </div>
                <div class="detail-box">
                    <h5>${el.displayName}</h5>
                    <h6>$${el.displayPrice}</h6>
                </div>
            </div>
        </div>`);
    return html;
}
function writeSlider(data){
    html = '<div class="carousel-inner">';
    data.forEach(el => html += `
        <div class="carousel-item ${el.id == 1 ? 'active' : ''}">
            <div class="container ">
                <div class="row">
                    <div class="col-md-7 col-lg-6 ">
                        <div class="detail-box">
                            <h1>
                            <span>${el.title1}</span>
                            <br>
                            ${el.title2}
                            </h1>
                            <p>${el.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>`);
    html += `</div><div class="container"><ol class="carousel-indicators">`;
    data.forEach(el => html += `<li data-target="#customCarousel1" data-slide-to="${el.id - 1}" class=" ${el.id == 1 ? 'active': ''}"></li>`);
    html += `</ol></div>`;
    return html;
}
function ajaxCallBack(socialNetworks, result){
    $.ajax({
        url: "data/" + socialNetworks + ".json",
        type: "get",
        datatype: "json",
        success: result,
        error: function(xhr, status){
            console.log(xhr);
            console.log(status);
            alert("Something doesn't seem right, please contact our administrators at something@meil.com with these parameters: "+xhr+"\nand status: "+status+".\nWe're sorry for troubles. Have you tried reloading yet?");
        }
    });
}
(function(){
    let htmlFooter = "";
    htmlFooter += `
    <div class="container">
        <div class="row">
            <div class="col-md-4 footer-col">
                <div class="footer_contact">
                    <h4>Reach at..</h4>
                    <div class="contact_link_box">
                        <a href="https://www.google.com/maps/d/u/0/viewer?ie=UTF8&oe=UTF8&msa=0&mid=1HFbfKdGr42we8AETAPSuYrETZic&ll=44.814253400000005%2C20.48441480000001&z=18" target="_blank"><i class="fa fa-map-marker" aria-hidden="true"></i><span>Location</span></a>
                        <a href="tel:+011234567890"><i class="fa fa-phone" aria-hidden="true"></i><span>Call +01 1234567890</span></a>
                        <a href="mailto:vlajko@gmail.com"><i class="fa fa-envelope" aria-hidden="true"></i><span>vlajko@gmail.com</span></a>
                    </div>
                </div>
            </div>
            <div class="col-md-4 footer-col">
                <div class="footer_detail">
                    <a href="index.html" class="footer-logo">Famms</a>
                    <p>Fancy clothes shop Famms, your one-stop for all shirts, dresses, suits, you name it, we have it.</p>
                    <div class="footer_social">
                        ${ajaxCallBack("socialNetworks", function(result){
                            document.querySelector(".footer_social").innerHTML = writeSocialCases(result);
                        })}
                    </div>
                </div>
            </div>
            <div class="col-md-4 footer-col">
                <div class="map_container">
                    <div class="map">
                        <div id="googleMap"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-info">
            <div class="col-lg-7 mx-auto px-0">
                <p>&copy; Made by Vlajko 116/20</a></p>
            </div>
        </div>`;
    document.querySelector("footer").innerHTML += htmlFooter;
})();
function writeSocialCases(data){
        let htmlSocial = "";
        data.forEach(el => htmlSocial += `<a href="${el.address}"><i class="fa fa-${el.arrayElement}" aria-hidden="true"></i></a>`);
        return htmlSocial;
}
myMap();
$(document).ready(function () {
    let currentPage = location.pathname;
    if(currentPage == "/WebProgramiranje1/contact.html"){
        let reName = /^[A-Z]{1}[a-z]{2,}(\s[A-Z]{1}[a-z]{2,})*$/;
        let reEmail = /^([A-Z]|[a-z]){1}([A-Z]|[a-z]|[0-9]|\.|\-)*\@[a-z]+\.(([a-z]{3})|([a-z]{3}\.[a-z]{3}\.[a-z]{2}))/;
        let txtName = document.getElementById("myFormName");
        let txtEmail = document.getElementById("myFormEmail");
        let txtSubject = document.getElementById("myFormSubject");
        let txtText = document.getElementById("myFormText");
        let warName = document.getElementById("pName");
        let warEmail = document.getElementById("pEmail");
        let warSubject = document.getElementById("pSubject");
        let warText = document.getElementById("pText");
        var tryName, tryEmail, trySubject, tryText = false;
        $(warName).hide();
        $(warEmail).hide();
        $(warSubject).hide();
        $(warText).hide();
        txtName.addEventListener('blur', function(){
            let valName = txtName.value.trim();
            if(!reName.test(valName)){
                valName ? warName.innerHTML = '<i class="fas fa-exclamation-triangle"></i>Insert a valid name with capitalized first letter!' : warName.innerHTML = '<i class="fas fa-exclamation-triangle"></i>Please enter your name';
                formColorState(txtName, "red", true, 0);
                tryName = false;
            }
            else{
                formColorState(txtName, "green", false, 0);
                tryName = true;
            }
        });
        txtEmail.addEventListener('blur', function(){
            let valEmail = txtEmail.value;
            if(!reEmail.test(valEmail)){
                formColorState(txtEmail, "red", true, 1);
                tryEmail = false;
            }
            else{
                formColorState(txtEmail, "green", false, 1);
                tryEmail = true;
            }
        });
        txtSubject.addEventListener('blur', function(){
            let valSubject = txtSubject.value.trim();
            if(valSubject == ""){
                formColorState(txtSubject, "red", true, 2);
                trySubject = false;
            }
            else{
                formColorState(txtSubject, "green", false, 2);
                trySubject = true;
            }
        });
        txtText.addEventListener('blur', function(){
            let valText = txtText.value.trim();
            if(valText == ""){
                formColorState(txtText, "red", true, 3);
                tryText = false;
            }
            else{
                formColorState(txtText, "green", false, 3);
                tryText = true;
            }
        });
        document.querySelector("#myFormSubmit").onclick = function(){
            let tryArray = [tryName, tryEmail, trySubject, tryText];
            let formElementArray = [txtName, txtEmail, txtSubject, txtText];
            let flag = true;
            for(let i = 0; i < tryArray.length; i++){
				if(!tryArray[i]) {
                    flag = false;
					formColorState(formElementArray[i], "red", true, i);
				}
			}
            if(flag){
                alert("Your message has been sent for review! We'll be right back at you.");   
            }
        }
    }
});
function formColorState(el, val, err, ind){
    document.getElementById("myFormSubmit").disabled = err;
    el.style.removeProperty("border-color");
    el.style.setProperty("border-color", val);
    let warArray = ["pName", "pEmail", "pSubject", "pText"];
    let warElement = document.getElementById(warArray[ind]);
    err ? $(warElement).slideDown(500) : $(warElement).slideUp(500);
}
