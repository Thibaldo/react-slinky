const items = [
  {
    id: 1,
    label: "thibautleroy",
    link: "https://github.com/Thibaldo/react-slinky",
  },
  {
    id: 2,
    label: "artists",
    link: [
      {
        id: 21,
        label: "aerosmith",
        link: [
          {
            id: 211,
            label: "get your wings",
            link: [
              { id: 2111, label: "same old song and dance", link: "#" },
              { id: 2112, label: "train kept a-rollin'", link: "#" },
            ],
          },
        ],
      },
      {
        id: 22,
        label: "eagles",
        link: [
          {
            id: 221,
            label: "hotel california",
            link: [
              { id: 2211, label: "hotel california", link: "#" },
              { id: 2212, label: "pretty maids all in a row", link: "#" },
            ],
          },
        ],
      },
      {
        id: 23,
        label: "led zeppelin",
        link: [
          {
            id: 231,
            label: "physical graffiti",
            link: [
              { id: 2311, label: "house of the holy", link: "#" },
              { id: 2312, label: "in my time of dying", link: "#" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 3,
    label: "albums",
    link: [
      {
        id: 31,
        label: "get your wings",
        link: [
          { id: 311, label: "same old song and dance", link: "#" },
          { id: 312, label: "train kept a-rollin'", link: "#" },
        ],
      },
      {
        id: 32,
        label: "hotel california",
        link: [
          { id: 321, label: "hotel california", link: "#" },
          { id: 322, label: "pretty maids all in a row", link: "#" },
        ],
      },
      {
        id: 33,
        label: "physical graffiti",
        link: [
          { id: 331, label: "house of the holy", link: "#" },
          { id: 332, label: "in my time of dying", link: "#" },
        ],
      },
    ],
  },
  {
    id: 4,
    label: "songs",
    link: [
      { id: 41, label: "same old song and dance", link: "#" },
      { id: 42, label: "train kept a-rollin'", link: "#" },
      { id: 43, label: "hotel california", link: "#" },
      { id: 44, label: "pretty maids all in a row", link: "#" },
      { id: 45, label: "house of the holy", link: "#" },
      { id: 46, label: "in my time of dying", link: "#" },
    ],
  },
  {
    id: 5,
    label: "genres",
    link: [
      {
        id: 51,
        label: "rock",
        link: [
          { id: 511, label: "same old song and dance", link: "#" },
          { id: 512, label: "train kept a-rollin'", link: "#" },
          { id: 513, label: "hotel california", link: "#" },
          { id: 514, label: "pretty maids all in a row", link: "#" },
        ],
      },
      {
        id: 52,
        label: "hard rock",
        link: [
          { id: 521, label: "house of the holy", link: "#" },
          { id: 523, label: "in my time of dying", link: "#" },
        ],
      },
    ],
  },
  {
    id: 6,
    label: "settings",
    link: [
      { id: 61, label: "profile", link: "#" },
      {
        id: 62,
        label: "player",
        link: [
          { id: 621, label: "equalizer", link: "#" },
          { id: 622, label: "volume", link: "#" },
        ],
      },
    ],
  },
];

export default items;
