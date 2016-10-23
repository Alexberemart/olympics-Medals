angular.module('olympic-medals')
    .controller('head-menu',
        function ($scope, resultService, $mdSidenav) {

            $scope.users = [];
            $scope.selectUser = selectUser;
            $scope.toggleList = toggleUsersList;

            resultService
                .loadAllUsers()
                .then(function (users) {
                    $scope.users = [].concat(users);
                    $scope.selected = users[0];
                });

            /**
             * Select the current avatars
             * @param menuId
             */
            function selectUser(user) {
                $scope.$broadcast("changeUser", user)
            }

            /**
             * Hide or Show the 'left' sideNav area
             */
            function toggleUsersList() {
                $mdSidenav('left').toggle();
            }

        });