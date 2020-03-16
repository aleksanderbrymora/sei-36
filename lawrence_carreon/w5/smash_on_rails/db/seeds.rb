Character.destroy_all

c1 = Character.create(
    :name => "Wolf",
    :franchise => "Starfox",
    :stock_symbol => "https://www.ssbwiki.com/images/0/06/WolfHeadSSBUWebsite.png",
    :availability => "Unlockable",
    :image => "https://www.ssbwiki.com/images/8/8a/Wolf_SSBU.png"
)

c2 = Character.create(
    :name => "Toon Link",
    :franchise => "Legend of Zelda",
    :stock_symbol => "https://www.ssbwiki.com/images/b/bf/ToonLinkHeadSSBUWebsite.png",
    :availability => "Unlockable",
    :image => "https://www.ssbwiki.com/images/5/56/Toon_Link_SSBU.png"
)

c3 = Character.create(
    :name => "Lucina",
    :franchise => "Fire Emblem",
    :stock_symbol => "https://www.ssbwiki.com/images/d/d8/LucinaHeadSSBUWebsite.png",
    :availability => "Unlockable",
    :image => "https://www.ssbwiki.com/images/d/dc/Lucina_SSBU.png"
)

c4 = Character.create(
    :name => "Peach",
    :franchise => "Super Mario",
    :stock_symbol => "https://www.ssbwiki.com/images/1/14/PeachHeadSSBUWebsite.png",
    :availability => "Unlockable",
    :image => "https://www.ssbwiki.com/images/7/74/Peach_SSBU.png"
)

puts "#{Character.count} characters were made!"


Special.destroy_all

# wolf specials
s1 = Special.create(
    :name => "Blaster",
    :input_direction => "Neutral",
    :attack_type => "Projectile",
    :damage_dealt => "7% (base)",
    :preview => "https://www.ssbwiki.com/images/e/e9/Wolf_Neutral_B_SSBU.gif"
)

s2 = Special.create(
    :name => "Wolf Flash",
    :input_direction => "Side",
    :attack_type => "Melee/ Recovery",
    :damage_dealt => "3%-15% (base)",
    :preview => "https://www.ssbwiki.com/images/3/39/Wolf_Side_B_SSBU.gif"
)

s3 = Special.create(
    :name => "Fire Wolf",
    :input_direction => "Up",
    :attack_type => "Melee/ Recovery",
    :damage_dealt => "11.5% (base)",
    :preview => "https://www.ssbwiki.com/images/5/57/Wolf_Up_B_SSBU.gif"
)

s4 = Special.create(
    :name => "Reflector",
    :input_direction => "Down",
    :attack_type => "Melee/ Reflector",
    :damage_dealt => "4% (base)",
    :preview => "https://www.ssbwiki.com/images/7/78/Wolf_Down_B_SSBU.gif"
)

c1.specials << s1 << s2 << s3 << s4

# toon link specials
s5 = Special.create(
    :name => "Hero's Bow",
    :input_direction => "Neutral",
    :attack_type => "Projectile",
    :damage_dealt => "4-12% (base)",
    :preview => "https://www.ssbwiki.com/images/5/50/Toon_Link_Neutral_B_SSBU.gif"
)

s6 = Special.create(
    :name => "Boomerang",
    :input_direction => "Side",
    :attack_type => "Projectile",
    :damage_dealt => "3-9.6% (base)",
    :preview => "https://www.ssbwiki.com/images/5/5b/Toon_Link_Side_B_SSBU.gif"
)

s7 = Special.create(
    :name => "Spin Attack",
    :input_direction => "Up",
    :attack_type => "Melee/ Recovery",
    :damage_dealt => "1-4% (base)",
    :preview => "https://www.ssbwiki.com/images/1/11/Toon_Link_Up_B_SSBU.gif"
)

s8 = Special.create(
    :name => "Bomb",
    :input_direction => "Down",
    :attack_type => "Projectile",
    :damage_dealt => "14% (base)",
    :preview => "https://www.ssbwiki.com/images/3/31/Toon_Link_Down_B_SSBU.gif"
)

