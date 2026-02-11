const suggestions = [
    "What is the longest cricket match?",
    "What are some fun cricket facts?",
    "What is the highest individual score in Test match?",
    "Tell me about Lord Bertie",
    "Gossip about minor nobility",
    "Who is Lady Agatha?",
    "Cricket ball speed",
    "Lord Bertie's favorite tea",
    "Lady Agatha's latest hat",
    "Sir Reginald's cat",
    "What is the speed of a cricket ball?",
    "What is the shortest cricket match?",
    "What are the rules of cricket?",
    "What is the history of cricket?",
    "Forty-Seven Ginger-Headed Sailors",
    "Minnie the Moocher",
    "Popular songs from the 1930s",
    "Lyrics to old songs",
    "What's for dinner at the Drones Club?",
    "Anatole's latest creation",
    "Best restaurants in Mayfair",
    "What should I wear to Ascot?",
    "Proper attire for a country weekend",
    "Spats or no spats?",
    "Tell me about Aunt Agatha",
    "How to avoid one's aunt",
    "Drones Club membership",
    "Who won the Drones Club darts tournament?",
    "Jeeves",
    "What would Jeeves do?",
    "Where is Brinkley Court?",
    "Newt-fancying tips"
];

const randomCricketStats = [
    "did you know? The longest cricket match lasted 14 days!",
    "fun fact: A cricket ball can reach speeds of over 90 mph.",
    "random stat: The highest individual score in a Test match is 400 not out.",
    "the shortest cricket match lasted just 10 minutes!",
    "cricket was first played in the 16th century.",
    "the first international cricket match was played between the USA and Canada in 1844.",
    "The Ashes series is one of the oldest rivalries in cricket, dating back to 1882.",
    "Sachin Tendulkar holds the record for the most runs in international cricket.",
    "the first Cricket World Cup was held in 1975 in England.",
    "a cricket ball is made of cork and leather and weighs between 155.9 and 163 grams.",
    "the highest team score in a Test match is 952/6 declared by Sri Lanka.",
    "the fastest century in ODI cricket was scored by AB de Villiers in just 31 balls.",
    "the first T20 International match was played between Australia and New Zealand in 2005.",
    "the longest six in cricket history was hit by Shahid Afridi, measuring 158 meters.",
    "the first cricket club was established in Hambledon, England, in the 1760s.",
    "the term 'hat-trick' originated in cricket when a bowler took three wickets in three consecutive deliveries.",
    "the first women's cricket match was played in 1745 in England.",
    "the highest individual score in ODI cricket is 264 by Rohit Sharma.",
    "the first cricket match played under lights was in 1977 in Australia.",
    "the record for the most wickets in Test cricket is held by Muttiah Muralitharan with 800 wickets."
];


const minorNobilityGossip = [
    "rumor has it that Lord Bertie enjoys tea with a splash of lemon.",
    "Lady Agatha was seen at the latest garden party wearing a stunning hat.",
    "did you hear? Sir Reginald's cat won a local pet show!",
    "Lord Bertie was spotted at the opera last night.",
    "Lady Agatha is rumored to be writing a novel.",
    "Sir Reginald's estate is said to have the best rose garden in the county.",
    "Lord Bertie recently acquired a rare collection of vintage cars.",
    "Lady Agatha hosted a charity ball that raised a significant amount for local schools.",
    "Sir Reginald is known for his impeccable taste in fine wines.",
    "Lord Bertie is an avid collector of antique books.",
    "Lady Agatha's latest hat is said to be inspired by 18th-century fashion.",
    "Sir Reginald's cat, Whiskers, has its own Instagram account with thousands of followers.",
    "Lord Bertie was seen playing croquet with the Duchess of Wellingborough.",
    "Lady Agatha's garden parties are the talk of the town.",
    "Sir Reginald is rumored to be planning a grand tour of Europe.",
    "Lord Bertie has a secret talent for painting landscapes.",
    "Lady Agatha's latest novel is set to be a bestseller.",
    "Sir Reginald's estate is rumored to have a hidden treasure.",
    "Lord Bertie is known for his elaborate tea parties.",
    "Lady Agatha's latest hat was designed by a famous milliner."
];


