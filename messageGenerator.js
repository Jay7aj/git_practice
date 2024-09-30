//Written by Jayesh 
// This is a random message generator application:
console.log("MESSAGE GENERATOR \n");

let dayMessages = ["When one conquers his inner enemies, peace will come automatically.",
                "The weak cannot forgive; the strong can, forgiveness is an attribute of the strong.",
                "The mind is everything.",
                "A wise man laments neither for the living nor the dead.",
                "Great men never care for the harsh words uttered by inferior men.",
                "The strength of a thousand is not as powerful as the strength of one with faith.",
                "Knowledge is the greatest wealth.",
                "The true teacher is one who helps you realise the divinity within yourself.",
                "The weak cannot forgive; the strong can, forgiveness is an attribute of the strong.",
                "The mind is everything. What you think, you become.",
                "The one who has conquered his mind is free from all sorrows and fears.",
                "Peace comes from within. When one conquers his inner enemies, peace will come automatically.",
                "The greatest enemy is the one within.",
                "In this world, righteousness is the highest good; let no man, therefore, cease from acts of piety and virtue.",
                "One should never give up on truth and justice, even if it seems difficult to achieve them.",
                "All creatures are equal in suffering and death.",
                "It is better to die in the path of righteousness than to live a life of sin and misery.",
                "A wise man should not grieve for the things which he has not, but rejoice for those which he has.",
                "Truthfulness, purity of mind and heart, self-control and austerity are marks of Dharma.",
                "Dharma is that which upholds and supports the world.",
                "The strength of a thousand is not as powerful as the strength of one with faith.",
                "Knowledge is the greatest wealth.",
                "The highest dharma is to uphold the truth.",
                "It is better to live one day as a lion than 1000 years as a jackal.",
                "The life of a fool is empty of faith and full of fears.",
                "When duty is neglected, calamity follows like a wheel of a cart.",
                "Anger clouds reason and leads to destruction.",
                "You are what you believe in. You become that which you believe you can become",
                "Man is made by his belief. As he believes, so he is",
                "You are only entitled to the action, never to its fruits.",
                "Now I am become Death, the destroyer of worlds.",
                "Death is as sure for that which is born, as birth is for that which is dead. Therefore grieve not for what is inevitable.",
                "Seek refuge in the attitude of detachment and you will amass the wealth of spiritual awareness. The one who is motivated only by the desire for the fruits of their action, and anxious about the results, is miserable indeed.",
                "One who sees inaction in action, and action in inaction, is intelligent among men.",
                "You have a right to perform your prescribed duties, but you are not entitled to the fruits of your actions.",
                "It is better to live your own destiny imperfectly then to live an imitation of somebody else's life with perfection.",
                "The spirit is beyond destruction. No one can bring an end to spirit which is everlasting.",
                "Through selfless service, you will always be fruitful and find the fulfillment of your desires",
                "The spirit is beyond destruction. No one can bring an end to spirit which is everlasting.",
                "If one offers Me with love and devotion a leaf, a ﬂower, a fruit or water, I will accept it."
];
let randAnimal = ['Dog', 'Cat', 'Horse', 'Camel', 'Rabbit', 'Wolf'];
let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function printRandMessage(name){
    let randIndMessage = Math.floor(Math.random() * dayMessages.length);
    console.log(`Hi ${name} , hope you are having a good time, and thanks for using the random message application.`);
    console.log(`You will meet a ${randAnimal[Math.floor(Math.random() * randAnimal.length)]} on a day in the month of ${month[Math.floor(Math.random() * month.length)]}.`);
    console .log('\nTHOUGHT OF THE DAY:');
    console.log(dayMessages[randIndMessage]);
}


printRandMessage("");


