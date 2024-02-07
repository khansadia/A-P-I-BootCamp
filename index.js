// 1.............

async function fetchPokemons() {
    try {
        const response = await fetch("https://majazocom.github.io/Data/pokemons.json");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        data.forEach((pokemon) => {
            console.log(pokemon);
        });
    } catch (error) {
        console.error("Error fetching Pokémon data:", error);
    }
}
fetchPokemons();

async function fetchAndRenderPokemons() {
    try {
        const response = await fetch("https://majazocom.github.io/Data/pokemons.json");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const pokemonListContainer = document.getElementById("pokemon-list"); 

        data.forEach((pokemon) => {
            const pokemonName = pokemon.name;
            const paragraph = document.createElement("p");
            paragraph.textContent = pokemonName;
            pokemonListContainer.appendChild(paragraph);
        });
    } catch (error) {
        console.error("Error fetching and rendering Pokémon data:", error);
    }
}

fetchAndRenderPokemons();


// 2
async function fetchDogs() {
    try {
        const response = await fetch("https://majazocom.github.io/Data/dogs.json");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        data.forEach((dog) => {
            console.log(dog.name);
        });
    } catch (error) {
        console.error("Error fetching dog data:", error);
    }
}

fetchDogs();

async function fetchAndRenderDogs() {
    try {
        const response = await fetch("https://majazocom.github.io/Data/dogs.json");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const dogListContainer = document.getElementById("dog-list"); // Assuming you have a <ul> with this ID

        data.forEach((dog) => {
            const dogName = dog.name;
            const listItem = document.createElement("li");
            listItem.textContent = dogName;
            dogListContainer.appendChild(listItem);
        });
    } catch (error) {
        console.error("Error fetching and rendering dog data:", error);
    }
}

fetchAndRenderDogs();
 
// 3

async function fetchBooks() {
    try {
        const response = await fetch("https://majazocom.github.io/Data/books.json");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        data.forEach((book) => {
            console.log(book.name);   // why it says undefined book 
        });

    } catch (error) {
        console.error("Error fetching books data:", error);
    }
}

fetchBooks();

async function fetchAndRenderBooks() {
    try {
        const response = await fetch("https://majazocom.github.io/Data/books.json");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const bookListContainer = document.getElementById("book-list");

        data.forEach((book) => {
            if (book.pages < 500) {
                const listItem = document.createElement("li");
                listItem.textContent = book.title;
                bookListContainer.appendChild(listItem);
            }
        });
    } catch (error) {
        console.error("Error fetching and rendering book data:", error);
    }
}

fetchAndRenderBooks();
//4 ......
async function fetcher() {
    try {
        const response = await fetch("https://majazocom.github.io/Data/attendees.json");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();

        // Log the data to the console
        console.log(data);

        // Render attending attendees to the DOM
        document.body.insertAdjacentHTML("beforeend", "<h1>Attendees</h1>");
        for (const attendee of data) {
            if (attendee.attending) {
                document.body.insertAdjacentHTML("beforeend", `<p>${attendee.name}</p>`);
            }
        }

        // Render allergic attendees to the DOM
        document.body.insertAdjacentHTML("beforeend", "<h2>Attendees with Allergies</h2>");
        for (const attendee of data) {
            if (attendee.attending && attendee.allergies.length > 0) {
                document.body.insertAdjacentHTML("beforeend", `<p>${attendee.name}</p>`);
            }
        }
    } catch (error) {
        console.error("Error fetching and rendering attendee data:", error);
    }
}

fetcher();

            //  another way to do this
  /* async function fetcher() {
    const response = await fetch("https://majazocom.github.io/Data/attendees.json");
    const data = await response.json();
    console.log(data);
    document.body.insertAdjacentHTML("beforeend", `<h1>Attendies</h1>`);
    for (mon of data) {
        if (mon.attending) {
            document.body.insertAdjacentHTML("beforeend", `<p>${mon.name}</p>`);
        }
    }
    document.body.insertAdjacentHTML("beforeend", `<h2>Attendies with Allergic</h2>`);
    for (mon of data) {
        if (mon.attending && mon.allergies.length > 0) {
            document.body.insertAdjacentHTML("beforeend", `<p>${mon.name}</p>`);
        }
    }
}
fetcher(); */






