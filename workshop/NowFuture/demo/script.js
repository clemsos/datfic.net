$(document).ready(function () {


    $('#intro')
        .delay(24000)
        .queue(function (next) { 
        $(this).css('display', 'none'); 
        next(); 
        $('#hand-scanner').css("display","block");
        $('#btn-start').delay(6000).show(0);

    });

    $("#btn-start").click(
        function () {
            $('#hand-scanner').css("display","none");
            $('#quest-1').css("display","block");
            $('#page-numb').html("1");

        }            
    );




    //    QUEST-1
    $("#btn-1").click(
        function () {
            $('#quest-1').css("display","none");
            $('#quest-15').css("display","block");
            $('#page-numb').html("2");

        }            
    );

    //    QUEST-15
    $("#btn-aries").click(
        function () {
            $('#quest-15').css("display","none");
            $('#quest-2').css("display","block");

            $('#aries-sign').css("display","block");
            $('#page-numb').html("3");

        }            
    );

    $("#btn-taurus").click(
        function () {
            $('#quest-15').css("display","none");
            $('#quest-2').css("display","block");

            $('#taurus-sign').css("display","block");
            $('#page-numb').html("3");

        }            
    );

    $("#btn-gemini").click(
        function () {
            $('#quest-15').css("display","none");
            $('#quest-2').css("display","block");

            $('#gemini-sign').css("display","block");
            $('#page-numb').html("3");

        }            
    );

    $("#btn-cancer").click(
        function () {
            $('#quest-15').css("display","none");
            $('#quest-2').css("display","block");

            $('#cancer-sign').css("display","block");
            $('#page-numb').html("3");

        }            
    );

    $("#btn-leo").click(
        function () {
            $('#quest-15').css("display","none");
            $('#quest-2').css("display","block");

            $('#leo-sign').css("display","block");
            $('#page-numb').html("3");

        }            
    );

    $("#btn-virgo").click(
        function () {
            $('#quest-15').css("display","none");
            $('#quest-2').css("display","block");

            $('#virgo-sign').css("display","block");
            $('#page-numb').html("3");

        }            
    );

    $("#btn-libra").click(
        function () {
            $('#quest-15').css("display","none");
            $('#quest-2').css("display","block");

            $('#libra-sign').css("display","block");
            $('#page-numb').html("3");

        }            
    );

    $("#btn-scorpio").click(
        function () {
            $('#quest-15').css("display","none");
            $('#quest-2').css("display","block");

            $('#scorpio-sign').css("display","block");
            $('#page-numb').html("3");

        }            
    );

    $("#btn-sagittarius").click(
        function () {
            $('#quest-15').css("display","none");
            $('#quest-2').css("display","block");

            $('#sagittarius-sign').css("display","block");
            $('#page-numb').html("3");

        }            
    );

    $("#btn-capricorn").click(
        function () {
            $('#quest-15').css("display","none");
            $('#quest-2').css("display","block");

            $('#capricorn-sign').css("display","block");
            $('#page-numb').html("3");

        }            
    );

    $("#btn-aquarius").click(
        function () {
            $('#quest-15').css("display","none");
            $('#quest-2').css("display","block");

            $('#aquarius-sign').css("display","block");
            $('#page-numb').html("3");

        }            
    );

    $("#btn-pisces").click(
        function () {
            $('#quest-15').css("display","none");
            $('#quest-2').css("display","block");

            $('#pisces-sign').css("display","block");
            $('#page-numb').html("3");

        }            
    );

    $("#btn-scorpio").click(
        function () {
            $('#quest-15').css("display","none");
            $('#quest-2').css("display","block");

            $('#scorpio-sign').css("display","block");
            $('#page-numb').html("3");

        }            
    );




    //    QUEST-2
    $("#btn-male").click(
        function () {
            $('#quest-2').css("display","none");
            $('#quest-3').css("display","block");

            $("#text-result").append(" Be fearless in the pursuit of what sets your soul on fire.");
            $('#page-numb').html("4");

        }            
    );

    $("#btn-female").click(
        function () {
            $('#quest-2').css("display","none");
            $('#quest-3').css("display","block");

            $("#text-result").append(" When you start seeing your worth, you’ll find it harder to stay around people who don’t.");
            $('#page-numb').html("4");

        }            
    );

    $("#btn-nonbinary").click(
        function () {
            $('#quest-2').css("display","none");
            $('#quest-3').css("display","block");

            $("#text-result").append(" Do not let the world make you hard. Do not let pain make you hate.");
            $('#page-numb').html("4");

        }            
    );


    //    QUEST-3
    $("#btn-relation-yes").click(
        function () {
            $('#quest-3').css("display","none");
            $('#quest-4').css("display","block");

            $("#text-result").append("<br /><br />Make sure to preserve your personal space. Not everything needs to be shared with your partner.");

            $('#page-numb').html("5");
        }            
    );

    $("#btn-relation-no").click(
        function () {
            $('#quest-3').css("display","none");
            $('#quest-4').css("display","block");

            $("#text-result").append("<br /><br />When you feel in need for love, remember, being happily single is better than being in the wrong relationship.");

            $('#page-numb').html("5");
        }            
    );

    $("#btn-relation-complicated").click(
        function () {
            $('#quest-3').css("display","none");
            $('#quest-4').css("display","block");

            $("#text-result").append("<br /><br />Being in the wrong relationship might give you anxiety. Free yourself from whatever is bounding you.");

            $('#page-numb').html("5");
        }            
    );


    //    QUEST-4
    $("#btn-01").click(
        function () {
            $('#quest-4').css("display","none");
            $('#quest-5').css("display","block");

            $("#text-result").append(" You might have felt a bit lonely growing up. Don’t be afraid to expand your circle and meet new people. It will make your life more interesting.");

            $('#page-numb').html("6");

        }            
    );

    $("#btn-2more").click(
        function () {
            $('#quest-4').css("display","none");
            $('#quest-5').css("display","block");

            $("#text-result").append(" You grew up to be a competitive person due to your constant conflicts with your siblings. Use that energy for your benefit and do not let it push you down.");

            $('#page-numb').html("6");

        }            
    );

    //    QUEST-5
    $("#btn-relation-notwell").click(
        function () {
            $('#quest-5').css("display","none");
            $('#text-result').css("display","block");
            $('#all-astro-signs').css("display","block");

            $("#text-result").append("<br /><br /> In times where you feel your emotions are controlling you, take a deep breath and think of the consequences first.");

            $('#page-numb').html("7");

        }            
    );

    $("#btn-relation-well").click(
        function () {
            $('#quest-5').css("display","none");
            $('#text-result').css("display","block");
            $('#all-astro-signs').css("display","block");

            $("#text-result").append("<br /><br />It wouldn’t hurt if you let your emotions guide the way sometimes. It might be an easier path.");

            $('#page-numb').html("7");

        }            
    );







    //  DEBUT :  HOROSCOPE

    var horoscope = [
        "If you keep moving at this rapid pace, you might end up falling on your face! But if you can keep your eyes on what's right in front of you, your progress should be smooth.<br /><br />",

        "You may not be your most logical self today, but that won’t stop you from being effective. Trust your gut and pay attention to nonverbal cues, like body language. A softer approach might be warranted to help build trust.<br /><br />",

        "A close friend or love partner may not be returning your calls, causing you to think your friend doesn't care anymore. Don't fall into this trap and be patient. Give them another call tomorrow.<br /><br />",

        "Head outside and wander through the grass, take an extra-long swim or stop to build the optimal sandcastle at a local beach. Connections to nature make you more capable of dealing life's little stresses.<br /><br />",

        "Should you find yourself struggling today, stop being proud and reach out for help. Make contact with someone whose skills are complementary to your own. If you have to share some of the profits, so be it.<br /><br />",

        "You might get tied up with doing your daily errands. This could be frustrating and might put you in a bad mood. This won't help at all! Just hang in there and you'll still have a great day.<br /><br />",

        "If you want to keep your private business private, you need to do something out of character and keep silent. This should give you some space to clear your head and get a handle on everything that's going on.<br /><br />",

        "Today is the wrong day for protracted discussions and interminable pow-wows. The energy is all about quick and easy, down and dirty. Whenever possible, stop and focus on your breath!<br /><br />",

        "Overindulgence in food or drink could have you feeling a little under the weather today. Therefore it will be difficult to focus on anything that needs your attention. Perhaps you just need to take it slowly. Just relax.<br /><br />",

        "You know that happiness is increased when great care is taken with all types of matters, big and small. Whatever you're planning on doing today will sure to be a hit. Enjoy it.<br /><br />",

        "It’s okay to have a little fun and even be a little naughty. Pull together a head-turning outfit (and Instagram yourself). Having a re-energized sense of adventure in your life might be just the thing you need to get your juices flowing.<br /><br />",

        "Someone you care about may be away, which will make you in a lousy mood. Don't let it affect you. Time will pass more quickly if you do something you are passionate about until your partner returns. Hang in there!<br /><br />",

        "Think of your recent misfortune as an auspicious sign. You have plenty of time to fix it and get yourself back in the game. Be grateful for this downtime, at least it gives you a chance to take care of business with somewhat less pressure.<br /><br />",

        "No matter how busy you are today, make time to sit down with a friend and have a heart-to-heart. You’ll deepen your connection and let that person know that they are important to you.<br /><br />",

        "Today you might be feeling a little out of sorts, and most likely will want to stay home. Friends may try to talk you into partying with them. Make them understand that you'd best relax tonight.<br /><br />",

        "Does your recent desire for excitement have you itching to push beyond your usual boundaries? You may feel invincible and ready to try anything. It's time for you to explore the possibilities.<br /><br />",

        "Have you been taking things a little too personally lately? Lighten up. Laughter is the best medicine, especially if you can develop a sense of humor about yourself.<br /><br />",

        "A close friend or love partner might be feeling a little blue, and could therefore ring you up wanting a sympathetic shoulder to cry on. You'll be of great help to this person this way. Give them as much time as you feel is appropriate.<br /><br />",

        "You've got the touch when you're dealing with any personal situation. Your excellent listening skills and ability to hear people out without interrupting or injecting your opinions is so healing and graceful that they are sure to adore you even more.<br /><br />",

        "Trying to stay focused on a work project and be present in the moment are mutually exclusive today. Choose one or the other and expect to compromise a lot. To preserve your sanity, streamline your to-do list.<br /><br />",

        "Are you going out shopping today? If so, expect at some point to be confronted with a wonderful luxury item. Do what you want, but be sure you know what that is! Think about it since it might affect you.",

        "Shake up your social life so that it serves a higher purpose. You need to find ways to benefit others in all your interactions. But make sure you're connecting with the right people, so your good deeds fall right into place.<br /><br />",

        "Close the opinion polls. You’ve gathered enough feedback—any more will lead to an acute case of analysis paralysis. Pick the best advice and ask yourself: What’s the most direct route to my goal? Then, take it!<br /><br />",

        "Are you expecting visitors? If so, you might go into a panic because your house isn't as spotless as you would like it to be. Don't try to do too much. Your guests won't care and just need you to enjoy their company.<br /><br />",

        "If it feels like the professional pressure is mounting, you need to turn your attention to getting the job done. You know exactly what's necessary. Keep your eyes open and focused, and avoid all distractions.<br /><br />",

        "Don’t be surprised to find yourself wiping away the occasional tear today. Don’t fight it; make it work for you! Reach out to your besties and let them know how much they mean to you; they’ll come running.<br /><br />",

        "You're probably looking pretty good, but emotionally you might not feel very attractive. Treat yourself with whatever think you like doing, be it sports, food or even dancing. You'll feel better! Enjoy!<br /><br />",

        "You're always willing to work hard, even when the results don't show up until far in the future. But after all the time and energy you've put into it, you should be better able to handle that success when it does arrive.<br /><br />",

        "Make extra room in your schedule for connecting with your entourage. Allow conversations to flow without pressure to accomplish a particular goal. If you relax into the moment, you will have a more inspired discussion.<br /><br />",

        "Intellectual or spiritual concepts that you're trying to grasp may seem a little elusive. Don't try to push yourself too hard to understand them today. Instead, look at something else for a while. Be patient with yourself.<br /><br />",

        "You know that you've got to back up your words with action, and your energy couldn't be better for doing just that now. Show them your power but don’t make threats. This may come in handy if you run into someone with a hidden agenda.<br /><br />",

        "Repeat after us: I can’t please all the people all the time. With hordes of people asking for a piece of your time, you need to diplomatically bow out. Your true friends and supporters will understand. Give yourself a break!<br /><br />",

        "If you're involved in a creative project, perhaps this isn't the best day to work on them. Your imagination might seem to have deserted you. Sometimes we need a break from our work to maintain the quality of it. Do something else for today.<br /><br />",

        "Your energy is definitely working in your favor. Your high-powered sense of compassion is getting a real workout, and you should see great results. If you haven't already, give it time! It will happen eventually.<br /><br />",

        "You keep waiting and waiting for “life” to calm down, but it’s not going to happen without your complicity, so carve out some time to be alone with your thoughts and reconnect with your soul.<br /><br />",

        "A friend may ask for your assistance with regard to finances in some way. It's nothing major, but it might involve a choice that your friend needs to make. Don't make the decision for them, instead give them advice that will be appreciated.<br /><br />"







    ];

    var result_horoscope = horoscope[Math.floor(Math.random()*horoscope.length)];

    $("#text-result").append(result_horoscope);

    //  FIN :  HOROSCOPE




    //  DEBUT :  PALM 1

    var palm1 = [
        " Your heart line reflects that you are idealistic.",

        " Your basic life line shows you have anxiety.",

        " Exploring you health line, we can tell you that you might have a possible accident due to clumsiness."
    ];

    var result_palm1 = palm1[Math.floor(Math.random()*palm1.length)];

    $("#text-result").append(result_palm1);

    //  FIN :  PALM 1



    //  DEBUT :  PALM 2

    var palm2 = [
        " Moreover, your head line says you are confused.",

        " Whereas your fate line reflects you have difficult circumstances."
    ];

    var result_palm2 = palm2[Math.floor(Math.random()*palm2.length)];

    $("#text-result").append(result_palm2);

    //  FIN :  PALM 2

});

