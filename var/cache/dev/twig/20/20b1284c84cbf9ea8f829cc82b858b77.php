<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* admin/includes/form/card-location-google-maps.html.twig */
class __TwigTemplate_6279fee6684fb714a91b6771e1728e5e extends Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_5a27a8ba21ca79b61932376b2fa922d2 = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "admin/includes/form/card-location-google-maps.html.twig"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "admin/includes/form/card-location-google-maps.html.twig"));

        // line 1
        $context["componentAddressInfo"] = $this->extensions['Sulu\Twig\Extensions\ComponentExtension']->registerComponent("address-information", ["locale" => twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source,         // line 2
(isset($context["app"]) || array_key_exists("app", $context) ? $context["app"] : (function () { throw new RuntimeError('Variable "app" does not exist.', 2, $this->source); })()), "request", [], "any", false, false, false, 2), "locale", [], "any", false, false, false, 2), "apiToken" =>         // line 3
(isset($context["apiToken"]) || array_key_exists("apiToken", $context) ? $context["apiToken"] : (function () { throw new RuntimeError('Variable "apiToken" does not exist.', 3, $this->source); })()), "apiKey" =>         // line 4
(isset($context["googleApiKey"]) || array_key_exists("googleApiKey", $context) ? $context["googleApiKey"] : (function () { throw new RuntimeError('Variable "googleApiKey" does not exist.', 4, $this->source); })())]);
        // line 6
        echo "
