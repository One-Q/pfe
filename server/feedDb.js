import PC from './models/pc.model';

export default function () {
    //PC.remove().exec();
    PC.count().exec((err, count) => {
        if (true) {
            return;
        }

        const pc1 = new PC({
            Name: 'LEN1501',
            Local: '019',
            IP: '176.17.17.1',
            MAC: '42-31-C9-25-21-98',
            Comment: 'Modele  057-219-426 2017-2018',
            Active: true
        });

        const pc2 = new PC({
            Name: 'LEN1501',
            Local: '019',
            IP: '176.17.17.1',
            MAC: '42-31-C9-25-21-98',
            Comment: 'Modele  057-219-426 2017-2018',
            Active: true,
            Problem: {
                User: 'user.name@student.vinci.be',
                Description: 'bug',
                DateCreated:Date.now(),
                Resolved : false
            }
        });

        const pc3 = new PC({
            Name: 'LEN1601',
            Local: '017',
            IP: '172.17.17.1',
            MAC: '45-39-C4-55-29-08',
            Comment: 'Modele  017-019-026 2017-2018',
            Active: true
        });

        PC.create([pc1, pc2, pc3], (error) => {
            if (error) {
                throw error;
            }
        });
    });
}