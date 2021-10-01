const discord = require('discord.js')

const words = ["highway", "agency", "poet", "student", "pollution", "office", "insurance", "person", "health", "session", "warning", "attitude", "analysis", "trainer", "paper", "attention", "currency", "chocolate", "depth", "dealer", "dinner", "night", "drawer", "tennis", "singer", "virus", "college", "oven", "uncle", "arrival", "recording", "sector", "flight", "emotion", "meaning", "moment", "elevator", "lab", "teaching", "ad", "sister", "artisan", "memory", "studio", "goal", "currency", "employer", "camera", "marketing", "quantity", "clothes", "tale", "leader", "solution", "cousin", "republic", "signature", "idea", "moment", "basket", "homework", "hospital", "direction", "potato", "death", "scene", "committee", "version", "childhood", "manager", "menu", "mud", "people", "love", "king", "drawing", "housing", "hearing", "insect", "lake", "gate", "category", "theory", "movie", "inflation", "media", "arrival", "week", "outcome", "health", "recipe", "payment", "oven", "inspector", "intention", "song", "apartment", "dirt", "food", "medicine", "growth", "funeral", "concept", "throat", "reality", "mud", "awareness", "sister", "context", "cancer", "actor", "bread", "basis", "reading", "college", "climate", "theory", "industry", "idea", "volume", "region", "hearing", "security", "clothes", "director", "data", "opinion", "confusion", "camera", "sympathy", "signature", "complaint", "message", "wealth", "drawing", "secretary", "wing", "uppity", "shallow", "wrist", "body", "develop", "ground", "snails", "squealing", "drug", "army", "sad", "cherries", "rabbit", "rock", "helpless", "flowers", "cows", "ready", "zany", "yellow", "save", "listen", "accidental", "tacky", "horrible", "flagrant", "nervous", "flock", "bear", "cure", "bag", "mom", "cup", "wed", "letter", "eggs", "illumine", "sheet", "dusty", "frogs", "aboard", "bed", "reply", "receipt", "grandiose", "shrill", "new", "dump", "painstaking", "journey", "month", "passenger", "scam", "tree", "determine", "town", "hinder", "book", "mammoth", "shun", "resemble", "face", "toys", "card", "act", "zonked", "ill", "foretell", "tame", "encouraging", "action", "possessive", "imperfect", "angle", "determined", "present", "contract", "waggish", "lazy", "produce", "mute", "spectacular", "restrain", "time", "horn", "thought", "special", "physical", "boil", "lock", "accurate", "bridge", "confuse", "fiction", "airplane", "placid", "team", "serious", "dependent", "crave", "girl", "burn", "blow", "separate", "person", "cower", "vomit", "run", "stretch", "handy", "efficient", "stitch", "hoax", "blush", "net", "far", "fax", "boy", "doctor", "cellar", "knotty", "compare", "view", "sew", "madly", "chubby", "damp", "touch", "numberless", "halting", "innocent", "glance", "insure", "cup", "crack", "mature", "instrument", "google", "engine", "damage", "burst", "rampant", "describe", "observant", "exchange", "penitent", "intelligent", "install", "courageous", "terrible", "agreeable", "system", "inspire", "pretty", "book", "bell", "teach", "step", "rend", "curve", "squealing", "act", "dispensable", "ants", "gabby", "jar", "pollute", "hair", "request", "omit", "conduct", "afterthought", "axiomatic", "earthquake", "convey", "fall", "irritating", "peep", "fortunate", "capture", "sever", "burn", "egg", "dusty", "aromatic", "stranger", "self", "compete", "busy", "sack", "vase", "conduct", "overtake", "colour", "appliance", "shut", "base", "history", "rot", "uptight", "contest", "clever", "dwell", "quince", "lunchroom", "carpenter", "animate", "fallacious", "evaporate", "mean", "present", "fertile", "painful", "window", "knotty", "complain", "willing", "spy", "bind", "stupendous", "nourish", "thinkable", "satisfying", "feigned", "superb", "makeshift", "ducks", "show", "warlike", "let", "brave", "convert", "resolute", "innovate", "irate", "limping", "omniscient", "conclude", "thing", "mind", "snakes", "finger", "whole", "brave", "existence", "bird", "obstructd"];
class typer {

    constructor() {
        this.word = ""
    }

