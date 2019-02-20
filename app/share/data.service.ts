import {InMemoryDbService} from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const todos = [
            {
                id: 1,
                title: 'Изучить js',
                completed: true
            },
            {
                id: 2,
                title: 'Написать приложение',
                completed: true
            },
            {
                id: 3,
                title: 'Прочитать источники',
                completed: false
            }
        ];

        return {todos};
    }
}
