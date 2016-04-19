var happyHourArray = [
  {id: 'radiator-whiskey-seattle',
    happyHour:{
      Monday:[["16:00","22:00"],["18:00","26:00"]],//Format [[Happy Hour Start Time],[Happy Hour End time]] days with mutliple happy hour times can add aditional times in the respective arrays as new array items.
      Tuesday:[["16:00","22:00"],["18:00","26:00"]],//Format [[Happy Hour Start Time],[Happy Hour End time]]
      Wednesday:[["16:00","22:00"],["18:00","26:00"]],//Format [[Happy Hour Start Time],[Happy Hour End time]]
      Thursday:[["16:00","22:00"],["18:00","26:00"]],//Format [[Happy Hour Start Time],[Happy Hour End time]]
      Friday:[["16:00","22:00"],["18:00","26:00"]]//Format [[Happy Hour Start Time],[Happy Hour End time]]
      },
    website: 'http://radiatorwhiskey.com/',
    logo: 'http://radiatorwhiskey.com/images/rwlogo.png'
  },
  {
    id: 'list-seattle',
    happyHour: {
      Sunday:[["00:00"],["23:00"]],
      Monday:[["00:00"],["23:00"]],
      Tuesday:[["16:00","21:00"],["17:30","26:00"]],
      Wednesday:[["16:00","21:00"],["17:30","26:00"]],
      Thursday:[["16:00","21:00"],["17:30","26:00"]],
      Friday:[["16:00"],["17:30"]]
      },
    website: 'http://www.listbelltown.com/happyhour.html',
    logo: ''
  },
  {
    id: 'the-zig-zag-café-seattle-2',
    happyHour:{
      Monday:[["17:00"],["19:00"]],
      Tuesday:[["17:00"],["19:00"]],
      Wednesday:[["17:00"],["19:00"]],
      Thursday:[["17:00"],["19:00"]],
      Friday:[["17:00"],["19:00"]]
      },
    website: 'http://zigzagseattle.com/',
    logo: 'http://zigzagseattle.com/images/zzlogo_alone.png'
  },
  {
    id: 'bottlehouse-seattle',
    happyHour:{
      Monday:[["15:00"],["18:00"]],
      Tuesday:[["15:00"],["18:00"]],
      Wednesday:[["15:00"],["18:00"]],
      Thursday:[["15:00"],["18:00"]],
      Friday:[["15:00"],["18:00"]]
      },
    website: 'http://bottlehouseseattle.com/',
    logo: 'http://bottlehouseseattle.com/img/logo.png'
  },
  {
    id: 'the-sixgill-seattle',
    happyHour:{
      Monday:[["16:00"],["18:00"]],
      Tuesday:[["16:00"],["18:00"]],
      Wednesday:[["16:00"],["18:00"]],
      Thursday:[["16:00"],["18:00"]],
      Friday:[["16:00"],["18:00"]]
      },
    website: 'http://thesixgill.com',
    logo: 'http://thesixgill.com/wp-content/uploads/2016/02/footer-logo.png'
  },
  {
    id: 'russells-seattle',
    happyHour:{
      Sunday:[["16:00"],["18:00"]],
      Monday:[["16:00"],["18:00"]],
      Tuesday:[["16:00"],["18:00"]],
      Wednesday:[["16:00"],["18:00"]],
      Thursday:[["16:00"],["18:00"]],
      Friday:[["16:00"],["18:00"]],
      Saturday:[["16:00"],["18:00"]]
      },
    website: 'http://www.russellsseattle.com/',
    logo: 'http://static1.squarespace.com/static/5335eab3e4b0de4b29013608/t/5338b617e4b092d3a372d705/1437504446862/?format=750w'
  },
  {
    id:'the-noble-fir-seattle',
    happyHour: {
      Sunday:[["16:00"],["18:30"]],
      Monday:[["16:00"],["18:30"]],
      Tuesday:[["16:00"],["18:30"]],
      Wednesday:[["16:00"],["18:30"]],
      Thursday:[["16:00"],["18:30"]],
      Friday:[["16:00"],["18:30"]],
      Saturday:[["16:00"],["18:30"]]
      },
    website: 'http://www.thenoblefir.com/',
    logo: 'https://pbs.twimg.com/profile_images/608711897878175744/PPlare0L.jpg'
  },
  {
    id:'latona-pub-seattle',
    happyHour:{
      Sunday:[["16:30"],["18:30"]],
      Monday:[["16:00"],["18:30"]],
      Tuesday:[["16:30"],["18:30"]],
      Wednesday:[["16:30"],["18:30"]],
      Thursday:[["16:30"],["18:30"]],
      Friday:[["16:30"],["18:30"]],
      Saturday:[["16:30"],["18:30"]]
      },
    website: 'http://www.3pubs.com/Latona.html',
    logo: 'http://www.3pubs.com/Latona_files/Latona.png'
  },
  {
    id:'brouwers-cafe-seattle',
    happyHour:{
      Sunday:[["15:00"],["18:00"]],
      Monday:[["15:00"],["18:00"]],
      Tuesday:[["15:00"],["18:00"]],
      Wednesday:[["15:00"],["18:00"]],
      Thursday:[["15:00"],["18:00"]],
      Friday:[["15:00"],["18:00"]]
      },
    website: 'http://brouwerscafe.blogspot.com/',
    logo: 'http://4.bp.blogspot.com/_UO8TWvT3_6Q/SosfwM5Ke1I/AAAAAAAAABM/JYTvcX1sgpI/S1600-R/brouwerslogo_white.jpg'
  },
  {
    id:'witness-seattle',
    happyHour: {
      Sunday:[["16:00"],["18:00"]],
      Monday:[["16:00"],["18:00"]],
      Tuesday:[["16:00"],["18:00"]],
      Wednesday:[["16:00"],["18:00"]],
      Thursday:[["16:00"],["18:00"]],
      Friday:[["16:00"],["18:00"]],
      Saturday:[["16:00"],["18:00"]]
    },
    website: 'http://witnessbar.com/',
    logo: 'http://witnessbar.com/wp-content/uploads/2013/08/logo.png'
  },
  {
    id:'über-tavern-seattle-2',
    happyHour:{
      Sunday:[["16:00"],["18:00"]],
      Monday:[["16:00"],["18:00"]],
      Tuesday:[["16:00"],["18:00"]],
      Wednesday:[["16:00"],["18:00"]],
      Thursday:[["16:00"],["18:00"]],
      Friday:[["16:00"],["18:00"]],
      Saturday:[["16:00"],["18:00"]]
    },
    website: 'http://www.uberbier.com/',
    logo: 'http://www.uberbier.com/images/kegs-navigation.jpg'
  },
  {
    id:'yoroshiku-seattle-4',
    happyHour:{
      Tuesday:[["17:00"],["18:30"]],
      Wednesday:[["17:00"],["18:30"]],
      Thursday:[["17:00"],["18:30"]],
      Friday:[["17:00"],["18:30"]],
      Saturday:[["17:00"],["18:30"]]
      },
    website: 'http://yoroshikuseattle.com/',
    logo: 'http://yoroshikuseattle.com/img/logo-horizontal.png'
  },
  {
    id: 'sun-liquor-seattle',
    happyHour:{
      Sunday:[["16:00"],["19:00"]],
      Monday:[["16:00"],["19:00"]],
      Tuesday:[["16:00"],["19:00"]],
      Wednesday:[["16:00"],["19:00"]],
      Thursday:[["16:00"],["19:00"]],
      Friday:[["16:00"],["19:00"]],
      Saturday:[["16:00"],["19:00"]]
    },
    website: 'http://www.sunliquor.com/ourstory/',
    logo: 'http://www.sunliquor.com/img/logo.png'
  },
  {
    id: 'betty-seattle',
    happyHour: {
      Sunday:[["16:30"],["18:00"]],
      Monday:[["16:30"],["18:00"]],
      Tuesday:[["16:30"],["18:00"]],
      Wednesday:[["16:30"],["18:00"]],
      Thursday:[["16:30"],["18:00"]],
      Friday:[["16:30"],["18:00"]],
      Saturday:[["16:30"],["18:00"]]
      },
    website: 'http://www.eatatbetty.com/',
    logo: ''},
  {
    id: 'the-octopus-bar-seattle',
    happyHour:{
      Sunday:[["15:30"],["18:30"]],
      Monday:[["15:30"],["18:30"]],
      Tuesday:[["15:30"],["18:30"]],
      Wednesday:[["15:30"],["18:30"]],
      Thursday:[["15:30"],["18:30"]],
      Friday:[["15:30"],["18:30"]],
      Saturday:[["15:30"],["18:30"]]
      },
    website: 'https://theoctopusbar.com/',
    logo: 'http://www.wallyhood.org/wp-content/uploads/2014/01/photo-25-600x449.jpg'},
  {
    id: 'the-forge-lounge-seattle',
    happyHour: {
      Monday:[['15:00'],['19:00']],
      Tuesday:[['15:00'],['19:00']],
      Wednesday:[['15:00'],['19:00']],
      Thursday:[['15:00'],['19:00']],
      Friday:[['15:00'],['19:00']],
      Saturday:[['15:00'],['19:00']],
      Sunday:[['15:00'],['19:00']]
      },
    website: 'http://www.theforgelounge.com/',
    logo: 'http://www.theforgelounge.com/images/page2-img1.jpg'
  },
  {
    id: 'toulouse-petit-seattle',
    happyHour: {
      Monday:[['16:00','22:00'],['18:00','25:00']],
      Tuesday:[['16:00','22:00'],['18:00','25:00']],
      Wednesday:[['16:00','22:00'],['18:00','25:00']],
      Thursday:[['16:00','22:00'],['18:00','25:00']],
      Friday:[['16:00','22:00'],['18:00','25:00']],
      Saturday:[['16:00','22:00'],['18:00','25:00']],
      Sunday:[['16:00','22:00'],['18:00','25:00']]
      },
    website: 'http://toulousepetit.com/',
    logo: 'http://bg5wx2yuc202yg10std15dl8.wpengine.netdna-cdn.com/wp-content/uploads/sites/11/2015/09/toulouse_logo_gold1.jpg'
  },
  {
    id: 'taylor-shellfish-oyster-bar-seattle',
    happyHour:{
      Monday:[['15:00'],['18:00']],
      Tuesday:[['15:00'],['18:00']],
      Wednesday:[['15:00'],['18:00']],
      Thursday:[['15:00'],['18:00']],
      Friday:[['15:00'],['18:00']]
      },
    website: 'http://www.taylorshellfishfarms.com/',
    logo: 'http://farm9.static.flickr.com/8048/8444955064_db5ffe57b0_o.jpg'
  },
  {
    id: 'damn-the-weather-seattle',
    happyHour:{
      Monday:[['15:00'],['18:30']],
      Tuesday:[['15:00'],['18:30']],
      Wednesday:[['15:00'],['18:30']],
      Thursday:[['15:00'],['18:30']],
      Friday:[['15:00'],['18:30']]
      },
    website: 'http://damntheweather.com/',
    logo: ''
  },
  {
    id: 'suika-seattle-seattle',
    happyHour:{
      Tuesday:[['16:00'],['18:30']],
      Thursday:[['16:00'],['18:30']],
      Saturday:[['15:00'],['18:30']],
      Sunday:[['15:00'],['18:30']]
      },
    website: 'http://suikaseattle.com/',
    logo: ''
  },
  {
    id: 'triumph-bar-seattle',
    happyHour:{
      Monday:[['21:00'],['26:00']],
      Tuesday:[['15:00'],['18:00']],
      Wednesday:[['15:00'],['18:00']],
      Thursday:[['15:00'],['18:00']],
      Friday:[['15:00'],['18:00']],
      Saturday:[['15:00'],['18:00']],
      Sunday:[['15:00','22:00'],['18:00','26:00']]
    },
    website: 'http://triumphbar.com/',
    logo: 'http://triumphbar.com/images/triumph_logo_opti%202.png'},
  {
    id: 'quinns-seattle',
    happyHour:{
      Sunday:[['15:00'],['18:00']],
      Monday:[['15:00'],['18:00']],
      Tuesday:[['15:00'],['18:00']],
      Wednesday:[['15:00'],['18:00']],
      Thursday:[['15:00'],['18:00']],
      Friday:[['15:00'],['18:00']],
      Saturday:[['15:00'],['18:00']]
      },
    website: 'http://www.quinnspubseattle.com/',
    logo: 'http://www.kaleberg.com/seattle/quinns.jpg'
},
{
  id:'stoneburner-seattle',
  happyHour: {
    Sunday:[["15:00"],["17:00"]],
    Monday:[["15:00"],["17:00"]],
    Tuesday:[["15:00"],["17:00"]],
    Wednesday:[["15:00"],["17:00"]],
    Thursday:[["15:00"],["17:00"]],
    Friday:[["15:00"],["17:00"]],
    Saturday:[["15:00"],["17:00"]]
    },
  website: 'https://www.stoneburnerseattle.com/56301/happy-hour',
  logo: 'https://d17my9ypnvqzep.cloudfront.net/35c5f64e-d137-45e8-a1e4-83d0cf1e97fb/dcbf2502-2d91-40d4-a5f1-1c9241bd6859_m.png'
},
{
  id:'percys-and-co-seattle',
  happyHour: {
    Sunday:[["16:00"],["18:00"]],
    Monday:[["16:00"],["26:00"]],
    Tuesday:[["16:00"],["18:00"]],
    Wednesday:[["16:00"],["18:00"]],
    Thursday:[["16:00"],["18:00"]],
    Saturday:[["16:00"],["18:00"]]
    },
  website: 'http://www.percysseattle.com/',
  logo: 'http://www.percysseattle.com/assets/images/logo.png'
},
{
  id:'la-isla-cuisine-seattle',
  happyHour: {
    Sunday:[["15:00","22:00"],["18:00","25:00"]],
    Monday:[["15:00","22:00"],["18:00","25:00"]],
    Tuesday:[["15:00","22:00"],["18:00","25:00"]],
    Wednesday:[["15:00","22:00"],["18:00","25:00"]],
    Thursday:[["15:00","22:00"],["18:00","25:00"]],
    Friday:[["15:00","22:00"],["18:00","25:00"]],
    Saturday:[["15:00","22:00"],["18:00","25:00"]]
  },
  website: 'http://laislacuisine.com/',
  logo: 'http://laislacuisine.com/wp-content/uploads/2013/03/logo.svg'
},
{
  id: 'the-walrus-and-the-carpenter-seattle',
  happyHour: {
    Monday:[["16:00"],["18:00"]],
    Tuesday:[["16:00"],["18:00"]],
    Wednesday:[["16:00"],["18:00"]],
    Thursday:[["16:00"],["18:00"]]
    },
  website: 'http://www.thewalrusbar.com/',
  logo: 'http://www.thewalrusbar.com/assets/images/home-illustration.png'
},
{
  id: 'highliner-public-house-seattle',
  happyHour: {
    Sunday:[["16:00"],["18:00"]],
    Monday:[["16:00"],["18:00"]],
    Tuesday:[["16:00"],["18:00"]],
    Wednesday:[["16:00"],["18:00"]],
    Thursday:[["16:00"],["18:00"]],
    Friday:[["16:00"],["18:00"]],
    Saturday:[["16:00"],["18:00"]]
    },
  website: 'http://www.highlinerpub.net/',
  logo: 'https://pbs.twimg.com/profile_images/644624425459908608/Q5KQTLg2.png'
},
{
  id: 'the-leary-traveler-seattle',
  happyHour: {
    Monday:[["16:00"],["18:00"]],
    Tuesday:[["16:00"],["18:00"]],
    Wednesday:[["16:00"],["18:00"]],
    Thursday:[["16:00"],["18:00"]],
    Friday:[["16:00"],["18:00"]]
    },
  website: 'http://www.learytraveler.com/home',
  logo: 'https://s3-us-west-2.amazonaws.com/re.leary/logo.icon.lg.png'
},
{
  id: 'ballard-station-public-house-seattle',
  happyHour: {
    Sunday:[["16:00","23:00"],["18:00","26:00"]],
    Monday:[["16:00","23:00"],["18:00","26:00"]],
    Tuesday:[["16:00","23:00"],["18:00","26:00"]],
    Wednesday:[["16:00","23:00"],["18:00","26:00"]],
    Thursday:[["16:00","23:00"],["18:00","26:00"]],
    Friday:[["16:00"],["18:00"]],
    },
  website: 'http://theballardstation.com/',
  logo: 'http://theballardstation.com/wp-content/themes/BallardStation/images/logo.png'
},
{
  id: 'bastille-cafe-and-bar-seattle-2',
  happyHour: {
    Sunday:[["16:30"],["18:00"]],
    Monday:[["16:30","22:00"],["18:00","23:00"]],
    Tuesday:[["16:30","22:00"],["18:00","23:00"]],
    Wednesday:[["16:30","22:00"],["18:00","23:00"]],
    Thursday:[["16:30","22:00"],["18:00","23:00"]],
    Friday:[["16:30"],["18:00"]],
    Saturday:[["16:30"],["18:00"]]
    },
  website: 'http://www.bastilleseattle.com/home',
  logo: 'https://d17my9ypnvqzep.cloudfront.net/35c5f64e-d137-45e8-a1e4-83d0cf1e97fb/a29d5c88-c041-450b-aeb4-d70cc726d242_l.png'
},
{
  id: 'bad-jimmys-brewing-co-seattle',
  happyHour: {
    Sunday:[["22:00"],["24:00"]],
    Monday:[["22:00"],["24:00"]],
    Tuesday:[["22:00"],["24:00"]],
    Wednesday:[["22:00"],["24:00"]],
    Thursday:[["22:00"],["24:00"]]
    },
  website: 'http://www.badjimmysbrewingco.com/#home',
  logo: 'http://static1.squarespace.com/static/533fe1d1e4b0889aa7ac2ca4/t/53b25115e4b0968d2960608e/1404195148957/?format=1000w'
},
{
  id: 'jolly-roger-taproom-seattle',
  happyHour: {
    Monday:[["15:00"],["18:00"]],
    Tuesday:[["15:00"],["18:00"]],
    Wednesday:[["15:00"],["18:00"]],
    Thursday:[["15:00"],["18:00"]],
    Friday:[["15:00"],["18:00"]]
    },
  website: 'http://maritimebrewery.com/',
  logo: 'http://maritimebrewery.com/userimages/49.gif'
},
{
  id: '8oz-burger-and-co-seattle',
  happyHour: {
    Sunday:[["16:00","21:00"],["18:00","22:00"]],
    Monday:[["16:00","21:00"],["18:00","23:00"]],
    Tuesday:[["16:00","21:00"],["18:00","23:00"]],
    Wednesday:[["16:00","21:00"],["18:00","23:00"]],
    Thursday:[["16:00","21:00"],["18:00","23:00"]],
    Friday:[["16:00","21:00"],["18:00","24:00"]],
    Saturday:[["16:00","21:00"],["18:00","24:00"]]
    },
  website: 'http://8ozburgerbarsea.com/',
  logo: 'http://8ozburgerandco.com/wp-content/uploads/2014/08/EW-LOGO.png'
},
{
  id: '8oz-burger-and-co-seattle-6',
  happyHour: {
    Sunday:[["16:00","21:00"],["18:00","22:00"]],
    Monday:[["16:00","21:00"],["18:00","22:00"]],
    Tuesday:[["16:00","21:00"],["18:00","22:00"]],
    Wednesday:[["16:00","21:00"],["18:00","22:00"]],
    Thursday:[["16:00","21:00"],["18:00","22:00"]],
    Friday:[["16:00","21:00"],["18:00","23:00"]],
    Saturday:[["16:00","21:00"],["18:00","23:00"]]
    },
  website: 'http://8ozburgerbarsea.com/',
  logo: 'http://8ozburgerandco.com/wp-content/uploads/2014/08/EW-LOGO.png'
},
{
  id: 'the-hideout-seattle',
  happyHour: {
    Sunday:[["16:00"],["19:00"]],
    Monday:[["16:00"],["19:00"]],
    Tuesday:[["16:00"],["19:00"]],
    Wednesday:[["16:00"],["19:00"]],
    Thursday:[["16:00"],["19:00"]],
    Friday:[["16:00"],["19:00"]],
    Saturday:[["16:00"],["19:00"]]
    },
  website: 'http://www.hideoutseattle.com/',
  logo: 'http://www.hideoutseattle.com/images/img_header.gif'
},
{
  id: 'soi-seattle',
  happyHour: {
    Sunday:[["15:00","22:00"],["18:00","23:00"]],
    Monday:[["15:00","22:00"],["18:00","23:00"]],
    Tuesday:[["15:00","22:00"],["18:00","23:00"]],
    Wednesday:[["15:00","22:00"],["18:00","23:00"]],
    Thursday:[["15:00","22:00"],["18:00","23:00"]],
    Friday:[["15:00","23:00"],["18:00","24:00"]],
    Saturday:[["15:00","23:00"],["18:00","24:00"]]
  },
  website: 'http://www.soicapitolhill.com/',
  logo: 'http://www.soicapitolhill.com/i/soi.png'
},
{
  id: 'vitos-seattle',
  happyHour: {
    Sunday:[["16:00"],["19:00"]],
    Monday:[["16:00"],["19:00"]],
    Tuesday:[["16:00"],["19:00"]],
    Wednesday:[["16:00"],["19:00"]],
    Thursday:[["16:00"],["19:00"]],
    Friday:[["16:00"],["19:00"]],
    Saturday:[["16:00"],["19:00"]]
    },
  website: 'http://vitosseattle.com/',
  logo: 'http://vitosseattle.com/images/pixel.png'
},
{
  id: 'the-fireside-room-seattle',
  happyHour: {
    Sunday:[["16:00"],["18:00"]],
    Monday:[["16:00"],["18:00"]],
    Tuesday:[["16:00"],["18:00"]],
    Wednesday:[["16:00"],["18:00"]],
    Thursday:[["16:00"],["18:00"]],
    Friday:[["16:00"],["18:00"]],
    Saturday:[["16:00"],["18:00"]]
    },
  website: 'http://hotelsorrento.com/food-drink#fireside-room',
  logo: ''
},
{
  id: 'jimmys-on-broadway-seattle',
  happyHour: {
    Sunday:[["15:00","21:00"],["18:00","23:00"]],
    Monday:[["15:00","21:00"],["18:00","23:00"]],
    Tuesday:[["15:00","21:00"],["18:00","23:00"]],
    Wednesday:[["15:00","21:00"],["18:00","23:00"]],
    Thursday:[["15:00","21:00"],["18:00","23:00"]],
    Friday:[["15:00","21:00"],["18:00","23:00"]],
    Saturday:[["15:00","21:00"],["18:00","23:00"]]
    },
  website: 'http://jimmysonbroadway.com/',
  logo: ''
},

//IF COMMENTED OUT, NO NECESSARY DETAILS AVAILABLE!
// {id:'the-cozy-nut-tavern-seattle',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id:'hazlewood-seattle',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id:'ocho-seattle',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
{id:'the-gerald-seattle',
happyHour:{
  Sunday:[["16:00","20:00"],["22:30","24:00"]],
  Monday:[["16:00","20:00"],["22:30","24:00"]],
  Tuesday:[["16:00","20:00"],["22:30","24:00"]],
  Wednesday:[["16:00","20:00"],["22:30","24:00"]],
  Thursday:[["16:00","20:00"],["22:30","24:00"]],
  Friday:[["16:00","20:00"],["22:30","26:00"]],
  Saturday: [["16:00","20:00"],["22:30","26:00"]]
}, website: 'http://thegeraldseattle.com/', logo: 'http://thegeraldseattle.com/ResizeImage.aspx?img=/Websites/GeraldTest/WebsiteLogo.gif&h=85'},
{id:'percys-and-co-seattle',
happyHour:{
  Sunday:[["16:00"],["18:00"]],
  Monday:[["16:00"],["26:00"]],
  Tuesday:[["16:00"],["18:00"]],
  Wednesday:[["16:00"],["18:00"]],
  Thursday:[["16:00"],["18:00"]],
  Friday:[["16:00"],["18:00"]],
  Saturday: [["16:00"],["18:00"]]
}, website: 'http://www.percysseattle.com/', logo: 'http://www.percysseattle.com/assets/images/logo.png'},
{id:'la-isla-cuisine-seattle',
happyHour:{
  Sunday:[["15:00", "18:00"],["22:00", "25:00"]],
  Monday:[["15:00", "18:00"],["22:00", "25:00"]],
  Tuesday:[["15:00", "18:00"],["22:00", "25:00"]],
  Wednesday:[["15:00", "18:00"],["22:00", "25:00"]],
  Thursday:[["15:00", "18:00"],["22:00", "25:00"]],
  Friday:[["15:00", "18:00"],["22:00", "25:00"]],
  Saturday: [["15:00", "18:00"],["22:00", "25:00"]]
}, website: 'http://laislacuisine.com/menus-la-isla-cuisine/', logo: 'http://laislacuisine.com/wp-content/uploads/2013/03/logo.svg'},
{id: 'the-walrus-and-the-carpenter-seattle',
happyHour:{
  Monday:[["16:00"],["18:00"]],
  Tuesday:[["16:00"],["18:00"]],
  Wednesday:[["16:00"],["18:00"]],
  Thursday:[["16:00"],["18:00"]]
}, website: 'http://www.thewalrusbar.com/menu', logo: 'http://www.thewalrusbar.com/assets/images/walrus-logo.png'},
{id: 'highliner-public-house-seattle',
happyHour:{
  Sunday:[["16:00"],["18:00"]],
  Monday:[["16:00"],["18:00"]],
  Tuesday:[["16:00"],["18:00"]],
  Wednesday:[["16:00"],["18:00"]],
  Thursday:[["16:00"],["18:00"]],
  Friday:[["16:00"],["18:00"]],
  Saturday: [["16:00"],["18:00"]]
}, website: 'http://www.highlinerpub.net/daily-specials.html', logo: 'http://www.highlinerpub.net/uploads/8/2/1/7/8217263/header_images/1417805998.jpg'},
{id: 'the-leary-traveler-seattle',
happyHour:{
  Monday:[["16:00"],["18:00"]],
  Tuesday:[["16:00"],["18:00"]],
  Wednesday:[["16:00"],["18:00"]],
  Thursday:[["16:00"],["18:00"]],
  Friday:[["16:00"],["18:00"]]
}, website: 'http://www.learytraveler.com/menu', logo: 'https://s3-us-west-2.amazonaws.com/re.leary/logo.png'},
{id: 'ballard-station-public-house-seattle',
happyHour:{
  Sunday:[["16:00"],["19:00"]],
  Monday:[["16:00"],["19:00"]],
  Tuesday:[["16:00"],["19:00"]],
  Wednesday:[["16:00"],["19:00"]],
  Thursday:[["16:00"],["19:00"]],
  Friday:[["16:00"],["19:00"]],
  Saturday: [["16:00"],["19:00"]]
}, website: 'http://theballardstation.com/', logo: 'http://theballardstation.com/wp-content/themes/BallardStation/images/logo.png'},
// {id: 'kings-hardware-seattle',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'the-tin-hat-seattle-2',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'bastille-cafe-and-bar-seattle-2',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'olafs-seattle',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'bad-jimmys-brewing-co-seattle',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'the-sixgill-seattle',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'jolly-roger-taproom-seattle',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: '8oz-burger-and-co-seattle-6',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'the-hideout-seattle',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'honeyhole-seattle',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: '8oz-burger-and-co-seattle',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'soi-seattle',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'vitos-seattle',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'the-fireside-room-seattle',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'jimmys-on-broadway-seattle',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'moe-bar-seattle',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'via-tribunali-seattle',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'primo-seattle',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'dunbar-room-seattle',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'quarter-lounge-seattle',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'ayutthaya-thai-seattle',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'six-arms-seattle',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'lotus-asian-kitchen-and-lounge-seattle',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'café-presse-seattle-2',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'garage-seattle',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'the-hunt-club-seattle-2',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'hot-off-the-coals-queen-anne',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'harrys-on-the-green-denton',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'brasserie-brightwell-easton',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'washington-street-pub-easton',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'o-shucks-irish-pub-centerville',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: '404-taphouse-denton',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'market-street-public-house-denton',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'good-guys-sports-bar-centreville',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'docs-downtown-grille-easton',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'applebees-easton',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'docs-riverside-grille-centreville',
//  happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'olive-garden-italian-restaurant-easton-3',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'bannings-tavern-easton',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'out-of-the-fire-easton',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'snappys-bar-and-grille-denton',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'bartlett-pear-inn-easton',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'scossa-restaurant-and-lounge-easton',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'the-bbq-joint-easton',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'ruby-tuesday-easton',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'hunters-tavern-easton-2',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'cabin-club-westlake',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: '87-west-2-westlake',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'the-rusty-barrel-westlake',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'moosehead-saloon-westlake',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'hooley-house-sports-pub-and-grille-westlake',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'yard-house-westlake',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'stella-mia-ristorante-westlake',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'sangria-y-tapas-bar-and-restaurant-westlake',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'b-spot-westlake',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'houlihans-westlake',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'bar-louie-westlake-2',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'ironwood-cafe-westlake-4',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'burntwood-tavern-westlake',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'time-warp-bar-westlake',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'brio-tuscan-grille-westlake',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'the-rail-north-olmsted',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'crabbys-pub-westlake',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'don-ramon-westlake',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'mitchells-tavern-westlake',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'miami-nights-grill-bar-and-lounge-westlake',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'the-wild-goose-willoughby',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'the-captains-club-eastlake',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'two-bucks-eastlake',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'local-tavern-willoughby-hills',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'croagh-patricks-willoughby',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'olivor-twist-willoughby',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'beals-pickles-n-pints-willoughby',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'twisted-paddy-mentor',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'nicklebys-round-bar-willoughby',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'ballantine-willoughby',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'manhattan-deli-bar-and-grille-willoughby-2',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'billys-a-cappelli-martini-bar-mentor',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'paragon-wines-martinis-plates-euclid',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'the-woodroom-martini-and-wine-bar-willoughby-hills',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'corks-wine-bar-willoughby',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'sports-fanatics-willowick',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'lure-bistro-willoughby',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'hooley-house-sports-pub-and-grille-mentor',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'the-1899-pub-willoughby',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'firehouse-grille-and-pub-willoughby-hills',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'cask-and-trotter-seattle',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'feierabend-seattle',
//  happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'brave-horse-tavern-seattle',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'daniels-broiler-seattle-7',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'dukes-chowder-house-seattle-9',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'row-house-cafe-seattle',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'the-wurst-place-seattle',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'chandlers-crabhouse-seattle-2',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'victory-lounge-seattle',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'lunchbox-laboratory-seattle-2',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'novilhos-brazilian-steak-house-seattle',
//  happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'flying-fish-seattle',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'cuoco-seattle',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: '13-coins-restaurant-seattle',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'the-night-owl-lounge-seattle',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'osteria-rigoletto-seattle',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'art-marble-21-seattle-2',
//  happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'mollusk-seattle',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'the-sitting-room-seattle',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'the-masonry-seattle',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'red-papaya-ale-and-spirits-seattle',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'crow-seattle',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'ten-mercer-seattle',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'mecca-cafe-seattle',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'queen-anne-beerhall-seattle',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'streamline-tavern-seattle-2',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'solo-seattle',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'pesos-kitchen-and-lounge-seattle',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'via-tribunali-seattle-2',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'the-tin-lizzie-lounge-seattle',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'buckleys-on-queen-anne-seattle-2',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'mcmenamins-queen-anne-seattle',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'plaza-garibaldi-seattle',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'the-great-nabob-seattle',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'the-rock-wood-fired-kitchen-seattle-2',
//  happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'the-innkeeper-seattle',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'bathtub-gin-and-co-seattle',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'roccos-seattle',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'wakefield-bar-seattle',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'clever-bottle-seattle-2',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'the-whisky-bar-seattle',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'rob-roy-seattle',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'the-lost-pelican-seattle',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'black-bottle-seattle-2',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'vittles-neighborhood-bistro-and-bar-seattle-2',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'spur-gastropub-seattle',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'shortys-seattle',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'local-360-seattle-2',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'two-bells-tavern-seattle',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'the-upstairs-seattle',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'tavolata-seattle',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'lava-lounge-seattle',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'pennyroyal-seattle',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'the-bar-shoppe-seattle',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
// {id: 'the-pharmacy-seattle',
// happyHour:{
//   Sunday:[[""],[""]],
//   Monday:[[""],[""]],
//   Tuesday:[[""],[""]],
//   Wednesday:[[""],[""]],
//   Thursday:[[""],[""]],
//   Friday:[[""],[""]],
//   Saturday: [[""],[""]]
// }, website: '', logo: ''},
  {id: 'taylor-shellfish-oyster-bar-seattle-2',
happyHour:{
  Monday:[["16:00"],["18:00"]],
  Tuesday:[["16:00"],["18:00"]],
  Wednesday:[["16:00"],["18:00"]],
  Thursday:[["16:00"],["18:00"]],
  Friday:[["16:00"],["18:00"]],
  Saturday: [["16:00"],["18:00"]]
}, website: 'http://tayloroysterbars.com/locations/queen-anne/', logo: 'http://tayloroysterbars.com/wp-content/themes/oyster/img/header-logo.png'},
{id: 'shawn-o-donnells-seattle',
happyHour:{
  Sunday:[["15:00"],["19:00"]],
  Monday:[["15:00"],["19:00"]],
  Tuesday:[["15:00"],["19:00"]],
  Wednesday:[["15:00"],["19:00"]],
  Thursday:[["15:00"],["19:00"]],
  Friday:[["15:00"],["19:00"]],
  Saturday: [["15:00"],["19:00"]]
}, website: 'http://www.shawnodonnells.com/Seattle/happy-hour/', logo: 'http://www.shawnodonnells.com/Seattle/wp-content/themes/Shawn-Everett/images/logo2.png'},
{id: 'good-bar-seattle-3',
happyHour:{
  Sunday:[["16:00"],["19:00"]],
  Monday:[["16:00"],["19:00"]],
  Tuesday:[["16:00"],["19:00"]],
  Wednesday:[["16:00"],["19:00"]],
  Thursday:[["16:00"],["19:00"]],
  Friday:[["16:00"],["19:00"]],
  Saturday: [["16:00"],["19:00"]]
}, website: 'http://www.goodbarseattle.com/wp-content/uploads/2016/01/New-happy-hour-menu-1.18.16-one-sheet.pdf', logo: 'http://www.goodbarseattle.com/wp-content/uploads/2014/11/Bordered-GoodBar-Fall-2014.png'},
{id: 'the-faerie-queene-seattle',
happyHour:{
  Sunday:[["16:00"],["19:00"]],
  Monday:[["16:00"],["19:00"]],
  Tuesday:[["16:00"],["19:00"]],
  Wednesday:[["16:00"],["19:00"]],
  Thursday:[["16:00"],["19:00"]],
  Friday:[["16:00"],["19:00"]],
  Saturday: [["16:00"],["19:00"]]
}, website: 'http://www.thefaeriequeene.co/#!menu-1/czyq', logo: 'https://static.wixstatic.com/media/e23c37_43dca97a557b49828a2cc4c5857cbde2.jpg/v1/fill/w_1200,h_180,al_c,lg_1,q_80/e23c37_43dca97a557b49828a2cc4c5857cbde2.jpg'},
{id: 'altstadt-bierhalle-and-brathaus-seattle',
happyHour:{
  Monday:[["15:00"],["18:00"]],
  Tuesday:[["15:00"],["18:00"]],
  Wednesday:[["15:00"],["18:00"]],
  Thursday:[["15:00"],["18:00"]],
  Friday:[["15:00"],["18:00"]]
}, website: 'http://www.altstadtseattle.com/happy-hour/', logo: 'http://www.altstadtseattle.com/wp-content/uploads/2015/04/Alstadt-Black.png'},
{id: 'brgr-bar-seattle-seattle',
happyHour:{
  Monday:[["15:00"],["18:00"]],
  Tuesday:[["15:00"],["18:00"]],
  Wednesday:[["15:00"],["18:00"]],
  Thursday:[["15:00"],["18:00"]],
  Friday:[["15:00"],["18:00"]]
}, website: 'http://www.brgrbarseattle.com/happy-hour/', logo: 'http://static1.squarespace.com/static/53111c94e4b00ae8705b9d86/53c5f6a4e4b0fc5ee2324076/53c5fdf3e4b02c7516b38a93/1405484531922/02.jpg?format=1500w'},
{id: 'bar-sajor-seattle',
happyHour:{
  Sunday:[["16:00"],["18:00"]],
  Monday:[["16:00"],["18:00"]],
  Tuesday:[["16:00"],["18:00"]],
  Wednesday:[["16:00"],["18:00"]],
  Thursday:[["16:00"],["18:00"]],
  Friday:[["16:00"],["18:00"]],
  Saturday: [["16:00"],["18:00"]]
}, website: 'http://www.barsajor.com/happyhour#0', logo: 'http://a5.format-assets.com/image/private/s--lvhLnw-i--/c_limit,g_center,h_65535,w_960/a_auto,fl_keep_iptc.progressive,q_95/92247-5706561-logo1.png'},
{id: 'fuel-seattle-2',
happyHour:{
  Sunday:[["15:00"],["19:00"]],
  Monday:[["15:00"],["19:00"]],
  Tuesday:[["15:00"],["19:00"]],
  Wednesday:[["15:00"],["19:00"]],
  Thursday:[["15:00"],["19:00"]],
  Friday:[["15:00"],["19:00"]],
  Saturday: [["15:00"],["19:00"]]
}, website: 'http://www.fuelseattle.com/menu/', logo: 'http://www.fuelseattle.com/images/header.jpg'},
{id: 'box-house-seattle-3',
happyHour:{
  Sunday:[["16:00"],["19:00"]],
  Monday:[["16:00"],["19:00"]],
  Tuesday:[["16:00"],["19:00"]],
  Wednesday:[["16:00"],["19:00"]],
  Thursday:[["16:00"],["19:00"]],
  Friday:[["16:00"],["19:00"]],
  Saturday:[["16:00"],["19:00"]]
}, website: 'http://boxhousesaloon.com/wp-content/uploads/2014/06/Menu-PDF-HQ.pdf', logo: 'http://boxhousesaloon.com/wp-content/uploads/2016/01/happyhourwebsite.png'},
{id: 'merchants-cafe-and-saloon-seattle',
happyHour:{
  Sunday:[["16:00"],["19:00"]],
  Monday:[["16:00"],["19:00"]],
  Tuesday:[["16:00"],["19:00"]],
  Wednesday:[["16:00"],["19:00"]],
  Thursday:[["16:00"],["19:00"]],
  Friday:[["16:00"],["19:00"]],
  Saturday: [["16:00"],["19:00"]]
}, website: 'http://merchantscafeandsaloon.com/happy-hour/', logo: 'http://b96.5bb.myftpupload.com/wp-content/uploads/2015/09/B69A0338.jpg'},
{id: 'radici-seattle',
happyHour:{
  Tuesday:[["15:00"],["18:00"]],
  Wednesday:[["15:00"],["18:00"]],
  Thursday:[["15:00"],["18:00"]],
  Friday:[["15:00"],["18:00"]]
}, website: 'http://www.radiciseattle.com/cocktails-happy-hour/', logo: 'http://static1.squarespace.com/static/52d5594fe4b0002632d327f3/t/533b1c92e4b09aaebbe2692d/1455904099446/?format=1500w'},
{id: 'kaname-izakaya-seattle',
happyHour:{
  Sunday:[["17:30"],["18:30"]],
  Monday:[["17:30"],["18:30"]],
  Tuesday:[["17:30"],["18:30"]],
  Wednesday:[["17:30"],["18:30"]],
  Thursday:[["17:30"],["18:30"]],
  Friday:[["17:30"],["18:30"]],
  Saturday: [["17:30"],["18:30"]]
}, website: 'http://www.kaname-izakaya.com/menuhappyhour.pdf', logo: 'http://www.kaname-izakaya.com/i/logo_kaname.gif'},
{id: 'bush-garden-restaurant-seattle',
happyHour:{
  Sunday:[["17:00"],["21:00"]],
  Monday:[["17:00","20:45"],["18:30","21:45"]],
  Tuesday:[["17:00","20:45"],["18:30","21:45"]],
  Wednesday:[["17:00","20:45"],["18:30","21:45"]],
  Thursday:[["17:00","20:45"],["18:30","21:45"]],
  Friday:[["17:00","20:45"],["18:30","21:45"]],
  Saturday: [["17:00","20:45"],["18:30","21:45"]]
}, website: 'http://www.bushgarden.net', logo: 'http://www.serveworks.com/bushgarden/images/bushgarden_smallerlogo.gif'},
{id: 'ba-bar-seattle',
happyHour:{
  Sunday:[["15:00"],["18:00"]],
  Monday:[["15:00"],["18:00"]],
  Tuesday:[["15:00"],["18:00"]],
  Wednesday:[["15:00"],["18:00"]],
  Thursday:[["15:00"],["18:00"]],
  Friday:[["15:00"],["18:00"]],
  Saturday: [["15:00"],["18:00"]]
}, website: 'http://babarseattle.com/food/happy-hour/', logo: 'http://babarseattle.com/gallery/gallery/thumb/photo-1.jpg'},
{id: 'girin-seattle',
happyHour:{
  Sunday:[["16:00","22:00"],["18:00","23:00"]],
  Monday:[["16:00","22:00"],["18:00","23:00"]],
  Tuesday:[["16:00","22:00"],["18:00","23:00"]],
  Wednesday:[["16:00","22:00"],["18:00","23:00"]],
  Thursday:[["16:00","22:00"],["18:00","23:00"]],
  Friday:[["16:00","22:00"],["18:00","23:00"]],
  Saturday: [["16:00","22:00"],["18:00","23:00"]]
}, website: 'http://www.girinseattle.com/#!happy-hour/fb63m', logo: 'https://static.wixstatic.com/media/3cc5e9_303bf353dac941aa8646de2029d39ee0.png/v1/fill/w_974,h_974,al_c,usm_0.66_1.00_0.01/3cc5e9_303bf353dac941aa8646de2029d39ee0.png'},
{id: 'liams-seattle',
happyHour:{
  Sunday:[["15:00"],["18:00"]],
  Monday:[["15:00"],["18:00"]],
  Tuesday:[["0:00"],["25:00"]],
  Wednesday:[["15:00"],["18:00"]],
  Thursday:[["15:00"],["18:00"]],
  Friday:[["15:00"],["18:00"]],
  Saturday: [["15:00"],["18:00"]]
}, website: 'http://www.liamsbistro.com/menu.html', logo: 'http://www.liamsbistro.com/uploads/1/9/8/7/19870899/1378417939.png'},
{id: 'the-kraken-bar-and-lounge-seattle',
happyHour:{
  Sunday:[["0:00"],["26:00"]],
  Monday:[["16:00"],["18:00"]],
  Tuesday:[["16:00"],["18:00"]],
  Wednesday:[["16:00"],["18:00"]],
  Thursday:[["16:00"],["18:00"]],
  Friday:[["16:00"],["18:00"]],
  Saturday: [["16:00"],["18:00"]]
}, website: 'https://www.facebook.com/KrakenBarSeattle/info/?tab=page_info', logo: 'https://scontent-sea1-1.xx.fbcdn.net/hprofile-xfl1/v/t1.0-1/p320x320/10968451_796821690410133_31726099933290994_n.jpg?oh=03638e728e532e4b36fb059fc918e008&oe=5770BBFE'},
{id: 'mamma-melina-ristorante-pizzeria-seattle',
happyHour:{
  Sunday:[["11:30","21:00"],["23:00","23:00"]],
  Monday:[["11:30","21:00"],["23:00","23:00"]],
  Tuesday:[["15:00","21:00"],["19:00","23:00"]],
  Wednesday:[["15:00","21:00"],["19:00","23:00"]],
  Thursday:[["15:00","21:00"],["19:00","23:00"]],
  Friday:[["15:00","21:00"],["18:00","23:00"]],
  Saturday: [["15:00","21:00"],["18:00","23:00"]]
}, website: 'http://www.mammamelina.com/index.php?option=com_content&view=article&id=36&Itemid=25', logo: 'http://www.mammamelina.com/MM_logo_bw.png'},
{id: 'college-inn-pub-seattle',
happyHour:{
  Monday:[["16:00"],["19:00"]],
  Tuesday:[["16:00"],["19:00"]],
  Wednesday:[["16:00"],["19:00"]],
  Thursday:[["16:00"],["19:00"]],
  Friday:[["16:00"],["19:00"]]
}, website: 'http://www.collegeinnpub.com/HH.html', logo: 'http://www.collegeinnpub.com/logo/logo-180px.jpg'},
{id: 'elemental-pizza-seattle',
happyHour:{
  Sunday:[["15:00"],["18:00"]],
  Monday:[["15:00"],["18:00"]],
  Tuesday:[["15:00"],["18:00"]],
  Wednesday:[["15:00"],["18:00"]],
  Thursday:[["15:00"],["18:00"]],
  Friday:[["15:00"],["18:00"]],
  Saturday: [["15:00"],["18:00"]]
}, website: 'http://elementalpizza.com/menus/seattle-happy-hour-menu/', logo: 'http://elementalpizza.com/wp-content/uploads/2015/06/elementallogo-300.png'},
{id: 'shultzys-sausage-seattle',
happyHour:{
  Sunday: [["0:00"],["23:00"]],
  Monday:[["15:00","22:00"],["18:00","26:00"]],
  Tuesday:[["15:00","22:00"],["18:00","26:00"]],
  Wednesday:[["15:00","22:00"],["18:00","26:00"]],
  Thursday:[["15:00","22:00"],["18:00","26:00"]],
  Friday:[["15:00","22:00"],["18:00","26:00"]]
}, website: 'http://www.shultzys.com', logo: 'http://3.bp.blogspot.com/_il7j2VTwP8w/SCzHEKwkQTI/AAAAAAAAAqA/QgvyorqpVao/S1600-R/header2.jpg'},
{id: 'the-district-lounge-seattle',
happyHour:{
  Monday:[["16:00","22:00"],["18:00","23:00"]],
  Tuesday:[["16:00","22:00"],["18:00","23:00"]],
  Wednesday:[["16:00","22:00"],["18:00","23:00"]],
  Thursday:[["16:00","22:00"],["18:00","23:00"]],
  Friday:[["16:00","22:00"],["18:00","23:00"]],
}, website: 'http://www.thedistrictloungeseattle.com', logo: 'http://static1.squarespace.com/static/565f88c2e4b04c5d15d91f88/t/5669e1430e4c1134bbc4a9e1/1451507295548/?format=1500w'},
{id: 'piatti-seattle',
happyHour:{
  Sunday:[["15:00"],["18:00"]],
  Monday:[["15:00","21:00"],["18:00","24:00"]],
  Tuesday:[["15:00","21:00"],["18:00","24:00"]],
  Wednesday:[["15:00","21:00"],["18:00","24:00"]],
  Thursday: [["15:00","21:00"],["18:00","24:00"]],
  Friday:[["15:00","21:00"],["18:00","24:00"]],
  Saturday: [["15:00","21:00"],["18:00","24:00"]]
}, website: 'http://piatti.com/seattle/', logo: 'http://piatti.com/wp-content/uploads/sites/18/2015/10/logo.png'},
{id: 'ristorante-doria-seattle',
happyHour:{
  Sunday:[["16:00"],["18:00"]],
  Monday:[["16:00"],["18:00"]],
  Tuesday:[["16:00"],["18:00"]],
  Wednesday:[["16:00"],["18:00"]],
  Thursday:[["16:00"],["18:00"]],
  Friday: [["16:00"],["18:00"]],
  Saturday: [["16:00"],["18:00"]]
}, website: 'http://www.ristorantedoria.com/menus/happy-hour.html', logo: 'http://www.ristorantedoria.com/_Media/wp87197f69_05_06_med_hr.jpeg'},
{id: 'ram-restaurant-and-brewery-seattle-8',
happyHour:{
  Monday:[["15:00","22:00"],["18:00","26:00"]],
  Tuesday:[["15:00","22:00"],["18:00","26:00"]],
  Wednesday:[["15:00","22:00"],["18:00","26:00"]],
  Thursday:[["15:00","22:00"],["18:00","26:00"]],
  Friday:[["15:00","22:00"],["18:00","26:00"]]
}, website: 'http://www.theram.com/menu-location/wa-seattle-northgate/', logo: 'http://www.theram.com/wp-content/themes/Ram/images/ram.png'},
{id: 'earls-on-the-avenue-seattle',
happyHour:{
  Sunday:[["16:00"],["20:00"]],
  Monday:[["16:00"],["20:00"]],
  Tuesday:[["16:00"],["20:00"]],
  Wednesday:[["16:00"],["20:00"]],
  Thursday:[["16:00"],["20:00"]],
  Friday:[["16:00"],["20:00"]],
  Saturday:[["16:00"],["20:00"]]
}, website: 'https://locu.com/places/earls-on-the-ave-seattle-us/#menu', logo: ''},
{id: 'finn-maccools-irish-pub-and-restaurant-seattle',
happyHour:{
  Sunday:[["10:00","16:00"],["20:00","19:00"]],
  Monday:[["10:00","16:00"],["20:00","19:00"]],
  Tuesday:[["10:00","16:00"],["20:00","19:00"]],
  Wednesday:[["10:00","16:00"],["20:00","19:00"]],
  Thursday:[["10:00","16:00"],["20:00","19:00"]],
  Friday:[["10:00","16:00"],["20:00","19:00"]],
  Saturday:[["10:00","16:00"],["20:00","19:00"]]
}, website: 'http://www.finnmaccools.com/happy-hour/', logo: 'http://www.finnmaccools.com/wp-content/gallery/homepage-gallery/slideshow02.jpg'},
{id: 'mars-bar-seattle',
happyHour:{
  Sunday:[["16:00","22:00"],["18:00","26:00"]],
  Monday:[["16:00","22:00"],["18:00","26:00"]],
  Tuesday:[["16:00","22:00"],["18:00","26:00"]],
  Wednesday: [["16:00","22:00"],["18:00","26:00"]],
  Thursday:[["16:00","22:00"],["18:00","26:00"]],
  Friday:[["16:00","22:00"],["18:00","26:00"]],
  Saturday: [["16:00","22:00"],["18:00","26:00"]]
}, website: 'http://www.marsbarseattle.com/#!menu/cjg9', logo: 'https://static.wixstatic.com/media/db5b21_0fe7e67c5a34484887f4fec21ce361f0.jpg/v1/fill/w_520,h_274,al_c,lg_1,q_80/db5b21_0fe7e67c5a34484887f4fec21ce361f0.jpg'},
{id: 'wedgwood-broiler-seattle',
happyHour:{
  Sunday:[["16:00","21:00"],["18:00","24:00"]],
  Monday:[["16:00","21:00"],["18:00","24:00"]],
  Tuesday:[["16:00","21:00"],["18:00","24:00"]],
  Wednesday:[["16:00","21:00"],["18:00","24:00"]],
  Thursday:[["16:00","21:00"],["18:00","24:00"]],
  Saturday: [["16:00","21:00"],["18:00","24:00"]]
}, website: 'http://wedgwoodbroiler.com/images/happy%20hour.pdf', logo: 'http://wedgwoodbroiler.com/images/banner.bmp'},
{id: 'hudson-public-house-seattle',
happyHour:{
  Monday:[["16:00"],["18:00"]],
  Tuesday:[["16:00"],["18:00"]],
  Wednesday:[["16:00"],["18:00"]],
  Thursday:[["16:00"],["18:00"]],
  Friday:[["16:00"],["18:00"]]
}, website: 'http://hudsonpublichouse.com', logo: 'http://hudsonpublichouse.com/site/logo.jpg'},
{id: 'coopers-alehouse-seattle',
happyHour:{
  Monday:[["15:00"],["18:00"]],
  Tuesday:[["15:00"],["18:00"]],
  Wednesday:[["15:00"],["18:00"]],
  Thursday:[["15:00"],["18:00"]],
  Friday:[["15:00"],["18:00"]]
}, website: 'http://www.coopersalehouse.com/events.html', logo: 'http://www.coopersalehouse.com/images/logo.png'},
{id: 'the-pub-at-third-place-seattle',
happyHour:{
  Sunday:[["15:00"],["17:00"]],
  Monday:[["15:00"],["17:00"]],
  Tuesday:[["15:00"],["17:00"]],
  Wednesday:[["15:00"],["17:00"]],
  Thursday:[["15:00"],["17:00"]],
  Friday:[["15:00"],["17:00"]],
  Saturday: [["15:00"],["17:00"]]
}, website: 'http://www.vioscafe.com/viosravenna.html', logo: 'http://www.vioscafe.com/images/logoandtagline_ravenna.gif'},
{id: 'old-5th-avenue-tavern-seattle',
happyHour:{
  Sunday:[["14:00"],["19:00"]],
  Monday:[["14:00"],["19:00"]],
  Tuesday:[["14:00"],["19:00"]],
  Wednesday:[["14:00"],["19:00"]],
  Thursday:[["14:00"],["19:00"]],
  Friday:[["14:00"],["19:00"]],
  Saturday:[["14:00"],["19:00"]]
}, website: 'https://www.facebook.com/pages/Old-5th-Avenue-Tavern/109440285761126', logo: ''},
{id: 'fiddlers-inn-pub-and-restaurant-seattle',
happyHour:{
  Monday:[["15:00"],["18:00"]],
  Tuesday:[["15:00"],["18:00"]],
  Wednesday:[["15:00"],["18:00"]],
  Thursday:[["15:00"],["18:00"]],
  Friday:[["15:00"],["18:00"]]
}, website: 'http://www.3pubs.com/Fiddler.html', logo: 'http://www.3pubs.com/Fiddler_files/Fiddler.GIF'},
{id: 'pies-and-pints-seattle',
happyHour:{
  Monday:[["0:00"],["26:00"]],
  Tuesday:[["16:00","22:00"],["18:00","26:00"]],
  Wednesday:[["16:00","22:00"],["18:00","26:00"]],
  Thursday:[["16:00","22:00"],["18:00","26:00"]],
  Friday:[["16:00","22:00"],["18:00","26:00"]]
}, website: 'http://piesandpints.com/happy-hour/', logo: 'http://piesandpints.com/wp-content/uploads/2013/12/Logo_PnP_Transparent2.png'},
{id: 'roosevelt-ale-house-seattle',
happyHour:{
  Sunday:[["15:00"],["18:00"]],
  Monday:[["15:00"],["18:00"]],
  Tuesday:[["15:00"],["18:00"]],
  Wednesday:[["15:00"],["18:00"]],
  Thursday:[["15:00"],["18:00"]],
  Friday:[["15:00"],["18:00"]],
  Saturday: [["15:00"],["18:00"]],
}, website: 'http://www.rooseveltalehouse.com', logo: ''},
{id: 'the-atlantic-crossing-seattle',
happyHour:{
  Monday:[["9:00"],["14:00"]],
  Tuesday:[["9:00","18:00"],["14:00", "23:00"]],
  Wednesday:[["9:00","18:00"],["14:00","25:00"]],
  Thursday:[["9:00"],["14:00"]],
  Friday:[["9:00"],["14:00"]]
}, website: 'http://www.theatlanticcrossing.com/menu/', logo: ''},
{id: 'pair-seattle',
happyHour:{
  Tuesday:[["17:00"],["18:30"]],
  Wednesday:[["17:00"],["18:30"]],
  Thursday:[["17:00"],["18:30"]],
  Friday:[["17:00"],["18:00"]],
  Saturday: [["17:00"],["18:00"]],
}, website: 'http://www.pairseattle.com/happy-hour/', logo: 'http://static1.squarespace.com/static/55e88486e4b09f8763662354/t/55e88819e4b045a1ff30e283/1452129112901/?format=750w'},
  {id: 'latona-pub-seattle',
  happyHour:{
  Sunday:[["16:30"],["18:30"]],
  Monday:[["16:00"],["18:30"]],
  Tuesday:[["16:00"],["18:30"]],
  Wednesday:[["16:30"],["18:30"]],
  Thursday:[["16:30"],["18:30"]],
  Friday:[["16:30"],["18:30"]],
  Saturday: [["16:30"],["18:30"]],
}, website: 'http://www.3pubs.com/Latona.html', logo: 'http://www.3pubs.com/Latona_files/WashingtonBeer.png'},
{id: 'franks-oyster-house-and-champagne-parlor-seattle',
  happyHour:{
  Tuesday:[["17:00","22:00"],["18:30","23:00"]],
  Wednesday:[["17:00","22:00"],["18:30","23:00"]],
  Thursday:[["17:00","22:00"],["18:30","23:00"]],
  Friday:[["17:00","22:00"],["18:30","23:00"]],
  Saturday: [["17:00","22:00"],["18:30","23:00"]],
  }, website: 'http://www.franksoysterhouse.com/happy-hour/', logo: 'http://static1.squarespace.com/static/53cc1aede4b02c6d14ac20e2/t/53cd68b0e4b0cb413c8b28ec/1454790091894/?format=1500w'},
  {id: 'bai-pai-seattle',
  happyHour:{
  Sunday:[["16:00"],["19:00"]],
  Monday:[["16:00"],["26:00"]],
  Tuesday:[["16:00"],["26:00"]],
  Wednesday:[["16:00"],["19:00"]],
  Thursday:[["16:00"],["19:00"]]
  }, website: 'http://baipairestaurant.com/menus.html', logo: 'http://www.baipairestaurant.com/img/main.jpg'},
  {id: 'the-noble-fir-seattle',
  happyHour:{
  Sunday:[["16:00"],["18:30"]],
  Monday:[["16:00"],["18:30"]],
  Tuesday:[["16:00"],["18:30"]],
  Wednesday:[["16:00"],["18:30"]],
  Thursday:[["16:00"],["18:30"]],
  Friday:[["16:00"],["18:30"]],
  Saturday: [["16:00"],["18:30"]]
  }, website: 'http://www.thenoblefir.com/menu-spring-summer-2010.html', logo: 'http://www.thenoblefir.com/images/stories/headers/bar.jpg'},
  {id: 'stoneburner-seattle',
  happyHour:{
  Sunday:[["15:00"],["17:00"]],
  Monday:[["15:00"],["17:00"]],
  Tuesday:[["15:00"],["17:00"]],
  Wednesday:[["15:00"],["17:00"]],
  Thursday:[["15:00"],["17:00"]],
  Friday:[["15:00"],["17:00"]],
  Saturday: [["15:00"],["17:00"]]
  }, website: 'http://www.stoneburnerseattle.com/56301/menus', logo: 'https://d17my9ypnvqzep.cloudfront.net/35c5f64e-d137-45e8-a1e4-83d0cf1e97fb/dcbf2502-2d91-40d4-a5f1-1c9241bd6859_m.png'},
  {id: 'la-isla-cuisine-seattle',
  happyHour:{
  Sunday:[["15:00","21:00"],["18:00","25:00"]],
  Monday:[["15:00","21:00"],["18:00","25:00"]],
  Tuesday:[["15:00","21:00"],["18:00","25:00"]],
  Wednesday:[["15:00","21:00"],["18:00","25:00"]],
  Thursday:[["15:00","21:00"],["18:00","25:00"]],
  Friday:[["15:00","21:00"],["18:00","25:00"]],
  Saturday: [["15:00","21:00"],["18:00","25:00"]]
  }, website: 'http://laislacuisine.com/menus-la-isla-cuisine/', logo: 'http://laislacuisine.com/wp-content/uploads/2013/03/logo.svg'},
  {id: 'percys-and-co-seattle',
  happyHour:{
  Sunday:[["16:00"],["18:00"]],
  Monday:[["16:00","0:00"],["18:00","24:00"]],
  Tuesday:[["16:00"],["18:00"]],
  Wednesday:[["16:00"],["18:00"]],
  Thursday:[["16:00"],["18:00"]],
  Friday:[["16:00"],["18:00"]],
  Saturday: [["16:00"],["18:00"]],
}, website: 'http://www.percysseattle.com', logo: 'http://www.percysseattle.com/assets/images/logo.png'},
{id: 'rays-boathouse-seattle-2',
happyHour:{
  Sunday:[["17:00"],["18:00"]],
  Monday:[["17:00"],["18:00"]],
  Tuesday:[["17:00"],["18:00"]],
  Wednesday:[["17:00"],["18:00"]],
  Thursday:[["17:00"],["18:00"]],
  Friday:[["17:00"],["18:00"]],
  Saturday: [["17:00"],["18:00"]]
}, website: 'http://www.rays.com/boathouse/menu/', logo: 'http://www.rays.com/wp-content/themes/rays/images/logo.png'},
{id: 'ballard-station-public-house-seattle',
happyHour:{
  Sunday:[["16:00","23:00"],["18:00","26:00"]],
  Monday:[["16:00","23:00"],["18:00","26:00"]],
  Tuesday:[["16:00","23:00"],["18:00","26:00"]],
  Wednesday:[["16:00","23:00"],["18:00","26:00"]],
  Thursday:[["16:00","23:00"],["18:00","26:00"]],
  Friday:[["16:00"],["18:00"]]
}, website: 'http://theballardstation.com/happy-hours-specials/', logo: 'https://cdn2.vox-cdn.com/thumbor/hMxhtSJIQhi5O4WjTe_3JDv-xG4=/0x52:1000x615/1600x900/cdn0.vox-cdn.com/uploads/chorus_image/image/39074988/7907331768_5dc14ba8ef_b.0.0.jpg'},
{id: 'olafs-seattle',
happyHour:{
  Sunday:[["0:00"],["25:00"]],
  Monday:[["15:00"],["18:00"]],
  Tuesday:[["15:00"],["18:00"]],
  Wednesday:[["15:00"],["18:00"]],
  Thursday:[["15:00"],["18:00"]],
  Friday:[["15:00"],["18:00"]],
  Saturday: [["15:00"],["18:00"]]
}, website: 'http://www.olafsballard.com', logo: 'http://static1.squarespace.com/static/5429e094e4b08658bc7ad1a2/t/5429ef39e4b054905b30b00a/1456340610770/?format=1500w'},
{id: 'the-walrus-and-the-carpenter-seattle',
happyHour:{
  Monday:[["16:00"],["18:00"]],
  Tuesday:[["16:00"],["18:00"]],
  Wednesday:[["16:00"],["18:00"]],
  Thursday:[["16:00"],["18:00"]],
}, website: 'http://www.thewalrusbar.com/uploads/menus/Walrus-Wine-Menu-2.22.16.pdf', logo: 'http://www.thewalrusbar.com/uploads/_800x800_crop_center-center_75/walrus-photo-2.jpg'},
{id: 'kings-hardware-seattle',
happyHour:{
  Sunday:[["16:00"],["19:00"]],
  Monday:[["16:00"],["19:00"]],
  Tuesday:[["16:00"],["19:00"]],
  Wednesday:[["16:00"],["19:00"]],
  Thursday:[["16:00"],["19:00"]],
  Friday:[["16:00"],["19:00"]],
  Saturday: [["16:00"],["19:00"]]
}, website: 'http://static1.squarespace.com/static/550869cce4b0e10fa9082834/t/563a84dae4b0a7d393c4b10e/1446675674806/King%27s-Menu-11-4-15.jpg', logo: 'http://static1.squarespace.com/static/550869cce4b0e10fa9082834/t/5509bb48e4b036dcf6c355e4/1427496528188/KH+Postcard.png?format=1500w'},
{id: '8oz-burger-and-co-seattle-6',
happyHour:{
  Sunday:[["16:00","21:00"],["18:00","24:00"]],
  Monday:[["16:00","21:00"],["18:00","24:00"]],
  Tuesday:[["16:00","21:00"],["18:00","24:00"]],
  Wednesday:[["16:00","21:00"],["18:00","24:00"]],
  Thursday:[["16:00","21:00"],["18:00","24:00"]],
  Friday:[["16:00","21:00"],["18:00","24:00"]],
  Saturday:[["16:00","21:00"],["18:00","24:00"]]
}, website: 'http://8ozburgerandco.com/capitol-hill/', logo: 'http://8ozburgerandco.com/wp-content/uploads/2014/08/EW-LOGO.png'},
{id: 'bastille-cafe-and-bar-seattle-2',
happyHour:{
  Sunday:[["16:30","21:00"],["18:00","23:00"]],
  Monday:[["16:30","21:00"],["18:00","23:00"]],
  Tuesday:[["16:30","21:00"],["18:00","23:00"]],
  Wednesday:[["16:30","21:00"],["18:00","23:00"]],
  Thursday:[["16:30","21:00"],["18:00","23:00"]],
  Friday:[["16:30"],["18:00"]],
  Saturday: [["16:30"],["18:00"]]
}, website: 'http://www.bastilleseattle.com/happy-hour', logo: 'https://d17my9ypnvqzep.cloudfront.net/35c5f64e-d137-45e8-a1e4-83d0cf1e97fb/a5d809c0-2f44-452f-bf66-6f337d5edd95_l.jpg'},
{id: 'kickin-boot-whiskey-kitchen-seattle',
happyHour:{
  Sunday:[["15:00","22:00"],["18:00","26:00"]],
  Monday:[["15:00","22:00"],["18:00","26:00"]],
  Tuesday:[["15:00","22:00"],["18:00","26:00"]],
  Wednesday:[["15:00","22:00"],["18:00","26:00"]],
  Thursday:[["15:00","22:00"],["18:00","26:00"]],
  Friday:[["15:00","22:00"],["18:00","26:00"]],
  Saturday: [["15:00","22:00"],["18:00","26:00"]]
}, website: 'http://kickinboot.com/wp-content/uploads/2015/10/KB-WK-Aligned-Happy-Hour-2015-1015.pdf', logo: 'http://kickinboot.com/wp-content/themes/KickinBoot/images/kickin-boot.png'},
{id: 'the-sexton-seattle',
happyHour:{
  Sunday:[["16:00","0:00"],["21:00","25:00"]],
  Tuesday:[["17:00"],["19:00"]],
  Wednesday:[["17:00"],["19:00"]],
  Thursday:[["17:00"],["19:00"]],
  Friday:[["17:00"],["19:00"]],
  Saturday: [["17:00"],["19:00"]],
}, website: 'http://www.sextonballard.com', logo: 'http://www.sextonballard.com/img/logotransparentwhite.png'},
{id: 'olivers-twist-seattle',
happyHour:{
  Tuesday:[["17:00"],["19:00"]],
  Wednesday:[["17:00"],["19:00"]],
  Thursday:[["17:00"],["19:00"]],
  Friday:[["17:00"],["19:00"]],
  Saturday: [["17:00"],["19:00"]]
}, website: 'http://www.oliverstwistseattle.com', logo: 'http://static1.squarespace.com/static/54b41809e4b0ac5b7ad29082/t/55257802e4b076b7fbbd2e04/1455911152834/?format=1500w'},
{id: '418-public-house-seattle',
happyHour:{
  Sunday:[["15:30"],["18:30"]],
  Monday:[["15:30"],["18:30"]],
  Tuesday:[["15:30"],["18:30"]],
  Wednesday:[["15:30"],["18:30"]],
  Thursday:[["15:30"],["18:30"]],
  Friday:[["15:30"],["18:30"]],
  Saturday: [["15:30"],["18:30"]],
}, website: 'http://www.418publichouse.com/menu.php', logo: 'http://www.418publichouse.com/main/main_img/418logo.png'},
{id: 'the-ridge-seattle',
happyHour:{
  Sunday:[["21:00"],["23:00"]],
  Monday:[["25:00","21:00"],["18:00","23:00"]],
  Tuesday:[["15:00","21:00"],["18:00","23:00"]],
  Wednesday:[["15:00","21:00"],["18:00","23:00"]],
  Thursday:[["15:00","21:00"],["18:00","23:00"]],
  Friday:[["15:00","21:00"],["18:00","23:00"]],
  Saturday: [["21:00"],["23:00"]]
}, website: 'http://ridgepizza.com/food.php', logo: 'http://ridgepizza.com/img/logosm.png'},
{id: 'über-tavern-seattle-2',
happyHour:{
  Tuesday:[["16:00"],["18:00"]],
  Wednesday:[["16:00"],["18:00"]],
  Thursday:[["16:00"],["18:00"]],
  Friday:[["16:00"],["18:00"]],
}, website: 'http://www.uberbier.com', logo: 'http://www.uberbier.com/images/kegs-navigation.jpg'},
{id: 'stumbling-goat-bistro-seattle',
happyHour:{
  Sunday:[["16:00"],["18:00"]],
  Tuesday:[["16:00"],["18:00"]],
  Wednesday:[["16:00"],["18:00"]],
  Thursday:[["16:00"],["18:00"]],
  Friday:[["16:00"],["18:00"]],
  Saturday: [["16:00"],["18:00"]],
}, website: 'http://www.stumblinggoatbistro.com/our_menu', logo: 'http://www.stumblinggoatbistro.com/img/sg_logo.png'},
{id: 'duck-island-ale-house-seattle',
happyHour:{
  Sunday:[["15:00"],["17:00"]],
  Monday:[["15:00"],["17:00"]],
  Tuesday:[["15:00"],["17:00"]],
  Wednesday:[["15:00"],["17:00"]],
  Thursday:[["15:00"],["17:00"]],
  Friday:[["15:00"],["17:00"]],
  Saturday: [["15:00"],["17:00"]]
}, website: 'http://duckislandalehouse.blogspot.com/p/happy-hour.html', logo: ''},
{id: 'the-park-public-house-seattle',
happyHour:{
  Monday:[["15:00"],["18:00"]],
  Tuesday:[["15:00"],["18:00"]],
  Wednesday:[["15:00"],["18:00"]],
  Thursday:[["15:00"],["18:00"]],
  Friday:[["15:00"],["18:00"]]
}, website: 'http://theparkpub.com/menu/happy-hour/', logo: 'http://theparkpub.com/wp-content/uploads/2015/08/Park-Pub-footerlogo.png'},
{id: 'phinney-market-pub-and-eatery-seattle',
happyHour:{
  Sunday:[["21:00"],["22:00"]],
  Monday:[["21:00"],["22:00"]],
  Tuesday:[["21:00"],["22:00"]],
  Wednesday:[["21:00"],["22:00"]],
  Thursday:[["21:00"],["22:00"]],
  Friday:[["21:00"],["22:00"]],
  Saturday: [["21:00"],["22:00"]],
}, website: 'http://www.phinneymarketpub.com/#!lunch--dinner-menu/chpi', logo: 'https://static.wixstatic.com/media/fb5a67_e5c01906bbb3ac302a00346fb122018e.png/v1/fill/w_500,h_230,al_c,lg_1/fb5a67_e5c01906bbb3ac302a00346fb122018e.png'},
{id: 'cornuto-pizzeria-seattle',
happyHour:{
  Sunday:[["17:00","21:00"],["18:00","23:00"]],
  Monday:[["17:00","21:00"],["18:00","23:00"]],
  Tuesday:[["17:00","21:00"],["18:00","23:00"]],
  Wednesday:[["17:00","21:00"],["18:00","23:00"]],
  Thursday:[["17:00","21:00"],["18:00","23:00"]]
}, website: 'http://www.cornutopizzeria.com', logo: 'http://www.cornutopizzeria.com/wp-content/uploads/2016/01/Cornuto_Patience2.png'},
{id: 'barking-dog-alehouse-seattle',
happyHour:{
  Sunday:[["15:00","20:00"],["18:00","22:00"]],
  Monday:[["15:00","20:00"],["18:00","22:00"]],
  Tuesday:[["15:00","20:00"],["18:00","22:00"]],
  Wednesday:[["15:00","20:00"],["18:00","22:00"]],
  Thursday: [["15:00","20:00"],["18:00","22:00"]],
  Friday:[["15:00","19:00"],["18:00","22:00"]],
  Saturday: [["15:00","20:00"],["18:00","22:00"]]
}, website: 'http://thebarkingdogalehouse.com/home2/check-out/', logo: 'http://thebarkingdogalehouse.com/wp-content/uploads/2013/05/Barking-Dog-Web.png'},
{id: 'the-yard-cafe-seattle',
happyHour:{
  Sunday: [["16:00", "22:00"],["16:00", "24:00"]],
  Monday:[["16:00", "22:00"],["16:00", "24:00"]],
  Tuesday:[["16:00", "22:00"],["16:00", "24:00"]],
  Wednesday:[["16:00", "22:00"],["16:00", "24:00"]],
  Thursday:[["16:00", "22:00"],["16:00", "24:00"]],
  Friday:[["16:00", "22:00"],["16:00", "24:00"]],
  Saturday:[["16:00", "22:00"],["16:00", "24:00"]]
}, website: 'http://theyardcafe.com', logo: 'http://theyardcafe.com/img/rooster_knockout.svg'},
{id: 'in-the-red-wine-bar-seattle',
happyHour:{
  Sunday:[["0:00"],["26:00"]],
  Monday:[["15:00"],["18:00"]],
  Tuesday:[["15:00"],["18:00"]],
  Wednesday:[["15:00"],["18:00"]],
  Thursday:[["15:00"],["18:00"]],
  Friday:[["15:00"],["18:00"]],
  Saturday:[["15:00"],["18:00"]]
}, website: 'http://intheredwinebar.com/menu/', logo: 'http://intheredwinebar.com/wp-content/uploads/2014/11/IMG_4944.jpg'},
{id: 'waterwheel-lounge-seattle',
happyHour:{
  Sunday: [["17:00"],["19:00"]],
  Monday:[["17:00"],["19:00"]],
  Tuesday:[["17:00"],["19:00"]],
  Wednesday:[["17:00"],["19:00"]],
  Thursday:[["17:00"],["19:00"]],
  Friday:[["17:00"],["19:00"]],
  Saturday:[["17:00"],["19:00"]]
}, website: 'http://www.thewaterwheellounge.com', logo: 'https://pbs.twimg.com/profile_images/748305223/Logo_Yelp_400x400.jpg'},
{id: 'west-5-seattle',
happyHour:{
  Sunday: [["16:00"],["18:00"]],
  Monday:[["16:00"],["18:00"]],
  Tuesday:[["16:00"],["18:00"]],
  Wednesday:[["16:00"],["18:00"]],
  Thursday:[["16:00"],["18:00"]],
  Friday:[["16:00"],["18:00"]],
  Saturday: [["16:00"],["18:00"]]
}, website: 'http://westfive.com/happy-hour/', logo: 'http://westfive.com/wip/wp-content/uploads/2015/10/W5-Logo-White.png'},
{id: 'jaks-grill-seattle',
happyHour:{
  Monday:[["16:30"],["17:30"]],
  Tuesday:[["16:30"],["17:30"]],
  Wednesday:[["16:30"],["17:30"]],
  Thursday:[["16:30"],["17:30"]],
  Friday:[["16:30"],["17:30"]]
}, website: 'http://www.jaksgrill.com/process.asp', logo: 'http://www.jaksgrill.com/i/logo.gif'},
{id: 'talaricos-pizzeria-and-lounge-seattle',
happyHour:{
  Sunday:[["15:00", "23:00"],["18:00", "25:00"]],
  Monday:[["15:00", "23:00"],["18:00", "25:00"]],
  Tuesday:[["15:00", "23:00"],["18:00", "25:00"]],
  Wednesday:[["15:00", "23:00"],["18:00", "25:00"]],
  Thursday:[["15:00", "23:00"],["18:00", "25:00"]],
  Friday:[["15:00", "23:00"],["18:00", "25:00"]],
  Saturday:[["15:00", "23:00"],["18:00", "25:00"]]
}, website: 'http://talaricospizza.com', logo: 'http://talaricospizza.com/wp-content/themes/Talaricos2013/images/talaricos_logo.png'},
{id: 'the-matador-seattle',
happyHour:{
Sunday:[["16:00", "22:00"],["18:00", "25:00"]],
Monday:[["16:00", "22:00"],["18:00", "25:00"]],
Tuesday:[["16:00", "22:00"],["18:00", "25:00"]],
Wednesday:[["16:00", "22:00"],["18:00", "25:00"]],
Thursday:[["16:00", "22:00"],["18:00", "25:00"]],
Friday:[["16:00", "22:00"],["18:00", "25:00"]],
Saturday:[["16:00", "22:00"],["18:00", "25:00"]]}, website: 'http://thematadorrestaurant.com/menu/happy-hour.pdf', logo: 'http://www.matadorrestaurants.com/images/theme-36/logo.png'},
{id: 'fresh-bistro-seattle-2',
happyHour:{
Monday:[["18:00"],["25:00"]],
Tuesday:[["18:00"],["25:00"]],
Wednesday:[["18:00"],["25:00"]],
Thursday:[["18:00"],["25:00"]],
Friday:[["17:00, 21:00"],["18:00, 22:00"]],
Saturday:[["17:00, 21:00"],["18:00, 22:00"]]}, website: 'http://www.freshbistroseattle.com/wp-content/uploads/2016/01/Bar-Food-HH-Drinks-4-9-15-website.pdf', logo: 'http://www.freshbistroseattle.com/wp-content/uploads/2012/10/121020_FBFall-8885.jpg'},
{id: 'shadowland-seattle',
happyHour:{
Sunday:[["15:00", "22:00"],["18:00", "24:00"]],
Monday:[["15:00", "22:00"],["18:00", "24:00"]],
Tuesday:[["15:00", "22:00"],["18:00", "24:00"]],
Wednesday:[["15:00", "22:00"],["18:00", "24:00"]],
Thursday:[["15:00", "22:00"],["18:00", "24:00"]],
Friday:[["15:00", "22:00"],["18:00", "24:00"]],
Saturday:[["15:00", "22:00"],["18:00", "24:00"]]}, website: 'http://shadowlandwest.com/wp-content/uploads/2014/04/Happy-food-tents-new-9-24-13.pdf', logo: 'http://shadowlandwest.com/wp-content/themes/shadowlandwest/images/moonLogo.png'},
{id: 'pizzeria-credo-seattle',
happyHour:{
Tuesday:[["16:00"],["18:30"]],
Wednesday:[["16:00"],["18:30"]],
Thursday:[["16:00"],["18:30"]],
Friday:[["16:00"],["18:30"]]}, website: 'http://pizzeriacredo.com/#happy-hour', logo: 'http://pizzeriacredo.com/wp-content/uploads/2013/05/Top-Logo-xsm2.png'},
{id: 'maono-seattle',
happyHour:{
Sunday:[["17:00"],["18:30"]],
Monday:[["17:00"],["18:30"]],
Tuesday:[["17:00"],["18:30"]],
Wednesday:[["17:00"],["18:30"]],
Thursday:[["17:00"],["18:30"]]}, website: 'http://maono.springhillnorthwest.com/food/happy-hour/', logo: 'http://maono.springhillnorthwest.com/image/logo-big.png'},
{id: 'corner-pocket-seattle',
happyHour:{
Sunday:[["15:00"],["18:00"]],
Monday:[["15:00"],["18:00"]],
Tuesday:[["15:00"],["18:00"]],
Wednesday:[["15:00"],["18:00"]],
Thursday:[["15:00"],["18:00"]],
Friday:[["15:00"],["18:00"]],
Saturday:[["15:00"],["18:00"]]}, website: 'https://www.facebook.com/wscornerpocket', logo: ''},
{id: 'poggie-tavern-seattle',
happyHour:{
Sunday:[["17:00"],["19:00"]],
Monday:[["17:00"],["19:00"]],
Tuesday:[["17:00"],["19:00"]],
Wednesday:[["17:00"],["19:00"]],
Thursday:[["17:00"],["19:00"]],
Friday:[["17:00"],["19:00"]],
Saturday:[["17:00"],["19:00"]]}, website: 'https://www.facebook.com/pages/Poggie-Tavern/116417008382373', logo: 'https://scontent.xx.fbcdn.net/hprofile-frc3/v/t1.0-1/p320x320/1378449_10202448982528849_1139648770_n.jpg?oh=2a5e33437d4e3b172efb5bee109ae5db&oe=57240827'},
{id: 'the-bridge-seattle-3',
happyHour:{
Monday:[["15:00", "23:00"],["18:00", "25:00"]],
Tuesday:[["15:00", "23:00"],["18:00", "25:00"]],
Wednesday:[["15:00", "23:00"],["18:00", "25:00"]],
Thursday:[["15:00", "23:00"],["18:00", "25:00"]],
Friday:[["15:00", "23:00"],["18:00", "25:00"]],
Saturday:[["15:00", "23:00"],["18:00", "25:00"]]}, website: 'http://www.thebridgeseattle.com/wp-content/uploads/2014/05/HAPPY-HOUR-NO-MORE-SALES-TAX-INCLUDED-2.17.15.pdf', logo: 'http://www.thebridgeseattle.com/wp-content/uploads/2013/06/BridgeLogo.png'},
{id: 'skylark-café-and-club-seattle-2',
happyHour:{
Sunday:[["16:00"],["19:00"]],
Monday:[["16:00"],["19:00"]],
Tuesday:[["16:00"],["19:00"]],
Wednesday:[["16:00"],["19:00"]],
Thursday:[["16:00"],["19:00"]],
Friday:[["16:00"],["19:00"]],
Saturday:[["16:00"],["19:00"]]}, website: 'http://www.skylarkcafe.com/menus/', logo: 'http://static1.squarespace.com/static/525a1569e4b0daa056d0c8a9/t/53a2034de4b01756877c75fb/1456120313707/?format=1500w'},
{id: 'luna-park-cafe-seattle',
happyHour:{
Monday:[["15:00"],["18:00"]],
Tuesday:[["15:00"],["18:00"]],
Wednesday:[["15:00"],["18:00"]],
Thursday:[["15:00"],["18:00"]],
Friday:[["15:00"],["18:00"]]}, website: 'http://www.lunaparkcafe.com/happyhour.html', logo: 'http://www.lunaparkcafe.com/_photos/logo.png'},
{id: 'el-chupacabra-seattle-3',
happyHour:{
Sunday:[["16:00","22:00"],["18:00","24:00"]],
Monday:[["16:00","22:00"],["18:00","24:00"]],
Tuesday:[["16:00","22:00"],["18:00","24:00"]],
Wednesday:[["16:00","22:00"],["18:00","24:00"]],
Thursday:[["16:00","22:00"],["18:00","24:00"]],
Friday:[["16:00","22:00"],["18:00","24:00"]],
Saturday:[["16:00","22:00"],["18:00","24:00"]]}, website: 'http://www.elchupacabraseattle.com/menu/happy-hour/', logo: 'http://www.elchupacabraseattle.com/wp-content/uploads/2015/01/drinks.jpg'}
 ];