const songSuggestions = [
    "Forty-Seven Ginger-Headed Sailors",
    "Minnie the Moocher",
    "The Lambeth Walk",
    "Cheek to Cheek",
    "Sing, Sing, Sing",
    "In the Mood",
    "Pennies from Heaven",
    "Over the Rainbow",
    "As Time Goes By",
    "Blue Moon",
    "A-Tisket, A-Tasket",
    "Begin the Beguine",
    "Night and Day",
    "The Way You Look Tonight",
    "Summertime",
    "It Don't Mean a Thing (If It Ain't Got That Swing)",
    "All of Me",
    "Dream a Little Dream of Me",
    "Sonny Boy",
    "Nagasaki",
    "Let's Do It, Let's Fall in Love"
];

const diningAnecdotes = [
    "Anatole's latest souffl\u00e9 was so magnificent that Aunt Dahlia nearly wept into her napkin.",
    "the Drones Club kitchen once served a thing they called 'Spotted Dog' and three members had to lie down afterwards.",
    "I had the most extraordinary lobster thermidor at the Savoy. Couldn't tell you what was in it, but it was absolutely top-hole.",
    "Anatole threatened to hand in his notice again because someone suggested his B\u00e9arnaise was 'nice.' The man is an artist!",
    "the Drones Club once attempted a formal dinner and Barmy Fotheringay-Phipps got his tie caught in the soup tureen.",
    "Tuppy Glossop ate an entire round of Stilton at one sitting and had to be helped to a sofa.",
    "Aunt Dahlia says a cook like Anatole comes along once in a generation. She'd commit actual crimes to keep him.",
    "the bread rolls at the Drones Club have been used in more food fights than actual meals.",
    "one should never underestimate the restorative power of a well-made omelette at 3 a.m.",
    "Boko Fittleworth once wagered he could eat a dozen oysters in under a minute. He managed nine before things went south.",
    "the kedgeree at Brinkley Court is the sort of thing that reconciles one to being alive in the morning.",
    "Gussie Fink-Nottle once tried to serve newt-shaped biscuits at a tea party. Nobody ate them.",
    "I asked the waiter at the Junior Ganymede for something light and he brought me a salad. A salad! I ask you.",
    "Anatole's cr\u00eapes suzette have been known to resolve family feuds on the spot."
];

const fashionOpinions = [
    "I put on the purple socks and Jeeves gave me a look that could have frozen the Sahara. They had to go.",
    "a gentleman's tie should never make a statement louder than 'I say, rather nice, what?' Jeeves is firm on this.",
    "Jeeves once disposed of a perfectly good checked blazer while I was in the bath. I found out at Ascot.",
    "the white mess jacket affair nearly ended our professional relationship. Jeeves simply would not bend.",
    "Bingo Little turned up at the races in a yellow waistcoat. Even the horses looked disapproving.",
    "spats are a dying art, and frankly I blame the younger generation. No sense of ankle elegance.",
    "I maintain that an Alpine hat with a feather has a certain continental dash. Jeeves maintains that it doesn't.",
    "one's cummerbund should complement one's spirit, I always say. Jeeves says it should complement one's waistcoat.",
    "Freddie Widgeon appeared at the Drones in orange plus-fours. He was asked to leave by three separate members.",
    "there is a right way and a wrong way to wear a monocle. Most chaps only discover the wrong way.",
    "I once wore a sky-blue tie with forget-me-nots on it. Jeeves handed in his notice before lunch.",
    "the old school tie is the bedrock of civilisation, or so Uncle Tom insists after his third sherry.",
    "Jeeves has opinions about trouser width that border on the theological.",
    "proper morning dress is the uniform of the English gentleman. Improper morning dress is the uniform of Bertie's friends."
];

const auntAnecdotes = [
    "Aunt Agatha is the one who eats broken bottles and turns into a werewolf at the full moon. Avoid at all costs.",
    "Aunt Dahlia is the good aunt. The one who doesn't make you feel like a worm that has been trodden on.",
    "Aunt Agatha once fixed me with a look that made me feel I'd been caught stealing the church silver.",
    "I've faced charging bulls with more composure than I face Aunt Agatha's drawing room.",
    "Aunt Dahlia's bellow can shatter glass at forty paces. She acquired it hunting foxes in Gloucestershire.",
    "Aunt Agatha has been trying to marry me off since before I could tie my own shoelaces. Jeeves ties them now, but that's beside the point.",
    "when Aunt Agatha says 'come to dinner,' it's less an invitation and more a summons to appear before the beak.",
    "Aunt Dahlia once blackmailed me into stealing a cow creamer. One does these things for the good aunts.",
    "the trouble with aunts is that they never forget. Elephants wish they had the memory of Aunt Agatha.",
    "Aunt Agatha once described me as 'mentally negligible.' I'd have been offended if I'd known what it meant at the time.",
    "I maintain that an aunt is only dangerous when cornered. Jeeves says I have that backwards.",
    "Aunt Dahlia's magazine, Milady's Boudoir, has been on the verge of financial ruin since roughly 1911. It's tradition at this point.",
    "one cannot choose one's aunts. This is perhaps the greatest failing of our civilisation."
];

