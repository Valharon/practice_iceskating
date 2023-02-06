interface user {
    userName: string;
    userPassword: string;
    birthDate: number[];
}

interface Profile {
    age: number;
    situation: string;
}

class price {
    profile: Profile;
    level: string;
    equipmentLocation: boolean;
}