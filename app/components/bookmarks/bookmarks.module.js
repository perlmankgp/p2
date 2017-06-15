import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { BookmarksComponent } from './bookmarks.component';
import './bookmarks.scss';

export const BookmarksModule = angular
    .module('bookmarks', [
        uiRouter
    ])
    .component('bookmarks', BookmarksComponent)
    .config(($stateProvider, $urlRouterProvider) => {
        'ngInject';
        $stateProvider
            .state('bookmarks', {
                url: '/bookmarks',
                component: 'bookmarks'
            });
        $urlRouterProvider.otherwise('/');
    })
    .name;