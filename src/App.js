import React, { useState } from "react";
import "./styles.css";

// database

const bamDB = {
  Books: [
    {
      name: "Diary of a Wimpy Kid: Cabin Fever",
      rating: "4.5/5"
    },
    {
      name: "Harry Potter and the Philosopher's Stone",
      rating: "4.5/5"
    },
    {
      name: "Lord Loss",
      rating: "4.5/5"
    },
    {
      name: "The Alchemist",
      rating: "4.7/5"
    },
    {
      name: "The Immortals of Meluha",
      rating: "4.8/5"
    },
    {
      name: "The Oath of the Vayuputras",
      rating: "4.4/5"
    },
    {
      name: "The Secret of the Nagas",
      rating: "4.8/5"
    }
  ],

  Anime: [
    {
      name: "Anohana: The Flower We Saw That Day",
      rating: "4.8/5"
    },
    {
      name: "A Place Further than the Universe",
      rating: "4.9/5"
    },
    {
      name: "Death Note",
      rating: "4.8/5"
    },
    {
      name: "Demon Slayer",
      rating: "5/5"
    },
    {
      name: "Full Metal Alchemist: Brotherhood",
      rating: "5/5"
    },
    {
      name: "Grave of the Fireflies",
      rating: "4.9/5"
    },

    {
      name: "My Hero Academia",
      rating: "4.8/5"
    },
    {
      name: "My Neighbor Totoro",
      rating: "4.9/5"
    },
    {
      name: "Spirited Away",
      rating: "4.7/5"
    },

    {
      name: "The Girl Who Leapt Through Time",
      rating: "4.5/5"
    },

    {
      name: "Yuru Camp",
      rating: "4.5/5"
    }
  ],
  Movies: [
    {
      name: "Coco",
      rating: "4.9/5"
    },
    {
      name: "Dead Poets Society",
      rating: "4.8/5"
    },
    {
      name: "Fantastic Beasts and Where to Find Them",
      rating: "4.7/5"
    },
    {
      name: "Good Will Hunting",
      rating: "4.7/5"
    },
    {
      name: "Harry Potter (film series)",
      rating: "4.8/5"
    },
    {
      name: "The Pursuit of Happyness",
      rating: "4.8/5"
    },
    {
      name: "The Shawshank Redemption",
      rating: "5/5"
    }
  ]
};

export default function App() {
  const [selectCategory, setSelectCategory] = useState("Books");
  function categoryClickHandler(category) {
    setSelectCategory(category);
  }
  return (
    <div className="App">
      <nav class="navigation">
        <h1>BAM: Books | Anime | Movies</h1>
      </nav>
      <small>
        Here are my suggestions of some really good books, anime and movies. Do
        share your reviews !
      </small>

      <div>
        {Object.keys(bamDB).map((category) => (
          <button
            class="btn-style"
            onClick={() => categoryClickHandler(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <hr></hr>

      <div>
        <ul>
          {bamDB[selectCategory].map((bam) => (
            <li class="lists" key={bam.name}>
              {" "}
              <div>{bam.name}</div>
              <div>{bam.rating}</div>
            </li>
          ))}
        </ul>
      </div>
      <footer>Created with ❤️ by Madhushree Kunder</footer>
    </div>
  );
}
