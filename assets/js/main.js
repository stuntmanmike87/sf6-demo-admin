// CSS you import will output into a single css file (main.css in this case)
import '../css/main.scss';

// Plugins
import 'core-js/features/object/assign';
import 'admin-lte/plugins/bootstrap/js/bootstrap.bundle.min';
import 'bootstrap/js/dist/toast';
import 'bootstrap/js/dist/tooltip';
import 'admin-lte/dist/js/adminlte.min';
import web from '@sulu/web';

// Components
import './components/address-information';
import './components/auto-complete';
import './components/datepicker';
import './components/phone-number';
import './components/button-loading';

// Import Services here.
import './services/toast';
import './services/translate';

// Main scripts to execute.
window.$ = window.jQuery = $;
window.web = web;

// Enable tooltip from bootstrap.
$('[data-toggle="tooltip"]').tooltip();