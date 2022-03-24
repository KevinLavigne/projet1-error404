// script bordelique by Kévin Lavigne

function RedirectionJavascript(){
    document.location.href="accueil.html";
}
const option1 = document.getElementById('option1')
const option2 = document.getElementById('option2')
const option3 = document.getElementById('option3')
const fightOption = document.getElementById('fight-option')

const gameText1 = document.getElementById('game-text-1')
const gameText2 = document.getElementById('game-text-2')
const gameText3 = document.getElementById('game-text-3')

const playerMaxHp = document.getElementById('max-health')

const playerHp = document.getElementById('health')

const playerName = document.getElementById(`player_name`);

const ennemyName = document.getElementById('ennemy-name')

const damage = document.getElementById('damage')

const vita = document.getElementById('vitality')

const str = document.getElementById('strength')

const enemyLife = document.getElementById('ennemy-hp')

const ennemyProt = document.getElementById('armor')

const weap = document.getElementById('weapon')

const arm = document.getElementById("armory")

const def = document.getElementById('defence')

const damageEnnemy = document.getElementById('damageEnnemy')

const imgmonster = document.getElementById('ennemy-img')

const rewardText = document.getElementById('reward-text')

let weapon = 1

let armory = 1
function reward(){
    void option1.style.display
    void option2.style.display
    void option3.style.display
    option1.style.display = "none"
    option2.style.display = "none"
    option3.style.display = "none"
    void rewardText.style.display
    rewardText.style.display = "none"
}

function armorUpgrade(){
    armory = armory + 1;
    reward()
}

function weaponupgrade(){
    weapon = weapon + 1;
    reward()
}
function heal(){
    player[5] = 50
    reward()
}
function endOfFight(){
    void option1.style.display
    void option2.style.display
    void option3.style.display
    option1.style.display ="initial"
    option2.style.display ="initial"
    option3.style.display ="initial"
    void rewardText.style.display
    rewardText.style.display ="initial"
    rewardText.classList.remove("animated-text");
    void rewardText.offsetWidth;
    rewardText.innerHTML = "select your reward :";
    rewardText.classList.add("animated-text");
    option1.setAttribute("value", "sword updrade");
    option1.addEventListener("click",weaponupgrade);
    option2.setAttribute("value", "Armor updrade");
    option2.addEventListener('click',armorUpgrade);
    option3.setAttribute("value", "Heal");
    option3.addEventListener('click',heal);
    
}
const player = [
    name = "Momonga",
    strenght = 10,
    Attack = Math.floor((strenght * 1.5 ) * weapon ),
    vitality = 10,
    MaxHp = (vitality * 5),
    hp = MaxHp * 1,
    armor = (armory*5) -4,
    Dexterity = 10,
    Charisma = 5,
    Luck  = 0,
    Karma = 0,
    crit = 0 ,
    critMult = 1,
    lifeSteal = 0,
    regen = 0,
    
];


class Character {
    constructor (name, life, damage, damageReduc, isAgressive, isBoss,img , text1, text2, text3) {
    this.name = name;
    this.life = life;
    this.damage = damage;
    this.damageReduc = damageReduc;
    this.isAgressive = isAgressive;
    this.isBoss = isBoss;
    this.img = img
    this.text1 = text1
    this.text2 = text2
    this.text3 = text3
    }

    render(){
        playerName.innerHTML = player[0]
        str.innerHTML = player[1]
        vita.innerHTML = player[3]
        ennemyName.innerHTML = this.name
        damageEnnemy.innerHTML = this.damage 
        enemyLife.innerHTML = this.life
        ennemyProt.innerHTML= this.damageReduc
        playerMaxHp.innerHTML= player[4]
        playerHp.innerHTML= player[5]
        weap.innerHTML= weapon
        arm.innerHTML= armory
        def.innerHTML= (armory*5)-4 
        damage.innerHTML= (player[2] * weapon)
        
        }