const dronesClubStories = [
    "Barmy Fotheringay-Phipps bet Oofy Prosser he couldn't eat his hat. Oofy couldn't, but he tried, and that's what counts at the Drones.",
    "the Drones Club darts tournament ended in a draw after both finalists hit the waiter.",
    "someone released a pig in the Drones smoking room last Tuesday. Opinions differ on whether this improved the atmosphere.",
    "Freddie Widgeon was banned from the Drones Club card room after attempting to pay his debts in postage stamps.",
    "the Drones Club swimming pool has been 'temporarily closed' since 1928. Nobody asks why.",
    "Catsmeat Potter-Pirbright once gave an impromptu dramatic recitation at the Drones. The membership has not recovered.",
    "the portrait of the Club Founder in the main hall has been defaced so many times they just leave a moustache on it now.",
    "Oofy Prosser is the richest member of the Drones and the least likely to buy you a drink. These facts are not unrelated.",
    "the Drones Club once fielded a cricket team. They were all out for seven. Two of those were extras.",
    "Bingo Little has fallen in love with the Drones Club barmaid, the hat-check girl, and a waitress. This month.",
    "the annual Drones Club Christmas pantomime is the reason three members emigrated to Kenya.",
    "someone hung a 'Do Not Disturb' sign on the Drones Club entrance. It stayed up for a fortnight before anyone noticed.",
    "the Drones Club suggestion box was discontinued after it was used exclusively for paper aeroplanes."
];

const bertiePreambles = [
    "Oh, I wouldn't know\u2026, but ",
    "Well, what I mean to say is\u2026 ",
    "I say! ",
    "Dash it all, ",
    "Well, it's like this, old thing\u2014 ",
    "Funny you should ask\u2014 ",
    "Now, I'm no expert, but ",
    "Right ho! ",
    "Between you and me and the lamp-post, ",
    "I had it from a reliable source that ",
    "As I was saying to Jeeves only this morning, ",
    "Well, you know how it is\u2014 ",
    "I don't want to alarm you, but ",
    "Brace yourself, old fruit\u2014 "
];

const easterEggs = {
    "jeeves": [
        "Jeeves? Oh, you want the competent one. I'm just Bertie. Jeeves would have had a proper answer for you\u2014probably involving Spinoza or fish or something.",
        "You're looking for Jeeves? He's off ironing my socks or reading philosophy or doing whatever it is that makes him so dashedly omniscient.",
        "Jeeves shimmered in a moment ago, said something tremendously clever, and shimmered out again before I could write it down. Typical.",
        "I did ask Jeeves about this once. He raised one eyebrow approximately one-eighth of an inch and I knew the subject was closed."
    ],
    "wooster": [
        "Wooster? That's me, old thing! Bertram Wilberforce Wooster, at your service. Though 'service' might be overselling it a bit.",
        "Ah, you've heard of me! I am rather well-known in certain circles. Mostly for getting into scrapes, I'm told.",
        "The Wooster name is an ancient and honourable one, despite what Aunt Agatha says about my branch of the family."
    ],
    "anatole": [
        "Anatole! The god of the kitchen! The man could make a souffl\u00e9 that would bring tears to a glass eye.",
        "Anatole is Aunt Dahlia's chef, and the entire reason one tolerates being summoned to Brinkley Court.",
        "Anatole once threatened to leave because someone put ketchup on his coq au vin. Aunt Dahlia nearly declared war."
    ],
    "aunt agatha": [
        "AUNT AGATHA? Why would you search for that?! Are you trying to summon her? Quick, close the browser!",
        "Aunt Agatha is my aunt. She is the one who chews broken bottles and kills rats with her teeth. I strongly advise not searching further.",
        "The mere mention of Aunt Agatha causes a chill to run down the Wooster spine. You have been warned."
    ],
    "newt": [
        "Newts! That's Gussie Fink-Nottle's department. The man is absolutely potty about the little blighters.",
        "Gussie keeps newts. In tanks. In his bedroom. One doesn't ask why. One simply accepts and moves on.",
        "I understand newts are amphibious and enjoy a damp environment, rather like Gussie himself."
    ],
    "drones": [
        "The Drones Club! Finest establishment in London, provided you don't mind the occasional bread roll sailing past your ear.",
        "The Drones Club is where the flower of English manhood goes to throw bread rolls, lose at darts, and avoid their creditors.",
        "If you're looking for the Drones Club, it's in Mayfair. If you're looking for sense in the Drones Club, you're in the wrong establishment."
    ]
};

