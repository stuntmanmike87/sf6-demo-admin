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

/* admin/includes/navbar-languages-menu.twig */
class __TwigTemplate_e4ed4102aabd361d7cbd944ba36ba3e5 extends Template
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
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "admin/includes/navbar-languages-menu.twig"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "admin/includes/navbar-languages-menu.twig"));

        // line 1
        echo "<li class=\"nav-item nav-item-languages dropdown navbar-languages-item\">
    <a class=\"nav-link dropdown-toggle navbar-languages-item__dropdown-toggle\"
       href=\"#\"
       id=\"navbarDropdown\"
       role=\"button\"
       data-toggle=\"dropdown\"
       aria-haspopup=\"true\"
       aria-expanded=\"false\">
        <span class=\"fi fi-";
        // line 9
        echo twig_escape_filter($this->env, $this->env->getRuntime('App\Twig\Runtime\LanguageExtensionRuntime')->getFlagIconByLocale(twig_lower_filter($this->env, (isset($context["locale"]) || array_key_exists("locale", $context) ? $context["locale"] : (function () { throw new RuntimeError('Variable "locale" does not exist.', 9, $this->source); })()))), "html", null, true);
        echo " fis rounded-circle navbar-languages-item__current-flag\"></span>
    </a>
    <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdown\">
        ";
        // line 12
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable($this->env->getRuntime('App\Twig\Runtime\WebsiteExtensionRuntime')->getLocales());
        foreach ($context['_seq'] as $context["_key"] => $context["locale"]) {
            // line 13
            echo "            ";
            $context["attrHrefLocale"] = (((twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["app"]) || array_key_exists("app", $context) ? $context["app"] : (function () { throw new RuntimeError('Variable "app" does not exist.', 13, $this->source); })()), "request", [], "any", false, false, false, 13), "locale", [], "any", false, false, false, 13) == twig_get_attribute($this->env, $this->source, $context["locale"], "code", [], "any", false, false, false, 13))) ? (" aria-checked=\"true\" class=\"dropdown-item navbar-languages-item__dropdown-item active\"") : (" aria-checked=\"false\" class=\"dropdown-item navbar-languages-item__dropdown-item\""));
            // line 14
            echo "
            <a";
            // line 15
            echo (isset($context["attrHrefLocale"]) || array_key_exists("attrHrefLocale", $context) ? $context["attrHrefLocale"] : (function () { throw new RuntimeError('Variable "attrHrefLocale" does not exist.', 15, $this->source); })());
            echo " href=\"";
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["app"]) || array_key_exists("app", $context) ? $context["app"] : (function () { throw new RuntimeError('Variable "app" does not exist.', 15, $this->source); })()), "request", [], "any", false, false, false, 15), "get", [0 => "_route", 1 => "admin_user_index"], "method", false, false, false, 15), twig_array_merge(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["app"]) || array_key_exists("app", $context) ? $context["app"] : (function () { throw new RuntimeError('Variable "app" does not exist.', 15, $this->source); })()), "request", [], "any", false, false, false, 15), "get", [0 => "_route_params", 1 => []], "method", false, false, false, 15), ["_locale" => twig_get_attribute($this->env, $this->source, $context["locale"], "code", [], "any", false, false, false, 15)])), "html", null, true);
            echo "\">
                ";
            // line 16
            echo twig_escape_filter($this->env, twig_capitalize_string_filter($this->env, twig_get_attribute($this->env, $this->source, $context["locale"], "name", [], "any", false, false, false, 16)), "html", null, true);
            echo "  <span class=\"fi fi-";
            echo twig_escape_filter($this->env, $this->env->getRuntime('App\Twig\Runtime\LanguageExtensionRuntime')->getFlagIconByLocale(twig_get_attribute($this->env, $this->source, $context["locale"], "code", [], "any", false, false, false, 16)), "html", null, true);
            echo " fis rounded-circle navbar-languages-item__dropdown-item-flag\"></span>
            </a>
        ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['locale'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 19
        echo "    </div>
</li>";
        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

    }

    public function getTemplateName()
    {
        return "admin/includes/navbar-languages-menu.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  86 => 19,  75 => 16,  69 => 15,  66 => 14,  63 => 13,  59 => 12,  53 => 9,  43 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("<li class=\"nav-item nav-item-languages dropdown navbar-languages-item\">
    <a class=\"nav-link dropdown-toggle navbar-languages-item__dropdown-toggle\"
       href=\"#\"
       id=\"navbarDropdown\"
       role=\"button\"
       data-toggle=\"dropdown\"
       aria-haspopup=\"true\"
       aria-expanded=\"false\">
        <span class=\"fi fi-{{ locale|lower|app_language_flag_icon }} fis rounded-circle navbar-languages-item__current-flag\"></span>
    </a>
    <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdown\">
        {% for locale in app_locales() %}
            {% set attrHrefLocale = app.request.locale == locale.code ? ' aria-checked=\"true\" class=\"dropdown-item navbar-languages-item__dropdown-item active\"':' aria-checked=\"false\" class=\"dropdown-item navbar-languages-item__dropdown-item\"' %}

            <a{{ attrHrefLocale|raw }} href=\"{{ path(app.request.get('_route', 'admin_user_index'), app.request.get('_route_params', [])|merge({_locale: locale.code})) }}\">
                {{ locale.name|capitalize }}  <span class=\"fi fi-{{ locale.code|app_language_flag_icon }} fis rounded-circle navbar-languages-item__dropdown-item-flag\"></span>
            </a>
        {% endfor %}
    </div>
</li>", "admin/includes/navbar-languages-menu.twig", "/Users/thomaskaenzig/projects/language-exchange/admin/templates/admin/includes/navbar-languages-menu.twig");
    }
}
