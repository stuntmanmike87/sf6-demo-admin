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

/* admin/settings/profile.html.twig */
class __TwigTemplate_0476710ce6a369908e357fcc307dce85 extends Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->blocks = [
            'title' => [$this, 'block_title'],
            'headerNavbar' => [$this, 'block_headerNavbar'],
            'body' => [$this, 'block_body'],
        ];
    }

    protected function doGetParent(array $context)
    {
        // line 1
        return "admin.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_5a27a8ba21ca79b61932376b2fa922d2 = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "admin/settings/profile.html.twig"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "admin/settings/profile.html.twig"));

        $this->parent = $this->loadTemplate("admin.html.twig", "admin/settings/profile.html.twig", 1);
        $this->parent->display($context, array_merge($this->blocks, $blocks));
        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

    }

    // line 3
    public function block_title($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_5a27a8ba21ca79b61932376b2fa922d2 = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "title"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "title"));

        echo " ";
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\TranslationExtension']->trans("app.settings"), "html", null, true);
        echo " | ";
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\TranslationExtension']->trans("app.settings.profile"), "html", null, true);
        echo " ";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

    }

    // line 5
    public function block_headerNavbar($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_5a27a8ba21ca79b61932376b2fa922d2 = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "headerNavbar"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "headerNavbar"));

        // line 6
        echo "    <li class=\"nav-item\">
        ";
        // line 7
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 7, $this->source); })()), "submit", [], "any", false, false, false, 7), 'widget', ["label" => "app.button.save_changes", "icon_before" => "fa-save", "attr" => ["form" => "form_settings_profile", "class" => "nav-link btn"]]);
        // line 14
        echo "
    </li>
