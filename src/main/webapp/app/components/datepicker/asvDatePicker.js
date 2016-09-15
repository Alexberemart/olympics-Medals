angular.module('app.Directives')
    .directive('asvDatePicker', [function () {
        return {
            restrict: 'A',
            require: 'ngModel',
            priority: 100,
            scope: {
                ngModel: '='
            },
            compile: function (element, attrs) {
                var dateFormat = attrs.asvDatePickerFormat || 'dd/mm/yyyy';
                if (dateFormat == "yyyy") {
                    dateFormat = " yyyy";
                }

                return function link(scope, element, attrs, ngModelCtrl) {
                    var trigger = attrs.asvDatePickerTrigger || 'click';

                    var triggerHandler = function () {
                        $(element).datepicker('show');
                    };

                    var keyDownHandler = function (event) {
                        if ([KeyCodes.TAB].indexOf(event.keyCode) !== -1) {
                            $(element).datepicker('hide');
                        }
                    };

                    var mouseEnterHandler = function (event) {
                        $(element).unbind('mouseenter', mouseEnterHandler);
                        $(element).unbind('focus', mouseEnterHandler);

                        $(element).datepicker({
                            format: dateFormat,
                            weekStart: parseInt(attrs.asvDatePickerWeekStart) || 1,
                            viewMode: attrs.asvDatePickerViewMode || 'days',
                            minViewMode: attrs.asvDatePickerMinViewMode || 'days',
                            autoclose: true
                        });

                        $(element).datepicker().on('changeDate', function (event) {
                            scope.$apply(function () {
                                var viewValue = event.date.toString(dateFormat.replace(/mm/g, 'MM')).trim();
                                ngModelCtrl.$setViewValue(viewValue);
                            });

                            $(element).datepicker('hide');
                        });

                        $(element).bind(trigger, triggerHandler);
                        $(element).bind('keydown', keyDownHandler);

                        if (event.type === 'focus') {
                            $(element).datepicker('show');
                        }
                    };

                    $(element).bind('mouseenter', mouseEnterHandler);
                    $(element).bind('focus', mouseEnterHandler);

                    ngModelCtrl.$formatters.push(function (value) {
                        if (angular.isNumber(value)) {
                            return (new Date(value, 1, 1, 1, 1, 1, 1)).toString(dateFormat.replace(/mm/g, 'MM')).trim();
                            ;
                        }

                        return value;
                    });

                    if (attrs.parseAsDate === 'true' || attrs.parseAsNumber === 'true') {
                        ngModelCtrl.$parsers.push(function (value) {
                            if (angular.isString(value)) {
                                if (value.trim() == '') {
                                    return null;
                                }

                                try {
                                    var date = Date.parseExact(value.trim(), dateFormat.replace(/mm/g, 'MM'));
                                    if (!!date) {
                                        if (attrs.parseAsDate === 'true') {
                                            return date;
                                        } else if (attrs.parseAsNumber === 'true') {
                                            return date.getTime();
                                        }
                                    }
                                    else {
                                        return -1;
                                    }
                                } catch (e) {
                                    return null;
                                }
                            }

                            return value;
                        });
                    }
                };
            }
        };
    }])