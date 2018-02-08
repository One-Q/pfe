export interface Problem {
    _id: string;
    Name: string;
    Local: string;
    Problem: {
        User: string;
        Description: string;
        Image: string;
        DateCreated : Date;
        Resolved: boolean;
    }
}