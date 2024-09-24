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
    "Lyrics to old songs"
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
    "Dream a Little Dream of Me"
];

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

function showResults() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const resultsDiv = document.getElementById('results');
    let resultsHtml = '<h2>Search Results for "' + query + '"</h2>';

    if (query.includes("cricket")) {
        const randomStat = randomCricketStats[Math.floor(Math.random() * randomCricketStats.length)];
        resultsHtml += "<p>Oh, I wouldn't know…, but " + randomStat + '</p>';
    } else if (query.includes("gossip") || query.includes("lord") || query.includes("lady") || query.includes("sir")) {
        const randomGossip = minorNobilityGossip[Math.floor(Math.random() * minorNobilityGossip.length)];
        resultsHtml += "<p>Oh, I wouldn't know…, but " + randomGossip + '</p>';
    } else if (query.includes("song") || query.includes("lyric")) {
        const randomSong = songSuggestions[Math.floor(Math.random() * songSuggestions.length)];
        resultsHtml += "<p>Oh, I wouldn't know…, but what about " + randomSong + '</p>';
    } else {
        const randomStat = randomCricketStats[Math.floor(Math.random() * randomCricketStats.length)];
        const randomGossip = minorNobilityGossip[Math.floor(Math.random() * minorNobilityGossip.length)];
        resultsHtml += '<p>' + randomStat + '</p>';
        resultsHtml += '<p>' + randomGossip + '</p>';
    }

    resultsDiv.innerHTML = resultsHtml;
}

document.getElementById('searchInput').addEventListener('input', showSuggestions);