<div id=\"";
        // line 7
        echo twig_escape_filter($this->env, (isset($context["componentAddressInfo"]) || array_key_exists("componentAddressInfo", $context) ? $context["componentAddressInfo"] : (function () { throw new RuntimeError('Variable "componentAddressInfo" does not exist.', 7, $this->source); })()), "html", null, true);
        echo "\" class=\"row\">
    ";
        // line 8
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 8, $this->source); })()), "lat", [], "any", false, false, false, 8), 'row');
        echo "
    ";
        // line 9
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 9, $this->source); })()), "lng", [], "any", false, false, false, 9), 'row');
        echo "
    ";
        // line 10
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 10, $this->source); })()), "formatted_address", [], "any", false, false, false, 10), 'row');
        echo "

    <div class=\"col-md-7";
        // line 12
        echo ((((array_key_exists("googleMapsFullWidth", $context)) ? (_twig_default_filter((isset($context["googleMapsFullWidth"]) || array_key_exists("googleMapsFullWidth", $context) ? $context["googleMapsFullWidth"] : (function () { throw new RuntimeError('Variable "googleMapsFullWidth" does not exist.', 12, $this->source); })()))) : (""))) ? (" col-md-12") : (""));
        echo "\">
        <div class=\"row\">
            ";
        // line 14
        $context["componentCountry"] = $this->extensions['Sulu\Twig\Extensions\ComponentExtension']->registerComponent("auto-complete", ["url" => (("/" . twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source,         // line 15
(isset($context["app"]) || array_key_exists("app", $context) ? $context["app"] : (function () { throw new RuntimeError('Variable "app" does not exist.', 15, $this->source); })()), "request", [], "any", false, false, false, 15), "locale", [], "any", false, false, false, 15)) . "/api/location/country/search"), "data" => ["token" =>         // line 16
(isset($context["csrfApiToken"]) || array_key_exists("csrfApiToken", $context) ? $context["csrfApiToken"] : (function () { throw new RuntimeError('Variable "csrfApiToken" does not exist.', 16, $this->source); })())], "method" => "POST", "attr" => [0 => "alpha2"], "dataText" => [0 => "html"], "classDivResults" => "address-info-countries-results"]);
        // line 22
        echo "
            <div id=\"";
        // line 23
        echo twig_escape_filter($this->env, (isset($context["componentCountry"]) || array_key_exists("componentCountry", $context) ? $context["componentCountry"] : (function () { throw new RuntimeError('Variable "componentCountry" does not exist.', 23, $this->source); })()), "html", null, true);
        echo "\" class=\"col-md-4\">
                ";
        // line 24
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 24, $this->source); })()), "location_country_id", [], "any", false, false, false, 24), 'row', ["attr" => ["data-auto-complete-text" => ((twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source,         // line 26
($context["form"] ?? null), "vars", [], "any", false, true, false, 26), "data", [], "any", false, true, false, 26), "country", [], "any", false, true, false, 26), "native", [], "any", true, true, false, 26)) ? (_twig_default_filter(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["form"] ?? null), "vars", [], "any", false, true, false, 26), "data", [], "any", false, true, false, 26), "country", [], "any", false, true, false, 26), "native", [], "any", false, false, false, 26))) : ("")), "data-auto-complete-value" => ((twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source,         // line 27
($context["form"] ?? null), "vars", [], "any", false, true, false, 27), "data", [], "any", false, true, false, 27), "country", [], "any", false, true, false, 27), "id", [], "any", true, true, false, 27)) ? (_twig_default_filter(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["form"] ?? null), "vars", [], "any", false, true, false, 27), "data", [], "any", false, true, false, 27), "country", [], "any", false, true, false, 27), "id", [], "any", false, false, false, 27))) : ("")), "data-auto-complete-alpha2" => ((twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source,         // line 28
($context["form"] ?? null), "vars", [], "any", false, true, false, 28), "data", [], "any", false, true, false, 28), "country", [], "any", false, true, false, 28), "alpha2", [], "any", true, true, false, 28)) ? (_twig_default_filter(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["form"] ?? null), "vars", [], "any", false, true, false, 28), "data", [], "any", false, true, false, 28), "country", [], "any", false, true, false, 28), "alpha2", [], "any", false, false, false, 28))) : (""))]]);
        // line 30
        echo "
            </div>

            <div class=\"col-md-8\">
                ";
        // line 34
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 34, $this->source); })()), "postal_code", [], "any", false, false, false, 34), 'label');
        echo "

                <div class=\"input-group\">
                    ";
        // line 37
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 37, $this->source); })()), "postal_code", [], "any", false, false, false, 37), 'widget');
        echo "

                    <div class=\"input-group-append\">
                        <button class=\"btn btn-primary d-flex align-items-center js-btn-address-info-postal-code\" type=\"button\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"";
        // line 40
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\TranslationExtension']->trans("app.form.label.address_information.click_postal_code"), "html", null, true);
        echo "\">
                            <i class=\"fa fa-search-plus mr-1\" aria-hidden=\"true\"></i>
                            <span class=\"d-none d-sm-inline-block\">";
        // line 42
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\TranslationExtension']->trans("app.form.label.search_postal_code"), "html", null, true);
        echo "</span>
                            <img src=\"";
        // line 43
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("img/loaders/dual-ring-white.svg"), "html", null, true);
        echo "\" alt=\"Loading\" class=\"address-info__btn-postal-code-loader ml-1 js-address-info__btn-postal-code-loader\"/>
                        </button>
                    </div>
                </div>

                ";
        // line 48
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 48, $this->source); })()), "postal_code", [], "any", false, false, false, 48), 'errors');
        echo "
            </div>
        </div>

        <div class=\"row\">
            <div class=\"col-md-4\">
                ";
        // line 54
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 54, $this->source); })()), "state", [], "any", false, false, false, 54), 'row');
        echo "
            </div>

            <div class=\"col-md-4\">
                ";
        // line 58
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 58, $this->source); })()), "city", [], "any", false, false, false, 58), 'row');
        echo "
            </div>

            <div class=\"col-md-4\">
                ";
        // line 62
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 62, $this->source); })()), "neighborhood", [], "any", false, false, false, 62), 'row');
        echo "
            </div>
        </div>

        <div class=\"row\">
            <div class=\"col-md-8\">
                ";
        // line 68
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 68, $this->source); })()), "address", [], "any", false, false, false, 68), 'row');
        echo "
            </div>

            <div class=\"col-md-4\">
                ";
        // line 72
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 72, $this->source); })()), "street_number", [], "any", false, false, false, 72), 'row');
        echo "
            </div>

            <div class=\"col-md-12\">
                ";
        // line 76
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 76, $this->source); })()), "complement", [], "any", false, false, false, 76), 'row');
        echo "
            </div>
        </div>
    </div>

    <div class=\"col-md-5";
        // line 81
        echo ((((array_key_exists("googleMapsFullWidth", $context)) ? (_twig_default_filter((isset($context["googleMapsFullWidth"]) || array_key_exists("googleMapsFullWidth", $context) ? $context["googleMapsFullWidth"] : (function () { throw new RuntimeError('Variable "googleMapsFullWidth" does not exist.', 81, $this->source); })()))) : (""))) ? (" col-md-12") : (""));
        echo "\">
        <div class=\"address-info-google-map js-address-info-google-map\">
            <div class=\"address-info-google-map-display js-address-info-google-map-display\"></div>

            <div class=\"address-info-google-map-loading\">
                <span>";
        // line 86
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\TranslationExtension']->trans("app.loading"), "html", null, true);
        echo "...</span>
            </div>
        </div>

        <button type=\"button\" class=\"btn btn-success btn-sm d-flex align-items-center js-address-info-update-google-map\">
            <i class=\"fas fa-map-marker-alt mr-1\"></i>
            ";
        // line 92
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\TranslationExtension']->trans("app.update_google_maps"), "html", null, true);
        echo "
            <img src=\"";
        // line 93
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl("img/loaders/dual-ring-white.svg"), "html", null, true);
        echo "\" alt=\"Loading\" class=\"address-info__btn-google-maps-loader ml-1 js-address-info__btn-google-maps-loader\"/>
        </button>
    </div>
