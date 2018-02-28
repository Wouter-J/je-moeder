const jokes = [
        "Je moeder is zo dik dat ze in haar eentje al groepskorting krijgt", 
        "Je moeder is zo lelijk dat ze niet eens kans maakt bij blinden", 
        "Je moeder kan zo slecht schilderen, dat haar schilderijen zichzelf ophangen",
        "Het gewicht van jouw moeder is zo groot dat ze een integer overflow veroorzaakt"
    ]

exports.Joke = function() {
    const rand = jokes[Math.floor(Math.random() * jokes.length)]
    console.log(rand)
}

exports.JokeString = function() {
    const rand = jokes[Math.floor(Math.random() * jokes.length)]
    return rand
}
