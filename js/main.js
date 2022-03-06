$(document).ready(function () {
    let currentPage = location.pathname;
    console.log(currentPage);
    if(currentPage == "/WebProgramiranje1/index.html"){
        alert("glavna stranica");
    }else if(currentPage == "/WebProgramiranje1/about.html"){
        alert("about");
    }else if(currentPage == "/WebProgramiranje1/testimonial.html"){
        alert("testimonials");
    }else if(currentPage == "/WebProgramiranje1/product.html"){
        alert("products");
    }else if(currentPage == "/WebProgramiranje1/blog_list.html"){
        alert("blog list");
    }else if(currentPage == "/WebProgramiranje1/contact.html"){
        alert("contakt");
    }else{
        alert("keks");
    }
   // Dinamicki ispis futera 
   $.ajax({
        url: "data/socialNetworks.json",
        type: "get",
        datatype: "json",
        success: function(result){
            console.log(result);
        },
        error: function(xhr, status){
            console.log(xhr);
            console.log(status);
        }
   });
    function writeFooter(){
        let elementFooter = document.querySelector("footer");
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
                        <p>Necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with</p>
                        <div class="footer_social">
                            ${writeSocialCases()}
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
        elementFooter.innerHTML += htmlFooter;
    }
    function writeSocialCases(){
        let arrSocial = ["facebook", "twitter", "linkedin", "instagram", "pinterest"];
        let htmlSocial = "";
        arrSocial.forEach(el => htmlSocial += `<a href=""><i class="fa fa-${el}" aria-hidden="true"></i></a>`);
        return htmlSocial;
    }
    writeFooter();
    myMap();
});
