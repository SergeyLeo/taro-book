/**
 * class менеджера ресурсов, для работы с локальными ресурсами.
 * В дальнейшем позволит проще переключаться на варианты с различными api
 */
const typeResPage = 'page';
const typeResData = 'data';

export class RManager {
    server = '',
    resourcePathPrefix,
    resourceType,

    constructor({uriServer, isPage = false}) {
        this.server = uriServer;
        if (isPage) {
            this.resourcePathPrefix = 'pages';
        } else {
            this.resourcePathPrefix = 'data';
        }
    }

    get({name}) {
        if (this.resourcePathPrefix === 'page') {

        }
    }

    makeUrl({name}) {
        if (this.server === '') {
            return this.resourcePathPrefix + '/' + name
        }
    }

}