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
    "Did you know? The longest cricket match lasted 14 days!",
    "Fun fact: A cricket ball can reach speeds of over 90 mph.",
    "Random stat: The highest individual score in a Test match is 400 not out.",
    "The shortest cricket match lasted just 10 minutes!",
    "Cricket was first played in the 16th century.",
    "The first international cricket match was played between the USA and Canada in 1844."
];

const minorNobilityGossip = [
    "Rumor has it that Lord Bertie enjoys tea with a splash of lemon.",
    "Lady Agatha was seen at the latest garden party wearing a stunning hat.",
    "Did you hear? Sir Reginald's cat won a local pet show!",
    "Lord Bertie was spotted at the opera last night.",
    "Lady Agatha is rumored to be writing a novel.",
    "Sir Reginald's estate is said to have the best rose garden in the county."
];

const songSuggestions = [
    "Forty-Seven Ginger-Headed Sailors",
    "Minnie the Moocher",
    "Popular songs from the 1930s",
    "Lyrics to old songs"
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
        resultsHtml += '<p>' + randomStat + '</p>';
    } else if (query.includes("gossip") || query.includes("lord") || query.includes("lady") || query.includes("sir")) {
        const randomGossip = minorNobilityGossip[Math.floor(Math.random() * minorNobilityGossip.length)];
        resultsHtml += '<p>' + randomGossip + '</p>';
    } else if (query.includes("song") || query.includes("lyric")) {
        const randomSong = songSuggestions[Math.floor(Math.random() * songSuggestions.length)];
        resultsHtml += '<p>' + randomSong + '</p>';
    } else {
        const randomStat = randomCricketStats[Math.floor(Math.random() * randomCricketStats.length)];
        const randomGossip = minorNobilityGossip[Math.floor(Math.random() * minorNobilityGossip.length)];
        resultsHtml += '<p>' + randomStat + '</p>';
        resultsHtml += '<p>' + randomGossip + '</p>';
    }

    resultsDiv.innerHTML = resultsHtml;
}

document.getElementById('searchInput').addEventListener('input', showSuggestions);