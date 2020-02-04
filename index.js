const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'NjcwNzE0MjU3NDQ0MTc1OTEy.Xi9aXQ.2bxWOvIssqkBmP0oTLN7YRLlp_I';
var nrMesaje = 0;
var nrMesaje2 = 1;
var trimis=0;
//VERIFICA DACA MERGE
bot.on('ready', () => {
    console.log("AM VIATA!");
    const channel = bot.channels.find('name', 'the-great-commander-n-word');
   // channel.send('Hell yeah, am fost actualizat');
   // setTimeout(function(){ channel.send('Dar nimanui nu-i pasa :sob:'); }, 4000);
});

//Functia pentru strstr + lower
String.prototype.strstr = function(search) {  
    /*
    if( msg.member.user.tag == 'chinez.mancator.de.orez#3068' ||
        msg.member.user.tag == '♥QueenElizabitch♥#2517' ||
        msg.member.user.tag == 'not lue#6251' )
        if (Math.random < 0.45)
            return false;
*/ 
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

Morning_alarm();
bot.on('message', msg=>{    
    msg.content = msg.content.toLowerCase();
    const channel = bot.channels.find('name', 'the-great-commander-n-word');
    //UITA-TE LA CINE A TRIMIS MESAJUL  
    if( msg.member.user.tag == 'Claudiu Bot#0323') 
    {
        return;
    } 
    //Sansa random sa scrie lmao
    if ( Math.random() < 0.04 )
    {
        channel.send('lmao', { tts: true})
        
    }
    if (Math.random() < 0.01 + nrMesaje / 100) {
        channel.send('Ma simt abuzat :worried');
        nrMesaje = 0;
    }
    if( msg.member.user.tag == 'Tsunamy99#0070') 
    {
        if (Math.random() < 0.04)
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
            return;
        } 
        if (Math.random() < 0.1)
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
        if (Math.random() < 0.12)
        {
            if (Math.random()<0.3)
                msg.reply('Da-l afara pe impostor pls');
            else if (Math.random()<0.6)
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
        if (r < 0.04)
        { 
            msg.reply('Tu nu aveai niste manute de dat?') 
        }
        else if (r < 0.08)
            msg.reply('Tu nu aveai niste manute de primit?') 
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
            if (msg.content.strstr("piatra"))
                channel.send('hartie');
            if (msg.content.strstr("foarfeca") || msg.content.strstr("foarfece"))
                channel.send('piatra');
            if (msg.content.strstr("hartie") || msg.content.strstr("plasa"))
                channel.send('foarfeca');
        }
        else
            setTimeout(function(){ msg.reply('foarfeca'); }, 4500); 
    }
    if( msg.content.strstr("ciocolata alba")) 
    {
        nrMesaje++;
        msg.reply('Yes, fuel me mortal');
    }
    if ((msg.content.strstr("hai") && msg.content.strstr("lol")) || msg.content.strstr("league")
        || msg.content.strstr('ligo'))
    {
        nrMesaje++;
        if (Math.random() < 0.4)
            channel.send('Iar jucati mizeria aia ?');
        return;
    }
    if (msg.content.strstr("gura"))
    {
        nrMesaje++;
        channel.send('Ce altceva stii sa faci cu gura aia ?');
    }
    if (msg.content.strstr("glumit") || msg.content.strstr("glumat"))
    {
        nrMesaje++;
        msg.reply('HAHAHA VATZ PRINZ ? E AMUZANT');
    }
    if( msg.content.strstr("troll everyone")) 
    {
        nrMesaje++;
        channel.send('Virus detected. Please, scan your computer now!', { tts: true}); 
    }
    if( ( msg.content.strstr("back") || msg.content.strstr("inapoi") ) && ( msg.content.strstr("welcome") || msg.content.strstr("bun venit") ) ) 
    {
        nrMesaje++;
        msg.reply('Welcome back king!');
    }
    if (msg.content.strstr("prieteni"))
    {
        nrMesaje++;
        msg.reply('Prietenii tai nu sunt aici, dar daca ti-e dor de ei, ii poti suna.');
    }
    if (msg.content.strstr("lmao"))
    {
        nrMesaje++;
        msg.reply('Ahh, eu voiam sa zic asta :sob: ');
    }
    if (msg.content.strstr("hai")) {
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
        nrMesaje++;
        msg.reply('oh shit, e Diana aici ? *leaves the chat* ');
    }
    if ( msg.content.strstr("pwp"))
    {
        msg.reply('pwp (pls kill me, this is not a joke)');
    }
    if ( msg.content.strstr("ma-ta") || msg.content.strstr("mata") || msg.content.strstr("ma ta"))
    {
        nrMesaje++;
        msg.reply('ma-ta ii zici lui ma-ta fa');
    }
    if ( msg.content.strstr("handicapat") && msg.member.user.tag == 'chinez.mancator.de.orez#3068' )
    {
        nrMesaje++;
        msg.reply('fa proasto, asculta aici...');
    } 
    if ( msg.content.strstr("taci") && msg.member.user.tag == 'chinez.mancator.de.orez#3068' )
    {
        nrMesaje++;
        msg.reply('make me');
    } 
    if ( msg.content.strstr("baby") || msg.content.strstr("bb") || msg.content.strstr("bby") )
    {
        nrMesaje++;
        if (testfete(msg)!=1)
            msg.reply('Miss me with that gay shit')
        else 
            msg.reply('Yes sweety ?')
    }

    if ( msg.content.strstr("drepturi"))
    {
        nrMesaje++;
        msg.reply('regii mei au drepturi depline, cat timp nu-s feme');
    }

    if ( msg.content.strstr("te") && msg.content.strstr("bat"))
    {
        nrMesaje++;
        msg.reply('harder daddy (kill me)');
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
        nrMesaje++;
        msg.reply('Taci fa din gura!!');
    }

    if (msg.content.strstr("mare")
        ||msg.content.strstr("big"))
    {
        nrMesaje++;
        msg.reply('Ma intreb ce altceva mai e mare, hmm...');
    }

    if ( msg.content.strstr("iubesc") && ( msg.content.strstr("claudiu") || msg.content.strstr("botu") || msg.content.strstr("botul") ) )
    {
        nrMesaje++;
        msg.reply('same frate, full homo tho');
    }
    if ( msg.content.strstr("grija"))
    {
        msg.reply('si tu de tine king');
    }
    if ( msg.content.strstr("homo") && ( msg.content.strstr("king") || msg.content.strstr("kings") ) )
    {
        nrMesaje++;
        msg.reply('always');
    } 

    if ( ( msg.content.strstr("bou") || msg.content.strstr("porc") )
             &&  msg.member.user.tag == 'chinez.mancator.de.orez#3068' )
    {
        nrMesaje++;
        msg.reply('scroafo');
    }
    if ( msg.content.strstr("nb") 
        || msg.content.strstr("noapte buna")
        || msg.content.strstr("gn")
        || msg.content.strstr("good night"))
    {
        msg.reply('nb king, take care!');
    }
    if ( msg.content.strstr("femei") )
    {
        nrMesaje++;
        msg.reply('listen here, I will not accept words that start with "f e m e i" on this christian server');
    }
    if ( msg.content.strstr("maximobil") )
    {
        nrMesaje++;
        msg.reply('vroom');
    }
    if ( msg.content.strstr("why not") 
         || msg.content.strstr("de ce nu") )
    {
        nrMesaje++;
        msg.reply('Idrk');
    } 
    if ( msg.content.strstr("why") 
         || msg.content.strstr("de ce") )
    {
        nrMesaje++;
        msg.reply('why not');
    } 
    if ( msg.content.strstr("ty")
         ||  msg.content.strstr("thank you")
         ||  msg.content.strstr("ms")
         ||  msg.content.strstr("multumesc")
        || msg.content.strstr("merci"))
    {
        nrMesaje++;
        if (Math.random() < 0.08)
            msg.reply('iti multumesti si tie')
        else
            msg.reply('My pleasure king');
    } 
    if (msg.content.strstr("firar"))
    {
        nrMesaje++;  
        msg.reply('la naiba');
    } 
    if ( msg.content.strstr("king moment")){  
        setTimeout(function(){  msg.reply('truuuue!'); }, 1000);
        setTimeout(function(){  msg.reply('truuuue!'); }, 2000);
        setTimeout(function(){  msg.reply('ce king!'); }, 3000); 
    } 
    if (msg.content.strstr("we") && msg.content.strstr("fraiere"))
    {
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
        nrMesaje++;
        msg.reply('wooow, thats kinda gay, ngl');
    }
    
    if ((msg.content.strstr("claudiu") && msg.content.strstr("real"))
        || msg.content.strstr("claudiu bot"))
    {
        nrMesaje++;
        msg.reply('we da eu m-am luat de doamna ma-ta?');
    }

    if ( msg.content.strstr("geo"))
    {
        nrMesaje++;
        msg.reply('Va rog frumos sa nu va mai luati de regele meu');
    }

    if ( msg.content.strstr("mama") 
        || msg.content.strstr("mama ta"))
    {
        nrMesaje++;
        msg.reply('am trecut la glume de clasa a 4-a?');
    }
    if ( msg.content.strstr("cosmin"))
    {
        nrMesaje++;
        msg.reply('stai, ala nu era numele meu, nu?');
    }
    if ( msg.content.strstr("chinez"))
    {
        nrMesaje++;
        msg.reply('deschide ochii fa');
    }

    if ( msg.content.strstr("mor"))
    {
        nrMesaje++;
        var r = Math.random();
        if (r<0.5)
            msg.reply('pai ce mai astepti?');
        else 
            msg.reply('mai bine tu decat eu...');
    }
  
    if (msg.content.strstr("@"))
    {
        var r = Math.random()
        if (r < 0.3) {
            nrMesaje++;
            msg.reply('lasa omul sa doarma');
        }
    }
    if ( msg.content.strstr("fa "))
    {
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
function Morning_alarm() {
    var minutes = 1000 * 60;
    var hours = minutes * 60;
    var days = hours * 24;
    var years = days * 365;
    var d = new Date();
    var t = d.getTime();
    var y = t / hours;
    if ((y - 6) % 24 == 0)
        channel.send('@everyone Buna dimineata regi, regine si diana!! Va urez o dimineata la fel de frumoasa precum mine')
}

bot.login(token);
