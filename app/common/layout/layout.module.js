import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { LayoutComponent } from './layout.component';
import './layout.scss';

export const LayoutModule = angular
    .module('layout', [
        uiRouter
    ])
    .component('layout', LayoutComponent)
    .config(($stateProvider, $urlRouterProvider) => {
        'ngInject';
        $stateProvider
            .state('layout', {
                url: '/layout',
                component: 'layout'
            });
        $urlRouterProvider.otherwise('/');
    })
    .name;