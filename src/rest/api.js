import {get} from './rest'

export const getFilmByName = name => get(`api/filmByName/${name}`);