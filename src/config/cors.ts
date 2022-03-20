
export const corsControls: any = {
    origin             : '*',
    credentials        : true,
    'allowedHeaders'   : ['sessionId', 'Content-Type', 'Origin', 'X-Requested-With', 'X-Auth-Token', 'Content', 'Accept', 'Authorization' ],
    'exposedHeaders'   : ['sessionId'],
    'methods'          : 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    'preflightContinue': false
};