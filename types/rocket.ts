export interface Rocket{
    id: string;
    name: string;
    type: string;
    active:boolean;
    stages:number;
    boosters:number;
    cost_per_launch:number;
    success_rate_pct:number;
    first_flight:string;
    country:string;
    company:string;
    height:{
        meters:number;
        feet:number;
    };
    diameter:{
        meters:number;
        feet:number;
    };
    mass:{
        kg:number;
        lb:number;
    };
    flickr_images:Array<string>;
    wikipedia:string;
    description:string;
}

export interface Launchpad {
  id: string;
  name: string;
  full_name: string;
  locality: string;
  region: string;
  latitude: number;
  longitude: number;
  launch_attempts: number;
  launch_successes: number;
  rockets: string[];
  status: string;
}