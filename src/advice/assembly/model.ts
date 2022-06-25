@nearBindgen
export class Advice {
    constructor(
        public advice_id: u64,
        public text: string,
        public contract: string,
        public expert: Expert,
        public stake: u64) {}
}


export class Expert {
    constructor(
        public user_id: u64,
        public reputation: i64,
        public wallet_ref: string
    ) {}
}