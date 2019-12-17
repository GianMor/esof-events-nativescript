const observableModule = require("tns-core-modules/data/observable");

function CreditsViewModel() {
    const viewModel = observableModule.fromObject({
        /* Add your view model properties here */
        test: 'testo from model'
    });

    return viewModel;
}

module.exports = CreditsViewModel;
