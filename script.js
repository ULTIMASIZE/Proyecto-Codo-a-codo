const testimonios = [
    "Estoy encantado con los productos naturales que compré en esta tienda. Han cambiado mi vida para mejor.",
    "Los productos naturales de esta tienda son increíbles. Mi salud ha mejorado significativamente desde que los empecé a usar.",
    "Nunca creí en los productos naturales, pero estos realmente funcionan. Mi energía ha aumentado y me siento genial.",
    "¡Increíbles productos naturales! Han transformado mi rutina diaria y me siento mucho mejor desde que los incorporé.",
    "Los productos naturales de esta tienda son mi secreto para mantenerme saludable y lleno de energía. ¡Los recomiendo totalmente!"
  ];

  const testimoniosContainer = document.getElementById('testimonios-container');

  function generarTestimonioAleatorio() {
    const indiceAleatorio = Math.floor(Math.random() * testimonios.length);
    return testimonios[indiceAleatorio];
  }

  fetch('https://randomuser.me/api/?results=2') // Obtén 5 resultados aleatorios
    .then(response => response.json())
    .then(data => {
      const personas = data.results;

      personas.forEach(persona => {
        const nombre = `${persona.name.first} ${persona.name.last}`;
        const ciudad = persona.location.city;
        const testimonio = `Soy ${nombre} de ${ciudad}. ${generarTestimonioAleatorio()}`;

        const testimonioElement = document.createElement('div');
        testimonioElement.classList.add('testimonio');
        testimonioElement.textContent = testimonio;
        testimoniosContainer.appendChild(testimonioElement);
      });
    })
    .catch(error => {
      console.error('Error:', error);
    });