</div>";
        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

    }

    public function getTemplateName()
    {
        return "admin/includes/form/card-location-google-maps.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  199 => 93,  195 => 92,  186 => 86,  178 => 81,  170 => 76,  163 => 72,  156 => 68,  147 => 62,  140 => 58,  133 => 54,  124 => 48,  116 => 43,  112 => 42,  107 => 40,  101 => 37,  95 => 34,  89 => 30,  87 => 28,  86 => 27,  85 => 26,  84 => 24,  80 => 23,  77 => 22,  75 => 16,  74 => 15,  73 => 14,  68 => 12,  63 => 10,  59 => 9,  55 => 8,  51 => 7,  48 => 6,  46 => 4,  45 => 3,  44 => 2,  43 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{% set componentAddressInfo = register_component('address-information', {
    locale: app.request.locale,
    apiToken: apiToken,
    apiKey: googleApiKey,
}) %}

<div id=\"{{ componentAddressInfo }}\" class=\"row\">
    {{ form_row(form.lat) }}
    {{ form_row(form.lng) }}
    {{ form_row(form.formatted_address) }}

    <div class=\"col-md-7{{ googleMapsFullWidth|default() ? ' col-md-12':'' }}\">
        <div class=\"row\">
            {% set componentCountry = register_component('auto-complete', {
                url: '/' ~ app.request.locale ~ '/api/location/country/search',
                data: { token: csrfApiToken},
                method: 'POST',
                attr: ['alpha2'],
                dataText: ['html'],
                classDivResults: 'address-info-countries-results'
            }) %}

            <div id=\"{{ componentCountry }}\" class=\"col-md-4\">
                {{ form_row(form.location_country_id, {
                    'attr': {
                        'data-auto-complete-text':  form.vars.data.country.native|default(),
                        'data-auto-complete-value': form.vars.data.country.id|default(),
                        'data-auto-complete-alpha2': form.vars.data.country.alpha2|default(),
                    }
                }) }}
            </div>

            <div class=\"col-md-8\">
                {{ form_label(form.postal_code) }}

                <div class=\"input-group\">
                    {{ form_widget(form.postal_code) }}

                    <div class=\"input-group-append\">
                        <button class=\"btn btn-primary d-flex align-items-center js-btn-address-info-postal-code\" type=\"button\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"{{ 'app.form.label.address_information.click_postal_code'|trans }}\">
                            <i class=\"fa fa-search-plus mr-1\" aria-hidden=\"true\"></i>
                            <span class=\"d-none d-sm-inline-block\">{{ 'app.form.label.search_postal_code'|trans }}</span>
                            <img src=\"{{ asset('img/loaders/dual-ring-white.svg') }}\" alt=\"Loading\" class=\"address-info__btn-postal-code-loader ml-1 js-address-info__btn-postal-code-loader\"/>
                        </button>
                    </div>
                </div>

                {{ form_errors(form.postal_code) }}
            </div>
        </div>

        <div class=\"row\">
            <div class=\"col-md-4\">
                {{ form_row(form.state) }}
            </div>

            <div class=\"col-md-4\">
                {{ form_row(form.city) }}
            </div>

            <div class=\"col-md-4\">
                {{ form_row(form.neighborhood) }}
            </div>
        </div>

        <div class=\"row\">
            <div class=\"col-md-8\">
                {{ form_row(form.address) }}
            </div>

            <div class=\"col-md-4\">
                {{ form_row(form.street_number) }}
            </div>

            <div class=\"col-md-12\">
                {{ form_row(form.complement) }}
            </div>
        </div>
    </div>

    <div class=\"col-md-5{{ googleMapsFullWidth|default() ? ' col-md-12':'' }}\">
        <div class=\"address-info-google-map js-address-info-google-map\">
            <div class=\"address-info-google-map-display js-address-info-google-map-display\"></div>

            <div class=\"address-info-google-map-loading\">
                <span>{{ 'app.loading'|trans }}...</span>
            </div>
        </div>

        <button type=\"button\" class=\"btn btn-success btn-sm d-flex align-items-center js-address-info-update-google-map\">
            <i class=\"fas fa-map-marker-alt mr-1\"></i>
            {{ 'app.update_google_maps'|trans }}
            <img src=\"{{ asset('img/loaders/dual-ring-white.svg') }}\" alt=\"Loading\" class=\"address-info__btn-google-maps-loader ml-1 js-address-info__btn-google-maps-loader\"/>
        </button>
    </div>
</div>", "admin/includes/form/card-location-google-maps.html.twig", "/Users/thomaskaenzig/projects/language-exchange/admin/templates/admin/includes/form/card-location-google-maps.html.twig");
    }
}
