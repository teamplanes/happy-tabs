export enum Tags {
    ScienceTechnology = 'scienceTechnology',
    Human = 'human',
    Environment = 'environment',
}

export type MainPageData = {
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


