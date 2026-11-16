/**
 * Explore Pakistan 🇵🇰 - Central Data Store
 * Comprehensive dataset for Pakistani cities, tourist attractions,
 * destinations, luxury hotels, traveler reviews, and FAQs.
 */

const PAKISTAN_DATA = {
  config: {
    siteName: "Explore Pakistan",
    tagline: "Discover the Beauty of Pakistan",
    subtitle: "Explore Amazing Cities, Beautiful Landscapes and Unforgettable Adventures.",
    defaultCurrency: "PKR",
    currencyRates: {
      PKR: 1,
      USD: 0.0036 // 1 PKR ~= 0.0036 USD (1 USD ~= 278 PKR)
    },
    currencySymbols: {
      PKR: "₨",
      USD: "$"
    }
  },

  cities: [
    {
      id: "karachi",
      name: "Karachi",
      urduName: "کراچی",
      title: "The City of Lights & Arabian Sea Metropolis",
      province: "Sindh",
      coverImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      thumbnailImage: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=800&q=80",
      description: "Pakistan's largest coastal mega-city, economic heartbeat, and 'City of Lights' on the Arabian Sea. Renowned for its lively beaches, colonial heritage, vibrant nightlife, and world-famous culinary scene.",
      longDescription: "Karachi is a magnetic, nonstop coastal metropolis with a population of over 16 million. From romantic Arabian Sea sunsets at Clifton and Sea View to the majestic white marble dome of Mazar-e-Quaid, Karachi pulsates with energy. Food lovers flock to Burns Road and Port Grand for legendary Biryani, Nihari, and fresh seafood, while culture seekers explore historic landmarks like Mohatta Palace and Frere Hall.",
      quickStats: {
        population: "16+ Million",
        bestTime: "November to February",
        airport: "Jinnah International (KHI)",
        climate: "Coastal & Mild Winter"
      },
      attractions: [
        {
          id: "clifton-beach",
          name: "Clifton Beach",
          tagline: "Golden Sands & Arabian Sea Breezes",
          description: "One of the most famous coastal stretches in Pakistan, featuring camel and horse rides along the surf, beachside corn stalls, vibrant sunset gatherings, and family entertainment.",
          image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
          timings: "Open 24/7 (Best at Sunset)",
          entryFee: "Free",
          category: "Beaches & Coastal",
          highlights: ["Camel Rides along Surf", "Arabian Sea Sunset", "Street Food Vendors", "Oyster Rocks View"]
        },
        {
          id: "mazar-e-quaid",
          name: "Mazar-e-Quaid",
          tagline: "National Mausoleum of Quaid-e-Azam",
          description: "The grand, iconic white marble mausoleum of Pakistan's founder, Muhammad Ali Jinnah. Designed with modernist neoclassical Islamic architecture and surrounded by a vast landscaped park with dancing fountains.",
          image: "https://images.unsplash.com/photo-1589802829985-817e51171b92?auto=format&fit=crop&w=800&q=80",
          timings: "9:00 AM - 5:30 PM (Daily)",
          entryFee: "PKR 50 (Foreigners PKR 200)",
          category: "Historical & National",
          highlights: ["Pure White Marble Dome", "Ceremonial Guard Changing", "Founding Father's Tomb", "Historic Museum Hall"]
        },
        {
          id: "port-grand",
          name: "Port Grand",
          tagline: "Waterfront Dining & Cultural Boulevard",
          description: "A pedestrianized food and entertainment boulevard built along the historic 19th-century Native Jetty Bridge over Karachi Harbor. Offers high-end open-air restaurants, boat rides, and harbor panoramas.",
          image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
          timings: "5:00 PM - 12:00 AM (Midnight)",
          entryFee: "PKR 400 (Redeemable at food stalls)",
          category: "Dining & Waterfront",
          highlights: ["Historic Native Jetty Bridge", "Harbor Boat Cruises", "Gourmet Pakistani Cuisine", "Night Illumination"]
        },
        {
          id: "sea-view",
          name: "Sea View",
          tagline: "Karachi's Favorite Sunset Promenade",
          description: "The bustling coastline of Clifton DHA, famous for nighttime strolls along the paved boardwalk, illuminated beach buggies, coastal cafes, and gentle Arabian Sea waves.",
          image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=800&q=80",
          timings: "Open 24/7 (Peak Evening & Night)",
          entryFee: "Free",
          category: "Beaches & Coastal",
          highlights: ["Illuminated Promenade", "Beach Buggy Rides", "Do Darya Waterfront Dining", "Chai Dhaba Culture"]
        }
      ],
      mustTryFoods: ["Karachi Beef Biryani", "Burns Road Nihari & Haleem", "Do Darya Grilled Fish", "Rabri Falooda"],
      hotels: ["beach-luxury", "avari-towers", "marriott-karachi"]
    },

    {
      id: "lahore",
      name: "Lahore",
      urduName: "لاہور",
      title: "The Cultural & Culinary Heart of Pakistan",
      province: "Punjab",
      coverImage: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1200&q=80",
      thumbnailImage: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=800&q=80",
      description: "The historical, artistic, and literary soul of Pakistan. Steeped in Mughal grandeur, poetry, magnificent Mughal fortresses, UNESCO monuments, and the world's most passionate food culture.",
      longDescription: "As the timeless Punjabi proverb goes: 'Jinneh Lahore nai vekheya, o jammeya hi nai' (He who has not seen Lahore has not yet been born). Lahore is a tapestry of royal Mughal wonders, bustling medieval bazaars in the Walled City, peaceful Persian gardens, and the electrifying scents of freshly roasted kebabs at Fort Road Food Street.",
      quickStats: {
        population: "13+ Million",
        bestTime: "October to March",
        airport: "Allama Iqbal International (LHE)",
        climate: "Rich Seasons & Pleasant Winter"
      },
      attractions: [
        {
          id: "badshahi-mosque",
          name: "Badshahi Mosque",
          tagline: "The Crown Jewel of Mughal Architecture",
          description: "Commissioned by Emperor Aurangzeb in 1671, this colossal red sandstone mosque is crowned by three magnificent white marble domes. Accommodates up to 100,000 worshippers across its vast courtyard.",
          image: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=800&q=80",
          timings: "8:00 AM - 8:00 PM (Except Prayer Times)",
          entryFee: "Free",
          category: "Heritage & Architecture",
          highlights: ["Red Sandstone Carvings", "Vast Royal Courtyard", "View of Lahore Fort", "Illuminated Night Scenery"]
        },
        {
          id: "lahore-fort",
          name: "Lahore Fort (Shahi Qila)",
          tagline: "UNESCO World Heritage Mughal Citadel",
          description: "A monumental fortified citadel spanning over 20 hectares, showcasing the evolution of Mughal architecture through Sheesh Mahal (Palace of Mirrors), Alamgiri Gate, and the world's largest historic picture wall.",
          image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80",
          timings: "8:30 AM - 5:00 PM (Daily)",
          entryFee: "PKR 50 (Foreigners PKR 500)",
          category: "UNESCO Heritage",
          highlights: ["Sheesh Mahal (Palace of Mirrors)", "Alamgiri Grand Gate", "Elephant Steps & Royal Baths", "Historic Picture Wall"]
        },
        {
          id: "minar-e-pakistan",
          name: "Minar-e-Pakistan",
          tagline: "Monument of Independence & National Pride",
          description: "A 70-meter-tall commemorative tower situated in Greater Iqbal Park where the historic Lahore Resolution was passed on March 23, 1940, leading to the creation of Pakistan. Features sweeping park views.",
          image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
          timings: "9:00 AM - 9:00 PM",
          entryFee: "Park Entry PKR 30",
          category: "National Monument",
          highlights: ["70m Towering Silhouette", "Greater Iqbal Park Lake", "Musical Fountain Shows", "Historical Calligraphy"]
        },
        {
          id: "shalimar-gardens",
          name: "Shalimar Gardens",
          tagline: "Mughal Terraced Paradise Garden",
          description: "Constructed by Emperor Shah Jahan in 1641, this UNESCO World Heritage Persian-style paradise garden features three ascending terraces, 410 cascading fountains, marble pavilions, and lush fruit orchards.",
          image: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=800&q=80",
          timings: "9:00 AM - 6:00 PM",
          entryFee: "PKR 20 (Foreigners PKR 300)",
          category: "UNESCO Heritage Gardens",
          highlights: ["3 Royal Cascading Terraces", "410 Historic Water Fountains", "White Marble Royal Pavilions", "Chahar Bagh Persian Symmetry"]
        }
      ],
      mustTryFoods: ["Fort Road Food Street Karahi", "Muhammadi Nihari", "Amritsari Hareesa", "Fiqqa ki Lassi"],
      hotels: ["pearl-continental-lahore", "nishat-hotel-gulberg", "luxus-grand-lahore"]
    },

    {
      id: "islamabad",
      name: "Islamabad",
      urduName: "اسلام آباد",
      title: "The Picturesque Green Capital",
      province: "Islamabad Capital Territory",
      coverImage: "https://images.unsplash.com/photo-1627894006066-b457002016cb?auto=format&fit=crop&w=1200&q=80",
      thumbnailImage: "https://images.unsplash.com/photo-1627894006066-b457002016cb?auto=format&fit=crop&w=800&q=80",
      description: "One of the world's most serene and well-planned capital cities. Nestled against the majestic Margalla Hills National Park, famous for pristine wide boulevards, iconic architecture, and peaceful nature trails.",
      longDescription: "Islamabad combines pristine modern city planning with rugged Himalayan foothill nature. Framed by the lush Margalla Hills, the city is crowned by the breathtaking Turkish-inspired modern tent architecture of Faisal Mosque. Visitors enjoy hiking Trail 3 and Trail 5, panoramic dinners overlooking the city lights at Monal, and exploring the rich crafts of Lok Virsa Museum.",
      quickStats: {
        population: "1.2 Million",
        bestTime: "September to April",
        airport: "Islamabad International (ISB)",
        climate: "Pleasant, Lush & Clean"
      },
      attractions: [
        {
          id: "faisal-mosque",
          name: "Faisal Mosque",
          tagline: "Architectural Wonder at the Foot of Margalla Hills",
          description: "One of the largest and most striking mosques on Earth. Designed by Turkish architect Vedat Dalokay in the shape of a Bedouin desert tent, flanked by four soaring 88-meter pencil minarets.",
          image: "https://images.unsplash.com/photo-1627894006066-b457002016cb?auto=format&fit=crop&w=800&q=80",
          timings: "5:00 AM - 10:00 PM (Daily)",
          entryFee: "Free",
          category: "Architectural Wonder",
          highlights: ["Bedouin Tent Shape", "Margalla Hills Backdrop", "88m Slender Minarets", "Glistening White Marble Plaza"]
        },
        {
          id: "daman-e-koh",
          name: "Daman-e-Koh",
          tagline: "Breathtaking Hilltop Panorama of the Capital",
          description: "A scenic hill viewpoint perched in the heart of Margalla Hills National Park, offering breathtaking 180-degree panoramic vistas of Islamabad, Faisal Mosque, Rawal Lake, and the avenues below.",
          image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
          timings: "9:00 AM - 11:00 PM",
          entryFee: "Free",
          category: "Scenic Viewpoint & Nature",
          highlights: ["Telescope City Views", "Spotted Deer & Wildlife", "Mountain Cool Breezes", "Scenic Hill Drive"]
        },
        {
          id: "pakistan-monument",
          name: "Pakistan Monument",
          tagline: "National Petal Monument & Heritage Museum",
          description: "A petal-shaped blooming flower monument on Shakarparian Hills symbolizing the unity and cultural diversity of Pakistan's provinces, coupled with a world-class wax and heritage museum.",
          image: "https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0?auto=format&fit=crop&w=800&q=80",
          timings: "9:00 AM - 8:00 PM",
          entryFee: "PKR 50 (Foreigners PKR 250)",
          category: "National Monument & Museum",
          highlights: ["4 Large & 3 Small Granite Petals", "Lok Virsa Heritage Museum", "Shakarparian Gardens", "Night Illumination"]
        },
        {
          id: "rawal-lake",
          name: "Rawal Lake & Lake View Park",
          tagline: "Serene Reservoir & Aquatic Recreation",
          description: "An artificial reservoir fed by the Korang River, surrounded by Lake View Park. A favorite hub for boating, birdwatching, sunset picnics, jet-skiing, and adventure sports.",
          image: "https://images.unsplash.com/photo-1439853941329-a99ce049f07c?auto=format&fit=crop&w=800&q=80",
          timings: "8:00 AM - 10:00 PM",
          entryFee: "PKR 30",
          category: "Lakes & Recreation",
          highlights: ["Speedboat & Paddle Boating", "Aviary with Exotic Birds", "Sunset Lakeside Walks", "Paintball & Adventure Park"]
        }
      ],
      mustTryFoods: ["Monal Margalla Shinwari Mutton", "Savour Foods Pulao Kabab", "Saidpur Village BBQ", "Kashmiri Chai"],
      hotels: ["serena-islamabad", "marriott-islamabad", "ramada-islamabad"]
    },

    {
      id: "peshawar",
      name: "Peshawar",
      urduName: "پشاور",
      title: "The Ancient City of Flowers & Khyber Gateway",
      province: "Khyber Pakhtunkhwa",
      coverImage: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      thumbnailImage: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
      description: "One of South Asia's oldest living cities, steeped in over 2,500 years of Silk Road history. Famous for the Storytellers' Bazaar, Gandhara treasures, and the world's most aromatic kebabs.",
      longDescription: "Peshawar is a legendary frontier city where Silk Road caravaneers, ancient Buddhist scholars, Mughal princes, and British officers met. The labyrinthine alleys of Qissa Khwani Bazaar whisper historic tales, while the 17th-century Mughal Mahabat Khan Mosque reveals delicate floral frescoes. Food lovers will discover the planet's juiciest Chapli Kebabs and melt-in-the-mouth Namak Mandi lamb karahi.",
      quickStats: {
        population: "2.3 Million",
        bestTime: "October to April",
        airport: "Bacha Khan International (PEW)",
        climate: "Mild Winter & Warm Spring"
      },
      attractions: [
        {
          id: "qissa-khwani",
          name: "Qissa Khwani Bazaar",
          tagline: "The Legendary Storytellers' Market",
          description: "An ancient bustling market street where merchants, storytellers, and travelers gathered over boiling samovars of green Peshawari Qehwa to share Silk Road folklore.",
          image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
          timings: "9:00 AM - 10:00 PM (Daily)",
          entryFee: "Free",
          category: "Heritage Bazaar",
          highlights: ["Traditional Green Qehwa Cafes", "Handcrafted Peshawari Chappals", "Copper & Brass Artifacts", "Centuries of Silk Road Lore"]
        },
        {
          id: "mahabat-khan-mosque",
          name: "Mahabat Khan Mosque",
          tagline: "17th Century Mughal White Marble Marvel",
          description: "Built in 1630 by Nawab Mahabat Khan under Emperor Shah Jahan, featuring intricate floral fresco calligraphy, twin towering minarets, and a peaceful marble prayer hall.",
          image: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=800&q=80",
          timings: "5:00 AM - 8:00 PM",
          entryFee: "Free",
          category: "Mughal Architecture",
          highlights: ["Mughal Floral Frescoes", "Twin 110ft Minarets", "Ancient Walled City Vista", "Persian Style Ablution Pool"]
        },
        {
          id: "bala-hissar-fort",
          name: "Bala Hissar Fort",
          tagline: "The Historic Citadel of Kings",
          description: "A colossal fortress overlooking Peshawar valley that served as a royal residence for Afghan, Mughal, and Sikh rulers, towering dramatically on a high plateau.",
          image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80",
          timings: "9:00 AM - 4:00 PM (Weekend guided tours)",
          entryFee: "PKR 50",
          category: "Historic Citadel",
          highlights: ["Overlooking Peshawar Valley", "Frontier Corps Museum", "Massive Brick Bastions", "Historic Royal Headquarters"]
        },
        {
          id: "sethi-house",
          name: "Sethi House & Heritage Trail",
          tagline: "Masterpiece of Central Asian Merchant Architecture",
          description: "A lavishly carved 19th-century merchant mansion in Sethi Mohallah showcasing stained glass windows, carved cedarwood ceilings, and multi-tier underground summer cellars.",
          image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
          timings: "9:00 AM - 5:00 PM",
          entryFee: "PKR 50 (Foreigners PKR 200)",
          category: "Architectural Heritage",
          highlights: ["Carved Cedar Wood Ceilings", "Stained Glass Atriums", "Underground Summer Cellars (Tehkhana)", "Intricate Silk Road Artistry"]
        }
      ],
      mustTryFoods: ["Peshawari Chapli Kebab (Jalil Kebab)", "Namak Mandi Mutton Karahi & Shinwari Tikka", "Cardamom Peshawari Qehwa", "Kabuli Pulao"],
      hotels: ["pearl-continental-peshawar", "serena-hotel-swat"]
    },

    {
      id: "skardu",
      name: "Skardu",
      urduName: "سکردو",
      title: "Gateway to the Karakoram Giants & K2",
      province: "Gilgit-Baltistan",
      coverImage: "https://images.unsplash.com/photo-1439853941329-a99ce049f07c?auto=format&fit=crop&w=1200&q=80",
      thumbnailImage: "https://images.unsplash.com/photo-1439853941329-a99ce049f07c?auto=format&fit=crop&w=800&q=80",
      description: "The dream destination for mountaineers and nature lovers worldwide. Surrounded by four of the world's 14 eight-thousanders, sapphire alpine lakes, and cold desert sand dunes.",
      longDescription: "Nestled at 2,228 meters in the heart of Gilgit-Baltistan, Skardu is a dramatic realm where the mighty Indus meets the Shigar and Shyok rivers. It is the starting point for expeditions to K2, Broad Peak, and Gasherbrum. Tourists marvel at the crimson chalet cottages of Shangrila on Lower Kachura Lake, glide down Sarfaranga Cold Desert sand dunes, and traverse the rolling wildflower tundra of Deosai National Park.",
      quickStats: {
        population: "215,000",
        bestTime: "May to October",
        airport: "Skardu International Airport (KDU)",
        climate: "Alpine Continental & Cool Summers"
      },
      attractions: [
        {
          id: "shangrila-resort",
          name: "Shangrila Resort & Lower Kachura",
          tagline: "Heaven on Earth Alpine Lakeside",
          description: "A world-famous alpine haven constructed around the heart-shaped Lower Kachura Lake, framed by orchards, pine woods, and snow peaks.",
          image: "https://images.unsplash.com/photo-1439853941329-a99ce049f07c?auto=format&fit=crop&w=800&q=80",
          timings: "Open daily for visitors",
          entryFee: "PKR 500 (Free for hotel guests)",
          category: "Lakes & Resorts",
          highlights: ["Heart-Shaped Lake Reflections", "Airplane Fuselage VIP Cafe", "Paddle Boating", "Orchard Pathways"]
        },
        {
          id: "upper-kachura",
          name: "Upper Kachura Lake",
          tagline: "Wild Emerald Glacial Wonder",
          description: "An unspoiled, deep cobalt glacial lake flanked by granite precipices and apricot groves. Renowned for crystal-clear reflections and wild trout fishing.",
          image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
          timings: "Daylight Hours",
          entryFee: "Free",
          category: "Glacial Lake",
          highlights: ["Wooden Speedboat Rides", "Cliffside Reflections", "Fresh Grilled Trout", "Peaceful Pine Hike"]
        },
        {
          id: "sarfaranga-desert",
          name: "Sarfaranga Cold Desert",
          tagline: "The World's Highest Cold Desert",
          description: "Spectacular white sand dunes perched against jagged dark Karakoram mountains, creating an astonishing juxtaposition of sand dunes and snow peaks.",
          image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=800&q=80",
          timings: "Open 24/7 (Sunset is magical)",
          entryFee: "Free",
          category: "Cold Desert Dunes",
          highlights: ["High Altitude Sand Dunes", "Desert Jeep Safari", "Night Sky Stargazing", "Quad Biking"]
        },
        {
          id: "deosai-plains",
          name: "Deosai National Park",
          tagline: "The Land of Giants Alpine Plateau",
          description: "The world's second-highest plateau at an average elevation of 4,114 meters, blanketed with thousands of wildflower species and home to Himalayan Brown Bears and Sheosar Lake.",
          image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
          timings: "June to September (Jeep Access)",
          entryFee: "Park Entry PKR 100",
          category: "National Park Plateau",
          highlights: ["Himalayan Brown Bear Habitat", "Sheosar Heart Lake", "Endless Wildflower Tundra", "Dramatic 4,000m Horizon"]
        }
      ],
      mustTryFoods: ["Balti Freshwater Trout Fish", "Marzan (Buckwheat Porridge with Apricot Oil)", "Mamtu (Steamed Dumplings)", "Balay Stew"],
      hotels: ["shangrila-skardu", "serena-shigar-fort", "khaplu-palace"]
    },

    {
      id: "hunza",
      name: "Hunza (Karimabad)",
      urduName: "ہنزہ",
      title: "Valley of Longevity & Mountain Castles",
      province: "Gilgit-Baltistan",
      coverImage: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1200&q=80",
      thumbnailImage: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=800&q=80",
      description: "A paradise nestled along the Karakoram Highway, crowned by Rakaposhi, centuries-old royal Tibetan-influenced forts, and terraced apricot and walnut orchards.",
      longDescription: "Hunza Valley has enchanted world travelers for generations with its high life expectancy, 100% literacy rate, and peaceful mountain culture. Karimabad offers bird's-eye views of 7,788-meter Rakaposhi and Ladyfinger Peak. Travelers love boat rides across turquoise Attabad Lake, crossing the suspension bridge at Hussaini, and savoring freshly baked apricot walnut cake at local street cafes.",
      quickStats: {
        population: "70,000",
        bestTime: "April to October",
        airport: "Gilgit Airport (GIL) then scenic highway drive",
        climate: "Temperate Mountain & Clear Skies"
      },
      attractions: [
        {
          id: "baltit-fort",
          name: "Baltit Fort",
          tagline: "700-Year-Old Royal Palace of the Mirs",
          description: "An ancient Tibetan-influenced fortified palace perched above Karimabad, featuring historic timber beams, stained glass royal rooms, and panoramic valley terraces.",
          image: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=800&q=80",
          timings: "9:00 AM - 5:30 PM",
          entryFee: "PKR 400 (Foreigners PKR 1200)",
          category: "UNESCO Heritage Fort",
          highlights: ["700-Year Architectural History", "Views of Rakaposhi Peak", "Royal Living Quarters & Weapons", "UNESCO Heritage Restoration"]
        },
        {
          id: "attabad-lake",
          name: "Attabad Lake",
          tagline: "Turquoise Glacial Miracle Lake",
          description: "Formed in 2010 after a massive mountain landslide, this 21-kilometer sapphire-turquoise lake has become one of Pakistan's most photographed attractions.",
          image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
          timings: "Open Daily for Boating & Jet Skiing",
          entryFee: "Free (Boating PKR 1500 - 3000)",
          category: "Glacial Lake",
          highlights: ["Speedboat & Jet Ski Cruising", "Turquoise Glacial Reflections", "Lakeside Luxury Dining", "Passu Cones Approach"]
        },
        {
          id: "passu-cones",
          name: "Passu Cones (Cathedral Peaks)",
          tagline: "Serrated Crown of the Karakoram",
          description: "A dramatic jagged mountain wall rising over 6,106 meters resembling majestic gothic cathedral spires towering directly beside the Karakoram Highway.",
          image: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=800&q=80",
          timings: "Visible 24/7",
          entryFee: "Free",
          category: "Iconic Mountain Peak",
          highlights: ["Gothic Needle-Like Spires", "Karakoram Highway Viewpoint", "Passu Glacier Trek", "Passu Village Apricot Orchards"]
        },
        {
          id: "hussaini-bridge",
          name: "Hussaini Suspension Bridge",
          tagline: "The World's Most Thrilling Rope Bridge",
          description: "A suspended wooden plank footbridge over the roaring Hunza River in Gojal, offering an exhilarating walk with dramatic mountain backdrops.",
          image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80",
          timings: "8:00 AM - 6:00 PM",
          entryFee: "PKR 200",
          category: "Adventure Landmark",
          highlights: ["Thrilling River Crossing", "360-Degree Mountain Panoramas", "Passu Cathedral Views", "Local Artisan Crafts"]
        }
      ],
      mustTryFoods: ["Chapshuro (Hunza Meat Pie)", "Gyal / Ghyaling with Apricot Oil", "Hunza Apricot Walnut Cake", "Tumuro Herbal Wild Tea"],
      hotels: ["luxus-hunza", "serena-altit-hunza", "eagles-nest-hotel"]
    },

    {
      id: "multan",
      name: "Multan",
      urduName: "ملتان",
      title: "The City of Saints & Blue Pottery",
      province: "Punjab",
      coverImage: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=1200&q=80",
      thumbnailImage: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=800&q=80",
      description: "One of the oldest continuously inhabited cities on the Indian subcontinent, internationally famous for turquoise blue glazed Kashigari pottery, saintly Sufi shrines, and mouthwatering Sohan Halwa.",
      longDescription: "Multan is crowned by the breathtaking octagonal brick and glazed tile shrine of Shah Rukn-e-Alam, recognized as one of the finest examples of pre-Mughal Islamic architecture in the world. Visitors wander through the historic Hussain Agahi Bazaar, watch master craftsmen paint blue pottery tiles, and taste the city's legendary caramel-rich Sohan Halwa.",
      quickStats: {
        population: "2.1 Million",
        bestTime: "October to March",
        airport: "Multan International (MUX)",
        climate: "Sunny & Warm Winter"
      },
      attractions: [
        {
          id: "shah-rukn-e-alam",
          name: "Tomb of Shah Rukn-e-Alam",
          tagline: "UNESCO-Acclaimed Sufi Shrine Masterpiece",
          description: "An extraordinary 14th-century octagonal mausoleum surmounted by an immense 15-meter white dome and adorned with vibrant turquoise and cobalt Multani faience tiles.",
          image: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=800&q=80",
          timings: "Open 24/7",
          entryFee: "Free",
          category: "Sufi Heritage Architecture",
          highlights: ["Octagonal Red Brick Terraces", "Turquoise Glazed Tiles", "Colossal White Dome", "View over Ancient Multan"]
        },
        {
          id: "bahauddin-zakariya",
          name: "Tomb of Bahauddin Zakariya",
          tagline: "Grand Square Mausoleum of the Great Saint",
          description: "Built in 1262, this historic shrine features a unique square base, octagonal drum, and brilliant blue glazed tilework, set in the historic citadel grounds.",
          image: "https://images.unsplash.com/photo-1589802829985-817e51171b92?auto=format&fit=crop&w=800&q=80",
          timings: "5:00 AM - 10:00 PM",
          entryFee: "Free",
          category: "Historical Shrine",
          highlights: ["13th Century Architecture", "Spiritual Sufi Gathering", "Citadel Hill Gardens", "Intricate Calligraphy"]
        },
        {
          id: "multan-fort",
          name: "Multan Fort & Damdama",
          tagline: "Historic Mound & Panoramic City Viewpoint",
          description: "Perched atop an ancient high mound beside the Ravi river bed, offering the Damdama viewpoint overlooking the bustling markets and minarets of Multan.",
          image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80",
          timings: "9:00 AM - 7:00 PM",
          entryFee: "Free",
          category: "Historic Fort Mound",
          highlights: ["Damdama Panoramic Overlook", "Nigar Khana Art Gallery", "Qasim Bagh Stadium", "Ancient Fort Relics"]
        },
        {
          id: "blue-pottery-workshops",
          name: "Kashigari Blue Pottery Centers",
          tagline: "Centuries-Old Hand-Painted Glazed Ceramics",
          description: "Artisan workshops in Hussain Agahi and Chowk Bazaar where master artisans shape and hand-paint cobalt blue flower vases, lamps, and decorative tiles.",
          image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
          timings: "10:00 AM - 8:00 PM",
          entryFee: "Free",
          category: "Traditional Crafts",
          highlights: ["Live Pottery Wheel Demonstrations", "Hand-Painted Floral Motifs", "Authentic Souvenir Shopping", "UNESCO Craftsmanship"]
        }
      ],
      mustTryFoods: ["Hafiz Multani Sohan Halwa", "Multan Mangoes (Chaunsa & Sindhri)", "Doli Roti", "Rewari Mutton Karahi"],
      hotels: ["ramada-multan", "hotel-one-multan", "faletti-grand-multan"]
    },

    {
      id: "quetta",
      name: "Quetta",
      urduName: "کوئٹہ",
      title: "The Fruit Garden of Pakistan & Zarghoon Foothills",
      province: "Balochistan",
      coverImage: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1200&q=80",
      thumbnailImage: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=800&q=80",
      description: "The mountainous provincial capital of Balochistan, set at 1,680 meters in a dramatic valley. Famed for crisp mountain air, sapphire Hanna Lake, ancient juniper forests of Ziarat, and legendary Balochi Sajji.",
      longDescription: "Surrounded by the formidable Chiltan, Takatu, and Murdar mountain ranges, Quetta is known as the 'Fruit Garden of Pakistan' producing sweet pomegranates, apples, and almonds. The city is celebrated for the peaceful turquoise waters of Hanna Lake, the protected wildlife sanctuary at Hazarganji, and the historic wooden Quaid-e-Azam Residency in nearby Ziarat, home to the second-largest ancient juniper forest in the world.",
      quickStats: {
        population: "1.1 Million",
        bestTime: "April to October",
        airport: "Quetta International Airport (UET)",
        climate: "Cool Mountain Breezes & Crisp Winter"
      },
      attractions: [
        {
          id: "hanna-lake",
          name: "Hanna Lake",
          tagline: "Turquoise Reservoir Framed by Rugged Mountains",
          description: "A scenic turquoise reservoir built during the 1890s at the entrance to Urak Valley. Offers lakeside pine walks, boating, sunset panoramas, and fresh fruit juice stalls.",
          image: "https://images.unsplash.com/photo-1439853941329-a99ce049f07c?auto=format&fit=crop&w=800&q=80",
          timings: "8:00 AM - 7:00 PM",
          entryFee: "PKR 50",
          category: "Lakes & Water Recreation",
          highlights: ["Paddle & Motor Boating", "Urak Valley Fresh Fruits", "Rugged Golden Mountain Backdrop", "Lakeside Walking Trails"]
        },
        {
          id: "hazarganji-chiltan",
          name: "Hazarganji Chiltan National Park",
          tagline: "Sanctuary of the Rare Chiltan Markhor",
          description: "A protected 32,500-acre national park conserving the endangered Chiltan wild goat (Markhor), striped hyenas, and rare desert flora across rugged mountain ravines.",
          image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
          timings: "9:00 AM - 5:00 PM",
          entryFee: "PKR 50",
          category: "National Wildlife Park",
          highlights: ["Rare Chiltan Markhor Sightings", "Hazarganji Natural Museum", "Desert Mountain Trekking", "Wild Desert Flora"]
        },
        {
          id: "ziarat-residency",
          name: "Quaid-e-Azam Residency (Ziarat)",
          tagline: "Historic Heritage Wooden Mansion in Ancient Junipers",
          description: "A picturesque 1892 colonial wooden architecture residency in Ziarat where Pakistan's founder, Muhammad Ali Jinnah, spent his final days, surrounded by centuries-old juniper trees.",
          image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
          timings: "9:00 AM - 6:00 PM",
          entryFee: "PKR 50",
          category: "National Heritage Landmark",
          highlights: ["Historic Teakwood Architecture", "World's 2nd Oldest Juniper Forest", "Founding Father's Memorabilia", "Crisp Alpine Climate"]
        },
        {
          id: "kandhari-bazaar",
          name: "Kandhari & Liaquat Bazaar",
          tagline: "Vibrant Hub of Balochi Crafts & Dry Fruits",
          description: "Lively shopping boulevards famous for hand-embroidered Balochi mirror-work dresses, Afghan carpets, copperware, and premium dry fruits, pistachios, and almonds.",
          image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
          timings: "10:00 AM - 10:00 PM",
          entryFee: "Free",
          category: "Traditional Bazaars",
          highlights: ["Handcrafted Balochi Mirror Embroidery", "Ziarat Cherries & Dry Fruits", "Balochi Leather Chappals", "Traditional Rugs & Carpets"]
        }
      ],
      mustTryFoods: ["Balochi Sajji (Charcoal-roasted lamb with rice)", "Quetta Mutton Rosh", "Khaddi Kebab", "Landhi (Dried meat specialty)"],
      hotels: ["serena-quetta", "qualia-hotel-quetta"]
    },

    {
      id: "swat",
      name: "Swat (Mingora & Kalam)",
      urduName: "سوات",
      title: "The Switzerland of the East",
      province: "Khyber Pakhtunkhwa",
      coverImage: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80",
      thumbnailImage: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80",
      description: "An emerald-green alpine wonderland of roaring glacial rivers, towering snow peaks, lush pine forests, ancient Buddhist stupas, and world-class skiing at Malam Jabba.",
      longDescription: "Swat Valley was christened 'The Switzerland of the East' by Queen Elizabeth II for its jaw-dropping alpine beauty. Centered around Mingora and the higher alpine sanctuaries of Kalam and Ushu, Swat is famous for its 2,000-year Buddhist Gandhara civilization, crystal-clear Mahodand Lake, royal White Palace at Marghazar, and the ski slopes and high-flying ziplines of Malam Jabba.",
      quickStats: {
        population: "2.3 Million",
        bestTime: "April to October (Winter for Skiing)",
        airport: "Saidu Sharif Airport (SDT)",
        climate: "Fresh Alpine & Snow-Blanketed Winters"
      },
      attractions: [
        {
          id: "malam-jabba",
          name: "Malam Jabba Ski Resort & Zipline",
          tagline: "Pakistan's Premier Alpine Ski Resort",
          description: "Perched at 2,804 meters in the Hindu Kush, featuring modern ski chairlifts, 800-meter dual zipline, snow tubing, ice skating, and scenic mountain hotel chalets.",
          image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
          timings: "8:00 AM - 5:00 PM",
          entryFee: "Chairlift PKR 1000 - 1500",
          category: "Ski & Adventure Resort",
          highlights: ["Modern Snow Chairlift & Ski Slope", "Thrilling Alpine Zipline", "360-Degree Hindu Kush Views", "Snow Tubing & Winter Sports"]
        },
        {
          id: "white-palace-marghazar",
          name: "White Palace (Sufed Mahal) Marghazar",
          tagline: "1940 Royal Marble Summer Residence",
          description: "Built in 1940 by the Wali of Swat using the same white marble as Agra's Taj Mahal. Nestled in a lush green valley with whispering mountain streams and royal gardens.",
          image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80",
          timings: "9:00 AM - 6:00 PM",
          entryFee: "PKR 100",
          category: "Royal Heritage Palace",
          highlights: ["Pristine White Swat Marble", "Royal Wali Living Quarters", "Marghazar Springs & Gardens", "Historic Forest Atmosphere"]
        },
        {
          id: "mahodand-lake",
          name: "Mahodand Lake & Ushu Forest",
          tagline: "Glacial Lake of the Fishes in Upper Kalam",
          description: "A postcard-perfect alpine lake at 2,865 meters surrounded by dense pine forests and cascading mountain waterfalls, reached via thrilling 4x4 jeep track from Kalam.",
          image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
          timings: "Daylight Hours (May to October)",
          entryFee: "Free (Boating PKR 500 - 1000)",
          category: "Alpine Glacial Lake",
          highlights: ["Emerald Water Boating", "Dense Pine Ushu Forest Hike", "Fresh Grilled Mountain Trout", "Cascading Glacial Waterfalls"]
        },
        {
          id: "swat-museum",
          name: "Swat Museum & Butkara Stupa",
          tagline: "Treasure House of Gandhara Buddhist Art",
          description: "Housing one of the world's most magnificent collections of Buddhist Gandhara stone sculptures, friezes, and ancient relics discovered across Swat Valley.",
          image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
          timings: "9:00 AM - 4:30 PM",
          entryFee: "PKR 50 (Foreigners PKR 300)",
          category: "Archaeological Museum",
          highlights: ["Ancient Gandhara Stone Carvings", "Buddha Life Story Bas-Reliefs", "Butkara 3rd Century BC Stupa", "Swati Folk Jewelry & Textiles"]
        }
      ],
      mustTryFoods: ["Fresh Swat River Trout Fish", "Swati Pure Berry & Forest Honey", "Kalam Mutton Karahi", "Chinar Fried Bread"],
      hotels: ["serena-swat", "pearl-continental-malam-jabba", "walnut-heights-kalam"]
    },

    {
      id: "faisalabad",
      name: "Faisalabad",
      urduName: "فیصل آباد",
      title: "The Industrial Powerhouse & Manchester of Pakistan",
      province: "Punjab",
      coverImage: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80",
      thumbnailImage: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80",
      description: "Pakistan's third-largest city, legendary textile capital, and vibrant center of Punjabi wit, commerce, and street food. Designed around the historic British-era Clock Tower.",
      longDescription: "Originally named Lyallpur, Faisalabad is famously planned in the geometrical shape of the British Union Jack, with eight bustling bazaars radiating from the grand Victorian Clock Tower. Known for its world-class textile craftsmanship, the city is a haven for fabric shoppers, live music lovers, and foodies indulging in D Ground delicacies and celebrated Dahi Bhallay.",
      quickStats: {
        population: "3.7 Million",
        bestTime: "October to March",
        airport: "Faisalabad International Airport (LYP)",
        climate: "Vibrant Seasons & Warm Sunny Days"
      },
      attractions: [
        {
          id: "clock-tower-faisalabad",
          name: "Ghanta Ghar (Clock Tower) & 8 Bazaars",
          tagline: "Iconic Victorian Centerpiece of Lyallpur",
          description: "Built in 1903 in red sandstone, serving as the central architectural hub from which eight historic bazaars radiate outwards like the British Union Jack flag.",
          image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80",
          timings: "Open 24/7 (Bazaars 10:00 AM - 10:00 PM)",
          entryFee: "Free",
          category: "Historic Architecture & Bazaars",
          highlights: ["Red Sandstone Victorian Clock Tower", "Eight Radiating Historic Bazaars", "Textile & Garment Shopping", "Centuries of Commercial Energy"]
        },
        {
          id: "gumti-fountain",
          name: "Gumti Water Fountain",
          tagline: "Victorian Architectural Monument",
          description: "A preserved historical monument dating back to 1907 featuring ornate Victorian arches, decorative ironwork, and a tranquil water fountain in the old quarter.",
          image: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=800&q=80",
          timings: "Visible 24/7",
          entryFee: "Free",
          category: "Heritage Monument",
          highlights: ["Victorian Ironwork Arches", "Historical Old City Atmosphere", "Rail Bazaar Walkway", "Night Illumination"]
        },
        {
          id: "gatwala-park",
          name: "Gatwala Wildlife Park & Lake",
          tagline: "Sprawling Green Botanical & Wildlife Sanctuary",
          description: "A vast 130-acre natural recreation park featuring a scenic boating lake, bamboo forests, open-air bird aviaries, crocodile ponds, and children's amusement zones.",
          image: "https://images.unsplash.com/photo-1439853941329-a99ce049f07c?auto=format&fit=crop&w=800&q=80",
          timings: "8:00 AM - 7:00 PM",
          entryFee: "PKR 30",
          category: "Wildlife Park & Lake",
          highlights: ["Lakeside Boating & Paddle Boats", "Exotic Bird Aviaries", "Bamboo Forest Nature Trails", "Family Picnic Grounds"]
        },
        {
          id: "d-ground",
          name: "D Ground & Jaranwala Food Enclave",
          tagline: "Vibrant Nightlife & Culinary Heart",
          description: "The premier commercial and dining circle of Faisalabad, bustling with boutique fashion stores, open-air cafes, gourmet barbecue spots, and lively sweet shops.",
          image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
          timings: "11:00 AM - 1:00 AM",
          entryFee: "Free",
          category: "Dining & Commercial District",
          highlights: ["Street Food & Barbecue Grills", "Textile Fashion Flagship Boutiques", "Chai Cafes & Ice Cream Parlors", "Vibrant Punjabi Nightlife"]
        }
      ],
      mustTryFoods: ["Chinioti Mutton Kunna", "Faisalabadi Dahi Bhallay & Chaat", "Rabri Doodh & Falooda", "Samosa Chaat with Plum Chutney"],
      hotels: ["serena-faisalabad", "hotel-one-faisalabad"]
    },

    {
      id: "murree",
      name: "Murree & Galyat",
      urduName: "مری",
      title: "Queen of the Hills & Pine Forest Sanctuaries",
      province: "Punjab",
      coverImage: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80",
      thumbnailImage: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80",
      description: "Pakistan's most beloved Himalayan foothills resort town at 2,291 meters. Famous for colonial Mall Road strolls, pine-covered ridges, Patriata cable cars, and romantic winter snowfall.",
      longDescription: "Perched amidst dense pine and oak forests just an hour's drive from Islamabad, Murree has served as the subcontinent's favorite summer hill resort for over a century. Visitors take evening walks down Mall Road, enjoy thrilling cable car rides over Patriata's deep pine ravines, admire views of the snow-clad Kashmir ranges from Kashmir Point, and hike the peaceful 4-kilometer colonial Pipeline Track in Ayubia National Park.",
      quickStats: {
        population: "150,000",
        bestTime: "April to October (Winter for Snow)",
        airport: "Islamabad International (ISB) then 1 hour scenic expressway",
        climate: "Cool Mountain Summers & Snowy Winters"
      },
      attractions: [
        {
          id: "mall-road-murree",
          name: "Mall Road Murree",
          tagline: "Historic Colonial Promenade & Evening Gathering",
          description: "The lively pedestrian-only historic spine of Murree, lined with handicrafts shops, souvenir stalls, Kashmiri shawl boutiques, and open-air hot jalebi and corn sellers.",
          image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
          timings: "Open 24/7 (Peak 4:00 PM - 12:00 AM)",
          entryFee: "Free",
          category: "Hill Station Promenade",
          highlights: ["Pedestrian Mountain Boulevard", "Kashmiri Woolen Shawls", "Steaming Roasted Corn & Hot Jalebis", "Colonial Stone Architecture"]
        },
        {
          id: "patriata-chairlift",
          name: "Patriata (New Murree) Chairlift & Cable Car",
          tagline: "Gliding Over Deep Pine Valleys",
          description: "A world-class two-tier ropeway system starting with an open chairlift and continuing with an enclosed modern gondola cable car climbing to the highest peak in Murree hills.",
          image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
          timings: "9:00 AM - 5:30 PM",
          entryFee: "PKR 1000 - 1500 (Round Trip)",
          category: "Cable Car & Mountain Ride",
          highlights: ["Panoramic Pine Valley Views", "Enclosed Gondola Cable Car", "Highest Hill Peak Viewpoint", "Cool Alpine Breezes"]
        },
        {
          id: "kashmir-point",
          name: "Kashmir Point",
          tagline: "Panoramic Lookout of Kashmir Snow Peaks",
          description: "The highest and most tranquil point in Murree town (7,500ft), offering telescope panoramic views of the Pir Panjal mountain ranges and snow-capped Kashmir peaks.",
          image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
          timings: "Open 24/7",
          entryFee: "Free",
          category: "Scenic Mountain Viewpoint",
          highlights: ["Telescope Kashmir Range Views", "Dense Oak & Pine Groves", "Governor House Murree Vicinity", "Peaceful Escape from Crowds"]
        },
        {
          id: "pipeline-track",
          name: "Pipeline Walking Track (Dunga Gali to Ayubia)",
          tagline: "Colonial Pine Forest Nature Hike",
          description: "A peaceful 4-kilometer level walking trail laid in the 1930s following an ancient water pipeline, surrounded by Ayubia National Park's pine trees, exotic birds, and wild monkeys.",
          image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80",
          timings: "Daylight Hours",
          entryFee: "Park Entry PKR 50",
          category: "Forest Hiking Trail",
          highlights: ["Gentle 4km Flat Walking Trail", "Dense Ayubia Pine Canopies", "Birdwatching & Friendly Monkeys", "Crisp Alpine Oxygen"]
        }
      ],
      mustTryFoods: ["Desi Chicken Karahi in Clay Pot", "Kashmiri Pink Chai with Pistachios & Almonds", "Charcoal Roasted Bhutta (Corn)", "Hot Fresh Jalebi"],
      hotels: ["pc-bhurban", "lockwood-hotel-murree", "chinar-family-resort"]
    }
  ],

  destinations: [
    {
      id: "hunza-valley",
      name: "Hunza Valley",
      region: "Gilgit-Baltistan",
      tagline: "Shangri-La on Earth & The Roof of the World",
      category: "mountains",
      image: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=900&q=80",
      rating: 4.9,
      reviewsCount: 384,
      elevation: "2,438 meters",
      bestSeason: "April to October (Cherry Blossom & Autumn)",
      priceLevel: "$$$",
      pricePerDayPKR: 18000,
      description: "A legendary mountainous valley famed for towering snowcapped peaks like Rakaposhi (7,788m), Ladyfinger Peak, ancient forts, turquoise Attabad Lake, and warm apricot orchards.",
      highlights: ["Attabad Lake Boating", "Baltit & Altit Forts", "Passu Cones Cathedral", "Hussaini Suspension Bridge", "Eagle's Nest Sunset Point"]
    },
    {
      id: "fairy-meadows",
      name: "Fairy Meadows & Nanga Parbat",
      region: "Gilgit-Baltistan",
      tagline: "Lush Alpine Meadow at the Foot of the Killer Mountain",
      category: "mountains",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80",
      rating: 4.9,
      reviewsCount: 290,
      elevation: "3,300 meters",
      bestSeason: "June to September",
      priceLevel: "$$",
      pricePerDayPKR: 15000,
      description: "A mystical alpine pasture named by German climbers, offering unobstructed dramatic views of the 8,126m-high north face of Nanga Parbat and the Raikot Glacier.",
      highlights: ["Nanga Parbat Base Camp Trek", "Thrilling Raikot Jeep Track", "Campfires Under Milky Way", "Pine Forest Horse Riding"]
    },
    {
      id: "skardu-shangrila",
      name: "Skardu & Deosai Plains",
      region: "Gilgit-Baltistan",
      tagline: "Land of Giants & Gateway to K2",
      category: "mountains",
      image: "https://images.unsplash.com/photo-1439853941329-a99ce049f07c?auto=format&fit=crop&w=900&q=80",
      rating: 4.8,
      reviewsCount: 312,
      elevation: "2,228 meters",
      bestSeason: "May to October",
      priceLevel: "$$$",
      pricePerDayPKR: 20000,
      description: "Surrounded by world-class 8,000m peaks, Skardu is renowned for Lower & Upper Kachura Lakes, Sarfaranga Cold Desert, and the endless wild tundra of Deosai National Park.",
      highlights: ["Shangrila Resort Kachura", "Deosai Alpine Plateau", "Sarfaranga Cold Desert Dunes", "K2 Concordia Basecamp Gateway"]
    },
    {
      id: "swat-valley",
      name: "Swat Valley",
      region: "Khyber Pakhtunkhwa",
      tagline: "The Switzerland of the East",
      category: "valleys",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=900&q=80",
      rating: 4.7,
      reviewsCount: 245,
      elevation: "980 - 2,500 meters",
      bestSeason: "March to November (Winter for Skiing)",
      priceLevel: "$$",
      pricePerDayPKR: 12000,
      description: "An emerald-green paradise of roaring rivers, lush pine valleys, ancient Buddhist Gandhara stupas, and Pakistan's premier Malam Jabba ski and adventure resort.",
      highlights: ["Malam Jabba Ski Resort & Zipline", "Kalam & Ushu Forest", "Mahodand Alpine Lake", "Buddhist Archaeological Relics"]
    },
    {
      id: "naran-kaghan",
      name: "Naran Kaghan & Saif-ul-Malook",
      region: "Khyber Pakhtunkhwa",
      tagline: "Fairy Tale Glacial Lakes & Babusar Pass",
      category: "lakes",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80",
      rating: 4.8,
      reviewsCount: 420,
      elevation: "2,409 meters",
      bestSeason: "June to September",
      priceLevel: "$$",
      pricePerDayPKR: 14000,
      description: "A cherished valley centered around the mythical turquoise waters of Lake Saif-ul-Malook, roaring trout rivers, and the thrilling 4,173m Babusar Top pass into Gilgit.",
      highlights: ["Lake Saif-ul-Malook Fairy Legend", "Kunhar River Rafting", "Babusar Pass Viewpoint", "Lulusar Lake Glacial Waters"]
    },
    {
      id: "hingol-national-park",
      name: "Hingol National Park & Kund Malir",
      region: "Balochistan",
      tagline: "Mars on Earth & Coastal Highway Wonder",
      category: "coastal",
      image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=900&q=80",
      rating: 4.7,
      reviewsCount: 198,
      elevation: "Sea Level to 1,000m",
      bestSeason: "November to March",
      priceLevel: "$$",
      pricePerDayPKR: 11000,
      description: "The largest national park in Pakistan along the Arabian Sea Makran Coastal Highway. Showcases natural geological marvels like the Princess of Hope, Balochistan Sphinx, and pristine Kund Malir golden beach.",
      highlights: ["Princess of Hope Rock Formation", "Balochistan Sphinx", "Kund Malir Golden Beach", "Active Mud Volcanoes"]
    }
  ],

  hotels: [
    {
      id: "serena-islamabad",
      name: "Islamabad Serena Hotel",
      city: "Islamabad",
      cityId: "islamabad",
      stars: 5,
      rating: 4.9,
      reviewsCount: 1240,
      pricePerNightPKR: 52000,
      pricePerNightUSD: 187,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80",
      description: "An architectural masterpiece blending traditional Islamic patterns and marble courtyards with world-class 5-star luxury at the foot of Margalla Hills.",
      amenities: ["Free High-Speed WiFi", "Maisha Health Club & Spa", "Outdoor Heated Pool", "7 Fine Dining Restaurants", "Margalla Hills View", "Airport Shuttle"],
      address: "Khayaban-e-Suhrawardy, Sector G-5/1, Islamabad",
      badge: "Top Luxury Choice"
    },
    {
      id: "pearl-continental-lahore",
      name: "Pearl Continental Hotel Lahore",
      city: "Lahore",
      cityId: "lahore",
      stars: 5,
      rating: 4.8,
      reviewsCount: 1560,
      pricePerNightPKR: 44000,
      pricePerNightUSD: 158,
      image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=900&q=80",
      description: "Situated in the historic heart of Lahore along Mall Road. Renowned for royal Punjabi hospitality, opulent ballrooms, and acclaimed dining at Bukhara and Dumpukht.",
      amenities: ["Free WiFi", "Royal Banquet Dining", "Olympic Size Pool", "Fitness & Spa Center", "Executive Lounge", "24/7 Butler Service"],
      address: "Shahrah-e-Quaid-e-Azam, Mall Road, Lahore",
      badge: "Heritage Grandeur"
    },
    {
      id: "beach-luxury",
      name: "Beach Luxury Hotel Karachi",
      city: "Karachi",
      cityId: "karachi",
      stars: 4,
      rating: 4.6,
      reviewsCount: 980,
      pricePerNightPKR: 28000,
      pricePerNightUSD: 100,
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=900&q=80",
      description: "Karachi's legendary waterfront haven surrounded by lush mangrove palms and serene sea breezes. Steps away from the financial district yet a tranquil resort oasis.",
      amenities: ["Waterfront View", "Lush Palm Gardens", "Sea Breeze Outdoor Dining", "Swimming Pool", "High-Speed WiFi", "Free Parking"],
      address: "Moulvi Tamizuddin Khan Rd, Lalazar, Karachi",
      badge: "Waterfront Oasis"
    },
    {
      id: "luxus-hunza",
      name: "Luxus Hunza Hotel & Suites",
      city: "Hunza Valley",
      cityId: "hunza",
      stars: 5,
      rating: 4.9,
      reviewsCount: 650,
      pricePerNightPKR: 48000,
      pricePerNightUSD: 172,
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=900&q=80",
      description: "Directly perched on the turquoise shores of glacial Attabad Lake. Features private floor-to-ceiling glass balconies with panoramic views of the Passu peaks.",
      amenities: ["Turquoise Lake Balcony", "Speedboat Deck Access", "Bonfire & BBQ Terrace", "Heated Mountain Suites", "Organic Hunza Breakfast", "Free WiFi"],
      address: "Attabad Lake Waterfront, Gojal, Upper Hunza",
      badge: "Glacial Lakefront"
    },
    {
      id: "shangrila-skardu",
      name: "Shangrila Resort Skardu",
      city: "Skardu",
      cityId: "skardu",
      stars: 4,
      rating: 4.8,
      reviewsCount: 810,
      pricePerNightPKR: 38000,
      pricePerNightUSD: 136,
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=900&q=80",
      description: "Universally known as 'Heaven on Earth'. Built around heart-shaped Lower Kachura Lake with Swiss-style red cottages and an airplane-cabin VIP cafe.",
      amenities: ["Heart-Shaped Lake View", "Private Boating Jetty", "Apple & Cherry Orchards", "Aircraft VIP Cafe", "Trout Fishing", "Free WiFi"],
      address: "Lower Kachura Lake, Skardu, Gilgit-Baltistan",
      badge: "Heaven on Earth"
    },
    {
      id: "nishat-hotel-lahore",
      name: "The Nishat Hotel Gulberg",
      city: "Lahore",
      cityId: "lahore",
      stars: 5,
      rating: 4.9,
      reviewsCount: 920,
      pricePerNightPKR: 42000,
      pricePerNightUSD: 151,
      image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=900&q=80",
      description: "Ultra-chic Parisian-inspired luxury boutique hotel in Lahore's premier shopping and dining district of Gulberg, adjacent to M.M. Alam Road.",
      amenities: ["Designer Suites", "Italian Marble Bathrooms", "Signature Bistro Dining", "Indoor Swimming Pool", "Fitness Studio", "Valet Parking"],
      address: "Mian Mehmood Ali Kasoori Rd, Gulberg III, Lahore",
      badge: "Boutique Glamour"
    },
    {
      id: "pc-peshawar",
      name: "Pearl Continental Hotel Peshawar",
      city: "Peshawar",
      cityId: "peshawar",
      stars: 5,
      rating: 4.8,
      reviewsCount: 840,
      pricePerNightPKR: 36000,
      pricePerNightUSD: 129,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80",
      description: "A legendary hospitality landmark overlooking historic Peshawar Golf Club. Offers royal Pashtun hospitality, outdoor pools, and Marco Polo fine dining.",
      amenities: ["Golf Course View", "Outdoor Swimming Pool", "Health Club & Sauna", "Authentic Shinwari Dining", "Free High-Speed WiFi", "Airport Transfer"],
      address: "Khyber Road, Peshawar Cantonment, Khyber Pakhtunkhwa",
      badge: "Historic Prestige"
    },
    {
      id: "serena-quetta",
      name: "Quetta Serena Hotel",
      city: "Quetta",
      cityId: "quetta",
      stars: 5,
      rating: 4.9,
      reviewsCount: 710,
      pricePerNightPKR: 45000,
      pricePerNightUSD: 162,
      image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=900&q=80",
      description: "Balochistan's finest 5-star haven set in 6 acres of rose gardens and fruit orchards, combining traditional Balochi Islamic arches with world-class luxury.",
      amenities: ["6 Acres of Rose Gardens", "Tennis & Squash Courts", "Heated Swimming Pool", "Ziarat Dining Lounge", "Free Airport Shuttle", "24/7 Security"],
      address: "Shahrah-e-Zarghoon, Quetta Cantonment, Balochistan",
      badge: "Rose Garden Haven"
    },
    {
      id: "pc-malam-jabba",
      name: "Pearl Continental Hotel Malam Jabba",
      city: "Swat",
      cityId: "swat",
      stars: 5,
      rating: 4.9,
      reviewsCount: 1100,
      pricePerNightPKR: 50000,
      pricePerNightUSD: 180,
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=900&q=80",
      description: "Directly located at the ski slopes of Malam Jabba at 2,800m altitude. Ski-in/ski-out access, floor-to-ceiling glass alpine dining, and roaring log fireplaces.",
      amenities: ["Ski Slope Balcony View", "Ski Equipment Rental", "Heated Alpine Chalets", "Dual Zipline Access", "Wood-fired Hearth Dining", "Free WiFi"],
      address: "Malam Jabba Ski Resort Peak, Swat Valley, KP",
      badge: "Alpine Ski Resort"
    },
    {
      id: "pc-bhurban",
      name: "Pearl Continental Hotel Bhurban",
      city: "Murree",
      cityId: "murree",
      stars: 5,
      rating: 4.9,
      reviewsCount: 1420,
      pricePerNightPKR: 46000,
      pricePerNightUSD: 165,
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=900&q=80",
      description: "Pakistan's most iconic mountain golf resort perched cliffside amidst lush pine forests overlooking Kashmir snow valleys. Features 9-hole golf and luxury spa.",
      amenities: ["Pine Valley Golf Course", "Heated Mountain Pool", "Luxury Wellness Spa", "Helipad & Valet", "Live Evening Music", "Free High-Speed WiFi"],
      address: "Murree Hills, Bhurban, Punjab",
      badge: "Mountain Golf Retreat"
    },
    {
      id: "ramada-multan",
      name: "Ramada by Wyndham Multan",
      city: "Multan",
      cityId: "multan",
      stars: 4,
      rating: 4.7,
      reviewsCount: 680,
      pricePerNightPKR: 32000,
      pricePerNightUSD: 115,
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=900&q=80",
      description: "Modern luxury hotel located near Multan International Airport and the historic city center, featuring a rooftop swimming pool and acclaimed BBQ dining.",
      amenities: ["Rooftop Swimming Pool", "Health Club & Jacuzzi", "Sufi Heritage Tour Desk", "Fine Dining Buffet", "Free Airport Shuttle", "Free WiFi"],
      address: "76 Abdali Road, Multan, Punjab",
      badge: "City Center Comfort"
    }
  ],

  testimonials: [
    {
      id: 1,
      name: "Alexander Wright",
      country: "United Kingdom",
      flag: "🇬🇧",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      role: "Adventure Photographer",
      rating: 5,
      date: "October 2024",
      quote: "Pakistan completely exceeded every expectation! The warmth and hospitality of the people in Lahore and the jaw-dropping vistas of Passu Cones in Hunza are simply unmatched anywhere in the world.",
      visited: "Lahore & Hunza Valley"
    },
    {
      id: 2,
      name: "Dr. Elena Rossi",
      country: "Italy",
      flag: "🇮🇹",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
      role: "Cultural Anthropologist",
      rating: 5,
      date: "September 2024",
      quote: "Badshahi Mosque at dusk brought tears to my eyes. Walking through the Walled City of Lahore and tasting the food on Fort Road is an experience that rivals Rome and Istanbul.",
      visited: "Lahore & Islamabad"
    },
    {
      id: 3,
      name: "David & Sarah Miller",
      country: "United States",
      flag: "🇺🇸",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      role: "World Travelers",
      rating: 5,
      date: "August 2024",
      quote: "We spent 14 days exploring Skardu, Fairy Meadows, and Karachi. The contrast between the Karakoram giants and the Arabian sea breeze at Clifton was sensational. Extremely safe and welcoming!",
      visited: "Skardu & Karachi"
    },
    {
      id: 4,
      name: "Tariq Al-Mansoor",
      country: "United Arab Emirates",
      flag: "🇦🇪",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      role: "Luxury Travel Creator",
      rating: 5,
      date: "November 2024",
      quote: "Islamabad Serena and Luxus Hunza offered five-star luxury alongside unparalleled natural wonder. The Pakistani E-Visa was approved in just 48 hours. I'll be returning every year!",
      visited: "Islamabad & Attabad Lake"
    }
  ],

  gallery: [
    {
      title: "Badshahi Mosque Twilight Glow",
      location: "Lahore, Punjab",
      category: "architecture",
      image: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1200&q=80",
      description: "The 17th-century Mughal masterpiece bathed in warm sunset hues against the ancient walled city."
    },
    {
      title: "Faisal Mosque & Margalla Backdrop",
      location: "Islamabad Capital",
      category: "architecture",
      image: "https://images.unsplash.com/photo-1627894006066-b457002016cb?auto=format&fit=crop&w=1200&q=80",
      description: "Iconic tent-shaped modern architecture cradled by lush Margalla foothills."
    },
    {
      title: "Attabad Lake Turquoise Waters",
      location: "Hunza Valley, Gilgit-Baltistan",
      category: "lakes",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
      description: "Crystal clear glacial waters surrounded by jagged Karakoram peaks."
    },
    {
      title: "Passu Cones Cathedral",
      location: "Upper Hunza, Gilgit-Baltistan",
      category: "mountains",
      image: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1200&q=80",
      description: "The serrated cathedral-like jagged peaks rising dramatically above the Karakoram Highway."
    },
    {
      title: "Clifton Beach Arabian Sunset",
      location: "Karachi, Sindh",
      category: "coastal",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      description: "Gentle Arabian Sea waves, camel rides, and golden skies at sunset along Clifton."
    },
    {
      title: "Nanga Parbat from Fairy Meadows",
      location: "Diamer, Gilgit-Baltistan",
      category: "mountains",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
      description: "The formidable 8,126m high 'Killer Mountain' rising abruptly behind quiet pine meadows."
    },
    {
      title: "Mazar-e-Quaid White Marble",
      location: "Karachi, Sindh",
      category: "architecture",
      image: "https://images.unsplash.com/photo-1589802829985-817e51171b92?auto=format&fit=crop&w=1200&q=80",
      description: "The immaculate pure white marble dome commemorating Pakistan's founding father."
    },
    {
      title: "Shangrila Resort Lake Kachura",
      location: "Skardu, Baltistan",
      category: "lakes",
      image: "https://images.unsplash.com/photo-1439853941329-a99ce049f07c?auto=format&fit=crop&w=1200&q=80",
      description: "Charming red roof chalets mirrored in the pristine waters of heart-shaped Lower Kachura."
    },
    {
      title: "Makran Coastal Formations",
      location: "Kund Malir, Balochistan",
      category: "coastal",
      image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1200&q=80",
      description: "Ethereal natural rock sculptures carved by centuries of Arabian sea winds."
    }
  ],

  faqs: [
    {
      q: "How easy is it to get a Pakistan Tourist Visa?",
      a: "Pakistan offers an online E-Visa portal for citizens of 191 countries! Most tourist visas are processed within 48 to 72 hours with a simple online application, requiring only your passport scan, photograph, and hotel booking confirmation or invitation letter. Over 120 nations also qualify for Visa on Arrival (Tourist)."
    },
    {
      q: "Is Pakistan safe for international travelers and solo tourists?",
      a: "Yes! Pakistan has welcomed hundreds of thousands of international tourists in recent years, including solo female travelers. Renowned international travel publications such as Condé Nast Traveler, British Backpacker Society, and Forbes ranked Pakistan among the world's top destinations. The hospitality is legendary, with locals frequently offering tea, directions, and assistance."
    },
    {
      q: "When is the best time of year to visit Pakistan?",
      a: "For Northern Alpine valleys (Hunza, Skardu, Fairy Meadows, Swat), the prime season is May through October, with cherry blossoms peaking in April and golden autumn foliage in October. For historical cultural cities (Lahore, Karachi, Multan, Islamabad) and Balochistan coastal parks, the winter months from November to March offer delightful, cool, and pleasant weather."
    },
    {
      q: "What currency should I carry, and are credit cards accepted?",
      a: "The currency is the Pakistani Rupee (PKR). Major international credit cards (Visa & Mastercard) are widely accepted in 4 and 5-star hotels, high-end restaurants, and shopping malls across Islamabad, Lahore, and Karachi. For northern valley bazaars, local transport, street food, and tips, carrying cash is recommended. ATMs are easily accessible across all major towns."
    },
    {
      q: "What should I wear during my trip?",
      a: "Pakistan is a welcoming and modest country. For men, jeans, t-shirts, and pants are completely standard everywhere. For women, modest clothing covering shoulders and knees (such as loose tops, trousers, or traditional Shalwar Kameez) is appreciated and comfortable. Carrying a light scarf is helpful when visiting religious heritage sites like Badshahi or Faisal Mosque."
    },
    {
      q: "How can I travel between Pakistani cities?",
      a: "Pakistan has extensive transport infrastructure. Domestic flights by PIA, Airblue, and Fly Jinnah connect Islamabad, Karachi, Lahore, and Skardu daily. For intercity road travel, comfortable luxury motor coaches like Daewoo Express and Faisal Movers operate round the clock. Private chauffeured SUVs (such as Toyota Prado or Grand Cabin) are popular for northern mountain excursions."
    }
  ],

  guides: {
    seasons: [
      { name: "Spring (March - April)", tag: "Blossom Season", icon: "🌸", desc: "Cherry, apricot, and almond blossoms bloom across Hunza, Swat, and Skardu. Pleasant weather across the plains." },
      { name: "Summer (May - August)", tag: "Peak Trekking", icon: "☀️", desc: "Warm sunny days in the north; ideal for Fairy Meadows, K2 base camp treks, and high mountain passes." },
      { name: "Autumn (September - November)", tag: "Golden Foliage", icon: "🍁", desc: "Crisp air and spectacular fiery golden and crimson foliage across northern orchards and lakes." },
      { name: "Winter (December - February)", tag: "Heritage & Skiing", icon: "❄️", desc: "Crisp pleasant weather for Karachi, Lahore, and Islamabad; skiing at Malam Jabba, Swat." }
    ],
    packing: [
      { item: "Modest, breathable cotton wear & layerable jackets", category: "Apparel" },
      { item: "Sturdy hiking or walking shoes with ankle support", category: "Footwear" },
      { item: "Sunscreen SPF 50+, sunglasses & UV lip balm", category: "Health" },
      { item: "Universal power adapter (Type C & D plugs, 230V)", category: "Electronics" },
      { item: "Portable power bank (10,000mAh+) for mountain day trips", category: "Electronics" },
      { item: "Local 4G SIM (Zong or Scom for Gilgit-Baltistan)", category: "Connectivity" }
    ],
    emergencyNumbers: [
      { name: "National Tourist Police", number: "1422", desc: "Dedicated 24/7 multilingual tourist assistance" },
      { name: "Rescue Emergency", number: "1122", desc: "Nationwide medical & fire response" },
      { name: "Police Emergency", number: "15", desc: "Local police dispatch" },
      { name: "Edhi Ambulance Service", number: "115", desc: "Pakistan's largest humanitarian ambulance network" }
    ]
  }
};

// Export to window & Node.js
if (typeof window !== "undefined") {
  window.PAKISTAN_DATA = PAKISTAN_DATA;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = PAKISTAN_DATA;
}
