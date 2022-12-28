
const generateQuote = function() {
    const quotes = [
    {quote: "You know what attract me the most? Your smile. oh wait ... yeah definately your smile."},
    {quote: "There is not single day that I stop thinking of you."},
    {quote: "Do you remember our talk about if we meet each other for the first time, we will do the koala hug? hahaha ."},
    {quote: "Hey, sexy man. Want to go out for a date with me?"},
    {quote: "I'm a little sad that we will never doing a lot of things that normal couple do in this couple of years. But this will not stop me from doing things for you "},
    {quote: "I love that everytimes we are together, we can talk about anything."},
    {quote: "Thanks for always be there for me through the happy and sucky moments."},
    {quote: "You know, I always get shy everytime you are looking at me. like ouhmagoshhhh!"},
    {quote: "This one is simple: I love you, Te amo, ฉันรักคุณ."},
    {quote: "Thanks for except me for who I am."},
    {quote: "Don't forget to tell my mom to pay for overdue therapy session hahaha."},
    {quote: "Let's me remind you how cute you are, my sweet luca."},
    {quote: "Do you remember our song? Spoiler alert: It's Take On Me."},
    {quote: "I'm so proud of what you have accomplish so far. I can't wait to see what you will achieve more."},
    {quote: "How it's going with your foot pics business? just kidding hehehe."},
    {quote: "There is something in my eyes. Oh, it's you muuuah. "},
    {quote: "Sometimes I can't believe that you are mine. Thanks Covid."},
    {quote: "*whisper* hey, I have something to tell you. Come closer. MUAH! I love you."},
    {quote: "Would you like a cup of mate? I will make it just the way you like it."},
    {quote: "You know. I never idealized you at all because you are already everything that I was looking for."},
    {quote: "I can garantee that my boyfriend has the sexiest butt."},
    {quote: "Yamete kudasai!!!!"},
    {quote: "You are my best, my ghosties, my love. I love you so much."},
    {quote: "No hablo mucho espanol pero te queiro y te amo mucho."},
    {quote: "I got to confess, I want to ride your daytona hahahah."},
    {quote: "COMMAMOS!!!"},
    {quote: "Can I kiss your sexy beast titan tummy? plzzzz."},
    {quote: "Thanks for prepare all the stuff at the apartment for us. I really appreciate it honey."},
    {quote: "You will be the only person I choose, always."},
    {quote: "When you feeling tired or doubting in yourself, I want you to remind yourself that you can do it! JUST DO IT!!!"},
    {quote: "Remember when you said we will go pick a plant together? What should we get?"},
    {quote: "Thanks for introduce me to Babasonicos, I have become a fan of this band because of you"},
    {quote: "I have never love anyone the way I love you."},
    {quote: "I know sometime I use my hormone as an excuse, I just don't want to look needy infront of you"},
    {quote: "I know I am sensitive and cry a lot but you always find a way to cheer me up. Thanks for always take care of me"},
    {quote: "Confession, I make this at 2am. Now you are in the pool party and I'm in bed create this masterpiece."},
    {quote: "I have all your gifts that you give me every monthly anniversary. I cherish all of them."},
    {quote: "Good day. How are you doing today my love? I'm good too. Thanks for asking"},
    {quote: "I want to hold your hand when we walk. It might be sweaty but I will love it"},
    {quote: "I miss seeing my favorite person. Can you call me or text me?"},
    {quote: "To be honest, if we break up I won't have any fate in love anymore. Let me introduce you to my 15 cats."},
    {quote: "Yes, I pronouse Eminem as M&M 5555 you heard it correct"},
    {quote: "My sorry if I ever make you sad or worry, I promise I will always make up for it because I want my luca happy."},
    {quote: "I like how you look with that painting pants. So sexy my god"},
    {quote: "Yes, I would love to spend the rest of my life making you mate every morning"},
    {quote: "I'm so excited to be there. But anywhere with you is home"},
    {quote: "I can't wait to have an actual date with you in the park"},
    {quote: "I have never thought I would go crazy when someone call me 'baby'."},
    {quote: "You are the best thing that happen in my life. I'm so grateful to know you"},
    {quote: "I have prepare 3 surprise for you. You will see them when I'm in Argentina hehehe I know you will love it"},
    {quote: "We are like our version of yingyang. You are red and I'm blue. We completed each other"},
    {quote: "You always find my ugly picture cute. omg please send help."},
    {quote: "Where is my amazing bf? ahhhh he is in my heart."},
    {quote: "I'm falling inlove with you more and more everyday. Probably till the world keep spining or per say ... forever"},
    {quote: "I'm love growing along with you by my side."},
    {quote: "Congratulation on your second year in university honey. I'm really proud of you"},
    {quote: "Sometimes I can't believe I have you as my bf. It's too good to be true."},
    {quote: "Eventhough we are living at the other side of the world, I feel you so close to me. Did you use the force?"},
    {quote: "If I could ask for one thing about us I would say 'Can I wake up seeing your face every morning?'"},
    {quote: "I love your new glasses. You look like cof cof nerd cof cof."},
    {quote: "Wanna know your name in Thai? It's ลูก้า "},
    {quote: "Are you gonna make my fantasy come true? *wink wink*"},
    {quote: "I got you chopsticks. Now we can have lightsaber fight. phheww"},
    {quote: "Do you like if I kiss you on your lips, neck, shoulder, chests, abs, and umm a little down then abs."},
    {quote: "Happy 9th months anniversary honey. I would love to celebrate our monthly anniversary for long long time."},
    {quote: "Nan always ask me while suddenly I smile. Well...I was thinking of you."},
    {quote: "I need your love. I need your time. When everythings wrong, you make me right."},
    {quote: "Everywhere I go, everything I do, there is always you. In my mind."},
    {quote: "I still remember I played you babasonicos song and you don't recognize it. So embarrassed god."},
    {quote: "I know I'm your first gf. But can I be your last gf?"},
    {quote: "I didn't expect to fall so hardly inlove with you. But here I am. Simping for you hahaha."},
    {quote: "I love when you call me unexpectedly. There is something so cute about it."},
    {quote: "It's almost new year now. Are you happy with how this year turn out? I know I am."},
    {quote: "Please don't feed me too many foods because I will need to exercise alot. in bed..."},
    {quote: "I promised to buy us an ice cream to thank you for helping me with all. "},
    {quote: "Let me give you the nice massage on your scalp. I will make you feel so nice like you are floating in the air."},
    {quote: "Hey, do you have a gf? Can I give you my number? you look so handsome and I think I love you."},
    {quote: "We will have two weeks for ourselve. I really hope I can make you happy with me."},
    {quote: "I'm inlove everytime I see you smile. You have the best smile."}


];


    let arrayIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quotes").innerHTML = quotes[arrayIndex].quote;

}
window.onload = function() {
    generateQuote();
    document.getElementById("New Quote").addEventListener('click', generateQuote);
}


