
import React, { Component } from "react";
import NewItem from "./NewItem";

export class News extends Component {
  articles = [
    {
      source: {
        id: null,
        name: "New York Times",
      },
      author: "Rebecca Robbins, Carl Zimmer",
      title:
        "Covid-19 Live Updates: Vaccine Mandates and Omicron News - The New York Times",
      description:
        "A judge blocked a vaccine mandate for U.S. health workers. The new Omicron variant was already in Europe a week before the W.H.O. called it a variant of concern.",
      url: "https://www.nytimes.com/live/2021/11/30/world/omicron-variant-covid",
      urlToImage:
        "https://static01.nyt.com/images/2021/11/30/world/30virus-briefing-netherlands-variant/merlin_198539178_dec0325e-38e8-4e2b-be85-242b397b15ff-facebookJumbo.jpg",
      publishedAt: "2021-12-01T00:28:00Z",
      content:
        "A federal advisory committee on Tuesday voted to recommend that the government for the first time authorize the use of an antiviral pill to combat the worst effects of Covid-19.\r\nThe advisory committ… [+46569 chars]",
    },
    {
      source: {
        id: null,
        name: "ESPN",
      },
      author: "Mark Schlabach",
      title:
        "Michigan mauls its way to College Football Playoff top four, joining Georgia, Alabama and Cincinnati - ESPN",
      description:
        "After defeating Ohio State, and with the Big Ten title game up next, Michigan found itself inside the top four of the College Football Playoff rankings on Tuesday night, joining Georgia, Alabama and Cincinnati.",
      url: "https://www.espn.com/college-football/story/_/id/32756614/michigan-mauls-way-college-football-playoff-top-four-joining-georgia-alabama-cincinnati",
      urlToImage:
        "https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2021%2F1130%2Fr944809_1296x729_16%2D9.jpg",
      publishedAt: "2021-12-01T00:19:18Z",
      content:
        "Michigan's first victory over rival Ohio State in 10 years has given the Wolverines a clear path to their first appearance in the College Football Playoff.\r\nAfter upsetting the Buckeyes 42-27 at the … [+3758 chars]",
    },
    {
      source: {
        id: null,
        name: "New York Times",
      },
      author: "Azi Paybarah, Reed Abelson",
      title:
        "Federal Judge Blocks Vaccine Mandate for Health Workers - The New York Times",
      description:
        "The ruling is a setback for the administration’s effort to require vaccination for hospital and nursing home workers, which had been set to start next week.",
      url: "https://www.nytimes.com/2021/11/30/world/vaccine-mandate-health-workers-blocked.html",
      urlToImage:
        "https://static01.nyt.com/images/2021/11/30/multimedia/30-virusbrief-antivax/30-virusbrief-antivax-facebookJumbo.jpg",
      publishedAt: "2021-12-01T00:09:29Z",
      content:
        "A federal judge issued a preliminary injunction on Tuesday to halt the start of President Bidens national vaccine mandate for health care workers, which had been set to begin next week. \r\nThe injunct… [+914 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Oliver Darcy and Brian Stelter, CNN Business",
      title: "CNN suspends Chris Cuomo indefinitely - CNN",
      description:
        'CNN is suspending prime time anchor Chris Cuomo "indefinitely, pending further evaluation," after new documents revealed the cozy and improper nature of his relationship with aides to his brother, former New York Gov. Andrew Cuomo.',
      url: "https://www.cnn.com/2021/11/30/media/chris-cuomo-suspended/index.html",
      urlToImage:
        "https://cdn.cnn.com/cnnnext/dam/assets/211130182553-chris-cuomo-2020-super-tease.jpg",
      publishedAt: "2021-11-30T23:56:00Z",
      content:
        'New York (CNN Business)CNN is suspending prime time anchor Chris Cuomo "indefinitely, pending further evaluation," after new documents revealed the cozy and improper nature of his relationship with a… [+5668 chars]',
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "Don Babwin",
      title:
        "Detective: Brothers detailed how Jussie Smollett staged hoax - Associated Press",
      description:
        "CHICAGO (AP) — Two brothers arrested for an alleged attack on Jussie Smollett told Chicago police how the ex-“Empire” actor orchestrated the hoax, telling them via text message to meet him “on the low,” paying for supplies and holding a “dry run” in downtown …",
      url: "https://apnews.com/article/smollett-trial-11-30-live-updates-e0fa5da624c4d3ef00c68a893b024bb4",
      urlToImage:
        "https://storage.googleapis.com/afs-prod/media/e1dc4c6752ee43d09dd0ef7878b30513/3000.jpeg",
      publishedAt: "2021-11-30T23:51:15Z",
      content:
        "CHICAGO (AP) Two brothers arrested for an alleged attack on Jussie Smollett told Chicago police how the ex-Empire actor orchestrated the hoax, telling them via text message to meet him on the low, pa… [+5115 chars]",
    },
    {
      source: {
        id: "the-verge",
        name: "The Verge",
      },
      author: "Umar Shakir",
      title:
        "Microsoft is selling ugly Windows sweaters again, and this time, it’s Minesweeper - The Verge",
      description:
        "Microsoft is dedicating this year’s ugly sweater design to Minesweeper. The $74.99 sweater is available now.",
      url: "https://www.theverge.com/tldr/2021/11/30/22810369/microsoft-ugly-windows-sweater-party-minesweeper",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/iUVgACoXiQrlKFMvpDJ4XCUmtJI=/0x477:2000x1524/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23053393/Downloads_TeamsBackgrounds.jpg",
      publishedAt: "2021-11-30T23:22:53Z",
      content:
        "Filed under:\r\n$74.99 gets you flagging rights this holiday\r\nImage: Microsoft\r\nMicrosoft has launched a new Windows software-themed ugly sweater on its Xbox Gear Shop dedicated to the infamous Windows… [+1169 chars]",
    },
    {
      source: {
        id: null,
        name: "NPR",
      },
      author: "",
      title:
        "Lovely Bones Author Alice Sebold Apologizes to Anthony Broadwater - NPR",
      description:
        '"I am sorry most of all for the fact that the life you could have led was unjustly robbed from you," the author wrote in a statement. A judge exonerated Anthony Broadwater of the crime last week.',
      url: "https://www.npr.org/2021/11/30/1060202062/alice-sebold-apologizes-to-the-man-exonerated-for-the-rape-that-her-memoir-focus",
      urlToImage:
        "https://media.npr.org/assets/img/2021/11/30/ap_070603010870_wide-bf132b1835089ea03ed24695234de2e56126c73a.jpg?s=1400",
      publishedAt: "2021-11-30T23:12:51Z",
      content:
        'The Lovely Bones author Alice Sebold said in her statement, "I will continue to struggle with the role that I unwittingly played within a system that sent an innocent man to jail."\r\nTINA FINEBERG/ASS… [+2486 chars]',
    },
    {
      source: {
        id: "the-verge",
        name: "The Verge",
      },
      author: "Chaim Gartenberg",
      title:
        "Qualcomm’s new Snapdragon 8 Gen 1 chip is here to power the Android flagships of 2022 - The Verge",
      description:
        "Qualcomm has revealed its new flagship Snapdragon 8 Gen 1 processor, the successor to the Snapdragon 888 and the chipset that will power the Android flagships of 2022 with performance, AI, camera, and security improvements.",
      url: "https://www.theverge.com/2021/11/30/22809687/qualcomm-snapdragon-8-gen-1-chip-smartphone-processor-specs-details",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/gbKL4XfmyJXENcN-mK8HPlDCub0=/0x75:3840x2085/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23053632/Snapdragon_8_Gen_1_Mobile_Platform__Key_Visual__Angle_2.jpg",
      publishedAt: "2021-11-30T23:00:00Z",
      content:
        "Faster performance, better cameras, improved AI, and more\r\nQualcomm has a new flagship smartphone processor: the Snapdragon 8 Gen 1, announced at the companys annual Snapdragon Tech Summit, giving an… [+6777 chars]",
    },
    {
      source: {
        id: "politico",
        name: "Politico",
      },
      author: "Oriana Pawlyk",
      title: "U.S. Covid travel restrictions in a stasis — for now - Politico",
      description:
        "There have been indications that the variant may have originated in Europe, raising questions about whether the U.S. might again shut down flights from Europe.",
      url: "https://www.politico.com/news/2021/11/30/covid-travel-restrictions-omicron-523551",
      urlToImage:
        "https://static.politico.com/cf/72/b3ec8b8044d4b70094a91c08ec14/211130-covid-travel-ap-773.jpg",
      publishedAt: "2021-11-30T22:49:30Z",
      content:
        "Background: As of Monday, the Biden administration banned travel from South Africa, which first reported the new variant, as well as from nearby Botswana, Namibia, Zimbabwe, Lesotho, Eswatini, Malawi… [+2012 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Tierney Sneed and Katelyn Polantz, CNN",
      title:
        "Takeaways from the appeals court hearing in the January 6 Trump documents case - CNN",
      description:
        "An appeals court hearing Tuesday on former President Donald Trump's claim to keep January 6 documents from his presidency private showed that Trump faces an uphill battle to keep the documents out of the hands of House investigators.",
      url: "https://www.cnn.com/2021/11/30/politics/trump-january-6-docs-hearing-takeaways/index.html",
      urlToImage:
        "https://cdn.cnn.com/cnnnext/dam/assets/211102222735-cnne-trump-super-tease.jpg",
      publishedAt: "2021-11-30T22:17:00Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "Gizmodo.com",
      },
      author: "Phillip Tracy",
      title:
        "Microsoft Keeps Making Its Edge Browser Worse for Some Reason - Gizmodo",
      description:
        "Edge users are furious after Microsoft integrated a financing app into the browser.",
      url: "https://gizmodo.com/microsoft-keeps-making-its-edge-browser-worse-for-some-1848139003",
      urlToImage:
        "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/880b830c105a6dc7b2c532bcac90f71b.jpg",
      publishedAt: "2021-11-30T22:15:00Z",
      content:
        "Microsoft cant help but undermine itself, it seems. After launching the new Edge browser last year to widespread praise, Microsoft has seemingly done everything possible to ruin it, including imposin… [+2988 chars]",
    },
    {
      source: {
        id: null,
        name: "The Guardian",
      },
      author:
        "Vivian Ho, Maanvi Singh, Kari Paul, Gloria Oladipo, Martin Pengelly, Joanna Walters",
      title:
        "Trump chief of staff Meadows to cooperate with Capitol attack panel – live - The Guardian",
      description:
        "Mark Meadows providing records and agreeing to initial interview – get the latest politics news",
      url: "https://www.theguardian.com/us-news/live/2021/nov/30/us-congress-government-shutdown-washington-us-politics-live",
      urlToImage:
        "https://i.guim.co.uk/img/media/eacd636728f75de53c610db5d5b9b4a34a5b8b27/0_74_5568_3341/master/5568.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=ca603e01e60d954eade726ae2867c428",
      publishedAt: "2021-11-30T22:10:30Z",
      content:
        "A transcript of an interview with the younger Cuomo showed that at one point the TV host texted Melissa DeRosa, his brothers top aide, to say I have a lead on the wedding girl. It was a reference to … [+681 chars]",
    },
    {
      source: {
        id: null,
        name: "New York Times",
      },
      author: "Matt Phillips, Eshe Nelson",
      title: "Stocks Fall After Powell's Taper Comments - The New York Times",
      description:
        "The Federal Reserve chair, Jerome Powell, said persistent inflation might require a more aggressive approach by the central bank. Wall Street was already uneasy.",
      url: "https://www.nytimes.com/2021/11/30/business/stock-markets-omicron.html",
      urlToImage:
        "https://static01.nyt.com/newsgraphics/images/icons/defaultPromoCrop.png",
      publishedAt: "2021-11-30T22:00:42Z",
      content:
        "Stock prices were falling around the world before Mr. Powells testimony as investors struggled to understand the danger posed by the Omicron variant, which began roiling markets last week. The Stoxx … [+2616 chars]",
    },
    {
      source: {
        id: null,
        name: "Sports Illustrated",
      },
      author: "Andrew Gastelum",
      title:
        "Cincinnati coach Luke Fickell asked to address Notre Dame opening - CalBearsMaven",
      description:
        "The Bearcats coach has been linked to the Notre Dame job after Brian Kelly left for LSU.",
      url: "https://www.si.com/college/2021/11/30/cincinnati-coach-luke-fickell-notre-dame-opening-brian-kelly",
      urlToImage:
        "https://www.si.com/.image/t_share/MTg1NjU1MjY3NTMzMjY4NjA4/luke-fickell.jpg",
      publishedAt: "2021-11-30T21:53:21Z",
      content:
        "Cincinnati coach Luke Fickell said he is not paying much attention to rumors linking him with the vacant Notre Dame job ahead of one of the biggest games in his program's history.\r\nOn Saturday, No. 4… [+1698 chars]",
    },
    {
      source: {
        id: null,
        name: "Gizmodo.com",
      },
      author: "Tom McKay",
      title: "Tiny 'Living' Robots Figured Out How to Reproduce - Gizmodo",
      description:
        "Xenobots can reproduce via kinematic replication, which has never been observed before in organisms.",
      url: "https://gizmodo.com/tiny-living-robots-figured-out-how-to-reproduce-1848139260",
      urlToImage:
        "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/710a40fb56fece15c23d151d34ff8c02.png",
      publishedAt: "2021-11-30T21:48:00Z",
      content:
        "Researchers who developed what they say are the worlds first living robots now report they can reproduce in an unprecedented way, according to a peer-reviewed study published in the Proceedings of th… [+7621 chars]",
    },
    {
      source: {
        id: null,
        name: "NPR",
      },
      author: "Alana Wise",
      title: "Controversial Dr. Mehmet Oz joins Pennsylvania Senate race - NPR",
      description:
        "The celebrity surgeon, who has promoted questionable health advice to national television audiences, has thrown his hat into the ring to represent Pennsylvania in the U.S. Senate.",
      url: "https://www.npr.org/2021/11/30/1060185002/tvs-dr-oz-enters-pennsylvanias-crucial-senate-race-on-the-gop-side",
      urlToImage:
        "https://media.npr.org/assets/img/2021/11/30/ap_21330678043719_wide-7fdaf9c9efde72d06548e51effeaced7b129015d.jpg?s=1400",
      publishedAt: "2021-11-30T21:44:03Z",
      content:
        "Dr. Mehmet Oz, seen here in a December 2019 file photo, joins the Republican field of possible candidates aiming to capture Pennsylvania's open U.S. Senate seat in next year's election.\r\nEvan Agostin… [+2334 chars]",
    },
    {
      source: {
        id: null,
        name: "New York Post",
      },
      author: "Mark Moore",
      title:
        "Putin lays down 'red line,' threatens retaliation if missiles placed in Ukraine - New York Post",
      description:
        "Vladimir Putin warned NATO and the US Tuesday that any deployment of troops or missiles in Ukraine would cross a “red line” and prompt a military response.",
      url: "https://nypost.com/2021/11/30/putin-threatens-retaliation-if-missiles-placed-in-ukraine/",
      urlToImage:
        "https://nypost.com/wp-content/uploads/sites/2/2021/11/AFP_9TN4DG.jpg?quality=90&strip=all&w=1024",
      publishedAt: "2021-11-30T21:23:00Z",
      content:
        "Russian President Vladimir Putin warned NATO and the US Tuesday that any deployment of troops or missiles in Ukraine would cross a “red line” and prompt a military response.\r\nThe emergence of such th… [+2753 chars]",
    },
    {
      source: {
        id: "nfl-news",
        name: "NFL News",
      },
      author: null,
      title:
        "NFL Offensive Player Rankings, Week 13: Teams that should be in the market for Jimmy Garoppolo - NFL.com",
      description:
        "Which teams should be in the market for 49ers QB Jimmy Garoppolo in the coming offseason? David Carr lists three fits. Plus, an updated ranking of the top 15 offensive players in the NFL today.",
      url: "https://www.nfl.com/news/nfl-offensive-player-rankings-week-13-teams-that-should-be-in-the-market-for-jim",
      urlToImage:
        "https://static.www.nfl.com/image/private/t_editorial_landscape_12_desktop/league/jpowr0oaxka7v3khavfj",
      publishedAt: "2021-11-30T21:06:00Z",
      content:
        "Will Jimmy Garoppolo be on the move in the offseason? It certainly appears that way, based on NFL Network Insider Ian Rapoport's reporting this past Sunday.\r\n\"Absent a Super Bowl run, which at this p… [+11619 chars]",
    },
    {
      source: {
        id: "usa-today",
        name: "USA Today",
      },
      author: "Taylor Avery, USA TODAY",
      title:
        "200,000-year-old remains of close relative to modern humans found in Siberian cave - USA TODAY",
      description:
        "Scientists have found 200,000 year old remains of a close relative to the modern human known as the Denisovans.",
      url: "https://www.usatoday.com/story/news/world/2021/11/30/200-000-year-old-remains-modern-human-relative-found-siberia/8804957002/",
      urlToImage:
        "https://www.gannett-cdn.com/-mm-/5d957094a100587b6d4a008d7d0008e89008a352/c=0-746-3332-2532/local/-/media/USATODAY/test/2013/12/18//1387387103000-Denisova-excavation.jpg?auto=webp&format=pjpg&width=1200",
      publishedAt: "2021-11-30T21:05:48Z",
      content:
        'Scientists have discovered the oldest remains of a close relative to the modern human.\r\nDated at 200,000 years old, the bones are the oldest known remains of the Denisovans, "a sister population to t… [+1763 chars]',
    },
    {
      source: {
        id: null,
        name: "CNBC",
      },
      author: "Nicolas Vega",
      title:
        "Here's how much Twitter's new CEO Parag Agrawal will be paid - CNBC",
      description:
        "Parag Agrawal took over from Twitter CEO and founder Jack Dorsey on Monday.",
      url: "https://www.cnbc.com/2021/11/30/how-much-new-twitter-ceo-parag-agrawal-will-be-paid.html",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/106982380-1638297659893-gettyimages-187232512-77236713.jpeg?v=1638297764",
      publishedAt: "2021-11-30T21:04:21Z",
      content:
        "Twitter's new CEO will receive a major payday in addition to his promotion.\r\nParag Agrawal, who served as the social network's chief technology officer until Jack Dorsey announced his surprise depart… [+2038 chars]",
    },
  ];
  constructor() {
    super();
    console.log("Hello i am a contructors from News Component");
    this.state = {
      articles:this.articles,
      loading:false
    };
  }
  render() {
    return (
      <div className="container my-3">
        <h2>NewsMonkey - Top Headlines</h2>
        <div className="row">
          <div className="col-md-4">
            <NewItem
              title="myTitle"
              description="mydisc "
              imageUrl="https://static01.nyt.com/images/2021/11/30/world/30virus-briefing-netherlands-variant/merlin_198539178_dec0325e-38e8-4e2b-be85-242b397b15ff-facebookJumbo.jpg"
           newsUrl ="TODO"
           />
          </div>
          <div className="col-md-4">
            <NewItem title="myTitle" description="mydisc" />
          </div>
          <div className="col-md-4">
            <NewItem title="myTitle" description="mydisc" />
          </div>
        </div>
      </div>
    );
  }
}

export default News;
