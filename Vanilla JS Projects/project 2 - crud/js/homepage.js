// Loading of movies

let movies = [
  {
    id:1,
    title: "Anand",
    year: "1971",
    genres: ["Drama"],
    ratings: [
      
    ],
    poster:
      "MV5BMjE0Mzk3OTk2NF5BMl5BanBnXkFtZTgwMTQ1NDk5NTE@._V1_SY250_CR0,0,187,250_AL_.jpg",
    contentRating: "",
    duration: "PT122M",
    releaseDate: "1971-03-12",
    averageRating: 0,
    originalTitle: "",
    storyline:
      "A melodramatic tale of a man with a terminal disease. The story begins with Dr Bhaksar winning a literary prize for his book about a patient called Anand. The rest is flashback. Anand, the title character, is suffering from lymphosarcoma of the intestine. He, however appears to be cheerful on the outside and is determined to extract as much pleasure from his remaining lifespan as is possible. Dr. Bhaskar his physician tends to Anand in his last days. After Anand dies we can however still hear his voice which was recorded on a tape. Dr Bhakser writes a book on his patient and wins a literary prize for it                Written by\nAnonymous",
    actors: ["Rajesh Khanna", "Amitabh Bachchan", "Sumita Sanyal"],
    imdbRating: 8.9,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjE0Mzk3OTk2NF5BMl5BanBnXkFtZTgwMTQ1NDk5NTE@._V1_SY250_CR0,0,187,250_AL_.jpg",
  },
  {
    id:2,
    title: "Dangal",
    year: "2016",
    genres: ["Action", "Biography", "Drama"],
    ratings: [
      
    ],
    poster:
      "MV5BMTQ4MzQzMzM2Nl5BMl5BanBnXkFtZTgwMTQ1NzU3MDI@._V1_SY500_CR0,0,356,500_AL_.jpg",
    contentRating: "",
    duration: "PT161M",
    releaseDate: "2016-12-23",
    averageRating: 0,
    originalTitle: "",
    storyline:
      "Biopic of Mahavir Singh Phogat, who taught wrestling to his daughters Babita Kumari and Geeta Phogat. Geeta Phogat was India's first female wrestler to win at the 2010 Commonwealth Games, where she won the gold medal (55 kg) while her sister Babita Kumari won the silver (52 kg).                Written by\nDibyayan_Chakravorty",
    actors: ["Aamir Khan", "Sakshi Tanwar", "Fatima Sana Shaikh"],
    imdbRating: 8.9,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ4MzQzMzM2Nl5BMl5BanBnXkFtZTgwMTQ1NzU3MDI@._V1_SY500_CR0,0,356,500_AL_.jpg",
  },
  {
    id:3,
    title: "Drishyam",
    year: "2013",
    genres: ["Crime", "Drama", "Thriller"],
    ratings: [
     
    ],
    poster:
      "MV5BYmY3MzYwMGUtOWMxYS00OGVhLWFjNmUtYzlkNGVmY2ZkMjA3XkEyXkFqcGdeQXVyMTExNDQ2MTI@._V1_SX330_CR0,0,330,432_AL_.jpg",
    contentRating: "",
    duration: "PT160M",
    releaseDate: "2013-12-19",
    averageRating: 0,
    originalTitle: "",
    storyline:
      "Georgekutty (Mohanlal) is a cable TV network owner in a remote and hilly village in Kerala. He lives a happy life with his wife and 2 girls. The first half revolves around the depiction of their happy family. Anju (Ansiba), Georgekutty's daughter goes to a school trip in between the proceedings. After a few days a guy who had been at the school trip with her meets Anju. He blackmails her with a video of her that he had captured during the school trip. In the course of events he is accidentally killed by Rani (Meena) and Anju. Georgekutty on returning home is appraised of the events and thus begins a cat and mouse game as the murdered person is the son of IG Geeta Prabhakar (Asha Sharath) and Prabhakar (Siddique). How the family weathers the storm that ensues during the murder investigation forms the rest of the story leading to a deeply satisfying and unexpected climax.                Written by\nAthul",
    actors: ["Mohanlal", "Meena", "Ansiba"],
    imdbRating: 8.9,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BYmY3MzYwMGUtOWMxYS00OGVhLWFjNmUtYzlkNGVmY2ZkMjA3XkEyXkFqcGdeQXVyMTExNDQ2MTI@._V1_SX330_CR0,0,330,432_AL_.jpg",
  },
  {
    id:4,
    title: "Nayakan",
    year: "1987",
    genres: ["Crime", "Drama"],
    ratings: [
      
    ],
    poster:
      "MV5BNTI2Zjc5ODMtNGE0NC00YjU5LTk0NjktZjU4ZDRlZDFkZWU0XkEyXkFqcGdeQXVyNjc5Mjg4Nzc@._V1_SY480_SX320_AL_.jpg",
    contentRating: "",
    duration: "PT145M",
    releaseDate: "1987-07-31",
    averageRating: 0,
    originalTitle: "",
    storyline:
      "A small boy (Ratnavelu) from Tamilnadu sees his father, a labor leader, killed in cold blood by a policeman. He kills the policeman and runs away to the city of Bombay. From there, the story traces his ascent to become a mafia chief (Velu Naicker).                Written by\nSathyanarayanan Narayanaswamy <sathya@ntd.comsat.com>",
    actors: ["Kamal Haasan", "Saranya Ponvannan", "Delhi Ganesh"],
    imdbRating: 8.9,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNTI2Zjc5ODMtNGE0NC00YjU5LTk0NjktZjU4ZDRlZDFkZWU0XkEyXkFqcGdeQXVyNjc5Mjg4Nzc@._V1_SY480_SX320_AL_.jpg",
  },
  {
    id:5,
    title: "Anbe Sivam",
    year: "2003",
    genres: ["Adventure", "Comedy", "Drama"],
    ratings: [
     
    ],
    poster:
      "MV5BNWQxY2MyNmUtOTkxZC00MmQ3LWFkMjMtNWU3YmFlZDM5YTBhXkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_SX352_CR0,0,352,499_AL_.jpg",
    contentRating: "",
    duration: "PT160M",
    releaseDate: "2003-01-14",
    averageRating: 0,
    originalTitle: "",
    storyline:
      "Nallasivam (Kamal Haasan) and Anbarasu (Madhavan) are drawn together by the strings of fate after they come into contact at the Bhuvaneshwar airport. Anbarasu is an advertisement director, while Nallasivam is a trade unionist. Fate entwines their travel plans, and they end up travelling to Chennai together. In the course of their journey, Anbarasu, born with a golden spoon, is touched by the realities of the sufferings of a normal human being when he witnesses the dead and the injured during a train accident, and he volunteers to donate his blood, which is of a very rare group, despite his fear of blood. The flashback of Nallasivam is recounted during one of their journeys. Nallasivam is a communist trade unionist, who fights for higher wages for his comrades. By chance, he falls in love with the daughter Bala (Kiran) of a rich industrialist, Bala's father, Padaiyacchi (Nasser). Due to the opposition, they plan to elope and get married, but unfortunately, Nallasivam meets with an ...                Written by\nNiranjan Venkatraman <v.niranjan@ieee.org>",
    actors: ["Kamal Haasan", "Madhavan", "Kiran Rathod"],
    imdbRating: 8.9,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNWQxY2MyNmUtOTkxZC00MmQ3LWFkMjMtNWU3YmFlZDM5YTBhXkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_SX352_CR0,0,352,499_AL_.jpg",
  },
  {
    id:6,
    title: "Gol Maal",
    year: "1979",
    genres: ["Comedy", "Romance"],
    ratings: [
      
    ],
    poster:
      "MV5BMjA4OTczODgxNF5BMl5BanBnXkFtZTgwMDAzMTU2NDE@._V1_SY250_CR0,0,187,250_AL_.jpg",
    contentRating: "",
    duration: "PT144M",
    releaseDate: "1979-04-20",
    averageRating: 0,
    originalTitle: "",
    storyline:
      "Ramprasad is a recent college graduate who finds a job with a finicky man, Bhavani Shankar, who believes that a man without a mustache is a man without a character. Bhavani Shankar is also against any of his employees indulging in recreation of any kind. When Ramprasad is caught by his boss at a soccer match, he has to invent a twin brother, the clean-shaven Laxman Prasad, to save his job. When Bhavani's daughter falls in love with the clean-shaven Laxman Prasad, and insists on marrying him, and Bhavani insists she should marry Ramprasad, things take a whacky turn. A fake mother and a hilarious chase are other enjoyable features involved in this comedy.                Written by\nVijay",
    actors: ["Amol Palekar", "Bindiya Goswami", "Deven Verma"],
    imdbRating: 8.7,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA4OTczODgxNF5BMl5BanBnXkFtZTgwMDAzMTU2NDE@._V1_SY250_CR0,0,187,250_AL_.jpg",
  },
  {
    id:7,
    title: "Black Friday",
    year: "2004",
    genres: ["Crime", "Drama", "Thriller"],
    ratings: [
      
    ],
    poster:
      "MV5BMmU1NDhjYTQtYjQxYy00MjlmLWIxMjItMjllMmE2NDRlY2ZhXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SY500_SX400_AL_.jpg",
    contentRating: "",
    duration: "PT143M",
    releaseDate: "2007-02-09",
    averageRating: 0,
    originalTitle: "",
    storyline:
      "A dramatic presentation of the bomb blasts that rocked Bombay on March 12, 1993, displays the police investigation, amidst allegations of human rights violations, led by DCP Rakesh Maria, in tracking down the suspects, especially Bashir Khan. Bashir managed to elude authorities by re-locating to Rajasthan, Uttar Pradesh, Delhi, and West Bengal, after finally being apprehended in Bombay. His confession and subsequent flashbacks showcases the apathy shown by authorities who refused to intervene during the destruction of the sacred Babri Masjid by Hindu Kar Sevaks, and the inability of the police to fulfill their mandate and protect the vulnerable, forcing many to flee to other locations. The subsequent aftermath that succeeded in irreversibly polarizing communities in Bombay; Pakistan's involvement in training and arms' supplies; the main alleged suspects, Dawood Ibrahim, and Mushtaq Memon, sought refuge in Dubai, United Arab Emirates, while Indian politicians made a cosmetic move to ...                Written by\nrAjOo (gunwanti@hotmail.com)",
    actors: ["Kay Kay Menon", "Pavan Malhotra", "Aditya Srivastava"],
    imdbRating: 8.6,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMmU1NDhjYTQtYjQxYy00MjlmLWIxMjItMjllMmE2NDRlY2ZhXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SY500_SX400_AL_.jpg",
  },
  {
    id:8,
    title: "Taare Zameen Par",
    year: "2007",
    genres: ["Drama", "Family", "Music"],
    ratings: [
      
    ],
    poster:
      "MV5BNTVmYTk2NjAtYzY3MS00YjFjLTlkYzktYzg3YzMyZDQyOWRiXkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_SY500_CR0,0,346,500_AL_.jpg",
    contentRating: "PG",
    duration: "PT165M",
    releaseDate: "2008-12-26",
    averageRating: 0,
    originalTitle: "",
    storyline:
      "Ishaan Awasthi is an eight-year-old whose world is filled with wonders that no one else seems to appreciate; colours, fish, dogs and kites are just not important in the world of adults, who are much more interested in things like homework, marks and neatness. And Ishaan just cannot seem to get anything right in class. When he gets into far more trouble than his parents can handle, he is packed off to a boarding school to 'be disciplined'. Things are no different at his new school, and Ishaan has to contend with the added trauma of separation from his family. One day a new art teacher bursts onto the scene, Ram Shankar Nikumbh, who infects the students with joy and optimism. He breaks all the rules of 'how things are done' by asking them to think, dream and imagine, and all the children respond with enthusiasm, all except Ishaan. Nikumbh soon realizes that Ishaan is very unhappy, and he sets out to discover why. With time, patience and care, he ultimately helps Ishaan find himself.                Written by\nAnonymous",
    actors: ["Darsheel Safary", "Aamir Khan", "Tanay Chheda"],
    imdbRating: 8.5,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNTVmYTk2NjAtYzY3MS00YjFjLTlkYzktYzg3YzMyZDQyOWRiXkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_SY500_CR0,0,346,500_AL_.jpg",
  },
  {
    id:9,
    title: "Jaane Bhi Do Yaaro",
    year: "1983",
    genres: ["Comedy", "Drama"],
    ratings: [
      
    ],
    poster:
      "MV5BNzQ0MzA3NDY3Nl5BMl5BanBnXkFtZTcwOTAwMzIzMg@@._V1_SY235_CR0,0,177,235_AL_.jpg",
    contentRating: "",
    duration: "PT132M",
    releaseDate: "1983-08-12",
    averageRating: 0,
    originalTitle: "",
    storyline:
      "Vinod (Naseeruddin Shah) and Sudhir (Ravi Baswani) are two professional photographers trying to start a photo studio. The first real assignment that they get, from the activist magazine Khabardar (literally meaning beware), draws them into the shady world of Bombay real estate. They discover that one of the biggest builders in Bombay, Tarneja, is trying to bribe Municipal Commissioner D'Mello (Satish Shah) into giving him a bridge contract. Meanwhile D'Mello is negotiating with Tarneja's arch rival Ahuja (Om Puri). The contract is finally awarded to a third person. By chance Vinod and Sudhir find out that Tarneja has murdered D'Mello...                Written by\n<bagchi@jhu.edu>",
    actors: ["Naseeruddin Shah", "Ravi Baswani", "Bhakti Barve"],
    imdbRating: 8.6,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNzQ0MzA3NDY3Nl5BMl5BanBnXkFtZTcwOTAwMzIzMg@@._V1_SY235_CR0,0,177,235_AL_.jpg",
  },
  {
    id:10,
    title: "3 Idiots",
    year: "2009",
    genres: ["Comedy", "Drama"],
    ratings: [
      
    ],
    poster:
      "MV5BZWRlNDdkNzItMzhlZC00YTdmLWIwNjktYjY5NjQ1ZmQ3N2FkXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_CR0,0,373,500_AL_.jpg",
    contentRating: "11",
    duration: "PT170M",
    releaseDate: "2009-12-25",
    averageRating: 0,
    originalTitle: "",
    storyline:
      "Farhan Qureshi and Raju Rastogi want to re-unite with their fellow collegian, Rancho, after faking a stroke aboard an Air India plane, and excusing himself from his wife - trouser less - respectively. Enroute, they encounter another student, Chatur Ramalingam, now a successful businessman, who reminds them of a bet they had undertaken 10 years ago. The trio, while recollecting hilarious antics, including their run-ins with the Dean of Delhi's Imperial College of Engineering, Viru Sahastrabudhe, race to locate Rancho, at his last known address - little knowing the secret that was kept from them all this time.                Written by\nrAjOo (gunwanti@hotmail.com)",
    actors: ["Aamir Khan", "Madhavan", "Mona Singh"],
    imdbRating: 8.4,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BZWRlNDdkNzItMzhlZC00YTdmLWIwNjktYjY5NjQ1ZmQ3N2FkXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY500_CR0,0,373,500_AL_.jpg",
  },
  {
    id:11,
    title: "Chupke Chupke",
    year: "1975",
    genres: ["Comedy", "Drama", "Romance"],
    ratings: [
      
    ],
    poster:
      "MV5BMjAzMjMzMzU2N15BMl5BanBnXkFtZTgwMDkxOTE3NDE@._V1_SY250_CR0,0,187,250_AL_.jpg",
    contentRating: "",
    duration: "PT127M",
    releaseDate: "1975-04-11",
    averageRating: 0,
    originalTitle: "",
    storyline:
      'Raghav brags that he can smell a rat or an impersonator automatically, and Dr. Parimal Tripathi decides to take him on - result: funny family slapstick comedy, with a dose of pure Hindi and Urdu thrown in, especially the dialogue delivery by Om Prakash, Dharmendra, and Amitabh Bachchan. Notable songs are :Sare ga ma, ma sa re ga ma...."; "Ab ke sajan sawan me, aag lagegi badan mein, ghata barshegi, magar tarsegi nazar, mil na sakenghe do mahn ek hi aagan mein..."; "Chupke chupke chal di purvaiya, basuri bajaike raas rachaye daiya re daiya, chupke...".                Written by\nrAjOo (gunwanti@hotmail.com)',
    actors: ["Dharmendra", "Sharmila Tagore", "Amitabh Bachchan"],
    imdbRating: 8.5,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjAzMjMzMzU2N15BMl5BanBnXkFtZTgwMDkxOTE3NDE@._V1_SY250_CR0,0,187,250_AL_.jpg",
  },
  {
    id:12,
    title: "Pather Panchali",
    year: "1955",
    genres: ["Drama"],
    ratings: [
      
    ],
    poster:
      "MV5BMjA0Njg1OTg0Nl5BMl5BanBnXkFtZTgwNzQ2MzkwNzE@._V1_SY250_CR0,0,178,250_AL_.jpg",
    contentRating: "",
    duration: "PT125M",
    releaseDate: "1955-08-26",
    averageRating: 0,
    originalTitle: "",
    storyline:
      "The story of a young boy, Apu, and life in his small Indian village. His parents are quite poor - his father Harihar, a writer and poet, gave away the family's fruit orchard to settle his brother's debts. His sister Durga and an old aunt also still lives with them. His mother Sarbojaya bears the brunt of the family's situation. She scrapes by and sells her personal possessions to put food on the table and has to bear the taunts of her neighbors as Durga is always stealing fruit from their orchard. Things get worse when Harihar disappears for five months and Durga falls ill. Even after Harihar returns, the family is left with few alternatives.                Written by\ngarykmcd",
    actors: ["Kanu Bannerjee", "Karuna Bannerjee", "Subir Banerjee"],
    imdbRating: 8.4,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA0Njg1OTg0Nl5BMl5BanBnXkFtZTgwNzQ2MzkwNzE@._V1_SY250_CR0,0,178,250_AL_.jpg",
  },
  {
    id:13,
    title: "A Wednesday",
    year: "2008",
    genres: ["Crime", "Drama", "Mystery"],
    ratings: [
      
    ],
    poster:
      "MV5BMTAzODEzMjE1MTJeQTJeQWpwZ15BbWU3MDE3NjQ5Mzk@._V1_SY492_SX324_AL_.jpg",
    contentRating: "",
    duration: "PT104M",
    releaseDate: "2008-09-05",
    averageRating: 0,
    originalTitle: "",
    storyline:
      "A man calls up the Mumbai police, and tells them he has placed five different bombs in the city -- all set to go off in some time. He wants four terrorists in exchange. Does he get them? Who is behind it all? What's his motive? Is there more than meets the eye?                Written by\nSaurabh Roy",
    actors: ["Anupam Kher", "Naseeruddin Shah", "Jimmy Shergill"],
    imdbRating: 8.4,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTAzODEzMjE1MTJeQTJeQWpwZ15BbWU3MDE3NjQ5Mzk@._V1_SY492_SX324_AL_.jpg",
  },
  {
    id:14,
    title: "Andaz Apna Apna",
    year: "1994",
    genres: ["Comedy", "Family", "Romance"],
    ratings: [
      
    ],
    poster:
      "MV5BNWE2MjhjMmMtNzQyMS00MmI0LTlkOTUtZDVlZjFlNmZkNDgyL2ltYWdlXkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_SY462_CR0,0,331,462_AL_.jpg",
    contentRating: "",
    duration: "PT160M",
    releaseDate: "1994-11-04",
    averageRating: 0,
    originalTitle: "",
    storyline:
      "Amar and Prem are two rivals who belonging to middle-class families with no scope of future advancement. Both individually, without the knowledge of the other decide to take matters into their hands and find ways to get rich quickly. Chaos and acrimony result when both find each other at loggerheads when both arrive to win the hand of the daughter of multi-millionaire Ram Gopal Bajaj amidst considerable upheavals when Shyam, the twin brother of Ram, decides to do away with Ram and assume his identity and thus take over the estate of the Bajaj family.                Written by\nSonia",
    actors: ["Aamir Khan", "Salman Khan", "Raveena Tandon"],
    imdbRating: 8.4,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNWE2MjhjMmMtNzQyMS00MmI0LTlkOTUtZDVlZjFlNmZkNDgyL2ltYWdlXkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_SY462_CR0,0,331,462_AL_.jpg",
  },
  {
    id:15,
    title: "Hera Pheri",
    year: "2000",
    genres: ["Comedy", "Crime", "Thriller"],
    ratings: [
      
    ],
    poster:
      "MV5BZTYwNDdmNmEtOGZhYS00MjRiLWIzOWUtNDQxNzg4ZTVjMGE1XkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_SY500_SX350_AL_.jpg",
    contentRating: "",
    duration: "PT156M",
    releaseDate: "2000-03-31",
    averageRating: 0,
    originalTitle: "",
    storyline:
      "Baburao is a landlord in India, who is very near-sighted, and always in financial trouble. He has a tenant named Raja, who has not paid his rent for several months. He also has anther tenant named Shyam, who has come to the city to look for a job in his late father's place, but is unable to find employment. The three men quarrel amongst themselves frequently. Then one day, the three men get a phone call from a kidnapper named Kabira, and decide to make use of this phone call to overcome their financial problems - pretend to be the real kidnappers, increase the ransom amount, keep the incremental amount for themselves, and then give the original ransom demanded to Kabira. Will they get away with this idea?                Written by\nTanya",
    actors: ["Akshay Kumar", "Paresh Rawal", "Sunil Shetty"],
    imdbRating: 8.4,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BZTYwNDdmNmEtOGZhYS00MjRiLWIzOWUtNDQxNzg4ZTVjMGE1XkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_SY500_SX350_AL_.jpg",
  },
  {
    id:16,
    title: "Drishyam",
    year: "2015",
    genres: ["Crime", "Drama", "Mystery"],
    ratings: [
      
    ],
    poster:
      "MV5BMTYyMjgyNDY3N15BMl5BanBnXkFtZTgwOTMzNTE5NTE@._V1_SY500_CR0,0,346,500_AL_.jpg",
    contentRating: "",
    duration: "PT163M",
    releaseDate: "2015-07-31",
    averageRating: 0,
    originalTitle: "",
    storyline:
      "Vijay Salgaonkar runs a cable TV network in a remote and hilly village of Goa. He lives a happy life with his wife Nandini and two daughters. A 4th grade dropout & an orphan, Vijay has worked his way towards success with his sheer hard-work & street smartness in order to provide for his family who mean the world to him. A man of few means & needs; Vijay believes life is to be lived simplistically - his wife, while she loves him devoutly, wants Vijay's thrifty & miserly behavior to end and wants the world for her family. If there's one thing that Vijay cannot live without, it is his passion for watching films. Such is his 'filmy' obsession that he doesn't mind staying up all night at his office binging on TV movies! In a bizarre turn of events; a teenage boy goes missing; he is the son of a headstrong & no-nonsense cop; IG Meera Deshmukh and the Salgaonkar family is the prime suspect! Will a humble & middle class man, be able to protect his family from oppression of the powerful? How ...                Written by\nDhruvi Dokania",
    actors: ["Ajay Devgn", "Shriya Saran", "Tabu"],
    imdbRating: 8.5,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYyMjgyNDY3N15BMl5BanBnXkFtZTgwOTMzNTE5NTE@._V1_SY500_CR0,0,346,500_AL_.jpg",
  },
  {
    id:17,
    title: "Sholay",
    year: "1975",
    genres: ["Action", "Adventure", "Comedy"],
    ratings: [
      
    ],
    poster:
      "MV5BOWQ0YTUzYzItYjI0MC00OTZmLWE1MWQtY2EzMzU2MTlmMmJjXkEyXkFqcGdeQXVyMDkwNTkwNg@@._V1_SY383_CR0,0,292,383_AL_.jpg",
    contentRating: "",
    duration: "PT198M",
    releaseDate: "1975-08-15",
    averageRating: 0,
    originalTitle: "",
    storyline:
      "Sholay means embers in Hindi. In this particular movie, a Police Officer, who's family was killed by a bandit named Gabbar Singh, decides to fight fire with fire and recruits two convicts, Jai and Veeru to capture Gabbar. He approaches them in jail, puts the proposal in front of them, and they agree to bring in Gabbar Singh alive - for a hefty price. After their discharge from jail, they travel by train to the village where the Police Officer lives - now with only his widowed daughter-in-law. The three band together to fight one of the most elusive and dreaded bandits of all time. Will the two ex-cons be able to bring Gabbar alive to the Police Officer?                Written by\nCalista",
    actors: ["Dharmendra", "Sanjeev Kumar", "Hema Malini"],
    imdbRating: 8.4,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BOWQ0YTUzYzItYjI0MC00OTZmLWE1MWQtY2EzMzU2MTlmMmJjXkEyXkFqcGdeQXVyMDkwNTkwNg@@._V1_SY383_CR0,0,292,383_AL_.jpg",
  },
  {
    id:18,
    title: "Khosla Ka Ghosla!",
    year: "2006",
    genres: ["Comedy", "Crime", "Drama"],
    ratings: [
      
    ],
    poster:
      "MV5BZTg2YWFkOGMtYWExMy00YmFiLTk2YjctNTAzZDk5MjdhMzdlXkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_SX262_CR0,0,262,377_AL_.jpg",
    contentRating: "",
    duration: "PT135M",
    releaseDate: "2006-09-22",
    averageRating: 0,
    originalTitle: "",
    storyline:
      "K.K. Khosla (Anupam Kher) is a middle class man living in New Delhi. He is a simple man with simple tastes. The plot starts with a scene where Khosla dreams about his death. The irony is that nobody cares about his death; instead his children & neighbours are more interested in their materialistic needs. One early morning in Delhi, Khosla wakes up and plans to go to the site where he has purchased a plot to build his house. He is accompanied by his wife, eldest son Bunty (Ranvir Shorey), second son Chironji Lal Khosla (Parvin Dabas), and his daughter. When they reach the spot they find that the site has been occupied by someone else and on further investigation find that it has been captured by a property usurping nexus headed by a man named Kishan Khurana (Boman Irani). Khurana demands Rs. 15 lakhs to vacate the plot, which Khosla refuses to give. Bunty gathers few local strongmen and forcefully destroys the walls and re-occupies the plot. But Khurana has the police on his side and ...                Written by\ngavin@sunny_deol2009@yahoo.com",
    actors: ["Anupam Kher", "Boman Irani", "Parvin Dabas"],
    imdbRating: 8.4,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BZTg2YWFkOGMtYWExMy00YmFiLTk2YjctNTAzZDk5MjdhMzdlXkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_SX262_CR0,0,262,377_AL_.jpg",
  },
  {
    id:19,
    title: "Rang De Basanti",
    year: "2006",
    genres: ["Comedy", "Drama", "History"],
    ratings: [
      
    ],
    poster:
      "MV5BMjEwNzA5MjAwN15BMl5BanBnXkFtZTcwMzY5MzIzMQ@@._V1_SY250_SX175_AL_.jpg",
    contentRating: "",
    duration: "PT157M",
    releaseDate: "2006-01-26",
    averageRating: 0,
    originalTitle: "",
    storyline:
      "A young idealistic English filmmaker, Sue, arrives in India to make a film on Indian revolutionaries Bhagat Singh, Chandrashekhar Azad and their contemporaries and their fight for freedom from the British Raj. Owing to a lack of funds, she recruits students from Delhi University to act in her docu-drama. She finds DJ, who graduated five years ago but still wants to be a part of the University because he doesn't think there's too much out there in the real world to look forward to. Karan, the son of Industrialist Rajnath Singhania, who shares an uncomfortable relationship with his father, but continues to live off him, albeit very grudgingly. Aslam, is a middle class Muslim boy, who lives in the by-lanes near Jama Masjid, poet, philosopher and guide to his friends. Sukhi, the group's baby, innocent, vulnerable and with a weakness for only one thing - girls. Laxman Pandey, the fundamentalist in the group, the only one who still believes that politics can make the world a better place ...                Written by\nfish_wow6",
    actors: ["Aamir Khan", "Soha Ali Khan", "Siddharth"],
    imdbRating: 8.3,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjEwNzA5MjAwN15BMl5BanBnXkFtZTcwMzY5MzIzMQ@@._V1_SY250_SX175_AL_.jpg",
  },
  {
    id:20,
    title: "Munna Bhai M.B.B.S.",
    year: "2003",
    genres: ["Comedy", "Drama", "Romance"],
    ratings: [
     
    ],
    poster:
      "MV5BY2JlMGI1YWQtYjBhMi00NTJiLTgxMzUtMGU4NThlZTAyYmMxXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SY500_CR0,0,333,500_AL_.jpg",
    contentRating: "",
    duration: "PT156M",
    releaseDate: "2003-12-19",
    averageRating: 0,
    originalTitle: "",
    storyline:
      "In India gangsters are called Bhai (brothers). One such Bhai is Munna, who is feared by everyone in Mumbai, a big city in India. He cons his village-based parents into believing that he is a doctor. He gets a shock when he finds out that they are coming to verify for themselves. So he transforms a rooming shanty house into a makeshift hospital, populated by patients, people he beats up. His parents arrive, are pleased, and happy that their son is well settled. They would like him to get married to a doctor's daughter. The marriage is arranged, but before the engagement, the bride's father finds out the truth about Munna, and cancels the marriage. Munna's humiliated parents see the truth for themselves, and hurt, they return home, leaving Munna with a strong desire to hurt the doctor - and force him to let his daughter get married to him - even if it means getting admitted in the medical college - with forged documents!!!                Written by\nSumitra (corrected by Carrie)",
    actors: ["Sunil Dutt", "Sanjay Dutt", "Arshad Warsi"],
    imdbRating: 8.3,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BY2JlMGI1YWQtYjBhMi00NTJiLTgxMzUtMGU4NThlZTAyYmMxXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SY500_CR0,0,333,500_AL_.jpg",
  },
  {
    id:21,
    title: "Thani Oruvan",
    year: "2015",
    genres: ["Action", "Crime", "Thriller"],
    ratings: [

    ],
    poster:
      "MV5BNzgxMDc2Mjg3M15BMl5BanBnXkFtZTgwMzU4NTkxNzE@._V1_SY250_CR0,0,187,250_AL_.jpg",
    contentRating: "",
    duration: "PT160M",
    releaseDate: "2015-08-28",
    averageRating: 0,
    originalTitle: "",
    storyline:
      "Thoroughly frustrated with Industrialists and Politicians ruining the nation by denying the availability of cheap medicines, IPS officer Mithran is on a self-conceived quest to find the head of this medicine-mafia to channel all his anger towards him. But the ultimate villain, Siddharth Abhimanyu, who is also a decorated Scientist proves to be a ruthless and indomitable adversary.                Written by\nPipingHotViews",
    actors: ["Jeyam Ravi", "Arvind Swamy", "Nayanthara"],
    imdbRating: 8.6,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNzgxMDc2Mjg3M15BMl5BanBnXkFtZTgwMzU4NTkxNzE@._V1_SY250_CR0,0,187,250_AL_.jpg",
  },
  {
    id:22,
    title: "Talvar",
    year: "2015",
    genres: ["Biography", "Crime", "Drama"],
    ratings: [
      
    ],
    poster:
      "MV5BMTYzODg0Mjc4M15BMl5BanBnXkFtZTgwNzY4Mzc3NjE@._V1_SX369_CR0,0,369,499_AL_.jpg",
    contentRating: "",
    duration: "PT132M",
    releaseDate: "2015-10-02",
    averageRating: 0,
    originalTitle: "",
    storyline:
      "The story revolves around the mysterious murder cases of a 14-year girl, Shruti and the domestic help, Khempal who worked at her place. The film is based on the real life Noida Double Murder Case of 2008, where the parents were said to be the prime suspects of the murders. The film showcases three perspectives to the case which emerge as the investigation moves forward.",
    actors: ["Irrfan Khan", "Konkona Sen Sharma", "Neeraj Kabi"],
    imdbRating: 8.3,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYzODg0Mjc4M15BMl5BanBnXkFtZTgwNzY4Mzc3NjE@._V1_SX369_CR0,0,369,499_AL_.jpg",
  },
  {
    id:23,
    title: "Paan Singh Tomar",
    year: "2012",
    genres: ["Action", "Biography", "Crime"],
    ratings: [
      
    ],
    poster:
      "MV5BNTgwODM5OTMzN15BMl5BanBnXkFtZTcwMTA3NzI1Nw@@._V1_SY500_CR0,0,346,500_AL_.jpg",
    contentRating: "",
    duration: "PT135M",
    releaseDate: "2012-03-02",
    averageRating: 0,
    originalTitle: "",
    storyline:
      "Paan Singh Tomar is a Hindi-language film, based on the true story of a runner employed by the Army and has won Gold medal at Indian National Games but forced to become notorious baaghi. It is directed by Tigmanshu Dhulia.                Written by\nAnonymous",
    actors: ["Irrfan Khan", "Ravi Bhushan Bhartiya", "Mahie Gill"],
    imdbRating: 8.3,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNTgwODM5OTMzN15BMl5BanBnXkFtZTcwMTA3NzI1Nw@@._V1_SY500_CR0,0,346,500_AL_.jpg",
  },
  {
    id:24,
    title: "Queen",
    year: "2013",
    genres: ["Adventure", "Comedy", "Drama"],
    ratings: [
     
    ],
    poster:
      "MV5BMTQ1ODUxMzA1Nl5BMl5BanBnXkFtZTgwNDk0NjMyMTE@._V1_SX300_CR0,0,300,433_AL_.jpg",
    contentRating: "",
    duration: "PT146M",
    releaseDate: "2014-03-07",
    averageRating: 0,
    originalTitle: "",
    storyline:
      "Queen is a movie about growing up. Rani (Kangana Ranaut) is a Delhi girl from a conservative family who is ditched by her fianc\u00e9 just before her wedding. Shocked by this, she decides to set out on the planned honeymoon alone. As she travels the world and meets new people, she gains new experiences and discovers her own identity.                Written by\nAm. P.",
    actors: ["Kangana Ranaut", "Rajkummar Rao", "Lisa Haydon"],
    imdbRating: 8.3,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ1ODUxMzA1Nl5BMl5BanBnXkFtZTgwNDk0NjMyMTE@._V1_SX300_CR0,0,300,433_AL_.jpg",
  },
  {
    id:25,
    title: "Pink",
    year: "2016",
    genres: ["Drama", "Thriller"],
    ratings: [
      
    ],
    poster:
      "MV5BNGI1MTI1YTQtY2QwYi00YzUzLTg3NWYtNzExZDlhOTZmZWU0XkEyXkFqcGdeQXVyMDkwNTkwNg@@._V1_SY480_SX360_AL_.jpg",
    contentRating: "",
    duration: "PT136M",
    releaseDate: "2016-09-16",
    averageRating: 0,
    originalTitle: "",
    storyline:
      "Deepak is a lawyer suffering from bipolar disorder who experiences frequent mood swings. One night, Rajveer and his friends get drunk and try to molest Miss Arora and her two roommates leading to an accident. The film revolves around how Deepak fights the girls' case against these influential boys.                Written by\nVarunish Garg",
    actors: ["Tapsee Pannu", "Kirti Kulhari", "Andrea Tariang"],
    imdbRating: 8.4,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNGI1MTI1YTQtY2QwYi00YzUzLTg3NWYtNzExZDlhOTZmZWU0XkEyXkFqcGdeQXVyMDkwNTkwNg@@._V1_SY480_SX360_AL_.jpg",
  },
  {
    id:26,
    title: "Black",
    year: "2005",
    genres: ["Drama"],
    ratings: [
      
    ],
    poster:
      "MV5BNTI5MmE5M2UtZjIzYS00M2JjLWIwNDItYTY2ZWNiODBmYTBiXkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_SY325_CR0,0,224,325_AL_.jpg",
    contentRating: "",
    duration: "PT122M",
    releaseDate: "2005-02-04",
    averageRating: 0,
    originalTitle: "",
    storyline:
      "Based in Simla, the McNallys are an Anglo-Indian family consisting of Paul and his wife, Catherine. Both are full of joy when Catherine gives birth to a baby girl, Michelle, but their joy is short-lived when they are told that Michellle cannot see nor hear. Both attempt to bring up Michelle in their own protective way, as a result Michelle is not exposed to the real world, and becomes increasingly violent and volatile. Things only get worse when Catherine gives birth to Sara, and Paul considers admitting Michelle in an asylum. It is here that Debraj Sahai enters their lives. Through his eager involvement, Michelle blossoms, grows, gives up her violence, even gets admitted in school with normal children. The years pass by, Michelle does not succeed in getting her graduation, and it is time for Debraj to bid adieu as he is having his own health problems. 12 years later, at the age of 40, Michelle does succeed in graduating in Arts, and it is shortly thereafter she will be re-united with...                Written by\nrAjOo (gunwanti@hotmail.com)",
    actors: ["Amitabh Bachchan", "Rani Mukerji", "Shernaz Patel"],
    imdbRating: 8.3,
    posterurl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNTI5MmE5M2UtZjIzYS00M2JjLWIwNDItYTY2ZWNiODBmYTBiXkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_SY325_CR0,0,224,325_AL_.jpg",
  },
];

