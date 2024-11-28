 const personer = [
    { namn: "Alice", ålder: 25, jobb: "Barista" },
    { namn: "Johanna", ålder: 30, jobb: "Utvecklare" },
    { namn: "Michell", ålder: 22, jobb: "Designer" },
    { namn: "John", ålder: 28, jobb: "Bilmekaniker" },
    { namn: "Kim", ålder: 35, jobb: "Marknadsförare" },
  ];

  function skrivUtProfilkort(personer) {
    const container = document.getElementById("profilkortContainer");
    container.innerHTML = ""; 

    personer.forEach(person => {
      const kort = document.createElement("div");
      kort.classList.add("profilkort");

    //   kort.innerHTML = `
    //     <h2>${person.namn}</h2>
    //     <p>Ålder: ${person.ålder}</p>
    //     <p>Jobb: ${person.jobb}</p>
    //   `;
      kort.innerHTML = `
        Namn: ${person.namn}
        Ålder: ${person.ålder}
        Jobb: ${person.jobb}
      `;

      container.appendChild(kort);
    });
  }

  // Funktion för att filtrera personer
  function filtreraPersoner(personer, kriterium) {
    return personer.filter(person => person.ålder > kriterium);
  }

  // Event Listener för filter-knappen
  document.getElementById("filterBtn").addEventListener("click", () => {
    const minÅlder = parseInt(document.getElementById("filter").value);

    if (!isNaN(minÅlder)) {
      const filtreradePersoner = filtreraPersoner(personer, minÅlder);
      skrivUtProfilkort(filtreradePersoner);
    }
  });

  // Visa alla personer vid start
  skrivUtProfilkort(personer);