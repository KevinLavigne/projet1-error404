function RedirectionJavascript(){
    document.location.href="acceuil.html";
}
const option1 = document.getElementById('option1')
const option2 = document.getElementById('option2')
const option3 = document.getElementById('option3')

const gameText1 = document.getElementById('game-text-1')

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

let weapon = 1

let armory = 1

let flag = true

const reset = function(){
    option1.style.display= "none"
    option2.style.display= "none"
    option3.style.display= "none"

}
const armorUpgrade = function(){
    armory = armory + 1;
}

const weaponupgrade = function(){
    weapon = weapon + 1;
}
const heal = function(){
    player[5] = 50
}
const endOfFight = function(){
    gameText1.classList.remove("animated-text")
    void gameText1.offsetWidth;
    gameText1.innerHTML = "select your reward"
    gameText1.classList.add("animated-text")
    option1.setAttribute("value", "sword updrade")
    option1.addEventListener("click",() => weaponupgrade())
    option1.addEventListener("click",() => reset())
    option2.setAttribute("value", "Armor updrade")
    option2.addEventListener('click',() => armorUpgrade())
    option2.addEventListener("click",() => reset())
    option3.setAttribute("value", "Heal")
    option3.addEventListener('click',() => heal())
    option3.addEventListener("click",() => reset())
}

const player = [
    name = "Momonga",
    strenght = 10,
    Attack = Math.floor((strenght * 1.5 ) * weapon ),
    vitality = 10,
    MaxHp = (vitality * 5),
    hp = MaxHp * 1,
    armor = (5 * armory) - 4,
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
    constructor (name, life, damage, damageReduc, isAgressive, isBoss) {
    this.name = name;
    this.life = life;
    this.damage = damage;
    this.damageReduc = damageReduc;
    this.isAgressive = isAgressive;
    this.isBoss = isBoss;
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
        def.innerHTML= player[6]
        damage.innerHTML= (player[2] * weapon)
        }

     fight(ennemy){
         if (player[5] > 0 && this.life > 0){
            this.life = this.life - (player[2] - this.damageReduc);
            player[5] = player[5] - (this.damage - player[6]);
            this.render()
         }
         if (player[5] <= 0){
            this.render()
            alert("you lose try again an another time")
            RedirectionJavascript()
         }
            if (this.life <= 0 && this.name === "wolf") {
               endOfFight()
               skeleton.render()
         }
         if (this.life <= 0 && this.name === "Skeleton") {
            endOfFight()
            archSpider.render()
         }
         if (this.life <= 0 && this.name === "ArchSpider") {
            endOfFight()
            skeleton.render()
         }
         if (this.life <= 0 && this.name === "Werewolf") {
            endOfFight()
            skeleton.render()
         }
         if (this.life <= 0 && this.name === "Demon") {
            endOfFight()
            skeleton.render() 
         }
     }
}

option2.addEventListener('click',() => wolf.fight() )
option2.setAttribute("value", "Smash Him!")

const wolf = new Character ("wolf", 30, 5, 0, true, false);
wolf.render()
const skeleton = new Character ("Skeleton", 45, 8, 5, true, false)

const archSpider = new Character ("Arch Spider", 90, 15, 0,true, false)



/*

const Werwolf = new Character("Werewolf", 50, 10 , 0,true,true)
const finalBoss = new Character ("The Redeirection Button", 800, 50, 20, true,false )   


   

const devilDeal = new Character ("Satan the Demon King", 999, 999, 999, false, true )
const angelDeal = new Character ("The God Vessel", 999, 999, 999, false, true )
const charEvent1 = new Character ("Little Red Riding Hood", 10, 1, 15, false, false)

*/