if (localStorage.getItem("movies") !== null) {
  movies = JSON.parse(localStorage.getItem("movies"));
} else {
  localStorage.setItem("movies", JSON.stringify(movies));
}

// To display movies list

function displayMovies(arr) {
  document.getElementById("movies_container").innerHTML = "";

  arr.forEach(function (movie, index) {
    let movie_card = document.createElement("div");
    movie_card.classList.add("movie_card");

    // Movie Poster
    let movie_poster = document.createElement("div");
    movie_poster.classList.add("movie_poster");
    let poster_img = document.createElement("img");
    poster_img.setAttribute("src", movie.posterurl);
    movie_poster.appendChild(poster_img);

    let movie_info = document.createElement("div");
    movie_info.classList.add("movie_info");
    let movie_title = document.createElement("h3");
    movie_title.classList.add("movie_title");
    movie_title.append(movie.title);

    let rating_section = document.createElement("div");
    rating_section.classList.add("rating_section");

    let rating_stars = document.createElement("div");
    rating_stars.classList.add("rating_stars");

    // White Stars generation
    let white_stars = document.createElement("div");
    white_stars.classList.add("white_stars");

    for (let i = 1; i <= 5; i++) {
      let white_star = document.createElement("i");
      white_star.classList.add("fa-solid", "fa-star");
      white_stars.appendChild(white_star);
    }

    // Yellow Stars generation
    let yellow_stars = document.createElement("div");
    yellow_stars.classList.add("yellow_stars");

    for (let j = 1; j <= 5; j++) {
      let yellow_star = document.createElement("i");
      yellow_star.classList.add("fa-solid", "fa-star");
      yellow_stars.appendChild(yellow_star);
    }

    rating_stars.appendChild(white_stars);
    rating_stars.appendChild(yellow_stars);

    let rating_number = document.createElement("div");
    rating_number.classList.add("rating_number");

    if (movie.ratings.length === 0) {
      rating_number.append("(0)");
      yellow_stars.style.width = "0";
    } 
    else {
      let avgrating = Math.round(avgRating(movie.ratings));
      rating_number.append(`(${avgrating})`);
      yellow_stars.style.width = avgrating * 20 + "%";
    }

    rating_section.appendChild(rating_stars);
    rating_section.appendChild(rating_number);

    let movie_card_btns = document.createElement("div");
    movie_card_btns.classList.add("movie_card_btns");
    let rate_btn = document.createElement("button");
    rate_btn.classList.add("btn", "rate_btn");
    rate_btn.onclick = function () {
      openRatingModal();
      movieToRate = movie;
      console.log(movie.ratings)
    };
    rate_btn.append("Rate Now");

    let details_btn = document.createElement("button");
    details_btn.classList.add("btn", "details_btn");
    details_btn.append("Details");

    movie_card_btns.appendChild(rate_btn);
    movie_card_btns.appendChild(details_btn);

    movie_info.appendChild(movie_title);
    movie_info.appendChild(rating_section);
    movie_info.appendChild(movie_card_btns);

    movie_card.appendChild(movie_poster);
    movie_card.appendChild(movie_info);

    document.getElementById("movies_container").appendChild(movie_card);
  });
}

