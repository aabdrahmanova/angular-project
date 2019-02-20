import {InMemoryDbService} from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const todos = [
            {
                title: 'Изучить js',
                completed: true
            },
            {
                title: 'Написать приложение',
                completed: true
            },
            {
                title: 'Прочитать источники',
                completed: false
            }
        ];

        return {todos};
    }
}
