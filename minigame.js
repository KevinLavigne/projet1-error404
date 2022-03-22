const player = [
    name = "Momonga",
    strenght = 10,
    vitality = 10,
    Dexterity = 10,
    Charisma = 5,
    Luck  = 0,
    Karma = 0,
    crit = 5 ,
    critMult = 1.00,
    lifeSteal = 0,
    regen = 0,
]


class Character {
    constructor (name, life, damage, damageReduc, isAgressive, isBoss) {
    this.name = name;
    this.life = life;
    this.damage = damage;
    this.damageReduc = damageReduc;
    this.isAgressive = isAgressive;
    this.isBoss = isBoss;
    }
}
   const wolf = new Character ("wolf", 15, 5, 0, true, false);
   const skeleton = new Character ("Skeleton", 20, 5, 5, true, false)
   const archSpider = new Character ("Arch Spider", 25, 10, 0,true, false)

   
   const charEvent1 = new Character ("Little Red Riding Hood", 10, 1, 15, false, false)
   const monsterEvent1 = new Character("Werewolf", 50, 10 , 0,true,true)
   
   const devilDeal = new Character ("Satan the Demon King", 999, 999, 999, false, true )
   const angelDeal = new Character ("The God Vessel", 999, 999, 999, false, true )


   const finalBoss = new Character ("The Redeirection Button", 800, 50, 20, true,false )