";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

    }

    // line 18
    public function block_body($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_5a27a8ba21ca79b61932376b2fa922d2 = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "body"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "body"));

        // line 19
        echo "    <section class=\"content-header\">
        <div class=\"container-fluid\">
            <div class=\"row mb-2\">
                <div class=\"col-sm-6\">
                    <h1>";
        // line 23
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\TranslationExtension']->trans("app.settings"), "html", null, true);
        echo "</h1>
                </div>

                <div class=\"col-sm-6\">
                    <ol class=\"breadcrumb float-sm-right\">
                        <li class=\"breadcrumb-item active\">
                            ";
        // line 29
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\TranslationExtension']->trans("app.settings"), "html", null, true);
        echo "
                        </li>

                        <li class=\"breadcrumb-item active\">
                            ";
        // line 33
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\TranslationExtension']->trans("app.settings.profile"), "html", null, true);
        echo "
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    </section>

    ";
        // line 42
        echo "    <section class=\"content\">
        <div class=\"container-fluid\">
            <div class=\"card card-primary card-outline card-outline-tabs\">
                ";
        // line 45
        $this->loadTemplate("admin/includes/settings-nav-pills.html.twig", "admin/settings/profile.html.twig", 45)->display($context);
        // line 46
        echo "
                ";
        // line 47
        echo         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 47, $this->source); })()), 'form_start', ["attr" => ["id" => "form_settings_profile"]]);
        echo "
                    ";
        // line 48
        twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 48, $this->source); })()), "phone_number", [], "any", false, false, false, 48), "setRendered", [], "method", false, false, false, 48);
        // line 49
        echo "                    ";
        twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 49, $this->source); })()), "phone_number_country_id", [], "any", false, false, false, 49), "setRendered", [], "method", false, false, false, 49);
        // line 50
        echo "
                    <div class=\"card-body\">
                        <div class=\"row\">
                            <div class=\"col-md-3\">
                                ";
        // line 54
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 54, $this->source); })()), "first_name", [], "any", false, false, false, 54), 'row');
        echo "
                            </div>

                            <div class=\"col-md-3\">
                                ";
        // line 58
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 58, $this->source); })()), "last_name", [], "any", false, false, false, 58), 'row');
        echo "
                            </div>

                            <div class=\"col-md-3\">
                                ";
        // line 62
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 62, $this->source); })()), "user_type_id", [], "any", false, false, false, 62), 'row');
        echo "
                            </div>
                        </div>

                        <div class=\"row\">
                            <div class=\"col-md-3\">
                                ";
        // line 68
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 68, $this->source); })()), "birthday", [], "any", false, false, false, 68), 'label');
        echo "

                                <div class=\"input-group mb-3\" id=\"";
        // line 70
        echo twig_escape_filter($this->env, $this->extensions['Sulu\Twig\Extensions\ComponentExtension']->registerComponent("datepicker", ["locale" => twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source,         // line 71
(isset($context["app"]) || array_key_exists("app", $context) ? $context["app"] : (function () { throw new RuntimeError('Variable "app" does not exist.', 71, $this->source); })()), "request", [], "any", false, false, false, 71), "locale", [], "any", false, false, false, 71), "changeMonth" => true, "changeYear" => true]), "html", null, true);
        // line 74
        echo "\">
                                    <div class=\"input-group-prepend\">
                                        <span class=\"input-group-text\"><i class=\"fas fa-calendar\" aria-hidden=\"true\"></i></span>
                                    </div>

                                    ";
        // line 79
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 79, $this->source); })()), "birthday", [], "any", false, false, false, 79), 'widget', ["attr" => ["class" => "js-datepicker"]]);
        // line 81
        echo "
                                </div>

                                <div class=\"form-error\">
                                    ";
        // line 85
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 85, $this->source); })()), "birthday", [], "any", false, false, false, 85), 'errors');
        echo "
                                </div>
                            </div>

                            <div class=\"col-md-4\">
                                ";
        // line 90
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 90, $this->source); })()), "email", [], "any", false, false, false, 90), 'row');
        echo "
                            </div>

                            ";
        // line 93
        $context["componentPhoneNumber"] = $this->extensions['Sulu\Twig\Extensions\ComponentExtension']->registerComponent("phone-number", ["locale" => twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source,         // line 94
(isset($context["app"]) || array_key_exists("app", $context) ? $context["app"] : (function () { throw new RuntimeError('Variable "app" does not exist.', 94, $this->source); })()), "request", [], "any", false, false, false, 94), "locale", [], "any", false, false, false, 94), "value" => ((twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source,         // line 95
($context["form"] ?? null), "vars", [], "any", false, true, false, 95), "data", [], "any", false, true, false, 95), "phoneNumber", [], "any", true, true, false, 95)) ? (_twig_default_filter(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["form"] ?? null), "vars", [], "any", false, true, false, 95), "data", [], "any", false, true, false, 95), "phoneNumber", [], "any", false, false, false, 95))) : ("")), "locationCountryId" => ((twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source,         // line 96
($context["form"] ?? null), "vars", [], "any", false, true, false, 96), "data", [], "any", false, true, false, 96), "getPhoneNumberCountry", [], "any", false, true, false, 96), "id", [], "any", true, true, false, 96)) ? (_twig_default_filter(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["form"] ?? null), "vars", [], "any", false, true, false, 96), "data", [], "any", false, true, false, 96), "getPhoneNumberCountry", [], "any", false, true, false, 96), "id", [], "any", false, false, false, 96))) : ("")), "prefixEntity" => twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source,         // line 97
(isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 97, $this->source); })()), "vars", [], "any", false, false, false, 97), "full_name", [], "any", false, false, false, 97), "translations" => ["choose" => $this->extensions['Symfony\Bridge\Twig\Extension\TranslationExtension']->trans("app.form.label.choose"), "label" => $this->extensions['Symfony\Bridge\Twig\Extension\TranslationExtension']->trans("app.user.form.label.phone_number"), "selectCountryCallingCode" => $this->extensions['Symfony\Bridge\Twig\Extension\TranslationExtension']->trans("app.user.select_country_calling_code")], "countryCallingCodes" => json_encode($this->env->getRuntime('App\Twig\Runtime\WebsiteExtensionRuntime')->getCountryCallingCodes())]);
        // line 105
        echo "
                            <div id=\"";
        // line 106
        echo twig_escape_filter($this->env, (isset($context["componentPhoneNumber"]) || array_key_exists("componentPhoneNumber", $context) ? $context["componentPhoneNumber"] : (function () { throw new RuntimeError('Variable "componentPhoneNumber" does not exist.', 106, $this->source); })()), "html", null, true);
        echo "\" class=\"col-md-4\"></div>
                        </div>

                        <div class=\"row\">
                            <div class=\"col-md-8\">
                                ";
        // line 111
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 111, $this->source); })()), "bio", [], "any", false, false, false, 111), 'row');
        echo "
                            </div>
                        </div>

                        <div class=\"row\">
                            <div class=\"col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3\">
                                ";
        // line 117
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 117, $this->source); })()), "tmp_url_avatar", [], "any", false, false, false, 117), 'row');
        echo "
                            </div>
                        </div>

                        ";
        // line 121
        if ( !twig_test_empty(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 121, $this->source); })()), "vars", [], "any", false, false, false, 121), "data", [], "any", false, false, false, 121), "urlPicture", [], "any", false, false, false, 121))) {
            // line 122
            echo "                        <div class=\"row\">
                            <div class=\"col-12 col-md-6\">
                                <img src=\"";
            // line 124
            echo twig_escape_filter($this->env, $this->env->getRuntime('App\Twig\Runtime\WebsiteExtensionRuntime')->getImage(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 124, $this->source); })()), "vars", [], "any", false, false, false, 124), "data", [], "any", false, false, false, 124), "urlPicture", [], "any", false, false, false, 124), ["w" => 320, "h" => 320]), "html", null, true);
            echo "\"
                                     class=\"img-rounded img-responsive client-form__image mb-3\"
                                     alt=\"\">

                                ";
            // line 128
            echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 128, $this->source); })()), "delete_url_avatar", [], "any", false, false, false, 128), 'row');
            echo "
                            </div>
                        </div>
                        ";
        } else {
            // line 132
            echo "                            ";
            twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 132, $this->source); })()), "delete_url_avatar", [], "any", false, false, false, 132), "setRendered", [], "method", false, false, false, 132);
            // line 133
            echo "                        ";
        }
        // line 134
        echo "                    </div>

                    <div class=\"card-footer d-flex justify-content-end\">
                        <button id=\"";
        // line 137
        echo twig_escape_filter($this->env, $this->extensions['Sulu\Twig\Extensions\ComponentExtension']->registerComponent("button-loading"), "html", null, true);
        echo "\" type=\"submit\" class=\"btn btn-primary button-loading\">
                            <i class=\"fas fa-save mr-2 js-button-loading--removing\"></i> ";
        // line 138
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\TranslationExtension']->trans("app.button.save_changes"), "html", null, true);
        echo "
                        </button>
                    </div>
                ";
        // line 141
        echo         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 141, $this->source); })()), 'form_end');
        echo "
            </div>
        </div>
    </section>
