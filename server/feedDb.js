import PC from './models/pc.model';

export default function () {
    PC.count().exec((err, count) => {
        if (count > 0) {
            return;
        }

        const pc1 = new PC({
            Name: 'LEN1401',
            Local: '017',
            IP: '172.17.17.1',
            MAC: '44-39-C4-55-29-08',
            Comment: 'Modele  017-019-026 2017-2018',
            Active: true
        });

        const pc2 = new PC({
            Name: 'LEN1501',
            Local: '019',
            IP: '176.17.17.1',
            MAC: '42-31-C9-25-21-98',
            Comment: 'Modele  057-219-426 2017-2018',
            Active: false,
            Problem: {
                User: 'user.name@student.vinci.be',
                Description: 'bug'
            }
        });

        PC.create([pc1, pc2], (error) => {
            if (error) {
                throw error;
            }
        });
    });
}