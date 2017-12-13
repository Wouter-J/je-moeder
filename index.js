exports.Joke = function() {
    var jokes = [
        "Je moeder is zo dik dat ze in haar eentje al groepskorting krijgt", 
        "Je moeder is zo lelijk dat ze niet eens kans maakt bij blinden", 
        "Je moeder kan zo slecht schilderen, dat haar schilderijen zichzelf ophangen"
    ];
    var rand = jokes[Math.floor(Math.random() * jokes.length)];
    console.log(rand);
}