";
        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

    }

    public function getTemplateName()
    {
        return "admin/settings/profile.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  312 => 141,  306 => 138,  302 => 137,  297 => 134,  294 => 133,  291 => 132,  284 => 128,  277 => 124,  273 => 122,  271 => 121,  264 => 117,  255 => 111,  247 => 106,  244 => 105,  242 => 97,  241 => 96,  240 => 95,  239 => 94,  238 => 93,  232 => 90,  224 => 85,  218 => 81,  216 => 79,  209 => 74,  207 => 71,  206 => 70,  201 => 68,  192 => 62,  185 => 58,  178 => 54,  172 => 50,  169 => 49,  167 => 48,  163 => 47,  160 => 46,  158 => 45,  153 => 42,  142 => 33,  135 => 29,  126 => 23,  120 => 19,  110 => 18,  98 => 14,  96 => 7,  93 => 6,  83 => 5,  60 => 3,  37 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{% extends 'admin.html.twig' %}

{% block title %} {{ 'app.settings'|trans }} | {{ 'app.settings.profile'|trans }} {% endblock %}

{% block headerNavbar %}
    <li class=\"nav-item\">
        {{ form_widget(form.submit, {
            label: 'app.button.save_changes',
            icon_before: 'fa-save',
            attr: {
                form: 'form_settings_profile',
                class: 'nav-link btn'
            }
        }) }}
    </li>
{% endblock %}

{% block body %}
    <section class=\"content-header\">
        <div class=\"container-fluid\">
            <div class=\"row mb-2\">
                <div class=\"col-sm-6\">
                    <h1>{{ 'app.settings'|trans }}</h1>
                </div>

                <div class=\"col-sm-6\">
                    <ol class=\"breadcrumb float-sm-right\">
                        <li class=\"breadcrumb-item active\">
                            {{ 'app.settings'|trans }}
                        </li>

                        <li class=\"breadcrumb-item active\">
                            {{ 'app.settings.profile'|trans }}
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    </section>

    {# TODO: Insert media upload for avatar. #}
    <section class=\"content\">
        <div class=\"container-fluid\">
            <div class=\"card card-primary card-outline card-outline-tabs\">
                {% include 'admin/includes/settings-nav-pills.html.twig' %}

                {{ form_start(form, {attr: {id: 'form_settings_profile'}}) }}
                    {% do form.phone_number.setRendered() %}
                    {% do form.phone_number_country_id.setRendered() %}

                    <div class=\"card-body\">
                        <div class=\"row\">
                            <div class=\"col-md-3\">
                                {{ form_row(form.first_name) }}
                            </div>

                            <div class=\"col-md-3\">
                                {{ form_row(form.last_name) }}
                            </div>

                            <div class=\"col-md-3\">
                                {{ form_row(form.user_type_id) }}
                            </div>
                        </div>

                        <div class=\"row\">
                            <div class=\"col-md-3\">
                                {{ form_label(form.birthday) }}

                                <div class=\"input-group mb-3\" id=\"{{ register_component('datepicker', {
                                    locale: app.request.locale,
                                    changeMonth: true,
                                    changeYear: true,
                                })}}\">
                                    <div class=\"input-group-prepend\">
                                        <span class=\"input-group-text\"><i class=\"fas fa-calendar\" aria-hidden=\"true\"></i></span>
                                    </div>

                                    {{ form_widget(form.birthday, {
                                        'attr': {'class': 'js-datepicker'}}
                                    )}}
                                </div>

                                <div class=\"form-error\">
                                    {{ form_errors(form.birthday) }}
                                </div>
                            </div>

                            <div class=\"col-md-4\">
                                {{ form_row(form.email) }}
                            </div>

                            {% set componentPhoneNumber = register_component('phone-number', {
                                locale: app.request.locale,
                                value: form.vars.data.phoneNumber|default(),
                                locationCountryId: form.vars.data.getPhoneNumberCountry.id|default(),
                                prefixEntity: form.vars.full_name,
                                translations: {
                                    choose: 'app.form.label.choose'|trans,
                                    label: 'app.user.form.label.phone_number'|trans,
                                    selectCountryCallingCode: 'app.user.select_country_calling_code'|trans
                                },
                                countryCallingCodes: app_country_calling_codes()|json_encode(),
                            }) %}

                            <div id=\"{{ componentPhoneNumber }}\" class=\"col-md-4\"></div>
                        </div>

                        <div class=\"row\">
                            <div class=\"col-md-8\">
                                {{ form_row(form.bio) }}
                            </div>
                        </div>

                        <div class=\"row\">
                            <div class=\"col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3\">
                                {{ form_row(form.tmp_url_avatar) }}
                            </div>
                        </div>

                        {% if form.vars.data.urlPicture is not empty %}
                        <div class=\"row\">
                            <div class=\"col-12 col-md-6\">
                                <img src=\"{{ app_image(form.vars.data.urlPicture, {'w': 320, 'h': 320}) }}\"
                                     class=\"img-rounded img-responsive client-form__image mb-3\"
                                     alt=\"\">

                                {{ form_row(form.delete_url_avatar) }}
                            </div>
                        </div>
                        {% else %}
                            {% do form.delete_url_avatar.setRendered() %}
                        {% endif %}
                    </div>

                    <div class=\"card-footer d-flex justify-content-end\">
                        <button id=\"{{ register_component('button-loading') }}\" type=\"submit\" class=\"btn btn-primary button-loading\">
                            <i class=\"fas fa-save mr-2 js-button-loading--removing\"></i> {{ 'app.button.save_changes'|trans }}
                        </button>
                    </div>
                {{ form_end(form) }}
            </div>
        </div>
    </section>
{% endblock %}", "admin/settings/profile.html.twig", "/Users/thomaskaenzig/projects/language-exchange/admin/templates/admin/settings/profile.html.twig");
    }
}