displayMovies(movies);

let movieToRate = null;

// Fn to open rating modal

function openRatingModal() {
  document.getElementById("rating_modal").style.display = "flex";
}

// Fn to close rating modal

function cancelRating() {
  document.getElementById("rating_modal").style.display = "none";

  let stars = document.getElementsByClassName("rate_star");

  for (let i = 0; i < 5; i++) {
    stars[i].style.color = "white";
  }
}

let isSubmitting = false;

// Fn to select rating

function selectRating(event) {
  let selectedRating = event.target.getAttribute("data-num");
  let stars = document.getElementsByClassName("rate_star");

  for (let i = 0; i < selectedRating; i++) {
    stars[i].style.color = "gold";
  }

  isSubmitting = false;
}

// Fn to clear rating

function clearRating() {
  if (isSubmitting === false) {
    let stars = document.getElementsByClassName("rate_star");
    for (let i = 0; i < 5; i++) {
      stars[i].style.color = "white";
    }
  }
}

let finalRate = null;

// Fn to confirm rating

function finalRating(event) {
  if (isSubmitting === true) {
    isSubmitting = false;
    clearRating();
  }

  isSubmitting = true;

  finalRate = event.target.getAttribute("data-num");

  let stars = document.getElementsByClassName("rate_star");

  for (let i = 0; i < finalRate; i++) {
    stars[i].style.color = "gold";
  }
}


// Fn to submit rating

function submitRating() {

  movieToRate.ratings.push(Number(finalRate));
  localStorage.setItem("movies", JSON.stringify(movies));
  cancelRating();
  displayMovies(movies);
  isSubmitting = false;
  clearRating();
}


// Fn to calculate avg rating

function avgRating(arr) {
  let sum = 0;

  arr.forEach(function (rate, index) {
    sum = sum + rate;
  });

  return (sum/arr.length);
}
