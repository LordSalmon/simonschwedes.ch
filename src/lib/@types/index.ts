export type Link = {
    name: string;
    url: string;
    icon?: string;
}

export type Skill = {
    title: string;
    url: string;
    image: {
        asset: {
            _ref: string;
        };
    };
};

export type Util = {
    title: string;
    url: string;
    description?: string;
    thumbnail?: string;
}