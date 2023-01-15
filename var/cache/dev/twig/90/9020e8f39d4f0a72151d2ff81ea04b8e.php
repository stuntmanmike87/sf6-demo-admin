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

/* admin/settings/address.html.twig */
class __TwigTemplate_369bdc2fea99fdd3096a14c4d6f6b6a2 extends Template
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
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "admin/settings/address.html.twig"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "admin/settings/address.html.twig"));

        $this->parent = $this->loadTemplate("admin.html.twig", "admin/settings/address.html.twig", 1);
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
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\TranslationExtension']->trans("app.settings.address"), "html", null, true);
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
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 7, $this->source); })()), "submit", [], "any", false, false, false, 7), 'widget', ["label" => "app.button.save_changes", "icon_before" => "fa-save", "attr" => ["form" => "form_settings_address", "class" => "nav-link btn"]]);
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
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\TranslationExtension']->trans("app.settings.address"), "html", null, true);
        echo "
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    </section>

    ";
        // line 41
        $context["csrfApiToken"] = $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderCsrfToken("api");
        // line 42
        echo "
    <section class=\"content\">
        <div class=\"container-fluid\">
            <div class=\"card card-primary card-outline card-outline-tabs\">
                ";
        // line 46
        $this->loadTemplate("admin/includes/settings-nav-pills.html.twig", "admin/settings/address.html.twig", 46)->display($context);
        // line 47
        echo "
                ";
        // line 48
        echo         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 48, $this->source); })()), 'form_start', ["attr" => ["id" => "form_settings_security"]]);
        echo "
                    <div class=\"card-body\">
                        ";
        // line 50
        $this->loadTemplate("admin/includes/form/card-location-google-maps.html.twig", "admin/settings/address.html.twig", 50)->display(twig_array_merge($context, ["form" =>         // line 51
(isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 51, $this->source); })()), "apiToken" =>         // line 52
(isset($context["csrfApiToken"]) || array_key_exists("csrfApiToken", $context) ? $context["csrfApiToken"] : (function () { throw new RuntimeError('Variable "csrfApiToken" does not exist.', 52, $this->source); })())]));
        // line 54
        echo "                    </div>

                    <div class=\"card-footer d-flex justify-content-end\">
                        <button id=\"";
        // line 57
        echo twig_escape_filter($this->env, $this->extensions['Sulu\Twig\Extensions\ComponentExtension']->registerComponent("button-loading"), "html", null, true);
        echo "\" type=\"submit\" class=\"btn btn-primary button-loading\">
                            <i class=\"fas fa-save mr-2 js-button-loading--removing\"></i> ";
        // line 58
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\TranslationExtension']->trans("app.button.save_changes"), "html", null, true);
        echo "
                        </button>
                    </div>
                ";
        // line 61
        echo         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 61, $this->source); })()), 'form_end');
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
        return "admin/settings/address.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  190 => 61,  184 => 58,  180 => 57,  175 => 54,  173 => 52,  172 => 51,  171 => 50,  166 => 48,  163 => 47,  161 => 46,  155 => 42,  153 => 41,  142 => 33,  135 => 29,  126 => 23,  120 => 19,  110 => 18,  98 => 14,  96 => 7,  93 => 6,  83 => 5,  60 => 3,  37 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{% extends 'admin.html.twig' %}

{% block title %} {{ 'app.settings'|trans }} | {{ 'app.settings.address'|trans }} {% endblock %}

{% block headerNavbar %}
    <li class=\"nav-item\">
        {{ form_widget(form.submit, {
            label: 'app.button.save_changes',
            icon_before: 'fa-save',
            attr: {
                form: 'form_settings_address',
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
                            {{ 'app.settings.address'|trans }}
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    </section>

    {% set csrfApiToken = csrf_token('api') %}

    <section class=\"content\">
        <div class=\"container-fluid\">
            <div class=\"card card-primary card-outline card-outline-tabs\">
                {% include 'admin/includes/settings-nav-pills.html.twig' %}

                {{ form_start(form, {attr: {id: 'form_settings_security'}}) }}
                    <div class=\"card-body\">
                        {% include 'admin/includes/form/card-location-google-maps.html.twig' with {
                            form: form,
                            apiToken: csrfApiToken,
                        } %}
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
{% endblock %}", "admin/settings/address.html.twig", "/Users/thomaskaenzig/projects/language-exchange/admin/templates/admin/settings/address.html.twig");
    }
}
