import { User } from './user';
import { Company } from './company';
import { Map } from './map';

const user = new User();
const company = new Company();
const customMap = new Map('map');

// implicit type check for location (Mappable) interface.
customMap.addMarker(user);
customMap.addMarker(company);