    startGame(msg) {

        let word = words[Math.floor(Math.random() * words.length)]

        let beginEmbed = new discord.MessageEmbed()
        .setColor("#960202")
        .setTitle(`Typer`)
        .setDescription(`**Choosing a word...**
        Games begins in 5 seconds...
        Game begins in 4 seconds...
        Game begins in 3 seconds...
        Game begins in 2 seconds...
        Game begins in 1 second...
        The word is...`)
        .setTimestamp()

        msg.channel.send(beginEmbed).then(emsg => {

            msg.channel.awaitMessages(m => m.content.toLowerCase().startsWith(word),
            {max: 1, time: 60000}).then(async collected => {

                let firstCollected = collected.first().content

                collected.first().react('🎉')
            
                let winnerEmbed = new discord.MessageEmbed()
                .setColor("BLUE")
                .setTitle(`Fast Typer`)
                .setDescription(`Choosing a word...
                Games begins in 5 seconds...
                Game begins in 4 seconds...
                Game begins in 3 seconds...
                Game begins in 2 seconds...
                Game begins in 1 second...
                The word is ${word}
                
                **GG!**
                **The winner is ${collected.first().author}**`)
                .setTimestamp()
                emsg.edit(winnerEmbed)
            }).catch(err => {

                let timeEmbed = new discord.MessageEmbed()
                .setColor("BLUE")
                .setTitle(`Typer`)
                .setDescription(`**You were late to type the word correctly!**`)
                .setTimestamp()
                return emsg.edit(timeEmbed)
            })

            setTimeout(() => {

                let second1 = new discord.MessageEmbed()
                .setColor("BLUE")
                .setTitle(`Typer`)
                .setDescription(`Choosing a word...
                **Games begins in 5 seconds...**
                Game begins in 4 seconds...
                Game begins in 3 seconds...
                Game begins in 2 seconds...
                Game begins in 1 second...
                The word is...`)
                .setTimestamp()

                emsg.edit(second1)
    
                setTimeout(() => {

                    let second2 = new discord.MessageEmbed()
                    .setColor("BLUE")
                    .setTitle(`Typer`)
                    .setDescription(`Choosing a word...
                    Games begins in 5 seconds...
                    **Game begins in 4 seconds...**
                    Game begins in 3 seconds...
                    Game begins in 2 seconds...
                    Game begins in 1 second...
                    The word is...`)
                    .setTimestamp()
    
                    emsg.edit(second2)
    
                    setTimeout(() => {

                        let second3 = new discord.MessageEmbed()
                        .setColor("BLUE")
                        .setTitle(`Typer`)
                        .setDescription(`Choosing a word...
                        Games begins in 5 seconds...
                        Game begins in 4 seconds...
                        **Game begins in 3 seconds...**
                        Game begins in 2 seconds...
                        Game begins in 1 second...
                        The word is...`)
                        .setTimestamp()
    
                        emsg.edit(second3)
    
                        setTimeout(() => {

                            let second4 = new discord.MessageEmbed()
                            .setColor("BLUE")
                            .setTitle(`Typer`)
                            .setDescription(`Choosing a word...
                            Games begins in 5 seconds...
                            Game begins in 4 seconds...
                            Game begins in 3 seconds...
                            **Game begins in 2 seconds...**
                            Game begins in 1 second...
                            The word is...`)
                            .setTimestamp()
    
                            emsg.edit(second4)
    
                            setTimeout(() => {

                                let second5 = new discord.MessageEmbed()
                                .setColor("BLUE")
                                .setTitle(`Typer`)
                                .setDescription(`Choosing a word...
                                Games begins in 5 seconds...
                                Game begins in 4 seconds...
                                Game begins in 3 seconds...
                                Game begins in 2 seconds...
                                **Game begins in 1 second...**
                                The word is...`)
                                .setTimestamp()
    
                                emsg.edit(second5)
    
                                setTimeout(() => {

                                    let second6 = new discord.MessageEmbed()
                                    .setColor("BLUE")
                                    .setTitle(`Typer`)
                                    .setDescription(`Choosing a word...
                                    Games begins in 5 seconds...
                                    Game begins in 4 seconds...
                                    Game begins in 3 seconds...
                                    Game begins in 2 seconds...
                                    Game begins in 1 second...
                                    **The word is... ${word}**`)
                                    .setTimestamp()
    
                                    emsg.edit(second6)
                                    
                                }, 1000)
                                
                            }, 1000)
                            
                        }, 1000)
                        
                    }, 1000)
                    
                }, 1000)
    
            }, 1000)

        })
    }

}

module.exports = typer