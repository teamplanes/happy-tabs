import { MainPageData, Tags } from "./types";

const STORAGE_ITEMS_KEY = 'happy-tabs-items';

export const data: MainPageData = {
    [Tags.Environment]: [
        {
            news: {
                headline: 'Scientists discover new species of giant sea spider.',
                story:
                    'A new species of giant sea spider has been discovered in the waters off the coast of Japan. The spider, which is the size of a human hand, was found by scientists from the University of Tokyo and the National Museum of Nature and Science in Tokyo.',
            },
            backgroundImage:
                'https://hips.hearstapps.com/digitalspyuk.cdnds.net/13/12/odd_giant_crab.jpg',
            factOrTip: {
                title: 'Top tip: Use reusable bags',
                text: 'Plastic bags are a major source of pollution. Use reusable bags instead.',

            },
            helpfulSite: {
                link: 'https://www.earthday.org/',
                title: 'You might also like...',
                text: 'Earth Day',
            },
        },
        {
            news: {
                headline: "France is giving €4,000 to people who trade in their car for an e-bike",
                story:
                    "France is giving €4,000 to people who trade in their car for an e-bike. The government is hoping to encourage people to switch to greener forms of transport as part of its efforts to reduce carbon emissions.",
            },
            backgroundImage:
                'https://www.electrive.com/wp-content/uploads/2020/11/serial-1-rush-e-bike-pedelec-2020-01-min.png',
            factOrTip: {
                title: 'Top tip: Use public transport',
                text: 'Using public transport is a great way to reduce your carbon footprint. It also saves you money.',
            },
            helpfulSite: {
                link: 'https://www.earthday.org/',
                title: 'You might also like...',
                text: 'Earth Day',
            },

        },
        {
            news: {
                headline: 'Pink dolphins repopulate Hong Kong waters',
                story:
                    'The coronavirus pandemic has had a major impact on cruise and ferry industries worldwide. In Hong Kong, high-speed ferries were temporarily shut down since the start of the pandemic. Shortly after the waters settled in lockdown, large populations of dolphins returned to Hong Kong waters due to the quieter environment.',
            },
            backgroundImage:
                'https://blog.padi.com/wp-content/uploads/2017/02/shutterstock_164233874.jpg',
            factOrTip: {
                title: 'Top tip: Reduce, reuse, and recycle',
                text: 'Cut down on what you throw away. Follow the three Rs to conserve natural resources and landfill space.',
            },
            helpfulSite: {
                link: 'https://www.websitecarbon.com/',
                title: 'You might also like...',
                text: 'Website Carbon Calculator',
            },
        },
        {
            news: {
                headline: 'Oldest Animal in The World Celebrates 190th Birthday',
                story:
                    'Jonathan, a tortoise living in St Helena, has just celebrated another trip around the sun, as he turned 190 years young on December 4th.',
            },
            backgroundImage:
                'https://thegoodnewshub.com/cdn-cgi/image/width=732,height=548,fit=crop,quality=80,format=auto,onerror=redirect,metadata=none/wp-content/uploads/2022/12/Jonathan_and_another_tortoise_St_Helena.jpg',
            factOrTip: {
                title: 'Reduce Your Home Energy Carbon Footprint',
                text: 'Turn off lights you’re not using and when you leave the room. Replace incandescent light bulbs with compact flourescent or LED ones.',
            },
            helpfulSite: {
                link: 'https://greensoftware.foundation/projects/',
                title: 'You might also like...',
                text: 'The Green Software Foundation',
            },
        },
        {
            news: {
                headline: 'First CO2 battery storage facility opens in Italy',
                story:
                    'Clean energy start-up Energy Dome has developed a large battery which uses CO2 instead of lithium to create and store electricity. Not only does this provide a solution for putting captured emissions to good use, the batteries are also cheaper to produce than standard batteries.',
            },
            backgroundImage:
                'https://energydome.com/wp-content/uploads/2022/06/Energy-Dome-CO2-Battery-scaled.jpg',
            factOrTip: {
                title: 'Top tip: Throw away less food',
                text: `When you throw food away, you're also wasting the resources and energy that were used to grow, produce, package, and transport it. And when food rots in a landfill, it produces methane. So use what you buy and compost any leftovers.`,
            },
            helpfulSite: {
                link: 'https://climateaction.tech/',
                title: 'You might also like...',
                text: 'Climate Action Tech',
            },
        },
    ],
    [Tags.ScienceTechnology]: [
        {
            news: {
                headline: 'Computer chip made using mushroom skin could be easily recycled',
                story:
                    'A new type of computer chip has been created using mushroom skin. The chip is made from cellulose, which is a material that is found in the cell walls of plants and fungi. The chip is also biodegradable, which means that it can be easily recycled.',
            },
            backgroundImage:
                'https://images.newscientist.com/wp-content/uploads/2022/11/11161132/SEI_133177235.jpg',
            factOrTip: {
                title: 'Top tip: Use reusable bags',
                text: 'Plastic bags are a major source of pollution. Use reusable bags instead.',
            },
            helpfulSite: {
                link: 'https://www.earthday.org/',
                title: 'You might also like...',
                text: 'Earth Day',
            },
        },
        {
            news: {
                headline: 'Scientists Create Anti-Bacterial Food Packaging Inspired By Insect Wings',
                story:
                    'Scientists have created a new type of anti-bacterial food packaging that is inspired by the wings of insects. The new packaging is made from a thin layer of graphene oxide, which is a material that is 200 times thinner than a human hair.',
            },
            backgroundImage:
                'https://res.cloudinary.com/dysirhng8/image/upload/v1671205105/happy%20tabs/sensei-minimal-JvZYXvzlISQ-unsplash_nmunrc.jpg',
            factOrTip: {
                title: 'Top tip: Use reusable bags',
                text: 'Plastic bags are a major source of pollution. Use reusable bags instead.',
            },
            helpfulSite: {
                link: 'https://www.earthday.org/',
                title: 'You might also like...',
                text: 'Earth Day',
            },

        },
        {
            news: {
                headline: 'Cancer vaccine reduces risk of recurrence or death by 44%',
                story:
                    'Moderna’s new mRNA cancer vaccine significantly reduced skin cancer patients’ risk of recurrence or death compared to a standard treatment alone, according to the newly announced topline results of a phase 2 trial. “mRNA has been transformative for COVID-19, and now, for the first time ever, we have demonstrated the potential for mRNA to have an impact on outcomes in a randomized clinical trial in melanoma,” said Moderna CEO Stéphane Bancel.',
            },
            backgroundImage:
                'https://res.cloudinary.com/dysirhng8/image/upload/v1671130036/happy%20tabs/julia-koblitz-RlOAwXt2fEA-unsplash_ebmlfw.jpg',
            factOrTip: {
                title: 'Did you know?',
                text: 'The large Hadron Collider at CERN can reach unbelievably hot temperatures, more than 100.000 times the temperature measured at the center of the Sun.',
            },
            helpfulSite: {
                link: 'https://www.newscientist.com/',
                title: 'You might also like...',
                text: 'The New Scientist',
            },
        },
        {
            news: {
                headline: 'Breakthrough in nuclear fusion energy announced',
                story:
                    'A major breakthrough has been announced in the race to recreate nuclear fusion. Physicists have pursued the technology for decades as it promises a potential source of near-limitless clean energy. On Tuesday researchers confirmed they have overcome a major barrier - producing more energy from a fusion experiment than was put in.',
            },
            backgroundImage:
                'https://e3.365dm.com/22/12/2048x1152/skynews-nuclear-fusion-nuclear_5995546.png?20221213155040',
            factOrTip: {
                title: 'Did you know?',
                text: 'The first nuclear reactor was built in 1942 in Chicago, Illinois, USA. It was used to produce plutonium for the Manhattan Project.',
            },
            helpfulSite: {
                link: 'https://www.seti.org/?gclid=Cj0KCQiAqOucBhDrARIsAPCQL1aQg2B3K2sXC23PM3HBQdGkcc_I8w_cQo3kjiHRlg-FcZ-sYxpCXZ0aApdWEALw_wcB',
                title: 'You might also like...',
                text: 'The SETI Institute',
            },
        },
        {
            news: {
                headline:
                    'NASA’s Webb Unveils Young Stars in Early Stages of Formation',
                story:
                    'Scientists taking a “deep dive” into one of Webb’s iconic first images have discovered dozens of energetic jets and outflows from young stars previously hidden by dust clouds. The discovery marks the beginning of a new era of investigating how stars like our Sun form, and how the radiation from nearby massive stars might affect the development of planets.',
            },
            backgroundImage:
                'https://www.nasa.gov/sites/default/files/thumbnails/image/stsci-01gkmk9dyd955y1rgw4jq8a4c6.png',
            factOrTip: {
                title: 'Did you know?',
                text: 'The first computer system able to communicate from the surface of another planet, was The Soviet union in 1972 on Venus. It measured the temperature of the atmosphere on Venus. Venera 8 gathered atmospheric and surface data for 50 minutes after landing. It shortly disintegrated.',
            },
            helpfulSite: {
                link: 'https://www.nasa.gov/mission_pages/webb/main/index.html',
                title: 'You might also like...',
                text: 'NASA',
            },
        },
    ],
    [Tags.Human]: [
        {
            news: {
                headline: 'Scotland first in world to make period products free',
                story:
                    'Scotland has become the first country in the world to make period products free for all. There is now a legal duty on local authorities to provide free items such as tampons and sanitary pads to "anyone who needs them".',
            },
            backgroundImage:
                'https://res.cloudinary.com/dysirhng8/image/upload/v1671133477/happy%20tabs/natracare-MvFWS7v7noc-unsplash_ctednv.jpg',
            factOrTip: {
                title: 'Did you know?',
                text: `The Mosuo women are a matriarchal society in China.`,
            },
            helpfulSite: {
                link: 'https://refuge.org.uk/',
                title: 'You might also like...',
                text: 'Refuge',
            },
        },
        {
            news: {
                headline:
                    'Aboriginal flag to permanently fly on the Sydney Harbour Bridge',
                story:
                    'The Aboriginal flag has been flying next to the Australian flag all this week as part of National Aborigines and Islanders Day Observance Committee (NAIDOC) week celebrations. However this morning the New South Wales (NSW) government made the announcement that the Aboriginal flag will permanently replace the NSW flag on the bridge.',
            },
            backgroundImage:
                'https://upload.wikimedia.org/wikipedia/commons/3/3f/Australian_Aboriginal_Flag.svg',
            factOrTip: {
                title: 'Did you know',
                text: 'The Aboriginal flag represents the land, sea and sky.',
            },
            helpfulSite: {
                link: 'https://www.goodnewsnetwork.org/tag/humanity/',
                title: 'You might also like...',
                text: 'Good News Network',
            },
        },
        {
            news: {
                headline: 'The UK changed its tune on childcare',
                story:
                    'In a move welcomed by many parents, the UK government has agreed that childcare is a critical national infrastructure, like schools, hospitals and public transport.',
            },
            backgroundImage:
                'https://res.cloudinary.com/dysirhng8/image/upload/v1671133186/happy%20tabs/markus-spiske-qodjMu0byZ8-unsplash_k0jqwn.jpg',
            factOrTip: {
                title: 'Did you know?',
                text: 'The UN state that children have a human right to play.',
            },
            helpfulSite: {
                link: 'https://www.un.org/en/our-work/protect-human-rights',
                title: 'You might also like...',
                text: 'UN Human Rights Programme',
            },
        },
        {
            news: {
                headline: 'The first Human heart transplant!',
                story:
                    'On December 3, 1967, the first human heart transplant was performed by Dr. Christiaan Barnard at Groote Schuur Hospital in Cape Town, South Africa. The patient, Louis Washkansky, was a 53-year-old',
            },
            backgroundImage:
                'http://www.news.uct.ac.za/images/userfiles/images/news/bite/2017/2017-11-29_Heart50.jpg',
            factOrTip: {
                title: 'Did you know?',
                text: "I am having the most fun ever! I'm having a ball!",
            },
            helpfulSite: {
                link: 'https://www.un.org/en/our-work/protect-human-rights',
                title: 'You might also like...',
                text: 'UN Human Rights Programme',
            },
        },

    ],
};


export { STORAGE_ITEMS_KEY }