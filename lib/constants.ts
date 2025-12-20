export const SPACEX_API_BASE_URL = 'https://api.spacexdata.com/v4';

export const API_ENDPOINTS ={
    LAUNCHES : '/launches',
    LAUNCH_BY_ID: (id:string) => `/launches/${id}`,
    ROCKETS : '/rockets',
    ROCKET_BY_ID: (id:string) => `/rockets/${id}`,
    LAUNCHPADS : '/launchpads',
    LAUNCHPAD_BY_ID: (id:string) => `/launchpads/${id}`,
    CREW:'/crew',
    SHIPS: '/ships',
    PAYLOADS: '/payloads'
} as const;

export const LAUNCH_STATUS ={
    ALL: 'all',
    SUCCESS: 'success',
    FAILED: 'failed',
    UPCOMING: 'upcoming'
} as const;

export const VIEW_MODES ={
    GRID: 'grid',
    LIST: 'list'
} as const;

export const ITEMS_PER_PAGE = 10;
