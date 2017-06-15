import angular from 'angular';
import { NavModule } from './nav/nav.module';
import { LayoutModule } from './layout/layout.module';

export const CommonModule = angular
  .module('app.common', [
    NavModule,
    LayoutModule
  ])
  .name;