const aboutMeP = document.querySelector('#about-me-p');
const flagSelect = document.getElementById('flag');
  flagSelect.addEventListener('change', (e) => {
    if (e.target.value === 'es') {
      aboutMeP.innerHTML = `Hola, soy Fiorella! <br> Me apasiona la programacion y el aprendizaje constante,
      me fascina crear interfaces graficas que reflejen mi creatividad y
      los retos que requieren de mi sobreponerme a la incertidumbre
      y adquirir nuevos conocimientos y habilidades. 
      Aspiro a ser full stack developer y formar parte de proyectos
      innovadores.`;
    };
    if (e.target.value === 'en') {
      aboutMeP.innerHTML = `Hi, my name is Fiorella!<br>
      My passion is programming and my constant professional development, I enjoy creating graphic
      interfaces that reflect my creativity and challenges that require me to overcome uncertainty and obtain new
      skills and knowledge. I aspire to be a full stack developer and be part of innovative projects.`;
    };
  });
