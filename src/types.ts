export enum Tags {
    ScienceTechnology = 'scienceTechnology',
    Human = 'human',
    Environment = 'environment',
}

type MainPageData = {
    [key in Tags]: {

        news: {
            headline: string;
            story: string;
            link?: string;
        };
        backgroundImage: string;
        factOrTip: {
            title: string;
            text: string;
        };
        helpfulSite: {
            link: string;
            title: string;
            text: string;
        };
    }[];

};

export const data: MainPageData = {
    [Tags.ScienceTechnology]:
        [
            {
                news: {
                    headline: '1 Pink dolphins repopulate Hong Kong waters',
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
                    headline: '2 Pink dolphins repopulate Hong Kong waters',
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
                    headline: '3 Pink dolphins repopulate Hong Kong waters',
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
                    headline: '4 Pink dolphins repopulate Hong Kong waters',
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
            }
        ],
    [Tags.Environment]:
        [
            {
                news: {
                    headline: '5 Pink dolphins repopulate Hong Kong waters',
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
                    headline: '6 Pink dolphins repopulate Hong Kong waters',
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
                    headline: '7 Pink dolphins repopulate Hong Kong waters',
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
        ],
    [Tags.Human]:
        [
            {
                news: {
                    headline: '8 Pink dolphins repopulate Hong Kong waters',
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
                    headline: '9 Pink dolphins repopulate Hong Kong waters',
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
                    headline: '10 Pink dolphins repopulate Hong Kong waters',
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
        ],
}
/*
TODO
So if no inputs exist, show dropdown
also render drop down on the main window
might need to add a larger prop to the component

THEN
if not exist show

if does exist, get choices and randomly get info and save seen to local storage

add a if seen recursion thing

add a loading state

BONUS
try to fix image thing, tiling

*/