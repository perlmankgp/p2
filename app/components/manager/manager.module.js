import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { ManagerComponent } from './manager.component';
import './manager.scss';

export const ManagerModule = angular
    .module('manager', [
        uiRouter
    ])
    .component('manager', ManagerComponent)
    .config(($stateProvider, $urlRouterProvider) => {
        'ngInject';
        $stateProvider
            .state('manager', {
                url: '/manager',
                component: 'manager'
            });
        $urlRouterProvider.otherwise('/');
    })
    .name;