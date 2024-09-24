function showResults() {
    const query = document.getElementById('searchInput').value;
    const resultsDiv = document.getElementById('results');
    let resultsHtml = '<h2>Search Results for "' + query + '"</h2>';

    // Generate random cricket stats and minor nobility gossip
    const randomCricketStats = [
        "Did you know? The longest cricket match lasted 14 days!",
        "Fun fact: A cricket ball can reach speeds of over 90 mph.",
        "Random stat: The highest individual score in a Test match is 400 not out."
    ];
    const minorNobilityGossip = [
        "Rumor has it that Lord Bertie enjoys tea with a splash of lemon.",
        "Lady Agatha was seen at the latest garden party wearing a stunning hat.",
        "Did you hear? Sir Reginald's cat won a local pet show!"
    ];

    // Randomly select a cricket stat and a piece of gossip
    const randomStat = randomCricketStats[Math.floor(Math.random() * randomCricketStats.length)];
    const randomGossip = minorNobilityGossip[Math.floor(Math.random() * minorNobilityGossip.length)];

    resultsHtml += '<p>' + randomStat + '</p>';
    resultsHtml += '<p>' + randomGossip + '</p>';

    resultsDiv.innerHTML = resultsHtml;
}