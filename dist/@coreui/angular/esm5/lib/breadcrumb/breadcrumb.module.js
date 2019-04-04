/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// CoreUI Breadcrumb Component
import { BreadcrumbService } from './breadcrumb.service';
import { BreadcrumbComponent } from './breadcrumb.component';
// @dynamic
var BreadcrumbModule = /** @class */ (function () {
    function BreadcrumbModule() {
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    BreadcrumbModule.forRoot = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        return {
            ngModule: BreadcrumbModule,
            providers: [
                BreadcrumbService
            ]
        };
    };
    BreadcrumbModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, RouterModule],
                    exports: [BreadcrumbComponent],
                    declarations: [BreadcrumbComponent]
                },] }
    ];
    return BreadcrumbModule;
}());
export { BreadcrumbModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY29yZXVpL2FuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvYnJlYWRjcnVtYi9icmVhZGNydW1iLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxRQUFRLEVBQXNCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFHL0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDekQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0FBRzdEO0lBQUE7SUFjQSxDQUFDOzs7OztJQVJRLHdCQUFPOzs7O0lBQWQsVUFBZSxNQUFZO1FBQ3pCLE9BQU87WUFDTCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFNBQVMsRUFBRTtnQkFDVCxpQkFBaUI7YUFDbEI7U0FDRixDQUFDO0lBQ0osQ0FBQzs7Z0JBYkYsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFFLFlBQVksRUFBRSxZQUFZLENBQUU7b0JBQ3ZDLE9BQU8sRUFBRSxDQUFFLG1CQUFtQixDQUFFO29CQUNoQyxZQUFZLEVBQUUsQ0FBRSxtQkFBbUIsQ0FBRTtpQkFDdEM7O0lBVUQsdUJBQUM7Q0FBQSxBQWRELElBY0M7U0FUWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVyc30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG4vLyBDb3JlVUkgQnJlYWRjcnVtYiBDb21wb25lbnRcbmltcG9ydCB7IEJyZWFkY3J1bWJTZXJ2aWNlIH0gZnJvbSAnLi9icmVhZGNydW1iLnNlcnZpY2UnO1xuaW1wb3J0IHsgQnJlYWRjcnVtYkNvbXBvbmVudCB9IGZyb20gJy4vYnJlYWRjcnVtYi5jb21wb25lbnQnO1xuXG4vLyBAZHluYW1pY1xuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogWyBDb21tb25Nb2R1bGUsIFJvdXRlck1vZHVsZSBdLFxuICBleHBvcnRzOiBbIEJyZWFkY3J1bWJDb21wb25lbnQgXSxcbiAgZGVjbGFyYXRpb25zOiBbIEJyZWFkY3J1bWJDb21wb25lbnQgXVxufSlcbmV4cG9ydCBjbGFzcyBCcmVhZGNydW1iTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoY29uZmlnPzogYW55KTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBCcmVhZGNydW1iTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIEJyZWFkY3J1bWJTZXJ2aWNlXG4gICAgICBdXG4gICAgfTtcbiAgfVxufVxuIl19