import {Advice, Expert} from "./model";

export function createAdvice(advice: Advice): void {

}

export function getAdvices(): Advice[] {
    return new Array<Advice>();
}

export function validateAdvice(advice_id:u64): void {

}

export function getExpert(user_id: u64): Expert {
    return new Expert(user_id, 0, "");
}