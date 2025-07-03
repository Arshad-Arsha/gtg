 // Search functionality
 const searchForm = document.querySelector('.search-form');
 const searchToggle = document.getElementById('searchToggle');
 const searchInput = document.getElementById('searchInput');

 searchToggle.addEventListener('click', (e) => {
   e.preventDefault(); // Prevent form submission
   e.stopPropagation(); // Prevent event bubbling
   
   // Toggle the expanded class
   searchForm.classList.toggle('expanded');
   
   // Focus the input if expanded
   if (searchForm.classList.contains('expanded')) {
     searchInput.focus();
   }
 });

 // Close search when clicking outside
 document.addEventListener('click', (e) => {
   if (!searchForm.contains(e.target) && e.target !== searchToggle) {
     searchForm.classList.remove('expanded');
   }
 });

 // Navbar scroll behavior
 window.addEventListener('scroll', function() {
   const navbar = document.getElementById('mainNavbar');
   if (window.scrollY > 50) { // Change 50 to whatever scroll position you prefer
     navbar.classList.add('navbar-scrolled');
     navbar.classList.remove('navbar-transparent');
   } else {
     navbar.classList.remove('navbar-scrolled');
     navbar.classList.add('navbar-transparent');
   }
 });

 // Initialize navbar state on page load
 document.addEventListener('DOMContentLoaded', function() {
   const navbar = document.getElementById('mainNavbar');
   if (window.scrollY > 50) {
     navbar.classList.add('navbar-scrolled');
     navbar.classList.remove('navbar-transparent');
   } else {
     navbar.classList.remove('navbar-scrolled');
     navbar.classList.add('navbar-transparent');
   }
 });

 // Your other JavaScript functions...
 function setMainImage(el) {
   document.getElementById('mainImage').src = el.src;
   document.querySelectorAll('.thumbnail-container img').forEach(img => img.classList.remove('active'));
   el.classList.add('active');
 }

 function showHideDetails(selectedPlan) {
   // Hide all detail sections
   const allDetails = document.querySelectorAll('.nested-options');
   allDetails.forEach(detailDiv => {
     detailDiv.classList.add('d-none');
   });

   // Show the selected detail section
   const selectedDetails = document.getElementById(selectedPlan + 'Details');
   if (selectedDetails) {
     selectedDetails.classList.remove('d-none');
   }

   // Update active state for the main option cards
   document.querySelectorAll('.product-option-card').forEach(card => {
     card.classList.remove('active');
   });
   const selectedCard = document.getElementById('card' + selectedPlan.charAt(0).toUpperCase() + selectedPlan.slice(1));
   if (selectedCard) {
     selectedCard.classList.add('active');
   }

   // Special handling for "Try Once" nested options
   if (selectedPlan === 'tryonce') {
     const tryOnceSingleRadio = document.querySelector('input[name="try_once_type"][value="single"]');
     if (tryOnceSingleRadio) {
       tryOnceSingleRadio.checked = true;
       toggleTryOnceFragrances('single');
     }
   }
 }

 function toggleTryOnceFragrances(tryOnceSubOption) {
   const fragrance2Group = document.getElementById('tryOnceFragrance2Group');
   if (tryOnceSubOption === 'double') {
     fragrance2Group.classList.remove('d-none');
   } else {
     const fragrance2Radios = document.querySelectorAll('#tryOnceFragrance2Group input[type="radio"]');
     if (fragrance2Radios.length > 0) {
       fragrance2Radios[0].checked = true;
     }
     fragrance2Group.classList.add('d-none');
   }
 }

 function goToSlide(index) {
   const carousel = bootstrap.Carousel.getOrCreateInstance(document.querySelector('#perfumeCarousel'));
   carousel.to(index);
 }

  document.addEventListener("DOMContentLoaded", () => {
   new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 24,
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      navigation: {
        nextEl: "#nextBtn",
        prevEl: "#prevBtn"
      },
      speed: 600,
      effect: 'slide',
      breakpoints: {
        768: { slidesPerView: 2 },
        992: { slidesPerView: 3 }
      }
    });
  });


