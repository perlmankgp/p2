import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { NavComponent } from './nav.component';
import './nav.scss';

export const NavModule = angular
    .module('nav', [
        uiRouter
    ])
    .component('nav', NavComponent)
    .config(($stateProvider, $urlRouterProvider) => {
        'ngInject';
        $stateProvider
            .state('nav', {
                url: '/nav',
                component: 'nav'
            });
        $urlRouterProvider.otherwise('/');
    })
    .name;