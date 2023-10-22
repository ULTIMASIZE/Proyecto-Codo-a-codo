const testimonios = [
    "Los productos naturales revitalizaron mi energía y bienestar. ¡Una decisión saludable que nunca lamentaré!",
    "Mi digestión mejoró enormemente con estos productos naturales. ¡Gracias por cambiar mi vida!",
    "Mejor sueño y menos estrés desde que comencé a usar estos productos naturales. ¡Un alivio!",
    "Mi piel nunca lució mejor. Productos naturales = confianza renovada.",
    "Productos naturales: mi aliado para un equilibrio en la vida. ¡Me siento increíblemente bien!"
    
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