const faqIcon = document.querySelector('.faq-icon');

const faqs = document.querySelectorAll('.faq');

faqs.forEach(function (faq) {
    faq.addEventListener('mouseenter', function (e) {
        // Select Faq Icon
        const faq = e.currentTarget;
        const faqImg = faq.childNodes['1'].childNodes['3'];
        // On CLick Show FAQ COntent
        faqImg.onclick = function () {
            faq.classList.toggle('show');
            // Change Image of FAQ
            if (faqImg.src.match("plus.png")) {
                faqImg.src = "images/minus.png";
            } else {
                faqImg.src = "images/plus.png";
            }
        }
    });

});