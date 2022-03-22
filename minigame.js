function RedirectionJavascript(){
    document.location.href="acceuil.html";
}

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

let weapon = 1

let armory = 1

const player = [
    name = "Momonga",
    strenght = 10,
    Attack = Math.floor((strenght * 1.5 ) * weapon ),
    vitality = 10,
    MaxHp = (vitality * 5),
    hp = MaxHp * 1,
    armor = (5-4) * armory,
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
        damage.innerHTML = this.damage 
        enemyLife.innerHTML = this.life
        ennemyProt.innerHTML= this.damageReduc
        playerMaxHp.innerHTML= player[4]
        playerHp.innerHTML= player[5]
        weap.innerHTML= weapon
        arm.innerHTML= armory
        def.innerHTML= player[6]

        }

     fight(ennemy){
         this.life = this.life - (player[2] - this.damageReduc);
         player[5] = player[5] - (this.damage - player[6]);
         this.render()
     }

     brawl(){
         if (player[5] > 0 && this.life > 0){
            this.render()
         }
         if (player[5] <= 0){
             this.render()
             alert("you lose try again an another time")
         }
         if (this.life <= 0) {
            this.render()
         }
     }


}
const wolf = new Character ("wolf", 30, 5, 0, true, false);
wolf.render()


const skeleton = new Character ("Skeleton", 40, 5, 5, true, false)
console.log(skeleton)





/*
const archSpider = new Character ("Arch Spider", 25, 10, 0,true, false)
const Werwolf = new Character("Werewolf", 50, 10 , 0,true,true)
const finalBoss = new Character ("The Redeirection Button", 800, 50, 20, true,false )   


   

const devilDeal = new Character ("Satan the Demon King", 999, 999, 999, false, true )
const angelDeal = new Character ("The God Vessel", 999, 999, 999, false, true )
const charEvent1 = new Character ("Little Red Riding Hood", 10, 1, 15, false, false)

*/