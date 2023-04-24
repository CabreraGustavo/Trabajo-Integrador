$(document).ready(function() {

  $(".form-section").not(":first").hide();
  $("#descarga").hide();

  $("#job-application-form").validate();

  $(".next-button").click(function() {
    var currentSection = $(this).closest(".form-section");
    var nextSection = currentSection.next(".form-section");
    if ($("#job-application-form").valid()) {
      currentSection.hide();
      nextSection.show();
    }
  });

  $(".previous-button").click(function() {
    var currentSection = $(this).closest(".form-section");
    var previousSection = currentSection.prev(".form-section");
    currentSection.hide();
    previousSection.show();
  });

  $("input,textarea").on("input", function() {
    $(this).valid();
  });

  $("#job-application-form").submit(function(event) {
    event.preventDefault();
    if ($("#job-application-form").valid()) {
      var summaryHtml = "<h2>Resumen de la solicitud</h2>";
      summaryHtml += "<p><strong>Nombre:</strong> " + $("#name").val() + "</p>";
      summaryHtml += "<p><strong>Correo electrónico:</strong> " + $("#email").val() + "</p>";
      summaryHtml += "<p><strong>Puesto anterior:</strong> " + $("#job-title").val() + "</p>";
      summaryHtml += "<p><strong>Descripción del trabajo:</strong> " + $("#job-description").val() + "</p>";
      summaryHtml += "<p><strong>Nombre del referente:</strong> " + $("#ref-name").val() + "</p>";
      summaryHtml += "<p><strong>Teléfono del referente:</strong> " + $("#ref-phone").val() + "</p>";
      $("#summary").html(summaryHtml);
      $("#descarga").show();
    }
  });
});
  function generatePDF() {
    var nombre = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var ultimoTrabajo = document.getElementById('job-title').value;
    var descripcionTrabajo = document.getElementById('job-description').value;
    var nombreReferente = document.getElementById('ref-name').value;
    var numeroReferente = document.getElementById('ref-phone').value;

    var docDefinition = {
      content: [
        { text: 'Resumen de solicitud de empleo', style: 'header' },
        { text: 'Nombre: ' + nombre },
        { text: 'Correo electrónico: ' + email },
        { text: 'Puesto anterior: ' + ultimoTrabajo },
        { text: 'Descripción del trabajo: ' + descripcionTrabajo },
        { text: 'Referencia anterior: ' + nombreReferente },
        { text: 'Teléfono referencia: ' + numeroReferente }
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 0, 0, 10]
        }
      }
    };
    pdfMake.createPdf(docDefinition).download('resumen-solicitud-empleo.pdf');
  
  };
  

