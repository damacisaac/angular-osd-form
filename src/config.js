(function () {

    // @ngInject
    function OsdFormConfig() {
        var self = this;
        self.config = {
            useBootstrap: true,
            useSemanticUi: false
        };

        self.useBootstrap = function () {
            config.useBootstrap = true;
            config.useSemanticUi = !config.useBootstrap;
        };

        self.useSemanticUi = function () {
            config.useSemanticUi = true;
            config.useBootstrap = !config.useSemanticUi;
        };

        self.$get = function () {
            return self;
        };

        return self;
    }

    angular.module('osdForm')
        .provider('OsdFormConfig', OsdFormConfig);
})();
