const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const translator = new Translator();

suite('Unit Tests', () => {
    test("Translate Mangoes are my favorite fruit. to British English", (done) => {
        assert.deepEqual(translator.translate("Mangoes are my favorite fruit.", "american-to-british", false), { text: "Mangoes are my favorite fruit.", translation: "Mangoes are my favourite fruit." });
        done();
    })
    test("Translate I ate yogurt for breakfast. to British English", (done) => {
        assert.deepEqual(translator.translate("I ate yogurt for breakfast.", "american-to-british", false), { text: "I ate yogurt for breakfast.", translation: "I ate yoghurt for breakfast." });
        done();
    })
    test("Translate We had a party at my friend's condo. to British English", (done) => {
        assert.deepEqual(translator.translate("We had a party at my friend's condo.", "american-to-british", false), { text: "We had a party at my friend's condo.", translation: "We had a party at my friend's flat." });
        done();
    })
    test("Translate Can you toss this in the trashcan for me? to British English", (done) => {
        assert.deepEqual(translator.translate("Can you toss this in the trashcan for me?", "american-to-british", false), { text: "Can you toss this in the trashcan for me?", translation: "Can you toss this in the bin for me?" });
        done();
    })
    test("Translate The parking lot was full. to British English", (done) => {
        assert.deepEqual(translator.translate("The parking lot was full.", "american-to-british", false), { text: "The parking lot was full.", translation: "The car park was full." });
        done();
    })
    test("Translate Like a high tech Rube Goldberg machine. to British English", (done) => {
        assert.deepEqual(translator.translate("Like a high tech Rube Goldberg machine.", "american-to-british", false), { text: "Like a high tech Rube Goldberg machine.", translation: "Like a high tech Heath Robinson device." });
        done();
    })
    test("Translate To play hooky means to skip class or work. to British English", (done) => {
        assert.deepEqual(translator.translate("To play hooky means to skip class or work.", "american-to-british", false), { text: "To play hooky means to skip class or work.", translation: "To bunk off means to skip class or work." });
        done();
    })
    test("Translate No Mr. Bond, I expect you to die. to British English", (done) => {
        assert.deepEqual(translator.translate("No Mr. Bond, I expect you to die.", "american-to-british", false), { text: "No Mr. Bond, I expect you to die.", translation: "No Mr Bond, I expect you to die." });
        done();
    })
    test("Translate Dr. Grosh will see you now. to British English", (done) => {
        assert.deepEqual(translator.translate("Dr. Grosh will see you now.", "american-to-british", false), { text: "Dr. Grosh will see you now.", translation: "Dr Grosh will see you now." });
        done();
    })
    test("Translate Lunch is at 12:15 today. to British English", (done) => {
        assert.deepEqual(translator.translate("Lunch is at 12:15 today.", "american-to-british", false), { text: "Lunch is at 12:15 today.", translation: "Lunch is at 12.15 today." });
        done();
    })
    test("Translate We watched the footie match for a while. to American English", (done) => {
        assert.deepEqual(translator.translate("We watched the footie match for a while.", "british-to-american", false), { text: "We watched the footie match for a while.", translation: "We watched the soccer match for a while." });
        done();
    })
    test("Translate Paracetamol takes up to an hour to work. to American English", (done) => {
        assert.deepEqual(translator.translate("Paracetamol takes up to an hour to work.", "british-to-american", false), { text: "Paracetamol takes up to an hour to work.", translation: "Tylenol takes up to an hour to work." });
        done();
    })
    test("Translate First, caramelise the onions. to American English", (done) => {
        assert.deepEqual(translator.translate("First, caramelise the onions.", "british-to-american", false), { text: "First, caramelise the onions.", translation: "First, caramelize the onions." });
        done();
    })
    test("Translate I spent the bank holiday at the funfair. to American English", (done) => {
        assert.deepEqual(translator.translate("I spent the bank holiday at the funfair.", "british-to-american", false), { text: "I spent the bank holiday at the funfair.", translation: "I spent the public holiday at the carnival." });
        done();
    })
    test("Translate I had a bicky then went to the chippy. to American English", (done) => {
        assert.deepEqual(translator.translate("I had a bicky then went to the chippy.", "british-to-american", false), { text: "I had a bicky then went to the chippy.", translation: "I had a cookie then went to the fish-and-chip shop." });
        done();
    })
    test("Translate I've just got bits and bobs in my bum bag. to American English", (done) => {
        assert.deepEqual(translator.translate("I've just got bits and bobs in my bum bag.", "british-to-american", false), { text: "I've just got bits and bobs in my bum bag.", translation: "I've just got odds and ends in my fanny pack." });
        done();
    })
    test("Translate The car boot sale at Boxted Airfield was called off. to American English", (done) => {
        assert.deepEqual(translator.translate("The car boot sale at Boxted Airfield was called off.", "british-to-american", false), { text: "The car boot sale at Boxted Airfield was called off.", translation: "The swap meet at Boxted Airfield was called off." });
        done();
    })
    test("Translate Have you met Mrs Kalyani? to American English", (done) => {
        assert.deepEqual(translator.translate("Have you met Mrs Kalyani?", "british-to-american", false), { text: "Have you met Mrs Kalyani?", translation: "Have you met Mrs. Kalyani?" });
        done();
    })
    test("Translate Prof Joyner of King's College, London. to American English", (done) => {
        assert.deepEqual(translator.translate("Prof Joyner of King's College, London.", "british-to-american", false), { text: "Prof Joyner of King's College, London.", translation: "Prof. Joyner of King's College, London." });
        done();
    })
    test("Translate Tea time is usually around 4 or 4.30. to American English", (done) => {
        assert.deepEqual(translator.translate("Tea time is usually around 4 or 4.30.", "british-to-american", false), { text: "Tea time is usually around 4 or 4.30.", translation: "Tea time is usually around 4 or 4:30." });
        done();
    })
    test("Highlight translation in Mangoes are my favorite fruit.", (done) => {
        assert.deepEqual(translator.translate("Mangoes are my favorite fruit.", "american-to-british", true), { text: "Mangoes are my favorite fruit.", translation: "Mangoes are my <span class=\"highlight\">favourite</span> fruit." });
        done();
    })
    test("Highlight translation in I ate yogurt for breakfast.", (done) => {
        assert.deepEqual(translator.translate("I ate yogurt for breakfast.", "american-to-british", true), { text: "I ate yogurt for breakfast.", translation: "I ate <span class=\"highlight\">yoghurt</span> for breakfast." });
        done();
    })
    test("Highlight translation in We watched the footie match for a while.", (done) => {
        assert.deepEqual(translator.translate("We watched the footie match for a while.", "british-to-american", true), { text: "We watched the footie match for a while.", translation: "We watched the <span class=\"highlight\">soccer</span> match for a while." });
        done();
    })
    test("Highlight translation in Paracetamol takes up to an hour to work.", (done) => {
        assert.deepEqual(translator.translate("Paracetamol takes up to an hour to work.", "british-to-american", true), { text: "Paracetamol takes up to an hour to work.", translation: "<span class=\"highlight\">Tylenol</span> takes up to an hour to work." });
        done();
    })
});