function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomPreamble() {
    return bertiePreambles[Math.floor(Math.random() * bertiePreambles.length)];
}

function showSuggestions() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const suggestionsDiv = document.getElementById('autocompleteSuggestions');
    suggestionsDiv.innerHTML = '';

    if (input) {
        const filteredSuggestions = suggestions.filter(suggestion => suggestion.toLowerCase().includes(input));
        filteredSuggestions.forEach(suggestion => {
            const suggestionDiv = document.createElement('div');
            suggestionDiv.textContent = suggestion;
            suggestionDiv.onclick = () => {
                document.getElementById('searchInput').value = suggestion;
                suggestionsDiv.innerHTML = '';
            };
            suggestionsDiv.appendChild(suggestionDiv);
        });
    }
}

function checkEasterEggs(query) {
    for (const [keyword, responses] of Object.entries(easterEggs)) {
        if (query.includes(keyword)) {
            return getRandomItem(responses);
        }
    }
    return null;
}

function showResults() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const resultsDiv = document.getElementById('results');
    let resultsHtml = '<h2>Search Results for "' + document.getElementById('searchInput').value + '"</h2>';

    // Check for easter eggs first
    const easterEgg = checkEasterEggs(query);
    if (easterEgg) {
        resultsHtml += "<p>" + getRandomPreamble() + easterEgg + '</p>';
    } else if (query.includes("cricket")) {
        resultsHtml += "<p>" + getRandomPreamble() + getRandomItem(randomCricketStats) + '</p>';
    } else if (query.includes("gossip") || query.includes("lord") || query.includes("lady") || query.includes("sir")) {
        resultsHtml += "<p>" + getRandomPreamble() + getRandomItem(minorNobilityGossip) + '</p>';
    } else if (query.includes("song") || query.includes("lyric") || query.includes("music") || query.includes("sing")) {
        resultsHtml += "<p>" + getRandomPreamble() + "what about " + getRandomItem(songSuggestions) + '?</p>';
    } else if (query.includes("food") || query.includes("dinner") || query.includes("lunch") || query.includes("eat") || query.includes("cook") || query.includes("chef") || query.includes("restaurant") || query.includes("meal")) {
        resultsHtml += "<p>" + getRandomPreamble() + getRandomItem(diningAnecdotes) + '</p>';
    } else if (query.includes("wear") || query.includes("fashion") || query.includes("clothes") || query.includes("dress") || query.includes("hat") || query.includes("suit") || query.includes("sock") || query.includes("spat") || query.includes("tie") || query.includes("attire")) {
        resultsHtml += "<p>" + getRandomPreamble() + getRandomItem(fashionOpinions) + '</p>';
    } else if (query.includes("aunt") || query.includes("agatha") || query.includes("dahlia")) {
        resultsHtml += "<p>" + getRandomPreamble() + getRandomItem(auntAnecdotes) + '</p>';
    } else if (query.includes("club") || query.includes("barmy") || query.includes("bingo") || query.includes("oofy") || query.includes("tuppy") || query.includes("freddie")) {
        resultsHtml += "<p>" + getRandomPreamble() + getRandomItem(dronesClubStories) + '</p>';
    } else {
        // Default: give a random mix from all categories
        const allResponses = [
            ...randomCricketStats,
            ...minorNobilityGossip,
            ...diningAnecdotes,
            ...fashionOpinions,
            ...auntAnecdotes,
            ...dronesClubStories
        ];
        const first = getRandomItem(allResponses);
        let second = getRandomItem(allResponses);
        while (second === first) {
            second = getRandomItem(allResponses);
        }
        resultsHtml += '<p>' + getRandomPreamble() + first + '</p>';
        resultsHtml += '<p>' + getRandomPreamble() + second + '</p>';
    }

    resultsDiv.innerHTML = resultsHtml;
}

document.getElementById('searchInput').addEventListener('input', showSuggestions);
