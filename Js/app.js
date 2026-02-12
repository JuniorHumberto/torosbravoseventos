    document.addEventListener("DOMContentLoaded", () => {
  const cantidadSelect = document.getElementById("cantidad");
  const payBtn = document.getElementById("pay-btn");
  const form = document.getElementById("ticket-form");
  const summary = document.getElementById("purchase-summary");
  const summaryText = document.getElementById("summary-text");

  const precioUnitario = 150;

  // Actualizar precio y resumen al cambiar cantidad
  cantidadSelect.addEventListener("change", () => {
    const cantidad = parseInt(cantidadSelect.value);
    const total = cantidad * precioUnitario;

    payBtn.textContent = `Pagar $${total}.00`;

    summary.style.display = "block";
    summaryText.textContent = `Has seleccionado ${cantidad} boleto(s). 
    Incluye ${cantidad} bebida(s) y ${cantidad} pulsera(s) de acceso. 
    Total a pagar: $${total}.00 MXN`;
  });

  // Enviar datos a Formspree y redirigir a MercadoPago
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const response = await fetch(form.action, {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" }
    });

    if (response.ok) {
      // Redirigir a MercadoPago (ejemplo: link de checkout)
      window.location.href = "https://link.mercadopago.com.mx/pagoboletoscf"; //etos Reemplaza con tu link real
    } else {
      alert("Error al enviar el formulario. Intenta de nuevo.");
    }
  });
});

//Efecto Scroll para eventos
