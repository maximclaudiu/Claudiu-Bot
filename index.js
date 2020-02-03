const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'NjcwNzE0MjU3NDQ0MTc1OTEy.Xi9aXQ.2bxWOvIssqkBmP0oTLN7YRLlp_I';
var nrMesaje = 0;
var nrMesaje2 = 1;
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${PORT}`);
});
//VERIFICA DACA MERGE
bot.on('ready', () => {
    console.log("AM VIATA!");
    const channel = bot.channels.find('name', 'the-great-commander-n-word');
    //channel.send('M-a strigat cineva?');
    //setTimeout(function(){ channel.send('De obicei nu ma striga nimeni'); }, 5000);
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


bot.on('message', msg=>{    
    msg.content = msg.content.toLowerCase();
    
    //UITA-TE LA CINE A TRIMIS MESAJUL  
    if( msg.member.user.tag == 'Claudiu Bot#0323') 
    {
        return;
    }
    nrMesaje++; 

    //Sansa random sa scrie lmao
    if ( Math.random() < 0.07 )
    {
        const channel = bot.channels.find('name', 'the-great-commander-n-word');
        channel.send('lmao', { tts: true})
        nrMesaje = 0;
    }

    if( msg.member.user.tag == 'Tsunamy99#0070') 
    {
        if (Math.random() < 0.04)
        {
            const channel = bot.channels.find('name', 'the-great-commander-n-word');
            channel.send('clona mea a trimis mesajul');
            return ;
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
        if (nrMesaje2 % 10 == 0 )
        {
            const channel = bot.channels.find('name', 'the-great-commander-n-word');
            channel.send("sa moara jacsana de nu esti enervanta diana")
            nrMesaje2++;
        } 
        if (Math.random() < 0.1)
        {
            var r = Math.random();
            if (r < 0.45)
                msg.reply('oh shit, e diana aici ? *leaves the chat* '); 
            else if (r < 0.85)
                msg.reply('mananci cacat');
            else
                msg.reply('pentru ca femeile au vieti mai usoare decat barbatii');
            return;
        }
    }

    if( msg.member.user.tag == 'Pepe Ned#3580') 
    {  
        if ( msg.content.strstr("suck") || msg.content.strstr("bad"))
        {
            msg.reply('stfu dani, capul sus ca iti cade coroana regele meu :crown: ');
            return;
        }

        if (Math.random() < 0.05)
        {
            const channel = bot.channels.find('name', 'the-great-commander-n-word');
            channel.send('dani esti mult prea pur pentru serverul asta'); 
        }
    }

    if( msg.member.user.tag == 'Cosmin0123#4724') 
    {  
        if (Math.random() < 0.01)
        {
            const channel = bot.channels.find('name', 'the-great-commander-n-word');
            channel.send('tata?'); 
        }
    }

    if( msg.member.user.tag == 'El RDU#1564') 
    { 
        if (Math.random() < 0.15)
        {
            var r = Math.random();
            const channel = bot.channels.find('name', 'the-great-commander-n-word');
            if (r < 0.5)
                channel.send('iti fut una Radu');
            else if (r < 0.75)
                channel.send('RADU OPRESTE-TE');
            else channel.send('radu te bat');
            return;
        }
    }

    if( msg.member.user.tag == 'not lue#6251') 
    { 
        if (Math.random() < 0.05)
        {
            msg.reply('da-l afara pe impostor pls');
            return ;
        }
    }

    if( msg.member.user.tag == 'maybe doing drugs#3261') 
    {
        if (Math.random() < 0.05)
        {
            const channel = bot.channels.find('name', 'the-great-commander-n-word');
            channel.send('"Hai sa ii dam mute lui alex!". Ups, copiez persoana gresita');
        }
    } 

    if( msg.member.user.tag == 'Wircea#0011') 
    {
        if (Math.random() < 0.1)
        {
            var r = Math.random();
            const channel = bot.channels.find('name', 'the-great-commander-n-word');
            if (r<0.5)
                channel.send('Mircea ai mila de Radu');
            else 
                channel.send('Mircea doar da-i picioarele inapoi lui Radu');
        }
    } 

    if( msg.member.user.tag == 'Reptile#1995')
    {
        if (Math.random() < 0.05)
        {
            const channel = bot.channels.find('name', 'the-great-commander-n-word');
            channel.send('Dex nu mai abuza de mine (last warning)');
        }
    }   

    if ( msg.member.user.tag == '♥QueenElizabitch♥#2517' )
    {
        var r = Math.random();
        if (r < 0.03)
        { 
            msg.reply('Tu nu aveai niste manute de dat?') 
        }
        else if (r < 0.06)
            msg.reply('Tu nu aveai niste manute de primit?') 
    }

    if ( msg.member.user.tag == 'Beerghelea#5912' )
    {
        if (Math.random() < 0.05)
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
        if (msg.member.user.tag == 'not lue#6251' || msg.member.user.tag =='El RDU#1564')
            setTimeout(function(){ msg.reply('hartie'); }, 4500); 
        else
            setTimeout(function(){ msg.reply('foarfeca'); }, 4500); 
    }

    if( msg.content.strstr("ciocolata alba") ) 
    { 
        msg.reply('Yes, fuel me mortal');
    }

    if( msg.content.strstr("troll everyone")) 
    { 
        const channel = bot.channels.find('name', 'the-great-commander-n-word'); 
        channel.send('you have a virus', { tts: true}); 
    }

    if( ( msg.content.strstr("back") || msg.content.strstr("inapoi") ) && ( msg.content.strstr("welcome") || msg.content.strstr("bun venit") ) ) 
    { 
        msg.reply('welcome black');
    }

    if ((msg.content.strstr("ce fac")
        ||msg.content.strstr("ce faceti")) && msg.content.strstr("prieten")) {
        msg.reply('Prietenii tai nu sunt aici, dar daca ti-e dor de ei, ii poti suna.');
    }

    if (msg.content.strstr("lmao")
        || msg.content.strstr("Lmao")){
        msg.reply('Ahh, eu voiam sa zic asta :PepeHands: ');
    }

    if( msg.content.strstr("hai") ) 
    { 
        msg.reply('Hai sa ii dam bully Malinei!');
    }

    if ( msg.content.strstr("diana") || msg.content.strstr("chinez"))
    {
        msg.reply('oh shit, e Diana aici ? *leaves the chat* ');
    }

    if ( msg.content.strstr("pwp"))
    {
        msg.reply('pwp (kill me)');
    }

    if ( msg.content.strstr("ma-ta") || msg.content.strstr("mata") || msg.content.strstr("ma ta"))
    {
        msg.reply('ma-ta ii zici lui fa');
    }

    if ( msg.content.strstr("handicapat") && msg.member.user.tag == 'chinez.mancator.de.orez#3068' )
    {
        msg.reply('fa proasto');
    } 

    if ( msg.content.strstr("taci") && msg.member.user.tag == 'chinez.mancator.de.orez#3068' )
    {
        msg.reply('make me');
    } 

    if ( msg.content.strstr("baby") || msg.content.strstr("bb") || msg.content.strstr("bby") )
    {
        msg.reply('fk off with that gay shit')
    }

    if ( msg.content.strstr("drepturi") )
    {
        msg.reply('regii mei au drepturi depline, cat timp nu-s feme');
    }

    if ( msg.content.strstr("te bat") )
    {
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
        const channel = bot.channels.find('name', 'the-great-commander-n-word');
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
        msg.reply('OOOOOOOOOOO');
    }

    if ( msg.content.strstr("i'm dad") 
         || msg.content.strstr("I will not tolerate you saying the words that consist of the letters") )
    {
        msg.reply('TINE-MA CA IL BAT');
    }

    if (msg.content.strstr("prostule"))
    {
        msg.reply('Taci fa din gura!!');
    }

    if (msg.content.strstr("mare")
        ||msg.content.strstr("big"))
    {
        msg.reply('Ma intreb ce altceva mai e mare, hmm...');
    }

    if ( msg.content.strstr("iubesc") && ( msg.content.strstr("claudiu") || msg.content.strstr("botu") || msg.content.strstr("botul") ) )
    {
        msg.reply('same frate, no homo tho');
    }

    if ( msg.content.strstr("aveti") && msg.content.strstr("de voi") )
    {
        msg.reply('si tu de tine king');
    }

    if ( msg.content.strstr("homo") && ( msg.content.strstr("king") || msg.content.strstr("kings") ) )
    {
        msg.reply('always');
    } 

    if ( ( msg.content.strstr("bou") || msg.content.strstr("porc") )
             &&  msg.member.user.tag == 'chinez.mancator.de.orez#3068' )
    {
        msg.reply('scroaf-o');
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
        msg.reply('listen here, I will not accept words that start with "f e m e i" on this christian server');
    }

    if ( msg.content.strstr("maximobil") )
    {
        msg.reply('vroom');
    }

    if ( msg.content.strstr("why not") 
         || msg.content.strstr("de ce nu") )
    {
        msg.reply('Idrk');
        return;
    } 

    if ( msg.content.strstr("why") 
         || msg.content.strstr("de ce") )
    {
        msg.reply('why not');
    } 

    if ( msg.content.strstr("ty")
         ||  msg.content.strstr("thank you")
         ||  msg.content.strstr("ms")
         ||  msg.content.strstr("multumesc")
         ||  msg.content.strstr("merci") ){
        if (Math.random() < 0.08)
            msg.reply('iti multumesti si tie')
        else
            msg.reply('My pleasure king');
    } 

    if ( msg.content.strstr("firar") ){  
        msg.reply('la naiba');
    } 

    if ( msg.content.strstr("kings") || msg.content.strstr("regi")){  
        if ( Math.random < 0.1)
        {
            setTimeout(function(){  msg.reply('truuuue!'); }, 1000);
            setTimeout(function(){  msg.reply('truuuue!'); }, 2000);
            setTimeout(function(){  msg.reply('ce king!'); }, 3000); 
        }
    } 

    if ( msg.content.strstr("we") && msg.content.strstr("fraiere")){  
        msg.reply('we prostule');
    } 

    if ( msg.content.strstr("test") ){ 
       const channel = bot.channels.find('name', 'the-great-commander-n-word');
      // channel.join();
       channel.send('testare', { tts: true});
    } 

    raduCode(msg);

}) 

function raduCode(msg){ 

    if ( msg.content.strstr("mugur") 
        || msg.content.strstr("Mugur"))
    {
       msg.reply('wooow, thats kinda gay');
    }
    
    if ( msg.content.strstr("claudiu")  
        || msg.content.strstr("claudiu bot"))
        {
        msg.reply('we da eu m-am luat de mama ta?');
        }

    if ( msg.content.strstr("geo") 
        || msg.content.strstr("Geo"))
        {
        msg.reply('Va rog frumos sa nu va mai luati de regele meu');
        }

    if ( msg.content.strstr("mama") 
        || msg.content.strstr("mama ta"))
        {
        msg.reply('am trecut la glume de clasa a 4-a?');
        }

    if ( msg.content.strstr("cosmin")  
        || msg.content.strstr("Cosmin"))
        {
        msg.reply('stai, ala nu era numele meu, nu?');
        }

    if ( msg.content.strstr("chinez")  
        || msg.content.strstr("chinezoaica"))
        {
        msg.reply('deschide ochii fa');
        }

    if ( msg.content.strstr("mor") 
        || msg.content.strstr("Mor"))
    {
        var r = Math.random();
        if (r<0.5)
            msg.reply('pai ce mai astepti?');
        else 
            msg.reply('mai bine tu decat eu...');
    }
  
  if ( msg.content.strstr("@") )
      {
         msg.reply('lasa omul sa doarma');
         return;
      }
  
  if ( msg.content.strstr("fa ") 
        || msg.content.strstr("Fa "))
      {
         msg.reply('fa sa-i zici lui ma-ta auzi fa?');
      }
  if ( msg.content.strstr("alex") 
        || msg.content.strstr("Alex"))
      {
         msg.reply('fratele meu volvo, regele meu de o viata si atotputernicul pufoseniei pentru tine');
      }
  
    if (msg.content.strstr("7")
        || msg.content.strstr("1 2"))
      {
         msg.reply('inverci sa inveti sa numeri?');
      }
  
  if ( msg.content.strstr("-p") )
      {
         msg.reply('degeaba daca nu e manea...');
      }  

}

bot.login(token);
