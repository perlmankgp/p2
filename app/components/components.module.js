import angular from 'angular';
import { BookmarksModule } from './bookmarks/bookmarks.module';
import { ManagerModule } from './manager/manager.module';

export const ComponentsModule = angular
  .module('app.components', [
    BookmarksModule,
    ManagerModule
  ])
  .name;