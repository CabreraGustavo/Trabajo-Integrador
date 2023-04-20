emailjs.init("OXWMo0u-x9pjLqy-J");
$(document).ready(function() {
   $("#enviar").click(function (){

     if ($("#formulario")[0].checkValidity()) {
 
       let nombre = $("#nombre").val();
       let email = $("#correo").val();
       let mensaje = $("#mensaje").val()
 
       let templateParams = {
         to_name: nombre ,
         from_name: email ,
         message_html: mensaje ,
       };
 
       emailjs.send("service_hkqd7r8", "template_oexewxb", templateParams)
         .then(function(response) {
           alert("Mensaje enviado", response);
         }, function(error) {
           alert("Error", error);
         });
     } else {
       alert("Por favor complete todos los campos requeridos.");
     }
   });
      const formWizard = document.getElementById('form-wizard');
      const sections = formWizard.querySelectorAll('.form-section');
      const prevButton = formWizard.querySelectorAll('.prev-button');
      const nextButton = formWizard.querySelectorAll('.next-button');
      let currentSection = 0;
      
      function showSection(sectionIndex) {
        sections[sectionIndex].style.display = 'block';
      }
      
      function hideSection(sectionIndex) {
        sections[sectionIndex].style.display = 'none';
      }
      
      function validateForm() {
        const inputs = sections[currentSection].querySelectorAll('input');
        let isValid = true;
      
        for (let i = 0; i < inputs.length; i++) {
          if (!inputs[i].checkValidity()) {
            isValid = false;
            break;
          }
        }
      
        return isValid;
      }
      
      function navigateToSection(sectionIndex) {
        if (validateForm()) {
          hideSection(currentSection);
          currentSection = sectionIndex;
          showSection(currentSection);
        }
      }
      
      function handlePrevButtonClick() {
        navigateToSection(currentSection - 1);
      }
      
      function handleNextButtonClick() {
        navigateToSection(currentSection + 1);
      }
      
      function handleFormSubmit(event) {
        event.preventDefault();
        alert('Formulario enviado correctamente');
      }
      
      for (let i = 1; i < sections.length; i++) {
        hideSection(i);
      }
      
      for (let i = 0; i < prevButton.length; i++) {
        prevButton[i].addEventListener('click', handlePrevButtonClick);
      }
      
      for (let i = 0; i < nextButton.length; i++) {
        nextButton[i].addEventListener('click', handleNextButtonClick);
      }
      
      formWizard.addEventListener('submit', handleFormSubmit);
      
      showSection(currentSection);
      
});