     fight(ennemy){
        this.render()
         if (player[5] > 0 && this.life > 0){
            this.life = this.life - ((player[2]*weapon) - this.damageReduc);
            this.render()
            if (this.life > 0){
            player[5] = player[5] - (this.damage - ((armory*5)-4));
            this.render()
            }
         }
         if (player[5] <= 0){
            this.render()
            RedirectionJavascript()
         }
            if (this.life <= 0 && this.name === "wolf") {
               endOfFight()    
               undead.render()
               imgmonster.setAttribute("src", `${undead.img}`)
               gameText1.classList.remove("animated-text")
               gameText2.classList.remove("animated-text")
               gameText3.classList.remove("animated-text")
               void gameText1.offsetWidth;
               void gameText2.offsetWidth;
               void gameText3.offsetWidth;
               gameText1.classList.add("animated-text")
               gameText2.classList.add("animated-text")
               gameText3.classList.add("animated-text")
               gameText1.innerHTML = undead.text1;
               gameText2.innerHTML = undead.text2;
               gameText3.innerHTML = undead.text3;
               fightOption.removeEventListener('click',fight1)
               fightOption.addEventListener("click",fight2)
         }
         if (this.life <= 0 && this.name === "Undead") {
            endOfFight()
            archSpider.render()
            imgmonster.setAttribute("src", `${archSpider.img}`)
            gameText1.classList.remove("animated-text")
            gameText2.classList.remove("animated-text")
            gameText3.classList.remove("animated-text")
            void gameText1.offsetWidth;
            void gameText2.offsetWidth;
            void gameText3.offsetWidth;
            gameText1.classList.add("animated-text")
            gameText2.classList.add("animated-text")
            gameText3.classList.add("animated-text")
            gameText1.innerHTML = archSpider.text1;
            gameText2.innerHTML = archSpider.text2;
            gameText3.innerHTML = archSpider.text3;
            fightOption.removeEventListener('click',fight2)
            fightOption.addEventListener("click",fight3)
         }
         if (this.life <= 0 && this.name === "ArchSpider") {
            endOfFight()
            werewolf.render()
            imgmonster.setAttribute("src", `${werewolf.img}`)
            gameText1.classList.remove("animated-text")
            gameText2.classList.remove("animated-text")
            gameText3.classList.remove("animated-text")
            void gameText1.offsetWidth;
            void gameText2.offsetWidth;
            void gameText3.offsetWidth;
            gameText1.classList.add("animated-text")
            gameText2.classList.add("animated-text")
            gameText3.classList.add("animated-text")
            gameText1.innerHTML = werewolf.text1;
            gameText2.innerHTML = werewolf.text2;
            gameText3.innerHTML = werewolf.text3;
            fightOption.removeEventListener('click',fight3)
            fightOption.addEventListener("click",fight4)
         }
         if (this.life <= 0 && this.name === "Werewolf") {
            endOfFight()
            demon.render()
            imgmonster.setAttribute("src", `${demon.img}`)
            gameText1.classList.remove("animated-text")
            gameText2.classList.remove("animated-text")
            gameText3.classList.remove("animated-text")
            void gameText1.offsetWidth;
            void gameText2.offsetWidth;
            void gameText3.offsetWidth;
            gameText1.classList.add("animated-text")
            gameText2.classList.add("animated-text")
            gameText3.classList.add("animated-text")
            gameText1.innerHTML = demon.text1;
            gameText2.innerHTML = demon.text2;
            gameText3.innerHTML = demon.text3;
            fightOption.innerHTML = "Eradicate Him!"
            fightOption.removeEventListener('click',fight4)
            fightOption.addEventListener("click",fight5)
         }
         if (this.life <= 0 && this.name === "Demon") {
            endOfFight()
            boss.render() 
            gameText1.classList.remove("animated-text")
            gameText2.classList.remove("animated-text")
            gameText3.classList.remove("animated-text")
            void gameText1.offsetWidth;
            void gameText2.offsetWidth;
            void gameText3.offsetWidth;
            gameText1.classList.add("animated-text")
            gameText2.classList.add("animated-text")
            gameText3.classList.add("animated-text")
            gameText1.innerHTML = boss.text1;
            gameText2.innerHTML = boss.text2;
            gameText3.innerHTML = boss.text3;
            fightOption.innerHTML = "Try to flee!!"
            imgmonster.setAttribute("src", `${boss.img}`)
            fightOption.removeEventListener('click',fight5)
            fightOption.addEventListener("click",fight6)
         }

     }
}
reward()
function fight1(){
    wolf.fight()
}
function fight2(){
    undead.fight()
}
function fight3(){
    archSpider.fight()
}
function fight4(){
    werewolf.fight()
}
function fight5(){
    demon.fight()
}
function fight6(){
    boss.fight()
}



fightOption.addEventListener('click',fight1)
const wolf = new Character ("wolf", 30, 5, 0, true, false ,"minigameImg/wolf.jpg","You wake up on a strange forest, your mind is trouble and you don't remenber why you","are here. You look around you and see a castle on the hill. You decide to go to castle."," you stop your travel on wolf growl right behind you. The starving wolf jump on you." );
wolf.render()

fightOption.innerHTML = "Smash Him!"
gameText1.innerHTML = wolf.text1
gameText2.innerHTML = wolf.text2
gameText3.innerHTML = wolf.text3

const undead = new Character ("Undead", 45, 8, 5, true, false,"minigameImg/Undead.jpg","You continu your journey on the forest, you cross an foggy graveyard, the smell of flesh" , "and rot is intense at point as your head spinning. You stop to rest a litlle and your karma"," make you to feel the hideous undead right before he take you from behind.")

const archSpider = new Character ("ArchSpider", 90, 15, 0,true, false, "minigameImg/Spider.jpg","You finaly succesfully go out of this graveyard in life. Your adventure goes on into a swamp, you"," heard the crack of wood far away. there is the fastest way to go to castle and you have no time"," to go round. You focus on your road for dodge water, and see a strange black column. Wtf is that?")

const werewolf = new Character("Werewolf", 50, 20 , 10,true,true, "minigameImg/Werewolf.jpg","You felt the thrill on your neck! How can exist a monster like this? You understood why you hear","the wood crack this thing was greater than tree. You see an human like shape kneeling, as virtous","man you are, you try to see if u can help him and find a metamorph who waiting for eat someone.")

const demon = new Character("Demon", 100, 10, 0, true,false, "minigameImg/Demon.jpg","One less abomition for the wolrd. The travel was hard but i see the castle entrance. It would be a ","good idea to take a little break on castle courts. after this u take your bravery on hands and begin"," Castle exploration. On Throne Room you find an Demon making occult ceremony and sacrifice.")

const boss = new Character('Redirection Button',999,500,100,true,true, "minigameImg/Boss.jpg", `Dragon :"who are you small bug? no way i don't care. My name is Redirection-Event.`,`what are you doing here? There in no place for you here. I will bring you back to your own World.`, `Be ready that will burnt a little. Go and press this small rectangle just above the stat tab"` )




/*
const finalBoss = new Character ("The Redeirection Button", 800, 50, 20, true,false )   
const devilDeal = new Character ("Satan the Demon King", 999, 999, 999, false, true )
const angelDeal = new Character ("The God Vessel", 999, 999, 999, false, true )
const charEvent1 = new Character ("Little Red Riding Hood", 10, 1, 15, false, false)

*/