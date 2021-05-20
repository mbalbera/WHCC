import React, { Component } from "react";
import Article from "./Article";

export default class News extends Component {
    state = {
            news: [
                    {
                        title:'Smith embracing challenge of critical season',
                        link:'http://mlb.mlb.com/news/article/nym/dominic-smith-ready-to-prove-himself-to-mets?ymd=20190219&content_id=304149336&vkey=news_nym',
                        pubDate:'Tue, 19 Feb 2019 18:48:29 EDT',
                        guid:'http://mlb.mlb.com/news/article/nym/dominic-smith-ready-to-prove-himself-to-mets?ymd=20190219&content_id=304149336&vkey=news_nym',
                        description:`The flocks follow Peter Alonso everywhere he goes, snapping pictures, pining for sound bites, wondering whether he will make the team. Far more anonymous in the early days of camp has been Dominic Smith, spending the past two mornings swinging on a quieter back field.`
            
                           
                    },
                    {
                        title:`Here are the Mets' 2019 Top 30 Prospects`,
                        link:'http://mlb.mlb.com/news/article/nym/mets-2019-top-30-prospects-list?ymd=20190219&content_id=304138890&vkey=news_nym',
                        pubDate:'Tue, 19 Feb 2019 10:36:46 EDT',
                        guid:'http://mlb.mlb.com/news/article/nym/mets-2019-top-30-prospects-list?ymd=20190219&content_id=304138890&vkey=news_nym',
                        description:`While there are 24 homegrown players on the new Mets Top 30 list, it's only fair to wonder how different the list could look a year from now as the front office continues to address its short-term needs.`
            
                    },
                    {
                        title:`Versatility can only help Hech's roster chances`,
                        link:'http://mlb.mlb.com/news/article/nym/adeiny-hechavarria-gets-opportunity-with-mets?ymd=20190219&content_id=304149636&vkey=news_nym',
                        pubDate:'Tue, 19 Feb 2019 15:18:01 EDT',
                        guid:'http://mlb.mlb.com/news/article/nym/adeiny-hechavarria-gets-opportunity-with-mets?ymd=20190219&content_id=304149636&vkey=news_nym',
                        description:`About a week before Adeiny Hechavarria signed with the Mets, he met with general manager Brodie Van Wagenen, assistant GM Allard Baird and manager Mickey Callaway near his Miami home. Over dinner, the four talked about an opportunity in Mets camp, where the team had accumulated scant shortstop depth behind Amed Rosario.`
            
                    },
                    {
                        title:'No more doubts: Wheeler confident in ability',
                        link:'http://mlb.mlb.com/news/article/nym/zack-wheeler-shows-confidence-entering-2019?ymd=20190218&content_id=304128274&vkey=news_nym',
                        pubDate:'Mon, 18 Feb 2019 17:39:25 EDT',
                        guid:'http://mlb.mlb.com/news/article/nym/zack-wheeler-shows-confidence-entering-2019?ymd=20190218&content_id=304128274&vkey=news_nym',
                        description:`Over his last 11 starts of the 2018 season, Zack Wheeler went 9-1 with a 1.68 ERA, challenging Jacob deGrom as the game's best pitcher over that stretch. He not only proved that he could be an effective big leaguer, but shattered the doubts.`
            
                           
                    },
                    {
                        title:'Herrera happy to be back with the Mets',
                        link:'http://mlb.mlb.com/news/article/nym/dilson-herrera-excited-to-return-to-mets?ymd=20190218&content_id=304123752&vkey=news_nym',
                        pubDate:'Mon, 18 Feb 2019 16:48:00 EDT',
                        guid:'http://mlb.mlb.com/news/article/nym/dilson-herrera-excited-to-return-to-mets?ymd=20190218&content_id=304123752&vkey=news_nym',
                        description:`After two and a half years in the Reds organization, Dilson Herrera became a free agent this winter and signed back with the Mets, where he offers the club depth at four different positions. A natural second baseman, Herrera began playing first, third and left field last year in an effort to increase his value.`
            
                           
                    },
                    {
                        title:`The Mets Spring Training battle to watch`,
                        link:'http://mlb.mlb.com/news/article/nym/2019-mlb-spring-training-battles-to-watch?ymd=20190218&content_id=304121310&vkey=news_nym',
                        pubDate:'Mon, 18 Feb 2019 18:20:16 EDT',
                        guid:'http://mlb.mlb.com/news/article/nym/2019-mlb-spring-training-battles-to-watch?ymd=20190218&content_id=304121310&vkey=news_nym',
                        description:`The next five weeks will see lots of shuffling on Major League rosters. Here are the most intriguing positional battles on each of the 30 MLB clubs.`
                    },
                    {
                        title:`I feel like I'm 25': Cano joins Mets at camp`,
                        link:'http://mlb.mlb.com/news/article/nym/robinson-cano-feeling-good-at-spring-training?ymd=20190217&content_id=304068070&vkey=news_nym',
                        pubDate:'Sun, 17 Feb 2019 17:18:47 EDT',
                        description:`The list of position players productive at age 36 is small. At 37, even smaller. Beyond that, infinitesimal. So it was worth noting that shortly after Robinson Cano showed up to the Mets' complex in Port St. Lucie for the first time, he stated: "I feel like I'm 25."`,
                    },
                    {
                        title:'Mets Top 30 prospects list',
                        link:'http://m.mlb.com/prospects/2019?list=nym',
                        pubDate:'Thu, 1 Mar 2018 17:00:51 EDT',
                        guid:'http://m.mlb.com/prospects/2019?list=nym',
                        description:`Who do the Mets have in the pipeline? Get scouting reports, video, stats, projected ETAs and more for New York's Top 30 Prospects on MLBPipeline.com's Prospect Watch.`
                    },
                    {
                        title:'Mets ink SS Hechavarria to Minors deal',
                        link:'http://mlb.mlb.com/news/article/nym/mets-sign-adeiny-hechavarria?ymd=20190217&content_id=304081652&vkey=news_nym',
                        pubDate:'Mon, 18 Feb 2019 14:01:07 EDT',
                        guid:'http://mlb.mlb.com/news/article/nym/mets-sign-adeiny-hechavarria?ymd=20190217&content_id=304081652&vkey=news_nym',
                        description:`Continuing to stock their camp with veteran infielders, the Mets on Monday signed shortstop Adeiny Hechavarria to a Minor League deal with an invite to Major League Spring Training.`
                    },
                    {
                        title:'Dowdy hopes velo uptick yields strong 2019',
                        link:'http://mlb.mlb.com/news/article/nym/kyle-dowdy-eyes-big-year-after-velocity-rise?ymd=20190217&content_id=304079194&vkey=news_nym',
                        pubDate:'Sun, 17 Feb 2019 16:50:16 EDT',
                        guid:'http://mlb.mlb.com/news/article/nym/kyle-dowdy-eyes-big-year-after-velocity-rise?ymd=20190217&content_id=304079194&vkey=news_nym',
                        description:`Now in Port St. Lucie, Kyle Dowdy has a built-in advantage to make the Mets' crowded bullpen: If he doesn't, the team must offer him back to his old organization, the Indians, for $50,000. The Mets also have reason to keep Dowdy around: They consider him a notable part of their rotation depth, alongside Walker Lockett, Hector Santiago and a few others.`
                    },
                    {
                        title:'Reasons for optimism for each MLB club',
                        link:'http://mlb.mlb.com/news/article/nym/reason-for-optimism-for-each-mlb-team?ymd=20190216&content_id=304062300&vkey=news_nym',
                        pubDate:'Sun, 17 Feb 2019 21:02:04 EDT',
                        guid:'http://mlb.mlb.com/news/article/nym/reason-for-optimism-for-each-mlb-team?ymd=20190216&content_id=304062300&vkey=news_nym',
                        description:`On this opening week of Spring Training, all 30 Major League teams have one thing in common: optimism. Here's an optimism cheat sheet for each of them.`
                    },
                    {
                        title:`Tebow makes it clear: 'I'm all in on baseball'`,
                        link:'http://mlb.mlb.com/news/article/nym/tim-tebow-ready-to-make-mark-in-baseball?ymd=20190216&content_id=304051920&vkey=news_nym',
                        pubDate:'Sat, 16 Feb 2019 17:18:54 EDT',
                        guid:'http://mlb.mlb.com/news/article/nym/tim-tebow-ready-to-make-mark-in-baseball?ymd=20190216&content_id=304051920&vkey=news_nym',
                        description:`Those who once dismissed Tim Tebow's transition from NFL quarterback to professional baseball player are officially on notice. Tebow is an outfielder first these days, the evidence plain to see in his slimmed-down body and shortened swing.`
                    },
                    {
                        title:`Alonso looks to force Mets' hand, crack roster`,
                        link:'http://mlb.mlb.com/news/article/nym/peter-alonso-discusses-opening-day-chances?ymd=20190216&content_id=304038672&vkey=news_nym',
                        pubDate:'Sat, 16 Feb 2019 18:09:52 EDT',
                        guid:'http://mlb.mlb.com/news/article/nym/peter-alonso-discusses-opening-day-chances?ymd=20190216&content_id=304038672&vkey=news_nym',
                        description:`Fresh off a season in which he bashed 36 homers over two Minor League levels, including 19 in 67 games at Triple-A Las Vegas, Peter Alonso is arguably the Mets' best first-base option already. Unlike Atkins, general manager Brodie Van Wagenen has said he will carry Alonso on New York's Opening Day roster if he proves his mettle this spring.`
                    },
                    {
                        title:'WATCH: Tebow arrives, Alonso talks roster shot',
                        link:'http://mlb.mlb.com/news/article/nym/sights-and-sounds-from-mlb-spring-training?ymd=20190214&content_id=303937540&vkey=news_nym',
                        pubDate:'Sat, 16 Feb 2019 13:00:00 EDT',
                        guid:'http://mlb.mlb.com/news/article/nym/sights-and-sounds-from-mlb-spring-training?ymd=20190214&content_id=303937540&vkey=news_nym',
                        description:`MLB.com's beat reporters have you covered with the action from every team's training camp. Keep track of the latest highlights of Spring Training right here.`
                    },
                    {
                        title:`Cespedes confident he'll return to field in 2019`,
                        link:'http://mlb.mlb.com/news/article/nym/yoenis-cespedes-confident-hell-return-in-2019?ymd=20190215&content_id=304011134&vkey=news_nym',
                        pubDate:'Fri, 15 Feb 2019 15:31:29 EDT',
                        guid:'http://mlb.mlb.com/news/article/nym/yoenis-cespedes-confident-hell-return-in-2019?ymd=20190215&content_id=304011134&vkey=news_nym',
                        description:`Yoenis Cespedes does not know if it will be in July, or August, or September. But he does firmly believe that at some point this season, he will return to uniform with the Mets.`
            
                    },
                    {
                        title:'Mets notes: Rajai Davis, Tebow',
                        link:'http://mlb.mlb.com/news/article/nym/mets-notes-rajai-davis-tim-tebow?ymd=20190215&content_id=304018384&vkey=news_nym',
                        pubDate:'Fri, 15 Feb 2019 16:50:17 EDT',
                        guid:'http://mlb.mlb.com/news/article/nym/mets-notes-rajai-davis-tim-tebow?ymd=20190215&content_id=304018384&vkey=news_nym',
                        description:`Combined, Major Leaguers aged 37 and older not named Rajai Davis stole 16 bases last season. Davis, by himself, swiped 21, easily leading that group with an average Statcast&#8482; sprint speed of 29.3 mph. (For comparison, the fastest Met, Amed Rosario, who was 22 years old last season, averaged 29.4 mph on his sprints.)`
                    },
                    {
                        title:`deGrom: 'I want to be part of this team's future'`,
                        link:'http://mlb.mlb.com/news/article/nym/jacob-degrom-mets-discuss-extension-talks?ymd=20190214&content_id=303956582&vkey=news_nym',
                        pubDate:'Thu, 14 Feb 2019 15:47:04 EDT',
                        guid:'http://mlb.mlb.com/news/article/nym/jacob-degrom-mets-discuss-extension-talks?ymd=20190214&content_id=303956582&vkey=news_nym',
                        description:`Jacob deGrom wants a contract extension with the Mets, and they want to extend deGrom. So far, neither side has made significant movement toward that common goal.`
                    }
                    
,                    {
                        title:`Why Mesoraco's return is good for deGrom`,
                        link:'http://mlb.mlb.com/news/article/nym/devin-mesoraco-brings-familiarity-to-mets?ymd=20190214&content_id=303962610&vkey=news_nym',
                        pubDate:'Thu, 14 Feb 2019 17:03:21 EDT',
                        guid:'http://mlb.mlb.com/news/article/nym/devin-mesoraco-brings-familiarity-to-mets?ymd=20190214&content_id=303962610&vkey=news_nym',
                        description:`When asked Thursday why he's pleased to have Devin Mesoraco back with the Mets this spring, manager Mickey Callaway quipped: "Jacob deGrom."`
                    },
                    {
                        title:'Where did deGrom rank on Top 100 Right Now?',
                        link:'http://mlb.mlb.com/news/article/nym/top-100-mlb-players-for-2019?ymd=20190214&content_id=303970816&vkey=news_nym',
                        pubDate:'Thu, 14 Feb 2019 23:00:00 EDT',
                        guid:'http://mlb.mlb.com/news/article/nym/top-100-mlb-players-for-2019?ymd=20190214&content_id=303970816&vkey=news_nym',
                        description:`The 2019 MLB season feels so close now. Spring Training has begun. Players are taking the field. So it's time to rank the best of the best.`
                    },
                    {
                        title:'Prospects who should vie for a roster spot',
                        link:'http://mlb.mlb.com/news/article/nym/spring-training-prospects-vie-for-roster-spots?ymd=20190214&content_id=303944644&vkey=news_nym',
                        pubDate:'Thu, 14 Feb 2019 19:36:11 EDT',
                        guid:'http://mlb.mlb.com/news/article/nym/spring-training-prospects-vie-for-roster-spots?ymd=20190214&content_id=303944644&vkey=news_nym',
                        description:`The 30 prospects below all are getting very long looks this spring with an eye toward breaking camp with the parent club. Even if they start the year in the Minors, they all should get the chance to contribute at some point in the very near future.`
                    },
                    {
                        title:`Callaway 'looking to get better every day'`,
                        link:'http://mlb.mlb.com/news/article/nym/mickey-callaway-focused-on-improving-with-mets?ymd=20190213&content_id=303899066&vkey=news_nym',
                        pubDate:'Wed, 13 Feb 2019 16:10:00 EDT',
                        guid:'http://mlb.mlb.com/news/article/nym/mickey-callaway-focused-on-improving-with-mets?ymd=20190213&content_id=303899066&vkey=news_nym',
                        description:`Not long after his offseason introduction to Jim Riggleman, the longtime National League manager whom the Mets hired to become his bench coach, Mickey Callaway attempted explaining to Riggleman some of his more controversial stratagems from last summer. Several minutes into the breakdown, Riggleman interrupted him. "See how long it took you to explain that?" Callaway's new bench coach said. "Don't overthink it."`
                    },
                    {
                        title:'Notes: Diaz, rotation, McNeil',
                        link:'http://mlb.mlb.com/news/article/nym/edwin-diaz-excited-to-team-with-jeurys-familia?ymd=20190213&content_id=303906766&vkey=news_nym',
                        pubDate:'Wed, 13 Feb 2019 17:02:43 EDT',
                        guid:'http://mlb.mlb.com/news/article/nym/edwin-diaz-excited-to-team-with-jeurys-familia?ymd=20190213&content_id=303906766&vkey=news_nym',
                        description:`From the moment the Mets traded for Edwin Diaz in December, they made it clear that Diaz -- perhaps the best closer in baseball last season -- would be their unquestioned ninth-inning man. A few weeks later, the Mets signed their old closer, Jeurys Familia, who made it equally clear that he is just fine with the new arrangement.`
                    },
                    {
                        title:'deGrom sets deadline on extension talks',
                        link:'http://mlb.mlb.com/news/article/nym/jacob-degrom-sets-deadline-for-extension?ymd=20190212&content_id=303830436&vkey=news_nym',
                        pubDate:'Tue, 12 Feb 2019 14:21:34 EDT',
                        guid:'http://mlb.mlb.com/news/article/nym/jacob-degrom-sets-deadline-for-extension?ymd=20190212&content_id=303830436&vkey=news_nym',
                        description:`Jacob deGrom's representatives have set an Opening Day deadline to complete an extension, a source confirmed to MLB.com, giving the sides six more weeks to work something out. deGrom has let the Mets know that he won't negotiate during the season, though it's possible he and the team could reopen talks next winter.`
                    },
                    {
                        title:'Mets raised their floor more than any contender',
                        link:'http://mlb.mlb.com/news/article/nym/2019-mets-have-added-depth-and-reduced-risk?ymd=20190212&content_id=303786466&vkey=news_nym',
                        pubDate:'Tue, 12 Feb 2019 19:47:53 EDT',
                        guid:'http://mlb.mlb.com/news/article/nym/2019-mets-have-added-depth-and-reduced-risk?ymd=20190212&content_id=303786466&vkey=news_nym',
                        description:`The 2019 Mets may not have added Manny Machado or Bryce Harper -- yet -- but they may have done something just as important. They've continually imported talent to raise the floor and add depth, and that's a big deal.`
                    },
                    {
                        title:`'I think this is our year': Mets report ready to rock`,
                        link:'http://mlb.mlb.com/news/article/nym/mets-report-to-camp-after-busy-offseason?ymd=20190211&content_id=303814624&vkey=news_nym',
                        pubDate:'Tue, 12 Feb 2019 10:00:00 EDT',
                        guid:'http://mlb.mlb.com/news/article/nym/mets-report-to-camp-after-busy-offseason?ymd=20190211&content_id=303814624&vkey=news_nym',
                        description:`All told, 64 players are expected to filter into Mets camp this week and next, one of the largest gatherings the Mets have brought to First Data Field in years. Of those, 18 were not in the organization at the end of last season, including nine players on the 40-man roster. No matter your preferred calculation, the Mets have turned over about a quarter of their roster in the past three months, leaving the taste of consecutive fourth-place finishes well behind them.`
            
                    },
                    {
                        title:'Alonso among top 20 impact rookies for 2019',
                        link:'http://mlb.mlb.com/news/article/nym/prospects-who-could-make-an-impact-in-2019?ymd=20190211&content_id=303744704&vkey=news_nym',
                        pubDate:'Tue, 12 Feb 2019 14:30:40 EDT',
                        guid:'http://mlb.mlb.com/news/article/nym/prospects-who-could-make-an-impact-in-2019?ymd=20190211&content_id=303744704&vkey=news_nym',
                        description:`Here are the top players in each league who could get the opportunity to show what they can do at the highest level this year, perhaps even contending for Rookie of the Year honors`

                    },
                    {
                        title:'Uniform patch to mark 150 years of pro baseball',
                        link:'http://mlb.mlb.com/news/article/nym/mlb-patch-to-mark-150-years-of-pro-baseball?ymd=20190212&content_id=303826766&vkey=news_nym',
                        pubDate:'Tue, 12 Feb 2019 10:09:05 EDT',
                        guid:'http://mlb.mlb.com/news/article/nym/mlb-patch-to-mark-150-years-of-pro-baseball?ymd=20190212&content_id=303826766&vkey=news_nym',
                        description:`All 30 Major League teams will wear special "MLB 150" patches on their uniforms for the entire 2019 season in honor of the 150th anniversary of the 1869 Cincinnati Red Stockings, the first openly all-salaried professional baseball team.`
                    },
                    {
                        title:'30 low-key acquisitions who could pay off big',
                        link:'http://mlb.mlb.com/news/article/nym/30-mlb-acquisitions-who-could-pay-off-big?ymd=20190211&content_id=303815722&vkey=news_nym',
                        pubDate:'Tue, 12 Feb 2019 13:57:13 EDT',
                        guid:'http://mlb.mlb.com/news/article/nym/30-mlb-acquisitions-who-could-pay-off-big?ymd=20190211&content_id=303815722&vkey=news_nym',
                        description:`Fans and analysts spend the entire offseason speculating where the top free agents could go, but sometimes an under-the-radar pickup can end up making a world of difference. As positional competitions begin to heat up at Spring Training camps this month, MLB.com's beat writers were asked to identify one potentially overlooked acquisition for each of the 30 clubs. Here's who they came up with.`
            
                    },
                    {
                        title:'Report: Mets hire Endy Chavez as Minors coach',
                        link:'http://mlb.mlb.com/news/article/nym/endy-chavez-hired-by-mets-as-minors-coach?ymd=20190211&content_id=303813056&vkey=news_nym',
                        pubDate:'Mon, 11 Feb 2019 19:37:59 EDT',
                        guid:'http://mlb.mlb.com/news/article/nym/endy-chavez-hired-by-mets-as-minors-coach?ymd=20190211&content_id=303813056&vkey=news_nym',
                        description:`Former Mets outfielder Endy Chavez has rejoined the club as a Minor League coach, according to a report by Newsday. Chavez will instruct Minor Leaguers at the Mets' Spring Training camp in Port St. Lucie, Fla., and will also work with the Class A Short-Season club in Brooklyn this summer.`
                    }
            ]
    }

    async componentDidMount() {
        try {
            const response = await fetch(this.props.news,{
                headers:{
                    'Access-Control-Allow-Origin': '*'
                }
            });
            const json = await response.json();
            this.setState({ items: json.items });
        } catch (error) {
            console.log(error);
        }
    }

    

    render() {
        let articles = this.state.news.map(story=> <Article {...story}/>)
        return (
            <div style={{ }}>
                <p className='LeftTitle'>
                    News
                </p>
                <div style={{ overflowY: 'scroll', maxHeight: window.innerHeight -250}}>
                    {articles}
                </div>
            </div>
        );
    }
}