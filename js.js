const close = document.querySelector(".close");
const mobile_tabs = document.querySelector(".links");
const menu = document.querySelector("#menu");
mobile_tabs.style.display = "none"
document.body.style.overflow = "auto";
const donateBtn = document.getElementById("donate");
function sendToWhatsApp() {
  const name = document.getElementById("name").value;  
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Phone number (no +, no spaces)
  const phone = "250732506821";

  // Build the final WhatsApp message
  const finalMessage = `Name: ${name}\n Email ${email} \n Message: ${message}`;

  // Encode for URL
  const whatsappURL = `https://wa.me/${phone}?text=${encodeURIComponent(finalMessage)}`;

  // Open WhatsApp
  window.open(whatsappURL, "_blank");
}
close.addEventListener("click", () => {
   mobile_tabs.style.display = "none"
   window.location.reload();
});
menu.addEventListener("click", () => {
  mobile_tabs.style.display = "flex";
  document.body.style.overflow = "hidden";

});
donateBtn.addEventListener("click", () => {
    const convert = encodeURIComponent("*182*1*2*0732506821#");
    window.location.href = "tel:" + convert;
})
const loader = document.querySelector(".loading");
const img = new Image();
img.src = "3312580.jpg";

img.onload = function() {
  loader.style.display = "none";
}