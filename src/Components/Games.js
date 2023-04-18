import React, { useState } from 'react';
import '../App.css';
import {Accordion, AccordionBody, AccordionHeader, AccordionItem,} from 'reactstrap';

function Games(props) {
  const [open, setOpen] = useState('');
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <div className="container">
      <h1 className="main-header">Game Headquarters</h1>
      <h3 className="main-subheader">Here is a full list of each game Mario is in, seperated by console.</h3>
      <Accordion flush open={open} toggle={toggle} className="main-accordion">
        <AccordionItem>
          <AccordionHeader targetId="1">Arcade</AccordionHeader>
          <AccordionBody accordionId="1" className="accordion-body">
          <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyTKn5b4NKddJ8JOKTDNLuDvUvdF_DyQPTfvASpyKWTw&usqp=CAU&ec=48665698"} className="img-fluid mb-2" 
          style={{
          height: '300px'
          }}alt="arcade"/>
           <br></br>
           Donkey Kong 1981<br></br>
           Donkey Kong 3 1983<br></br>
           Mario Bros. 1983<br></br>
           Vs. Super Mario Bros. 1986<br></br>
           Mario Kart Arcade GP 2005<br></br>
           Mario Kart Arcade GP 2 2007<br></br>
           Mario Kart Arcade GP DX 2013<br></br>
           Luigi's Mansion Arcade 2015<br></br>
           Mario Kart Arcade GP VR 2017<br></br>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="2">Game & Watch</AccordionHeader>
          <AccordionBody accordionId="2" className="accordion-body">
          <img src={"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6428/6428471cv12d.jpg"} className="img-fluid mb-2" 
          style={{
            height: '300px'
          }} alt="game and watch"/>
          <br></br>
          <strong>Multi-Screen Series</strong><br></br>
          Donkey Kong 1982<br></br>
          Donkey Kong II 1983<br></br>
          <strong>Horizontal Multi Screen Series</strong><br></br>
          Mario Bros. 1983<br></br>
          <strong>New Wide Screen Series</strong><br></br>
          Donkey Kong Jr. 1982<br></br>
          Mario's Cement Factory 1983<br></br>
          Super Mario Bros. 1988 <br></br>
          Mario the Juggler 1991 <br></br>
          <strong>Table Top Series</strong><br></br>
          Donkey Kong Jr. 1983<br></br>
          Mario's Cement Factory 1983<br></br>
          <strong>Panorama Series</strong><br></br>
          Donkey Kong Jr. 1983<br></br>
          Mario's Bombs Away 1983<br></br>
          Donkey Kong Circus 1984<br></br>
          <strong>Micro Vs. & Series</strong><br></br>
          Donkey Kong Hockey 1984<br></br>
          <strong>Crystal Screen Series</strong><br></br>
          Super Mario Bros. 1986 <br></br>
          <strong>Gold Series</strong><br></br>
          Super Mario Bros. 2020
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="3">Famicom/NES</AccordionHeader>
          <AccordionBody accordionId="3" className="accordion-body">
          <img src={"https://mario.wiki.gallery/images/thumb/c/cf/Nintendo_Entertainment_System.jpg/1200px-Nintendo_Entertainment_System.jpg"} className="img-fluid mb-2" 
          style={{
          height: '300px'
          }}alt="NES"/>
          <br></br>
          Donkey Kong 1983 FC, 1986 NES<br></br>
          Donkey Kong Jr. 1983 FC, 1986 NES<br></br>
          Donkey Kong Classics 1988<br></br>
          Mario Bros. 1983 FC, 1986 NES<br></br>
          Pinball 1984 FC, 1985 NES<br></br>
          Golf 1984 FC, 1985 NES<br></br>
          Wrecking Crew 1985<br></br>
          Super Mario Bros. 1985<br></br>
          Super Mario Bros./Duck Hunt 1988<br></br>
          Super Mario Bros. 2 1988<br></br>
          Super Mario Bros. 3 1988 FC, 1990 NES<br></br>
          Super Mario Bros./Duck Hunt/Track Meet 1990<br></br>
          Dr. Mario 1990<br></br>
          NES Open Tournament Golf 1991<br></br>
          Yoshi 1991<br></br>
          Yoshi's Cookie 1992<br></br>
          Mario is Missing! 1993<br></br>
          Mario's Time Machine 1994<br></br>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="4">Famicom Disk System</AccordionHeader>
          <AccordionBody accordionId="4" className="accordion-body">
          <img src={"https://mario.wiki.gallery/images/thumb/5/53/Famicomdisksystemconsole.jpg/1200px-Famicomdisksystemconsole.jpg"} className="img-fluid mb-2" 
          style={{
          height: '300px'
          }}alt="Famicom Disk System"/>
          <br></br>
          Super Mario Bros. 1986<br></br>
          Super Mario Bros.: The Lost Levels 1986<br></br>
          I Am a Teacher: Super Mario Sweater 1986<br></br>
          All Night Nippon Super Mario Bros. 1986<br></br>
          Golf 1986<br></br>
          Golf: Japan Course 1987<br></br>
          Golf: US Course 1987<br></br>
          Famicom Grand Prix: F-1 Race 1987<br></br>
          Famicom Grand Prix II: 3D Hot Rally 1987<br></br>
          Return of Mario Bros. 1988<br></br>
          Donkey Kong 1988<br></br>
          Donkey Kong Jr. 1988<br></br>
          Wrecking Crew 1989<br></br>
          Pinball 1989<br></br>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="5">Game Boy</AccordionHeader>
          <AccordionBody accordionId="5" className="accordion-body">
          <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Game-Boy-FL.jpg/640px-Game-Boy-FL.jpg"} className="img-fluid mb-2" 
          style={{
          height: '300px'
          }}alt="Game Boy"/>
          <br></br>
          Tetris 1989, GB<br></br>
          Super Mario Land 1989, GB<br></br>
          Alleyway 1989, GB<br></br>
          Golf 1989, GB<br></br>
          Dr. Mario 1990, GB<br></br>
          Yoshi 1991, GB<br></br>
          Yoshi's Cookie 1992, GB<br></br>
          Super Mario Land 2: 6 Golden Coins 1992, GB<br></br>
          Mario's Picross 1995, GB<br></br>
          Picross 2 1996, GB<br></br>
          Donkey Kong 1994, GB<br></br>
          Wario Land: Super Mario Land 3 1994, GB<br></br>
          Tetris Attack 1996, GB<br></br>
          Game & Watch Gallery 1997, GB<br></br>
          Game & Watch Gallery 2 1997, GB<br></br>
          <strong>Game Boy Color</strong><br></br>
          Game & Watch Gallery 2 1998, GBC<br></br>
          Game & Watch Gallery 3 1999, GBC<br></br>
          Mario Golf 1999, GBC<br></br>
          Super Mario Bros. Deluxe 1999, GBC<br></br>
          Mario Tennis 2000, GBC<br></br>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="6">SNES/Super Famicom</AccordionHeader>
          <AccordionBody accordionId="6" className="accordion-body">
          <img src={"https://m.media-amazon.com/images/I/61Om+g24YiL.jpg"} className="img-fluid mb-2" 
          style={{
          height: '300px'
          }}alt="SNES"/>
          <br></br>
          Super Mario World 1990, SFC; 1991, SNES<br></br>
          Super Mario Kart 1992, SNES<br></br>
          Mario Paint 1992, SNES<br></br>
          Mario & Wario 1993, SNES<br></br>
          Mario is Missing! 1993, SNES<br></br>
          Mario's Time Machine 1993, SNES<br></br>
          Super Mario All-Stars 1993, SNES<br></br>
          Yoshi's Cookie 1993, SNES<br></br>
          Yoshi's Safari 1993, SNES<br></br>
          Mario's Early Years! Fun with Letters 1994, SNES<br></br>
          Mario's Early Years: Fun with Numbers 1994, SNES<br></br>
          Mario's Early Years: Preschool Fun 1994, SNES<br></br>
          Tetris & Dr. Mario 1994, SNES<br></br>
          Wario's Woods 1994, SNES<br></br>
          Mario's Super Picross 1995, SNES<br></br>
          Super Mario World 2: Yoshi's Island 1995, SNES<br></br>
          Tetris Attack 1995, SNES<br></br>
          Super Mario RPG: Legend of the Seven Stars 1996, SNES<br></br>
          Excitebike: Bun Bun Mario Battle Stadium 1997, Satellaview<br></br>
          Wrecking Crew '98 1998, SNES<br></br>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="7">PC/Philips CD-i</AccordionHeader>
          <AccordionBody accordionId="7" className="accordion-body">
          <img src={"https://www.gamecash.fr/thumbnail-600/cd-i-philips-e47720.jpg"} className="img-fluid mb-2" 
          style={{
          height: '300px'
          }}alt="Philips CD-i"/>
          <br></br>
          Mario Bros. Special 1984<br></br>
          Punch Ball Mario Bros. 1984<br></br>
          Super Mario Bros. Special 1986<br></br>
          Mario Teaches Typing 1991<br></br>
          Hotel Mario 1994<br></br>
          Mario's Game Gallery 1995<br></br>
          Mario Teaches Typing 2 1997<br></br>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="8">Virtual Boy</AccordionHeader>
          <AccordionBody accordionId="8" className="accordion-body">
          <img src={"https://qph.cf2.quoracdn.net/main-qimg-c07cfed0de2e71c47aa5dc6431adff39-lq"} className="img-fluid mb-2" 
          style={{
          height: '300px'
          }}alt="Virtual Boy"/>
          <br></br>
          Mario's Tennis 1995, VB<br></br>
          Mario Clash 1995, VB<br></br>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="9">Nintendo 64</AccordionHeader>
          <AccordionBody accordionId="9" className="accordion-body">
          <img src={"https://cdn11.bigcommerce.com/s-ymgqt/images/stencil/original/products/31147/54870/N64-Mario-pak__70267.1678395506.jpg?c=2"} className="img-fluid mb-2" 
          style={{
          height: '300px'
          }}alt="Nintendo 64"/>
          <br></br>
          Super Mario 64 1996<br></br>
          Mario Kart 64 1996<br></br>
          Yoshi's Story 1997<br></br>
          Mario no Photopi 1998<br></br>
          Mario Party 1998<br></br>
          Super Smash Bros. 1999<br></br>
          Mario Golf 1999<br></br>
          Mario Party 2 1999<br></br>
          Mario Tennis 2000<br></br>
          Paper Mario 2000<br></br>
          Mario Party 3 2000<br></br>
          Dr. Mario 64 2001<br></br>
          <strong>Nintendo 64DD</strong><br></br>
          Mario Artist: Paint Studio 1999, 64DD<br></br>
          Mario Artist: Talent Studio 2000, 64DD<br></br>
          Mario Artist: Communication Kit 2000, 64DD<br></br>
          Mario Artist: Polygon Studio 2000, 64DD<br></br>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="10">Game Boy Advance</AccordionHeader>
          <AccordionBody accordionId="10" className="accordion-body">
          <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Nintendo-Game-Boy-Advance-Purple-FL.jpg/800px-Nintendo-Game-Boy-Advance-Purple-FL.jpg"} className="img-fluid mb-2" 
          style={{
          height: '300px'
          }}alt="Game Boy Advance"/>
          <br></br>
          Super Mario Advance 2001<br></br>
          Mario Kart: Super Circuit 2001<br></br>
          Super Mario Advance 2: Super Mario World 2001<br></br>
          Game & Watch Gallery Advance 2002<br></br>
          Super Mario Advance 3: Yoshi's Island 2002<br></br>
          Mario Party-e 2003<br></br>
          Super Mario Advance 4: Super Mario Bros. 3 2003<br></br>
          Mario & Luigi: Superstar Saga 2003<br></br>
          Dr. Mario & Puzzle League 2005<br></br>
          Mario Golf: Advance Tour 2004<br></br>
          Mario vs. Donkey Kong 2004<br></br>
          Mario Pinball Land 2004<br></br>
          Yoshi's Universal Gravitation 2004<br></br>
          Mario Party Advance 2005<br></br>
          Mario Tennis: Power Tour 2005<br></br>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="11">Nintendo GameCube</AccordionHeader>
          <AccordionBody accordionId="11" className="accordion-body">
          <img src={"https://retrovgames.com/wp-content/uploads/2021/08/Nintendo-Gamecube-Console-Super-Smash-Bros-Mario-Kart2-scaled.jpg"} className="img-fluid mb-2" 
          style={{
          height: '300px'
          }}alt="GameCube"/>
          <br></br>
          Luigi's Mansion 2001<br></br>
          Super Smash Bros. Melee 2001<br></br>
          Super Mario Sunshine 2002<br></br>
          Mario Party 4 2002<br></br>
          Mario Party 5 2003<br></br>
          Mario Golf: Toadstool Tour 2003<br></br>
          Mario Kart: Double Dash!! 2003<br></br>
          Paper Mario: The Thousand-Year Door 2004<br></br>
          Mario Party 6 2004<br></br>
          Mario Power Tennis 2004<br></br>
          Mario Superstar Baseball 2005<br></br>
          Mario Party 7 2005<br></br>
          Dance Dance Revolution: Mario Mix 2005<br></br>
          Super Mario Strikers 2005<br></br>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="12">Nintendo DS</AccordionHeader>
          <AccordionBody accordionId="12" className="accordion-body">
          <img src={"https://m.media-amazon.com/images/I/41XE082RSXL._AC_.jpg"} className="img-fluid mb-2" 
          style={{
          height: '300px'
          }}alt="Nintendo DS"/>
          <br></br>
          Super Mario 64 DS 2004 <br></br>
          Yoshi Touch & Go 2005<br></br>
          Yakuman DS 2005 Japan exclusive<br></br>
          Mario & Luigi: Partners in Time 2005<br></br>
          Mario Kart DS 2005<br></br>
          Super Princess Peach 2005<br></br>
          Tetris DS 2006<br></br>
          Mario vs. Donkey Kong 2: March of the Minis 2006<br></br>
          New Super Mario Bros. 2006<br></br>
          Mario Hoops: 3-on-3 2006<br></br>
          Yoshi's Island DS 2006<br></br>
          Itadaki Street DS 2007 Japan exclusive<br></br>
          Mario Party DS 2007<br></br>
          Mario & Sonic at the Olympic Games 2008<br></br>
          Mario & Luigi: Bowser's Inside Story 2009<br></br>
          Mario & Sonic at the Olympic Winter Games 2009<br></br>
          Mario vs. Donkey Kong: Mini-Land Mayhem 2010<br></br>
          <strong>Nintendo DSi</strong><br></br>
          Mario vs. Donkey Kong: Minis March Again! 2009<br></br>
          Dr. Mario Express 2009<br></br>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="13">Wii</AccordionHeader>
          <AccordionBody accordionId="13" className="accordion-body">
          <img src={"https://m.media-amazon.com/images/I/61FENmjg5SL.jpg"} className="img-fluid mb-2" 
          style={{
          height: '300px'
          }}alt="Wii"/>
          <br></br>
          Super Paper Mario 2007<br></br>
          Mario Party 8 2007<br></br>
          Mario Strikers Charged Football 2007<br></br>
          Mario & Sonic at the Olympic Games 2007<br></br>
          Super Mario Galaxy 2007<br></br>
          Super Smash Bros. Brawl 2008<br></br>
          Dr. Mario Online Rx 2008<br></br>
          Mario Kart Wii 2008<br></br>
          Mario Super Sluggers 2008<br></br>
          New Play Control! Mario Power Tennis 2009<br></br>
          Mario & Sonic at the Olympic Winter Games 2009<br></br>
          New Super Mario Bros. Wii 2009<br></br>
          Super Mario Galaxy 2 2010<br></br>
          Super Mario All-Stars 25th Anniversary Edition 2010<br></br>
          Mario Sports Mix 2010<br></br>
          Mario & Sonic at the London 2012 Olympic Games 2011<br></br>
          Fortune Street 2011<br></br>
          Mario Party 9 2012<br></br>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="14">Nintendo 3DS</AccordionHeader>
          <AccordionBody accordionId="14" className="accordion-body">
          <img src={"https://files.refurbed.com/ii/nintendo-3ds-bundle-1678179065.jpg"} className="img-fluid mb-2" 
          style={{
          height: '300px'
          }}alt="Nintendo 3DS"/>
          <br></br>
          Super Mario 3D Land 2011<br></br>
          Mario Kart 7 2011<br></br>
          Mario & Sonic at the London 2012 Olympic Games 2012<br></br>
          Mario Tennis Open 2012<br></br>
          New Super Mario Bros. 2 2012<br></br>
          Paper Mario: Sticker Star 2012<br></br>
          Luigi's Mansion: Dark Moon 2013<br></br>
          Mario and Donkey Kong: Minis on the Move 2013<br></br>
          Mario & Luigi: Dream Team 2013<br></br>
          Mario Party: Island Tour 2013<br></br>
          Ultimate NES Remix 2013<br></br>
          Mario Golf: World Tour 2014<br></br>
          Yoshi's New Island 2014<br></br>
          Super Smash Bros. for Nintendo 3DS 2014<br></br>
          Mario vs. Donkey Kong: Tipping Stars 2015<br></br>
          Puzzle & Dragons Z + Super Mario Bros. Edition 2015<br></br>
          Dr. Mario: Miracle Cure 2015<br></br>
          Mario & Luigi: Paper Jam 2015<br></br>
          Mario & Sonic at the Rio 2016 Olympic Games 2016<br></br>
          Mini Mario & Friends: amiibo Challenge 2016<br></br>
          Mario Party: Star Rush 2016<br></br>
          Super Mario Maker for Nintendo 3DS 2016<br></br>
          Poochy & Yoshi's Woolly World 2017<br></br>
          Mario Sports Superstars 2017<br></br>
          Mario & Luigi: Superstar Saga + Bowser's Minions 2017<br></br>
          Mario Party: The Top 100 2017<br></br>
          Captain Toad: Treasure Tracker 2018<br></br>
          Luigi's Mansion 2018<br></br>
          Mario & Luigi: Bowser's Inside Story + Bowser Jr.'s Journey 2019<br></br>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="15">Wii U</AccordionHeader>
          <AccordionBody accordionId="15" className="accordion-body" >
          <img src={"https://i5.walmartimages.com/asr/bc7358aa-d8cf-497b-a95d-77188aa402ef_1.e479657ee46e561cde7eaf5dbfed91d5.jpeg"} className="img-fluid mb-2" 
          style={{
          height: '300px'
          }}alt="Wii U"/>
          <br></br>
          New Super Mario Bros. U 2012<br></br>
          New Super Luigi U 2013<br></br>
          Super Mario 3D World 2013<br></br>
          Mario & Sonic at the Sochi 2014 Olympic Winter Games 2013<br></br>
          Dr. Luigi 2013<br></br>
          Mario Kart 8 2014<br></br>
          Super Smash Bros. for Wii U 2014<br></br>
          Captain Toad: Treasure Tracker 2014<br></br>
          Mario vs. Donkey Kong: Tipping Stars 2015<br></br>
          Mario Party 10 2015<br></br>
          Super Mario Maker 2015<br></br>
          Mario Tennis: Ultra Smash 2015<br></br>
          Yoshi's Woolly World 2015<br></br>
          Mini Mario & Friends: amiibo Challenge 2016<br></br>
          Mario & Sonic at the Rio 2016 Olympic Games 2016<br></br>
          Paper Mario: Color Splash 2016<br></br>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="16">Nintendo Switch</AccordionHeader>
          <AccordionBody accordionId="16"className="accordion-body" >
          <img src={"https://i.etsystatic.com/27825707/r/il/f2c52e/3171282592/il_340x270.3171282592_jps3.jpg"} className="img-fluid mb-2" 
          style={{
          height: '300px'
          }}alt="Nintendo Switch"/>
          <br></br>
          Mario Kart 8 Deluxe 2017<br></br>
          Mario + Rabbids Kingdom Battle 2017<br></br>
          Super Mario Odyssey 2017<br></br>
          Mario Tennis Aces 2018<br></br>
          Captain Toad: Treasure Tracker 2018<br></br>
          Super Mario Party 2018<br></br>
          Super Smash Bros. Ultimate 2018<br></br>
          New Super Mario Bros. U Deluxe 2019<br></br>
          Yoshi's Crafted World 2019<br></br>
          Super Mario Maker 2 2019<br></br>
          Luigi's Mansion 3 2019<br></br>
          Mario & Sonic at the Olympic Games Tokyo 2020 2019<br></br>
          Paper Mario: The Origami King 2020<br></br>
          Super Mario 3D All-Stars 2020<br></br>
          Super Mario Bros. 35 2020<br></br>
          Mario Kart Live: Home Circuit 2020<br></br>
          Super Mario 3D World + Bowser's Fury 2021<br></br>
          Mario Golf: Super Rush 2021<br></br>
          Mario Party Superstars 2021<br></br>
          Mario Strikers: Battle League 2022<br></br>
          Mario + Rabbids: Sparks of Hope 2022<br></br>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="17">Mobile</AccordionHeader>
          <AccordionBody accordionId="17" className="accordion-body"> 
          <img src={"https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/02/Mario-Party-Mobile-Header.jpeg"} className="img-fluid mb-2" 
          style={{
          height: '300px'
          }}alt="Mobile"/>
          <br></br>
          Super Mario Run 2016, iOS; 2017, Android<br></br>
          Dr. Mario World 2019, iOS; Android<br></br>
          Mario Kart Tour 2019, iOS; Android<br></br>
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default Games;
