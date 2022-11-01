angular.module("app", []);

angular.module("app").controller("MainController",function () {
    var vm = this;
    vm.title = "Learn Angular by example";
    vm.searchInput = "";
    vm.shows = [
        {
            title:"Đôi mắt có lửa",
            author:"Tiểu Khiết",
            favorite: true
        },
        {
            title:"Đại dương",
            author:"Tiểu Khiết",
            favorite: false
        },
        {
            title:"Núi lửa",
            author:"Tiểu Khiết",
            favorite: true
        },
        {
            title:"Mây",
            author:"Tiểu Khiết",
            favorite: false
        },
        {
            title:"Câu vồng",
            author:"Tiểu Khiết",
            favorite: true
        }
    ];
    vm.orders = [
        {
            id:1,
            title:"Author Ascending",
            key:"author",
            reverse: false
        },
        {
            id:2,
            title:"Author Ascending",
            key:"author",
            reverse: true
        },
        {
            id:3,
            title:"Title Ascending",
            key:"author",
            reverse: false
        },
        {
            id:4,
            title:"Title Ascending",
            key:"author",
            reverse: true
        }
    ];
    vm.order = vm.orders[0];
    vm.new = {};
    vm.addShow = function () {
        vm.shows.push(vm.new);
        vm.new = {};
    };
});