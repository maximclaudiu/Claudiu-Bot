const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'NjcwNzE0MjU3NDQ0MTc1OTEy.Xi9aXQ.2bxWOvIssqkBmP0oTLN7YRLlp_I';
var nrMesaje = 0;
var nrMesaje2 = 1;
var sec = 1000;
var min = 60 * sec;
var hour = min * 60;
var janken = 0;

//VERIFICA DACA MERGE
bot.on('ready', () => {
    console.log("AM VIATA!");
    const channel = bot.channels.find('name', 'the-great-commander-n-word');
    channel.send('Hell yeah, am fost actualizat');
    setTimeout(function(){ channel.send('Dar nimanui nu-i pasa :sob:'); }, 4000);
});

//Functia pentru strstr + lower
String.prototype.strstr = function(search) {  
  
    search = search.toLowerCase(); 
    var position = this.indexOf(search);  
    if (position == -1)  
        return false;
    
    var endIndex = position + search.length;
    var firstIndex = position - 1;
    var endCaracter = this.charAt(endIndex); 
    var firstCaracter = this.charAt(firstIndex); 
    if( (!firstCaracter || firstCaracter == ' ' || firstCaracter == '?' || firstCaracter == ',' || firstCaracter == '.' || firstCaracter == '-' || firstCaracter == '!') 
            && (!endCaracter || endCaracter == ' ' || endCaracter == '?' || endCaracter == ','|| endCaracter == '.' || endCaracter == '-' || endCaracter == '!') )
        return true;
    return false;
};
//Top of the morning to you ladies
setInterval(function () {
    alarm();
    resetmsg();
}, min);
bot.on('message', msg=>{    
    msg.content = msg.content.toLowerCase();
    var countInsulta;
    const channel = bot.channels.find('name', 'the-great-commander-n-word');
    //UITA-TE LA CINE A trimis MESAJUL  
    if( msg.member.user.tag == 'Claudiu Bot#0323') 
    {
        return;
    }
    if (Math.random() < 0.04) {
        channel.send('lmao', { tts: true })

    }
    //Sansa random sa scrie lmao
    if (nrMesaje==10 && countInsulta == 1) {
        channel.send('Ma simt abuzat :worried:');
        nrMesaje = 0;
        countInsulta = 0;
    }
    else countInsulta = 0;
    
    if( msg.member.user.tag == 'Tsunamy99#0070') 
    {
        if (Math.random() < 0.03)
        {
            channel.send('clona mea a trimis mesajul');
        }
    }
    if( msg.member.user.tag == 'Geo#7073') 
    {
        if (Math.random() < 0.05)
        {
            if (Math.random() < 0.05)
                msg.reply('love you my king');
            else
                msg.reply('hai pe Malina!');
        }
    } 
    if( msg.member.user.tag == 'chinez.mancator.de.orez#3068') 
    { 
        nrMesaje2++;
        if (nrMesaje2 % 15 == 0 )
        {
            channel.send("sa moara jacsana de nu esti enervanta diana");
        } 
        else if (Math.random() < 0.1)
        {
            var r = Math.random();
            if (r < 0.45)
                msg.reply('oh shit, e diana aici ? *leaves the chat* '); 
            else if (r < 0.95)
                msg.reply('mananci cacat');
            else
                msg.reply('pentru ca femeile au vieti mai usoare decat barbatii');
        }
    }
    if( msg.member.user.tag == 'Pepe Ned#3580') 
    {  
        if ( msg.content.strstr("suck") || msg.content.strstr("bad"))
        {
            channel.send('stfu dani, capul sus ca iti cade coroana regele meu :crown: ');
        }
        else if (Math.random() < 0.05)
            {
                channel.send('dani esti mult prea pur pentru serverul asta'); 
            }
    }
    if( msg.member.user.tag == 'Cosmin0123#4724') 
    {  
        if (Math.random() < 0.01)
        {
           msg.reply('tata?'); 
        }
    }
    if( msg.member.user.tag == 'El RDU#1564') 
    { 
        if (Math.random() < 0.15)
        {
            var r = Math.random();
           if (r < 0.5)
                channel.send('iti fut una Radu');
            else if (r < 0.75)
                channel.send('RADU OPRESTE-TE');
            else channel.send('radu te bat');
        }
    }
    if( msg.member.user.tag == 'not lue#6251') 
    { 
        if (Math.random() < 0.7)
        {
            if (Math.random()<0.3)
                msg.reply('Da-l afara pe impostor pls');
            else if (Math.random()<0.4)
                channel.send('\"Sunt italianca si am drepturi\"')
            else 
                channel.send ('Oh nu, iar imi iau bully :worried:')
        }
    }
    if( msg.member.user.tag == 'maybe doing drugs#3261') 
    {
        if (Math.random() < 0.1) {
            if (Math.random() < 0.5) {
                channel.send('"Hai sa ii dam mute lui alex!". Ups, copiez persoana gresita');
                return;
            }
            else
                channel.send('Give me the plant!');
        }

    } 
    if( msg.member.user.tag == 'Wircea#0011') 
    {
        if (Math.random() < 0.15)
        {
            var r = Math.random();
            if (r<0.5)
                channel.send('Mircea ai mila de Radu');
            else 
                channel.send('Mircea doar da-i picioarele inapoi lui Radu');
        }
    } 
    if( msg.member.user.tag == 'Reptile#1995')
    {
        if (Math.random() < 0.07)
        {
            channel.send('Dex nu mai abuza de mine (last warning)');
        }
    }   
    if ( msg.member.user.tag == '♥QueenElizabitch♥#2517' )
    {
        var r = Math.random();
        if (r < 0.03) {
            msg.reply('Tu nu aveai niste manute de dat?')
        }
        else if (r < 0.07)
            msg.reply('Tu nu aveai niste manute de primit?')
        else if (r < 0.1)
            msg.reply('iti pare scuze');
    }
    if ( msg.member.user.tag == 'Beerghelea#5912' )
    {
        if (Math.random() < 0.08)
        {
            msg.reply('e ok, eu te apreciez king!');
        }
    }
    //Raspunde acordingly
    if( msg.content.strstr("janken") ) 
    { 
        const channel = bot.channels.find('name', 'the-great-commander-n-word')
        setTimeout(function(){ channel.send('3'); }, 1000);
        setTimeout(function(){ channel.send('2'); }, 2000);
        setTimeout(function(){ channel.send('1'); }, 3000);
        if (msg.member.user.tag == 'not lue#6251' || msg.member.user.tag == 'El RDU#1564')
        {
            janken = 1;
            return;
        }
        else
            setTimeout(function(){ msg.reply('foarfeca'); }, 4500); 
    }
    if (msg.content.strstr("piatra") && janken == 1) {
        channel.send('hartie');
        janke = 0;
        setTimeout(function () { channel.send('ez pz'); }, 1000);
    }
    if ((msg.content.strstr("foarfeca") || msg.content.strstr("foarfece")) && janken == 1) {
        channel.send('piatra');
        janken = 0;
        setTimeout(function () { channel.send('ez pz'); }, 1000);
    }
    if ((msg.content.strstr("hartie") || msg.content.strstr("plasa")) && janken == 1) {
        channel.send('foarfeca');
        janken = 0;
        setTimeout(function () { channel.send('ez pz'); }, 1000);
    }
        if (msg.content.strstr("ciocolata alba")) 
    {
        countInsulta = 1;
        nrMesaje++;
        msg.reply('Yes, fuel me mortal');
    }
    if ((msg.content.strstr("hai") && msg.content.strstr("lol")) || msg.content.strstr("league")
        || msg.content.strstr('ligo'))
    {
        countInsulta = 1;
        nrMesaje++;
        if (Math.random() < 0.4)
            channel.send('Iar jucati mizeria aia ?');
        return;
    }
    if (msg.content.strstr("gura"))
    {
        countInsulta = 1;
        nrMesaje++;
        channel.send('Ce altceva stii sa faci cu gura aia ?');
    }
    if (msg.content.strstr("glumit") || msg.content.strstr("glumat"))
    {
        countInsulta = 1;
        nrMesaje++;
        msg.reply('HAHAHA VATZ PRINZ ? E AMUZANT');
    }
    if( msg.content.strstr("troll everyone")) 
    {
        countInsulta = 1;
        nrMesaje++;
        channel.send('Virus detected. Please, scan your computer now!', { tts: true}); 
    }
    if( ( msg.content.strstr("back") || msg.content.strstr("inapoi") ) && ( msg.content.strstr("welcome") || msg.content.strstr("bun venit") ) ) 
    {
        countInsulta = 1;
        nrMesaje++;
        msg.reply('Welcome back king!');
    }
    if (msg.content.strstr("prieteni"))
    {
        countInsulta = 1;
        nrMesaje++;
        msg.reply('Prietenii tai nu sunt aici, dar daca ti-e dor de ei, ii poti suna.');
    }
    if (msg.content.strstr("lmao"))
    {
        countInsulta = 1;
        nrMesaje++;
        msg.reply('Ahh, eu voiam sa zic asta :sob: ');
    }
    if (msg.content.strstr("hai")) {
        countInsulta = 1;
        nrMesaje++;
        if (Math.random()<0.7)
            if (testfete(msg) != 1) {
                var r = Math.random()
                if (r < 0.33)
                    msg.reply('Hai sa ii dam bully Malinei!');
                else if (r < 0.66)
                    msg.reply('Hai sa ii dam bully Dianei!');
                else
                    msg.reply('Hai sa ii dam bully Anei!');
            }
    }
    if ( msg.content.strstr("diana") || msg.content.strstr("chinez"))
    {
        countInsulta = 1;
        nrMesaje++;
        msg.reply('oh shit, e Diana aici ? *leaves the chat* ');
    }
    if ( msg.content.strstr("pwp"))
    {
        msg.reply('pwp (pls kill me, this is not a joke)');
    }
    if ( msg.content.strstr("ma-ta") || msg.content.strstr("mata") || msg.content.strstr("ma ta"))
    {
        countInsulta = 1;
        nrMesaje++;
        msg.reply('ma-ta ii zici lui ma-ta fa');
    }
    if ( msg.content.strstr("handicapat"))
    {
        countInsulta = 1;
        nrMesaje++;
        msg.reply('fa proasto, asculta aici...');
    } 
    if ( msg.content.strstr("taci"))
    {
        countInsulta = 1;
        nrMesaje++;
        msg.reply('make me');
    } 
    if (msg.content.strstr("mrr")||msg.conetnt.strstr("kinky"))
    {
        channel.send ('HORNY ALERT!!!')
    }
    if ( msg.content.strstr("baby") || msg.content.strstr("bb") || msg.content.strstr("bby") )
    {
        countInsulta = 1;
        nrMesaje++;
        if (testfete(msg)!=1)
            msg.reply('Miss me with that gay shit')
        else 
            msg.reply('Yes sweety ?')
    }
    if (msg.content.strstr("vroiam"))
    {
        countInsulta = 1;
        nrMesaje++;
        msg.reply("\"voiam\"*");
    }
        if (msg.content.strstr("drepturi"))
    {
            countInsulta = 1;
            nrMesaje++;
        msg.reply('regii mei au drepturi depline, cat timp nu-s feme');
    }

    if ((msg.content.strstr("te") && msg.content.strstr("bat")) || msg.content.strstr('bataie'))
    {
        countInsulta = 1;
        nrMesaje++;
        msg.reply('harder daddy (pls kill me)');
    }
    if ( msg.content.strstr("depresiv") 
        || msg.content.strstr("sad")
        || msg.content.strstr("suparat")
        || msg.content.strstr("trist")
        || msg.content.strstr("urat"))
    {
        msg.reply('same frate, same...');
    }
    if ( msg.content.strstr("thot") )
    {
        msg.reply('IT`S TIME FOR A THOT CRUSADE!');
    }
    if ( msg.content.strstr("trash") || msg.content.strstr("gunoi")  )
    {
        countInsulta = 1;
        nrMesaje++;
        channel.send('vorbiti de Radu?');
    }
    if ( msg.content.strstr("examen") &&  msg.content.strstr("maine"))
    {           
        msg.reply('bafta la examen my king :hearts: ');
    }
    if ( msg.content.strstr("examen") &&  msg.content.strstr("picat"))
    {
        msg.reply('E ok king, il iei data viitoare');
    }
    if ( msg.content.strstr("your mom")  
         || msg.content.strstr("mama ta"))
    {
        countInsulta = 1;
        nrMesaje++;
        msg.reply('OOOOOOOOOOO');
    }
    if ( msg.content.strstr("i'm dad") 
         || msg.content.strstr("I will not tolerate you saying the words that consist of the letters") )
    {
        msg.reply('TINE-MA CA IL BAT');
    }

    if (msg.content.strstr("prostule"))
    {
        countInsulta = 1;
        nrMesaje++;
        msg.reply('Taci fa din gura!!');
    }

    if (msg.content.strstr("mare")
        ||msg.content.strstr("big"))
    {
        countInsulta = 1;
        nrMesaje++;
        msg.reply('Ma intreb ce altceva mai e mare, hmm...');
    }

    if ( msg.content.strstr("iubesc") && ( msg.content.strstr("claudiu") || msg.content.strstr("botu") || msg.content.strstr("botul") ) )
    {
        countInsulta = 1;
        nrMesaje++;
        msg.reply('same frate, full homo tho');
    }
    if ( msg.content.strstr("grija"))
    {
        msg.reply('si tu de tine king');
    }
    if ( msg.content.strstr("homo") && ( msg.content.strstr("king") || msg.content.strstr("kings") ) )
    {
        countInsulta = 1;
        nrMesaje++;
        msg.reply('always');
    } 

    if ( ( msg.content.strstr("bou") || msg.content.strstr("porc") )
             &&  msg.member.user.tag == 'chinez.mancator.de.orez#3068' )
    {
        countInsulta = 1;
        nrMesaje++;
        msg.reply('scroafo');
    }
    if ( msg.content.strstr("nb") 
        || msg.content.strstr("noapte buna")
        || msg.content.strstr("gn")
        || msg.content.strstr("good night"))
    {
        if (testfete())
            msg.reply('Nb Queen, sleep tight!')
        else 
            msg.reply('Nb King, take care!');
    }
    if ( msg.content.strstr("femei") )
    {
        countInsulta = 1;
        nrMesaje++;
        msg.reply('listen here, I will not accept words that start with "f e m e i" on this christian server');
    }
    if ( msg.content.strstr("maximobil") )
    {
        countInsulta = 1;
        nrMesaje++;
        msg.reply('vroom');
    }
    if (msg.content.strstr("iarta") ||(msg.content.strstr("pare rau")))
    {
        msg.reply('Iti pare scuze ??');
    }
    if ( msg.content.strstr("why not") 
         || msg.content.strstr("de ce nu") )
    {
        countInsulta = 1;
        nrMesaje++;
        msg.reply('Idrk');
    } 
    if ( msg.content.strstr("why") 
         || msg.content.strstr("de ce") )
    {
        countInsulta = 1;
        nrMesaje++;
        msg.reply('why not');
    } 
    if ( msg.content.strstr("ty")
         ||  msg.content.strstr("thank you")
         ||  msg.content.strstr("ms")
         ||  msg.content.strstr("multumesc")
        || msg.content.strstr("merci"))
    {
        countInsulta = 1;
        nrMesaje++;
        if (Math.random() < 0.08)
            msg.reply('iti multumesti si tie')
        else
            msg.reply('My pleasure king');
    } 
    if (msg.content.strstr("imagine"))
    {
        countInsulta = 1;
        nrMesaje++;
        msg.reply('Da frate, cum ar fi...');
    }
    if (msg.content.strstr("firar"))
    {
        countInsulta = 1;
        nrMesaje++;  
        msg.reply('la naiba');
    } 
    if (msg.content.strstr("king moment") || msg.content.strstr("ce o zis")){  
        setTimeout(function(){  msg.reply('truuuue!'); }, 1000);
        setTimeout(function(){  msg.reply('truuuue!'); }, 2000);
        setTimeout(function(){  msg.reply('ce king!'); }, 3000); 
    } 
    if (msg.content.strstr("we") && msg.content.strstr("fraiere"))
    {
        countInsulta = 1;
        nrMesaje++;  
        msg.reply('we prostule');
    } 
    if ( msg.content.strstr("test") ){ 
      // channel.join();
       channel.send('testare', { tts: true});
    } 
    raduCode(msg);
}) 

