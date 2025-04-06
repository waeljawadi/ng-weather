import {CurrentConditions} from './current-conditions.model';

export interface ConditionsAndZip {
    zip: string;
    data: CurrentConditions;
}
