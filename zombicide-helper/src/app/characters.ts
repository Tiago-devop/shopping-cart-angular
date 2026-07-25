// Sobreviventes jogáveis de Zombicide Fantasy (Black Plague / Green Horde / White Death),
// organizados por caixa/expansão. `owned` marca as caixas base que o dono do app possui.
// Edite este arquivo para adicionar ou remover nomes e caixas.
export interface CharacterGroup {
  box: string;
  owned?: boolean;
  characters: string[];
}

export const CHARACTER_GROUPS: CharacterGroup[] = [
  // ── Era Black Plague / Green Horde ──
  {
    box: 'Black Plague (caixa base)',
    owned: true,
    characters: ['Ann', 'Baldric', 'Clovis', 'Nelly', 'Samson', 'Silas'],
  },
  {
    box: 'Wulfsburg (expansão)',
    characters: ['Ariane', 'Karl', 'Morrigan', 'Theo'],
  },
  {
    box: 'Green Horde (caixa base)',
    characters: ['Asim', 'Berin', 'Johannes', 'Megan', 'Rolf', 'Seli'],
  },
  {
    box: 'Friends and Foes (expansão)',
    characters: ['Doran', 'Kabral', 'Katelyn', 'Solveig'],
  },
  {
    box: 'Hero Box 1',
    characters: ['Arnaud', 'Glynda', 'Julian', 'Sylvia', 'Tucker'],
  },
  {
    box: 'Huntsman Pack',
    characters: [
      'Bob', 'Danton', 'Evil Troy', 'Falstaff', 'Gilbert', 'Hitch', 'James',
      'Lady Faye', 'Lucas', 'Montalban', 'Morgan', 'Mortimer', 'Paul', 'Piper',
      'Troy', 'William',
    ],
  },
  {
    box: 'Knight Pack',
    characters: ['Beauregard', 'Chauncey', 'Dr. Stormcrow', 'Gowan', 'Gregoire', 'Scowl'],
  },
  {
    box: 'Horde Box (exclusivos Kickstarter)',
    characters: [
      'Anton Guffen', 'Asmodeus', 'Badger', 'Billy', 'Brannog', 'Brix Moonshine',
      'Cassius', 'Countess Ordelia', 'Earl Jaimie', 'Finarton', 'Fylguria',
      'Gannicus', 'Grayson Grüber', 'Hyg', 'Hyld', 'Jeanne', 'Kelsey', 'Lividia',
      'Lorentz', 'Princess Ayla', 'Rocco', 'Ryan John', 'Sigrun', 'Sir Schwarz',
      'Spearhead', 'The Deathmaster', 'The Marquis', 'Thomas', 'Ygraine',
      'Zanzibar', 'Zee',
    ],
  },
  // Black Plague Ultimate Survivors: versões repaginadas dos 6 originais
  // (mesmos nomes da caixa base) — omitidas para não duplicar no sorteio.
  {
    box: 'Caixas individuais / promos (Black Plague)',
    characters: [
      'Benson', 'Bruce', 'Grom', 'Homer', 'Liam', 'North the Halfling',
      'Thalia', 'Willow',
    ],
  },

  // ── Era White Death (Wintergrad) ──
  {
    box: 'White Death (caixa base)',
    owned: true,
    characters: ['Dragomir', 'Jenia', 'Lorna', 'Ogon', 'Sarnaï', 'Yasuke'],
  },
  {
    box: 'Eternal Empire (expansão campanha)',
    characters: ['Fengbao', 'Jianrui', 'Shao', 'Yinying', 'Zhi Shen', 'Zhi Yang'],
  },
  {
    box: 'Celestial Knights',
    characters: ['Alrakis', 'Avenging Princess Stellar', 'Eridan', 'Markan', 'Mirak', 'Sadir'],
  },
  {
    box: 'Virtues of Bushido',
    characters: ['Homare', 'Isamu', 'Jin', 'Makoto', 'Rei', 'Tadashi', 'Yoshitada'],
  },
  {
    box: 'Warlords of the Middle Kingdom',
    characters: [
      'Cao Cao', 'Guan Yu', 'Liu Bei', 'Sima Yi', 'Sun Jian', 'Zhang Fei',
      'Zhou Yu', 'Zhuge Liang',
    ],
  },
  {
    box: 'Warlords of the Rising Sun',
    characters: [
      'Akechi Mitsuhide', 'Hattori Hanzo', 'Ishida Mitsunari', 'Oda Nobunaga',
      'Takeda Shingen', 'Tokugawa Ieyasu', 'Toyotomi Hideyoshi', 'Uesugi Kenshin',
    ],
  },
  {
    box: 'Frozen Fortress (exclusivos Kickstarter)',
    characters: [
      'Alghara Steel-Sworn', 'Andrea', 'Artema', 'Badang', 'Byakko-Maru',
      'Caishen Ye', 'Cao Ren', 'Cirina Black-Mantle', 'Cristina', 'Da Qiao',
      'Date Masamune', 'DD', 'Dian Wei', 'Diao Chan', 'Gan Ning', 'Genghis Khan',
      'Haya', 'Honda Takadatsu', 'Hong Var', 'Hua Mulan', 'Huang Gai',
      'Huang Zhong', 'Ichiro', 'Inugami', 'Jade Empress', 'Jie Ke', 'Jiraiya',
      'Kido-Maru', 'Kodai-In', 'Komatsuhime', 'Kotahi', 'Kurokage-Maru',
      'Lakshmana', 'Lapu Lapu', 'Lu Bu', 'Ma Chao', 'Maeda Matsu', 'Maki',
      'Marquis of Mao', 'Meili', 'Midoriko', 'Miyamoto Musashi', 'Mu Guiying',
      'Nezha', 'Ohori Tsuruhime', 'Okuni', 'Rajaraja Chola', 'Rama', 'Rebecca',
      'Renart', 'Richard', 'Saika Magoichi', 'Sanada Yukimura', 'Sarana Far-Sight',
      'Sha Wujing', 'She Saihua', 'Sun Quan', 'Sun Tzu', 'Sun Wukong',
      'Suzuka Gozen', 'Tang Sanzang', 'The Young Phoenix', 'Tomoe Gozen',
      'Uesugi Aya', 'Wei Yan', 'Xiahou Yuan', 'Xu Chu', 'Yi Sun-Sin', 'Zhao Yun',
      'Zuo Ci',
    ],
  },
  {
    box: 'Caixas individuais (White Death)',
    characters: ["Chang'E", 'Hou Yi', 'Miyamoto Usagi'],
  },

  // ── Special Guest Boxes (artistas convidados) ──
  {
    box: 'Special Guest Boxes',
    characters: [
      "Cul'Nar", 'Gurbak', 'Jorvak', "Sha'Keel",
      'Black Currant', 'Persephone', 'Thrud',
      'Brickborn', 'Hewelin', 'Kaila', 'Shalheira',
      'Celia La Santa', 'Donna Carlotta', 'Pipino', 'The Little Prince',
      'Cyrine', 'Dravog', 'Gorvin', 'Hildir',
      'Johrgrund', 'Korin', 'Ruff Ghanor', 'The Prior',
      'Dame Ahelissa', 'Garuk', 'Marcus', 'Ulfo',
      'Antha', 'Cadence', 'Lady Grimm', 'Redcap Rodney',
      'Merieil', 'Milo', 'Ostokar', 'Thundergut',
      'Alainon', 'Golor', 'Gronstag', 'Yrina',
      'Arnwal', 'Konrad', 'Sköll', 'Undraal',
      'Genevieve', 'Klom', 'Lord Bazak', 'Mizar',
      'Carol Black-Oak', 'Kirag', 'Thorg', 'Tola',
      'Birmbauer', 'Kendra', 'Spellbones',
      'Azure', 'Gaak', 'The Blackheart', 'Ysabel',
    ],
  },

  // ── Licenciados e crossovers ──
  {
    box: 'Thundercats Packs',
    characters: [
      'Lion-O', 'Cheetara', 'Snarf', 'Slithe',
      'Panthro', 'Tygra', 'WilyKit', 'WilyKat', 'Jackalman',
    ],
  },
  {
    box: 'Iron Maiden Packs',
    characters: [
      'Pharaoh Eddie', 'Reaper Eddie', 'Samurai Eddie',
      'Mummy Eddie', 'Shaman Eddie',
    ],
  },
  {
    box: 'TMNT Timecrash',
    characters: [
      "April O'Neil", 'Casey Jones', 'Donatello', 'Leonardo', 'Michelangelo',
      'Raphael', 'Splinter', 'Jennika',
    ],
  },
  {
    box: 'La Compagnia Della Forca',
    characters: [
      'Annalisa', 'Bertrand', 'Bran', 'Captain Goliath', 'Ciacco',
      'Doctor Nadir', 'Grand Vizier', 'Imperial Messenger', 'Rosencranz',
      'Sir Crumb', 'Sir Percy', 'The Sparrow',
    ],
  },
  {
    box: 'Comic Book Extras (Road to Hell)',
    characters: [
      'Cord Dankwart', 'Drakka', 'Einar', 'Freya', 'Lewyn', 'Lotas',
      'Lotas (Lobisomem)', 'Marike', 'Neto Orash', 'Otto', 'Otto (Blindado)',
      'Rainer',
    ],
  },
  {
    box: 'B-Sieged Crossover Pack',
    characters: [
      'Bjorn', 'Eileen', 'Kador', 'Khaz Maghur', 'Lugh', 'Myrinia', 'Orobox',
      'Osvith',
    ],
  },
  {
    box: 'Massive Darkness Crossover Pack',
    characters: [
      'Ajax', 'Azrael', 'Bjorn', 'Elias', "Lil'Ned", 'Malleus', 'Mila', 'Moira',
      'Myriam', 'Ostara', 'Owen', 'Sarah', 'Sibyl', 'Sicarius', 'Siegfried',
      'Silence', 'Sylvan', 'Valerie', 'Victoria', 'Whisper', 'Zoe',
    ],
  },
  {
    box: 'Massive Darkness 2 Crossover Pack',
    characters: [
      'Berko', 'Cassiel', 'Daisy', 'Dylan', 'Ego', 'Father Corvus', 'Feydra',
      'Gera', 'Gheta', 'Harin', 'Harriet', 'Irk', 'Ivan', 'Jebediah', 'Kaylee',
      'Lyn', 'Mathrin', 'Mist', 'Mortemyr', 'Nahias', 'Riya', 'Ryff',
      'Sir Ronen', 'Thalia', 'Valdis', 'Victor', 'Ygraine', 'Zuri',
    ],
  },
];
