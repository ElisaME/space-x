import { SPACEX_API_BASE_URL, API_ENDPOINTS } from "./constants";
import type { Launch, Launchpad, Rocket } from '@/types'

//Custom error class
export class SpaceXAPIERROR extends Error{
    constructor(
        message:string,
        public status?:number,
        public endpoint?: string
    ){
        super(message);
        this.name = 'SpaceXAPIError';
    }
}

async function fetchAPI<T>(endpoint:string): Promise<T> {
    const url = `${SPACEX_API_BASE_URL}${endpoint}`;
    try {
        const response = await fetch(url,{
            next: { revalidate : 3600 } //Revalidate every hour
        });

        if(!response.ok){
            throw new SpaceXAPIERROR(
                'Failes to fetch data from SpaceX API',
                response.status,
                endpoint
            );
        }
        return response.json();
        
    } catch (error) {
        if(error instanceof SpaceXAPIERROR){
            throw error;
        }

        throw new SpaceXAPIERROR(
            `Network error: ${error instanceof Error ? error.message : 'Unknown error'}`,
            undefined,
            endpoint
        )
    }
    
}

//Get launches
export async function getAllLaunches(): Promise<Launch[]>{
    return fetchAPI<Launch[]>(API_ENDPOINTS.LAUNCHES);
}

// Get Launch by ID
export async function getLaunchById(id: string): Promise<Launch> {
  return fetchAPI<Launch>(API_ENDPOINTS.LAUNCH_BY_ID(id));
}

// Get rockets
export async function getAllRockets(): Promise<Rocket[]> {
  return fetchAPI<Rocket[]>(API_ENDPOINTS.ROCKETS);
}

// Get Rocker By ID
export async function getRocketById(id: string): Promise<Rocket> {
  return fetchAPI<Rocket>(API_ENDPOINTS.ROCKET_BY_ID(id));
}

// Get launchpads
export async function getAllLaunchpads(): Promise<Launchpad[]> {
  return fetchAPI<Launchpad[]>(API_ENDPOINTS.LAUNCHPADS);
}

// Get launchpad by ID
export async function getLaunchpadById(id: string): Promise<Launchpad> {
  return fetchAPI<Launchpad>(API_ENDPOINTS.LAUNCHPAD_BY_ID(id));
}