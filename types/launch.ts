export interface Launch{
    id: string;
    flight_number: number;
    name:string;
    date_utc: string;
    date_local:string;
    success:boolean | null;
    upcoming:boolean;
    details:string | null;
    rocket:string;
    launchpad:string;
    links:{
        patch:{
            small:string | null;
            large:string | null;
        };
        webcast:string | null;
        article:string | null;
        wikipedia:string | null;
    };
    static_fire_date_utc:string | null;
    failures:Array<{
        time:number;
        altitude:number | null;
        reason:string;
    }>;
    crew: Array<string>;
    ships: Array<string>;
    capsules: Array<string>;
    payloads: Array<string>;
}