c2.specials << s5 << s6 << s7 << s8

# peach specials
s9 = Special.create(
    :name => "Toad",
    :input_direction => "Neutral",
    :attack_type => "Counter",
    :damage_dealt => "Varies",
    :preview => "https://www.ssbwiki.com/images/1/18/Peach_Neutral_B_SSBU.gif"
)

s10 = Special.create(
    :name => "Peach Bomber",
    :input_direction => "Side",
    :attack_type => "Melee",
    :damage_dealt => "12% (base)",
    :preview => "https://www.ssbwiki.com/images/1/18/Peach_Neutral_B_SSBU.gif"
)

s11 = Special.create(
    :name => "Peach Parasol",
    :input_direction => "Up",
    :attack_type => "Melee/ Recovery",
    :damage_dealt => "1-4% (base)",
    :preview => "https://www.ssbwiki.com/images/0/0d/Peach_Up_B_SSBU.gif"
)

s12 = Special.create(
    :name => "Vegetable",
    :input_direction => "Down",
    :attack_type => "Projectile",
    :damage_dealt => "Varies (based on Turnip type)",
    :preview => "https://www.ssbwiki.com/images/7/77/Peach_Down_B_SSBU.gif"
)

c4.specials << s9 << s10 << s11 << s12

# lucina specials
s13 = Special.create(
    :name => "Shieldbreaker",
    :input_direction => "Neutral",
    :attack_type => "Melee",
    :damage_dealt => "8.5-23% (base)",
    :preview => "https://www.ssbwiki.com/images/2/22/Lucina_Neutral_B_SSBU.gif"
)

s14 = Special.create(
    :name => "Dancing Blade",
    :input_direction => "Side",
    :attack_type => "Melee",
    :damage_dealt => "2-5.6% (base)",
    :preview => "https://www.ssbwiki.com/images/e/e1/Lucina_Side_B_SSBU.gif"
)

s15 = Special.create(
    :name => "Dolphin Slash",
    :input_direction => "Up",
    :attack_type => "Melee/ Recovery",
    :damage_dealt => "7-11% (base)",
    :preview => "https://www.ssbwiki.com/images/8/86/Lucina_Up_B_SSBU.gif"
)

s16 = Special.create(
    :name => "Counter",
    :input_direction => "Down",
    :attack_type => "Counter",
    :damage_dealt => "Varies",
    :preview => "https://www.ssbwiki.com/images/7/75/Lucina_Down_B_SSBU.gif"
)

c3.specials << s13 << s14 << s15 << s16

puts "#{Special.count} specials were made!"


Game.destroy_all

g1 = Game.create(
    :name => "Smash 64",
    :release_date => "1999-01-21",
    :patch_version => "N/A",
    :image => "https://www.ssbwiki.com/images/8/80/SSB64Logo.jpg"
);

g2 = Game.create(
    :name => "Melee",
    :release_date => "2001-11-21",
    :patch_version => "N/A",
    :image => "https://www.ssbwiki.com/images/0/03/SSBMLogo.jpg"
);

g3 = Game.create(
    :name => "Brawl",
    :release_date => "2008-01-31",
    :patch_version => "N/A",
    :image => "https://www.ssbwiki.com/images/e/e5/SSBB_Logo_%28US%29.png"
);

g4 = Game.create(
    :name => "Smash4",
    :release_date => "2014-09-13",
    :patch_version => "1.1.7",
    :image => "https://www.ssbwiki.com/images/e/ea/SSB_Wii_U_logo.png"
);

g5 = Game.create(
    :name => "Ultimate",
    :release_date => "2018-12-07",
    :patch_version => "7.0.0",
    :image => "https://www.ssbwiki.com/images/5/5b/SSBU-English.png"
);

c1.games << g3 << g5
c2.games << g3 << g4 << g5
c4.games << g2 << g3 << g4 << g5
c3.games << g4 << g5

puts "#{Game.count} games were made!"


