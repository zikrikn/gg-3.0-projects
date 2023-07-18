// mongodb syntax - untuk homowork 3.1

use music_database

songs_field = [
    {
        title: "Shape of You",
        artists: ["Ed Sheeran"],
        album: "รท (Divide)"
    },
    {
        title: "Someone Like You",
        artists: ["Adele"],
        album: "21"
    },
    {
        title: "Bohemian Rhapsody",
        artists: ["Queen"],
        album: "A Night at the Opera"
    },
    {
        title: "Havana",
        artists: ["Camila Cabello"],
        album: "Camila"
    },
    {
        title: "Rolling in the Deep",
        artists: ["Adele"],
        album: "21"
    },
    {
        title: "Believer",
        artists: ["Imagine Dragons"],
        album: "Evolve"
    },
    {
        title: "Thinking Out Loud",
        artists: ["Ed Sheeran"],
        album: "x (Multiply)"
    },
    {
        title: "Hotel California",
        artists: ["Eagles"],
        album: "Hotel California"
    },
    {
        title: "Stairway to Heaven",
        artists: ["Led Zeppelin"],
        album: "Led Zeppelin IV"
    },
    {
        title: "Uptown Funk",
        artists: ["Mark Ronson", "Bruno Mars"],
        album: "Uptown Special"
    }
]

artists_field = [
    {
      name: "Ed Sheeran",
      dateOfBirth: "17 February 1991",
      genres: ["Pop", "R&B"]
    },
    {
      name: "Adele",
      dateOfBirth: "5 May 1988",
      genres: ["Pop", "Soul"]
    },
    {
      name: "Queen",
      dateOfBirth: "1970",
      genres: ["Rock"]
    },
    {
      name: "Camila Cabello",
      dateOfBirth: "3 March 1997",
      genres: ["Pop", "Latin"]
    },
    {
      name: "Imagine Dragons",
      dateOfBirth: "2008",
      genres: ["Rock", "Alternative"]
    },
    {
      name: "Eagles",
      dateOfBirth: "1971",
      genres: ["Rock", "Country"]
    },
    {
      name: "Led Zeppelin",
      dateOfBirth: "1968",
      genres: ["Rock"]
    },
    {
      name: "Mark Ronson",
      dateOfBirth: "4 September 1975",
      genres: ["Pop", "Funk"]
    },
    {
      name: "Bruno Mars",
      dateOfBirth: "8 October 1985",
      genres: ["Pop", "R&B"]
    },
    {
      name: "Taylor Swift",
      dateOfBirth: "13 December 1989",
      genres: ["Pop", "Country"]
    }
  ]

popular_songs_field = [
    {
      title: "Shape of You",
      playCount: 5000,
      period: "2021-2022"
    },
    {
      title: "Someone Like You",
      playCount: 3500,
      period: "2020-2021"
    },
    {
      title: "Bohemian Rhapsody",
      playCount: 4500,
      period: "2019-2020"
    },
    {
      title: "Havana",
      playCount: 4000,
      period: "2021-2022"
    },
    {
      title: "Rolling in the Deep",
      playCount: 3000,
      period: "2018-2019"
    },
    {
      title: "Believer",
      playCount: 3800,
      period: "2019-2020"
    },
    {
      title: "Thinking Out Loud",
      playCount: 3200,
      period: "2017-2018"
    },
    {
      title: "Hotel California",
      playCount: 4200,
      period: "2016-2017"
    },
    {
      title: "Stairway to Heaven",
      playCount: 3700,
      period: "2015-2016"
    },
    {
      title: "Uptown Funk",
      playCount: 3900,
      period: "2014-2015"
    }
  ]

db.songs.insertMany(songs_field);
db.artists.insertMany(artists_field);
db.popular_songs.insertMany(popular_songs_field);