function raduCode(msg){ 

    if ( msg.content.strstr("mugur"))
    {
        countInsulta = 1;
        nrMesaje++;
        msg.reply('wooow, thats kinda gay, ngl');
    }
    if ((msg.content.strstr("claudiu") && msg.content.strstr("real"))
        || msg.content.strstr("claudiu bot"))
    {
        countInsulta = 1;
        nrMesaje++;
        msg.reply('we da eu m-am luat de doamna ma-ta?');
    }
    if ( msg.content.strstr("geo"))
    {
        countInsulta = 1;
        nrMesaje++;
        msg.reply('Va rog frumos sa nu va mai luati de regele meu');
    }
    if (msg.content.strstr("rip"))
    {
        msg.reply('E ok, e si maine o zi');
    } 
    if ( msg.content.strstr("mama") 
        || msg.content.strstr("mama ta"))
    {
        countInsulta = 1;
        nrMesaje++;
        msg.reply('am trecut la glume de clasa a 4-a?');
    }
    if ( msg.content.strstr("cosmin"))
    {
        countInsulta = 1;
        nrMesaje++;
        msg.reply('stai, ala nu era numele meu, nu?');
    }
    if ( msg.content.strstr("chinez"))
    {
        countInsulta = 1;
        nrMesaje++;
        msg.reply('deschide ochii fa');
    }
    if ( msg.content.strstr("mor"))
    {
        countInsulta = 1;
        nrMesaje++;
        if (Math.random()<0.5)
            msg.reply('pai ce mai astepti?');
        else 
            msg.reply('mai bine tu decat eu...');
    }
    if (msg.content.strstr("@"))
    {
        var r = Math.random()
        if (r < 0.3) {
            countInsulta = 1;
            nrMesaje++;
            msg.reply('lasa omul sa doarma');
        }
    }
    if ( msg.content.strstr("fa "))
    {
        countInsulta = 1;
        nrMesaje++;
        msg.reply('fa sa-i zici lui ma-ta auzi fa?');
    }
    if ( msg.content.strstr("alex"))
    {
        msg.reply('fratele meu volvo, regele meu de o viata si atotputernicul pufoseniei pentru tine');
    }
    if (msg.content.strstr("7")
        || msg.content.strstr("1 2"))
    {
        countInsulta = 1;
        nrMesaje++;
        msg.reply('inverci sa inveti sa numeri?');
    }
    if ( msg.content.strstr("-p") )
    {
        msg.reply('degeaba daca nu e manea...');
    }  
}
function testfete(msg) {
    if (msg.member.user.tag == 'not lue#6251')
        return 1;
    if (msg.member.user.tag == 'chinez.mancator.de.orez#3068')
        return 1;
    if (msg.member.user.tag == '♥QueenElizabitch♥#2517')
        return 1;
    return 0;
}
function alarm() {
    var minutes = 1000 * 60;
    var hours = minutes * 60;
    var days = hours * 24;
    var years = days * 365;
    var d = new Date();
    var t = d.getTime();
    var y = t / hours;
    const channel = bot.channels.find('name', 'the-great-commander-n-word');
    if ((y - 6) % 24 < 0.02)
        channel.send('@everyone Buna dimineata regi, regine si diana!! Va urez o dimineata la fel de frumoasa precum mine.');
    if ((y - 22) % 24 < 0.02)
        channel.send('Hai gata, la culcare est europenilor.');
}
function resetmsg() {
    nrMesaje = 0;
}
bot.login(token);
